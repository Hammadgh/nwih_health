'use client';

import { useState } from 'react';
import { submitFormToHIPAAEmail, validateFormData } from '../../utils/formSubmission';

const ContactForm = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    reason: 'treatment',
    message: '',
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear validation error when field is changed
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Validate form
    const { isValid, errors } = validateFormData(formData, 'contact');
    
    if (!isValid) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Send form to HIPAA-compliant email service
      const response = await submitFormToHIPAAEmail(formData, 'contact');
      
      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        reason: 'treatment',
        message: '',
        consent: false
      });
      
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError('There was a problem submitting your form. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Open Monday to Saturday — walk-ins always welcome!</h2>
      
      {submitSuccess && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded">
          Thank you for your message! We'll get back to you as soon as possible.
        </div>
      )}
      
      {submitError && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded">
          {submitError}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8] ${
                validationErrors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {validationErrors.firstName && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.firstName}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8] ${
                validationErrors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {validationErrors.lastName && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.lastName}</p>
            )}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8] ${
              validationErrors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {validationErrors.email && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8] ${
              validationErrors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {validationErrors.phone && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
          )}
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What would you like to learn about? <span className="text-red-500">*</span>
          </label>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <input
                id="treatment"
                name="reason"
                type="radio"
                value="treatment"
                checked={formData.reason === 'treatment'}
                onChange={handleChange}
                className="h-4 w-4 text-[#0077C8] focus:ring-[#0077C8] border-gray-300"
              />
              <label htmlFor="treatment" className="ml-2 block text-sm text-gray-700">
                I am interested in receiving treatment
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="other"
                name="reason"
                type="radio"
                value="other"
                checked={formData.reason === 'other'}
                onChange={handleChange}
                className="h-4 w-4 text-[#0077C8] focus:ring-[#0077C8] border-gray-300"
              />
              <label htmlFor="other" className="ml-2 block text-sm text-gray-700">
                Other
              </label>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            How can we help? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8] ${
              validationErrors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          ></textarea>
          {validationErrors.message && (
            <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
                className={`h-4 w-4 text-[#0077C8] focus:ring-[#0077C8] rounded ${
                  validationErrors.consent ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="consent" className="text-gray-600">
                I agree to have Northwest Integrated Health obtain my submitted information so they can respond to my inquiry
              </label>
              {validationErrors.consent && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.consent}</p>
              )}
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white bg-[#16A53F] hover:bg-[#138a34] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16A53F] font-medium ${
            isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send My Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 