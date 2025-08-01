'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { submitFormToHIPAAEmail, validateFormData } from '../../utils/formSubmission';
import { clinics } from '../../data/clinicData';

const QuickContactForm = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const [clinicLocations, setClinicLocations] = useState([]);
  
  useEffect(() => {
    // Sort clinics by city then by name for better organization
    const sortedClinics = [...clinics].sort((a, b) => {
      if (a.city !== b.city) {
        return a.city.localeCompare(b.city);
      }
      return a.name.localeCompare(b.name);
    });
    
    setClinicLocations(sortedClinics);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
    
    // Custom validation for quick form
    const errors = {};
    if (!formData.name?.trim()) errors.name = 'Name is required';
    if (!formData.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone?.trim()) {
      errors.phone = 'Phone number is required';
    }
    if (!formData.location?.trim()) {
      errors.location = 'Please select a location';
    }
    
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Send form to HIPAA-compliant email service
      const response = await submitFormToHIPAAEmail(formData, 'quick');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        location: ''
      });
      
      // Show success message
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={`bg-white rounded-md shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to Start Your Recovery?</h2>
      
      {submitSuccess && (
        <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded text-sm">
          Thank you! A member of our team will contact you shortly.
        </div>
      )}
      
      {submitError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded text-sm">
          {submitError}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8] ${
              validationErrors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {validationErrors.name && (
            <p className="mt-1 text-xs text-red-600">{validationErrors.name}</p>
          )}
        </div>
        
        <div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8] ${
              validationErrors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {validationErrors.email && (
            <p className="mt-1 text-xs text-red-600">{validationErrors.email}</p>
          )}
        </div>
        
        <div>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8] ${
              validationErrors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            required
          />
          {validationErrors.phone && (
            <p className="mt-1 text-xs text-red-600">{validationErrors.phone}</p>
          )}
        </div>
        
        <div className="relative">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Location
          </label>
          <div className="relative">
            <select
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#0077C8] focus:border-[#0077C8] appearance-none bg-white text-gray-700 font-medium ${
                formData.location ? 'text-gray-800' : 'text-gray-500'
              } ${
                validationErrors.location ? 'border-red-500' : 'border-gray-400'
              }`}
              required
            >
              <option value="" className="text-gray-500">Select a location</option>
              
              {clinicLocations.map((clinic) => (
                <option key={clinic.id} value={`${clinic.city} - ${clinic.name}`} className="text-gray-800">
                  {clinic.city} - {clinic.name}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          {validationErrors.location && (
            <p className="mt-1 text-xs text-red-600">{validationErrors.location}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full py-3 px-4 bg-[#0077C8] hover:bg-[#005fa0] text-white font-medium rounded-md shadow-md transition-colors duration-200"
        >
          {isSubmitting ? 'Sending...' : 'Get Help Now'}
        </button>
      </form>
      
<<<<<<< HEAD
     <div className="mt-4 space-y-3">
        {/* Call Now Button */}
        {/* <a 
=======
      <div className="mt-4 space-y-3">
        {/* Call Now Button */}
        <a 
>>>>>>> cbba33a22434bb68daab371daa2b275a09d19c5f
          href="tel:1-877-522-1275" 
          className="call-button w-full py-3 px-4 bg-gradient-to-r from-[#16A53F] to-[#128a35] hover:from-[#128a35] hover:to-[#0f7a2e] text-white font-medium rounded-md shadow-md transition-colors duration-200 flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          Call Now: 1-877-522-1275
<<<<<<< HEAD
        </a> */}
        
        {/* Find a Clinic Button */}
        {/* <Link 
=======
        </a>
        
        {/* Find a Clinic Button */}
        <Link 
>>>>>>> cbba33a22434bb68daab371daa2b275a09d19c5f
          href="/find-clinic" 
          className="btn-secondary block w-full text-center py-3 px-4 border border-[#0077C8] text-[#0077C8] font-medium rounded-md hover:bg-gray-50 transition-colors duration-200"
        >
          Find a Clinic
<<<<<<< HEAD
        </Link> */}
=======
        </Link>
>>>>>>> cbba33a22434bb68daab371daa2b275a09d19c5f
      </div>
    </div>
  );
};

export default QuickContactForm; 