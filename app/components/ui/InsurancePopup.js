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
          className="fixed inset-0 bg-black/20 z-[60]"
          onClick={closePopup}
        />
      )}
      
      {/* Responsive Attractive Popup */}
      <div 
        className={`fixed bottom-4 right-4 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[300px] xl:w-[340px] 2xl:w-[360px] bg-white shadow-2xl z-[60] transform transition-all duration-300 ease-in-out rounded-xl overflow-hidden border border-gray-100 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white p-3 sm:p-4 lg:p-3 xl:p-4 relative">
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-2 lg:right-2 xl:top-3 xl:right-3 text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes className="w-3 h-3 sm:w-4 sm:h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4" />
          </button>
          
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-2 xl:space-x-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-white/20 rounded-full flex items-center justify-center">
              <FaUserMd className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4 xl:w-5 xl:h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg lg:text-base xl:text-lg font-bold">Insurance Check</h2>
              <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-white/90">Quick & Free</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 lg:p-3 xl:p-4">
          {/* Main Message */}
          <div className="text-center mb-3 sm:mb-4 lg:mb-3 xl:mb-4">
            <h3 className="text-base sm:text-lg lg:text-base xl:text-lg font-bold text-gray-800 mb-1 sm:mb-2">
              Verify Your Insurance Today!
            </h3>
            <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-gray-600">
              We're in-network with major providers
            </p>
          </div>

          {/* Insurance Providers - Responsive Grid */}
          <div className="mb-3 sm:mb-4 lg:mb-3 xl:mb-4">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-1.5 xl:gap-2">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-1.5 xl:space-x-2 p-1.5 sm:p-2 lg:p-1.5 xl:p-2 bg-gray-50 rounded-lg border border-gray-100">
                  <FaCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-2.5 lg:h-2.5 xl:w-3 xl:h-3 text-[#16A53F] flex-shrink-0" />
                  <span className="text-gray-700 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium">{provider}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Benefits - Horizontal */}
          <div className="mb-3 sm:mb-4 lg:mb-3 xl:mb-4 p-2 sm:p-3 lg:p-2 xl:p-3 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
            <div className="flex justify-between text-xs sm:text-sm lg:text-xs xl:text-sm text-gray-700">
              <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-1 xl:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-1.5 lg:h-1.5 xl:w-2 xl:h-2 bg-[#16A53F] rounded-full"></div>
                <span>Same-day starts</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-1 xl:space-x-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-1.5 lg:h-1.5 xl:w-2 xl:h-2 bg-[#16A53F] rounded-full"></div>
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
              className="w-full bg-[#16A53F] text-white font-bold py-2.5 sm:py-3 lg:py-2.5 xl:py-3 px-4 sm:px-6 lg:px-4 xl:px-6 rounded-lg text-xs sm:text-sm lg:text-xs xl:text-sm hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-200 shadow-md transform hover:scale-105 flex items-center justify-center space-x-1.5 sm:space-x-2 lg:space-x-1.5 xl:space-x-2"
            >
              <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-3 lg:h-3 xl:w-4 xl:h-4 rotate-90" />
              <span>Verify Now</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-2 sm:mt-3 lg:mt-2 xl:mt-3 pt-1.5 sm:pt-2 lg:pt-1.5 xl:pt-2 border-t border-gray-200">
            <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-gray-500 text-center">
              Confidential • HIPAA Compliant
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsurancePopup; 