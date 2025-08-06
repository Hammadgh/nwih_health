'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaCheck, FaPhone, FaUserMd } from 'react-icons/fa';

const InsurancePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds on every reload
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const insuranceProviders = [
    "Medicaid", "Medicare", "Aetna", "Cigna", "Blue Cross", "Kaiser", "UnitedHealth", "And More!"
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
      
      {/* Responsive Attractive Popup */}
      <div 
        className={`fixed bottom-4 right-4 w-[300px] sm:w-[320px] md:w-[340px] lg:w-[360px] bg-white shadow-2xl z-50 transform transition-all duration-300 ease-in-out rounded-xl overflow-hidden border border-gray-100 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white p-4 sm:p-5 relative">
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
              <FaUserMd className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Insurance Check</h2>
              <p className="text-xs sm:text-sm text-white/90">Quick & Free</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5">
          {/* Main Message */}
          <div className="text-center mb-4 sm:mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
              Verify Your Insurance Today!
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              We're in-network with major providers
            </p>
          </div>

          {/* Insurance Providers - Larger Grid */}
          <div className="mb-4 sm:mb-5">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <FaCheck className="w-3 h-3 sm:w-4 sm:h-4 text-[#16A53F] flex-shrink-0" />
                  <span className="text-gray-700 text-xs sm:text-sm font-medium">{provider}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Benefits - Horizontal */}
          <div className="mb-4 sm:mb-5 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
            <div className="flex justify-between text-xs sm:text-sm text-gray-700">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#16A53F] rounded-full"></div>
                <span>Same-day starts</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#16A53F] rounded-full"></div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div>
            <button
              onClick={() => {
                closePopup();
                window.location.href = 'tel:253-200-0300';
              }}
              className="w-full bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white font-bold py-3 sm:py-4 px-6 rounded-lg text-sm sm:text-base hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-200 shadow-md transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <FaPhone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Verify Now</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-200">
            <p className="text-xs sm:text-sm text-gray-500 text-center">
              Confidential • HIPAA Compliant
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsurancePopup; 