/**
 * Utility to handle contact form submissions with no PHI (non-HIPAA scope)
 *
 * In production, send ONLY non-sensitive data to your API/email service.
 * Avoid storing or transmitting protected health information (PHI).
 */

/**
 * Sends contact form data without PHI to a generic endpoint/inbox
 * @param {Object} formData - The form data to send (non-PHI only)
 * @param {string} formType - The type of form (contact, quick, etc.)
 * @returns {Promise<Object>} - Response object with success status and message
 */
export const submitContactFormNoPHI = async (formData, formType = 'contact') => {
  // In production, POST to your API or service that handles general inquiries.
  // Ensure the backend also rejects PHI-like content.
  const redactedPreview = {
    ...formData,
    message: (formData?.message || '').slice(0, 200) + (formData?.message?.length > 200 ? '…' : '')
  };
  console.log(`Submitting ${formType} form (non-PHI):`, redactedPreview);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() > 0.1) {
          resolve({ success: true, message: 'Form submitted successfully', id: `REQ-${Date.now()}` });
        } else {
          reject(new Error('Network error while submitting form'));
        }
      } catch (error) {
        reject(error);
      }
    }, 800);
  });
};

/**
 * Validates form data before submission
 * @param {Object} formData - The form data to validate
 * @param {string} formType - The type of form (contact, quick, etc.)
 * @returns {Object} - Object with isValid boolean and any error messages
 */
export const validateFormDataNoPHI = (formData, formType = 'contact') => {
  const errors = {};

  // Common validations
  if (formType === 'contact') {
    if (!formData.firstName?.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName?.trim()) errors.lastName = 'Last name is required';
    if (!formData.message?.trim()) errors.message = 'Message is required';
    if (!formData.consent) errors.consent = 'Consent is required to submit this form';
  }

  // Email validation for all forms
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email is invalid';
  }

  // Phone validation for all forms
  if (!formData.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[\d\+\-\(\) ]{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
    errors.phone = 'Phone number is invalid';
  }

  // Basic PHI-like content detection in free text
  const text = `${formData?.message || ''}`.toLowerCase();
  const containsPHIKeyword = /(diagnosis|medical history|treatment plan|prescription|medication|ssn|social security|date of birth|dob|mrn|policy number|insurance id|protected health|hiv|hepatitis|mental health|suboxone|methadone|buprenorphine)/i.test(text);
  const containsSSN = /\b\d{3}-\d{2}-\d{4}\b/.test(text);
  const containsDate = /\b(0?[1-9]|1[0-2])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-](?:19|20)\d{2}\b/.test(text);
  if (containsPHIKeyword || containsSSN || containsDate) {
    errors.message = 'Please remove medical or sensitive details. For general inquiries only.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default {
  submitContactFormNoPHI,
  validateFormDataNoPHI
};