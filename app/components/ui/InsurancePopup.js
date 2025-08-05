'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaCheck, FaPhone, FaUserMd } from 'react-icons/fa';

const InsurancePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const popupShown = localStorage.getItem('insurancePopupShown');
    
    if (!popupShown) {
      // Show popup after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('insurancePopupShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const insuranceProviders = [
    "Aetna", "Cigna", "Blue Cross", "Kaiser", "And More!"
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-50"
          onClick={closePopup}
        />
      )}
      
      {/* Compact Attractive Popup */}
      <div 
        className={`fixed bottom-4 right-4 w-72 sm:w-80 bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out rounded-xl overflow-hidden border border-gray-100 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white p-4 relative">
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes className="w-4 h-4" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <FaUserMd className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold">Insurance Check</h2>
              <p className="text-xs text-white/90">Quick & Free</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Main Message */}
          <div className="text-center mb-4">
            <h3 className="text-lg font-bold text-gray-800 mb-1">
              Verify Your Insurance Today!
            </h3>
            <p className="text-sm text-gray-600">
              We're in-network with major providers
            </p>
          </div>

          {/* Insurance Providers - Compact Grid */}
          <div className="mb-4">
            <div className="grid grid-cols-2 gap-2">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg border border-gray-100">
                  <FaCheck className="w-3 h-3 text-[#16A53F] flex-shrink-0" />
                  <span className="text-gray-700 text-xs font-medium">{provider}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Benefits - Horizontal */}
          <div className="mb-4 p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
            <div className="flex justify-between text-xs text-gray-700">
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-[#16A53F] rounded-full"></div>
                <span>Same-day starts</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-[#16A53F] rounded-full"></div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-2">
            <button
              onClick={() => {
                closePopup();
                window.location.href = '/contact';
              }}
              className="w-full bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white font-bold py-3 px-4 rounded-lg text-sm hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-200 shadow-md transform hover:scale-105"
            >
              Get Started Today
            </button>
            
            <button
              onClick={() => {
                closePopup();
                window.location.href = 'tel:253-200-0300';
              }}
              className="w-full bg-gray-100 text-gray-700 font-medium py-2 px-4 rounded-lg text-sm hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <FaPhone className="w-3 h-3" />
              <span>Call Now</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-3 pt-2 border-t border-gray-200">
            <p className="text-xs text-gray-500 text-center">
              Confidential • HIPAA Compliant
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsurancePopup; 