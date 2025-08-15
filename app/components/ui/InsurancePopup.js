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
      
      {/* Responsive Attractive Popup - Slightly larger for laptops, much larger for 2xl */}
      <div 
        className={`fixed bottom-4 right-4 w-[300px] sm:w-[320px] md:w-[340px] lg:w-[320px] xl:w-[320px] 2xl:w-[450px] bg-white shadow-2xl z-[60] transform transition-all duration-300 ease-in-out rounded-xl overflow-hidden border border-gray-100 ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white p-3 sm:p-4 lg:p-4 xl:p-4 2xl:p-6 relative">
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-3 lg:right-3 xl:top-3 xl:right-3 2xl:top-4 2xl:right-4 text-white hover:text-gray-200 transition-colors"
          >
            <FaTimes className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5" />
          </button>
          
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-3 xl:space-x-3 2xl:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 xl:w-10 xl:h-10 2xl:w-14 2xl:h-14 bg-white/20 rounded-full flex items-center justify-center">
              <FaUserMd className="w-4 h-4 sm:w-5 sm:h-5 lg:w-5 lg:h-5 xl:w-5 xl:h-5 2xl:w-7 2xl:h-7" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg lg:text-lg xl:text-lg 2xl:text-2xl font-bold">Insurance Check</h2>
              <p className="text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-white/90">Quick & Free</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 lg:p-4 xl:p-4 2xl:p-6">
          {/* Main Message */}
          <div className="text-center mb-3 sm:mb-4 lg:mb-4 xl:mb-4 2xl:mb-6">
            <h3 className="text-base sm:text-lg lg:text-lg xl:text-lg 2xl:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 lg:mb-2 xl:mb-2 2xl:mb-3">
              Verify Your Insurance Today!
            </h3>
            <p className="text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-gray-600">
              We're in-network with major providers
            </p>
          </div>

          {/* Insurance Providers - Responsive Grid */}
          <div className="mb-3 sm:mb-4 lg:mb-4 xl:mb-4 2xl:mb-6">
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 lg:gap-2 xl:gap-2 2xl:gap-3">
              {insuranceProviders.map((provider, index) => (
                <div key={index} className="flex items-center space-x-1.5 sm:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-3 p-1.5 sm:p-2 lg:p-2 xl:p-2 2xl:p-3 bg-gray-50 rounded-lg border border-gray-100">
                  <FaCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-3 lg:h-3 xl:w-3 xl:h-3 2xl:w-4 2xl:h-4 text-[#16A53F] flex-shrink-0" />
                  <span className="text-gray-700 text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-lg font-medium">{provider}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Benefits - Horizontal */}
          <div className="mb-3 sm:mb-4 lg:mb-4 xl:mb-4 2xl:mb-6 p-2 sm:p-3 lg:p-3 xl:p-3 2xl:p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100">
            <div className="flex justify-between text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-gray-700">
              <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2 lg:h-2 xl:w-2 xl:h-2 2xl:w-3 2xl:h-3 bg-[#16A53F] rounded-full"></div>
                <span>Same-day starts</span>
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-3">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2 lg:h-2 xl:w-2 xl:h-2 2xl:w-3 2xl:h-3 bg-[#16A53F] rounded-full"></div>
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
              className="w-full bg-[#16A53F] text-white font-bold py-2.5 sm:py-3 lg:py-3 xl:py-3 2xl:py-4 px-4 sm:px-6 lg:px-6 xl:px-6 2xl:px-8 rounded-lg text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-lg hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-200 shadow-md transform hover:scale-105 flex items-center justify-center space-x-1.5 sm:space-x-2 lg:space-x-2 xl:space-x-2 2xl:space-x-3"
            >
              <FaPhone className="w-3 h-3 sm:w-4 sm:h-4 lg:w-4 lg:h-4 xl:w-4 xl:h-4 2xl:w-5 2xl:h-5 rotate-90" />
              <span>Verify Now</span>
            </button>
          </div>

          {/* Footer */}
          <div className="mt-2 sm:mt-3 lg:mt-3 xl:mt-3 2xl:mt-4 pt-1.5 sm:pt-2 lg:pt-2 xl:pt-2 2xl:pt-3 border-t border-gray-200">
            <p className="text-xs sm:text-sm lg:text-sm xl:text-sm 2xl:text-lg text-gray-500 text-center">
              Confidential • HIPAA Compliant
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsurancePopup; 