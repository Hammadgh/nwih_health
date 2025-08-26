'use client';

import { FaShieldAlt, FaPhone } from 'react-icons/fa';

const InsuranceProviders = () => {
  const insuranceLogos = [
    {
      name: 'Medicaid',
      logo: '/images/insurance/Medecaid.jfif',
      fallback: 'Medicaid'
    },
    {
      name: 'Medicare',
      logo: '/images/insurance/Medicare.png',
      fallback: 'Medicare'
    },
    {
      name: 'Aetna',
      logo: '/images/insurance/Aetna.png',
      fallback: 'Aetna'
    },
    {
      name: 'Cigna',
      logo: '/images/insurance/cigna.png',
      fallback: 'Cigna'
    },
    {
      name: 'Blue Cross Blue Shield',
      logo: '/images/insurance/blue_cross_shield.png',
      fallback: 'Blue Cross Blue Shield'
    },
    {
      name: 'Kaiser Permanente',
      logo: '/images/insurance/kaiser.png',
      fallback: 'Kaiser Permanente'
    },
    {
      name: 'UnitedHealthcare',
      logo: '/images/insurance/unitedhealthcare.png',
      fallback: 'UnitedHealthcare'
    },
    {
      name: 'Molina Healthcare',
      logo: '/images/insurance/molina.png',
      fallback: 'Molina Healthcare'
    }
  ];

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl flex items-center justify-center mr-3">
              <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              We Accept <span className="text-[#0077C8]">Most Major Insurance Plans</span>
            </h2>
          </div>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mb-3 sm:mb-4"></div>
          {/* <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            NWIH is in-network with leading insurance providers to make your recovery accessible and affordable.
          </p> */}
          <div className="mt-4 p-4 bg-gradient-to-r from-[#0077C8]/10 to-[#16A53F]/10 rounded-xl border border-[#0077C8]/20">
            <p className="text-sm sm:text-base text-gray-700 font-medium">
              <span className="text-[#0077C8] font-semibold">No upfront cost</span> - Even if you don't have insurance, we help you get enrolled with insurance coverage.
            </p>
          </div>
        </div>

        {/* Insurance Logos Section */}
        <div className="w-full">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 lg:p-8 xl:p-12 2xl:p-16">
            {/* Sliding Insurance Logos */}
            <div className="relative overflow-hidden">
              <div className="flex animate-slide-logos">
                {/* First set of logos */}
                {insuranceLogos.map((provider, index) => (
                  <div key={`first-${index}`} className="flex-shrink-0 mx-1 sm:mx-2 lg:mx-3">
                    <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-2 sm:p-3 border border-gray-200 transition-all duration-300 transform hover:scale-105 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
                      <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                        <div className="w-16 h-10 sm:w-20 sm:h-12 lg:w-24 lg:h-14 bg-white rounded-md flex items-center justify-center shadow-sm border border-gray-200 overflow-hidden">
                          <img 
                            src={provider.logo} 
                            alt={provider.name}
                            className="w-full h-full object-contain p-1 sm:p-2"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <span className="text-[#0077C8] font-bold text-xs sm:text-sm text-center leading-tight hidden">
                            {provider.fallback}
                          </span>
                        </div>
                        <span className="text-gray-700 font-medium text-xs sm:text-sm text-center leading-tight">
                          {provider.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {insuranceLogos.map((provider, index) => (
                  <div key={`second-${index}`} className="flex-shrink-0 mx-1 sm:mx-2 lg:mx-3">
                    <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-2 sm:p-3 border border-gray-200 transition-all duration-300 transform hover:scale-105 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px]">
                      <div className="flex flex-col items-center space-y-1 sm:space-y-2">
                        <div className="w-16 h-10 sm:w-20 sm:h-12 lg:w-24 lg:h-14 bg-white rounded-md flex items-center justify-center shadow-sm border border-gray-200 overflow-hidden">
                          <img 
                            src={provider.logo} 
                            alt={provider.name}
                            className="w-full h-full object-contain p-1 sm:p-2"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                          <span className="text-[#0077C8] font-bold text-xs sm:text-sm text-center leading-tight hidden">
                            {provider.fallback}
                          </span>
                        </div>
                        <span className="text-gray-700 font-medium text-xs sm:text-sm text-center leading-tight">
                          {provider.name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Call to Action */}
            <div className="mt-5 sm:mt-7 text-center">
              <a
                href="tel:253-200-0300"
                className="inline-flex items-center bg-[#16A53F] text-white font-bold py-2.5 sm:py-3 px-5 sm:px-7 rounded-xl text-sm sm:text-base hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-200 shadow-lg transform hover:scale-105"
              >
                <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 rotate-90" />
                <span>Verify Your Coverage</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 sm:mt-12 lg:mt-14 flex justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 w-full px-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0077C8] mb-1 sm:mb-2">10+</div>
              <div className="text-gray-600 text-xs sm:text-sm">Major Providers</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#16A53F] mb-1 sm:mb-2">95%</div>
              <div className="text-gray-600 text-xs sm:text-sm">Coverage Rate</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#16A53F] mb-1 sm:mb-2">$0</div>
              <div className="text-gray-600 text-xs sm:text-sm">Upfront Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceProviders;
