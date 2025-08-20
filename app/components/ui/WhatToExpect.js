'use client';

import { FaPhone, FaUserMd, FaPills, FaHandshake, FaArrowRight, FaCheckCircle, FaArrowDown } from 'react-icons/fa';
import { MdLocalHospital, MdPsychology, MdSupport } from 'react-icons/md';

const WhatToExpect = () => {
  const steps = [
  {
    step: "01",
    title: "Initiation",
    description: "Walk-in or scheduled appointments. Complete medical assessment and treatment planning.",
    icon: <FaUserMd className="w-6 h-6" />
  },
  {
    step: "02", 
    title: "Stabilization",
    description: "Begin medication-assisted treatment with daily monitoring and dose adjustments.",
    icon: <FaPills className="w-6 h-6" />
  },
  {
    step: "03",
    title: "Maintenance", 
    description: "Long-term recovery support with counseling, therapy, and relapse prevention.",
    icon: <MdSupport className="w-6 h-6" />
  }
];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What to Expect — <span className="text-[#0077C8]">The NWIH Process</span>
          </h2>
          <div className="w-24 h-1 bg-[#16A53F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're with you through every step of the journey — from stabilization to long-term recovery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="w-full">
          {/* Desktop Layout - 3 columns with horizontal arrows */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8 2xl:gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-8 xl:p-10 2xl:p-12 shadow-xl border-0 h-full overflow-hidden hover:shadow-2xl hover:scale-[1.01] hover:border-[#0077C8]/30 transition-all duration-300">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-green-50/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077C8] via-[#16A53F] to-[#0077C8] hover:from-[#16A53F] hover:via-[#0077C8] hover:to-[#16A53F] transition-all duration-500"></div>
                  
                  {/* Step Number and Icon Container */}
                  <div className="relative z-10 flex items-center justify-between mb-6 xl:mb-8">
                    <div className="flex items-center">
                      <div className="relative">
                        <span className="text-4xl xl:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0077C8] to-[#16A53F] hover:from-[#16A53F] hover:to-[#0077C8] transition-all duration-500">
                          {step.step}
                        </span>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/40 to-green-100/40 rounded-full blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-4 xl:p-5 shadow-md hover:shadow-lg hover:scale-105 hover:from-green-100 hover:to-blue-100 transition-all duration-300">
                      <div className="text-[#0077C8] hover:text-[#16A53F] transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative z-10 mb-4 xl:mb-5">
                    <h3 className="text-2xl xl:text-3xl font-bold text-gray-900 leading-tight hover:text-[#0077C8] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mt-2 rounded-full hover:w-20 hover:from-[#16A53F] hover:to-[#0077C8] transition-all duration-500"></div>
                  </div>
                  
                  {/* Description */}
                  <div className="relative z-10">
                    <p className="text-base xl:text-lg 2xl:text-xl text-gray-700 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Bottom Corner Accent */}
                  <div className="absolute bottom-6 xl:bottom-8 right-6 xl:right-8 w-8 h-8 border-r-2 border-b-2 border-[#0077C8]/20 rounded-br-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Additional Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0077C8]/3 via-transparent to-[#16A53F]/3 opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                </div>

                {/* Right Arrow - only show between cards */}
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2">
                    <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] rounded-full w-10 h-10 flex items-center justify-center text-white shadow-lg">
                      <FaArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Layout - Single column with down arrows */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index}>
                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-5 sm:p-6 shadow-xl border-0 overflow-hidden hover:shadow-2xl hover:scale-[1.01] hover:border-[#0077C8]/30 transition-all duration-300">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-green-50/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077C8] via-[#16A53F] to-[#0077C8] hover:from-[#16A53F] hover:via-[#0077C8] hover:to-[#16A53F] transition-all duration-500"></div>
                  
                  {/* Step Number and Icon Container */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0077C8] to-[#16A53F] hover:from-[#16A53F] hover:to-[#0077C8] transition-all duration-500">
                          {step.step}
                        </span>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/40 to-green-100/40 rounded-full blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-3 shadow-md hover:shadow-lg hover:scale-105 hover:from-green-100 hover:to-blue-100 transition-all duration-300">
                      <div className="text-[#0077C8] hover:text-[#16A53F] transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative z-10 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight hover:text-[#0077C8] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mt-2 rounded-full hover:w-20 hover:from-[#16A53F] hover:to-[#0077C8] transition-all duration-500"></div>
                  </div>
                  
                  {/* Description */}
                  <div className="relative z-10">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Bottom Corner Accent */}
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-[#0077C8]/20 rounded-br-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Additional Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0077C8]/3 via-transparent to-[#16A53F]/3 opacity-0 hover:opacity-100 transition-opacity duration-700 rounded-2xl"></div>
                </div>

                {/* Down Arrow - only show between cards */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-6">
                    <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] rounded-full w-8 h-8 flex items-center justify-center text-white shadow-lg">
                      <FaArrowDown className="w-3 h-3" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Compelling Recovery Start */}
        <div className="text-center mt-16 md:mt-20">
          <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] rounded-2xl p-4 md:p-6 text-white max-w-full mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>
            
            <div className="relative z-10">
              {/* Urgency Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-white font-semibold text-xs">Same-Day Treatment Available</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Your Recovery Can't Wait Another Day
              </h3>
              
              <p className="text-sm md:text-base mb-4 opacity-95 max-w-5xl mx-auto leading-relaxed">
                <strong>Every moment matters</strong> in recovery. Our proven 3-phase process has helped thousands break free from addiction. 
                <span className="block mt-1 text-yellow-200 font-semibold">Start your transformation today.</span>
              </p>
              
              {/* Social Proof */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 mb-4 max-w-2xl mx-auto border border-white/20">
                <p className="text-xs opacity-90">
                  <span className="font-semibold">"NWIH gave me my life back. I'm now 2 years sober and helping others."</span>
                  <span className="block mt-1 text-xs">— Sarah M., Former Patient</span>
                </p>
              </div>
              
              {/* Single CTA Button - Start Recovery NOW */}
              <div className="flex justify-center mb-3">
                <a 
                  href="tel:253-200-0300" 
                  className="group bg-white text-[#0077C8] px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.435a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Start Recovery NOW
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>
              </div>
              
              {/* Urgency Message */}
              <div className="text-center">
                <p className="text-xs opacity-80">
                  <span className="font-semibold">⏰ Don't wait for tomorrow.</span> 
                  <span className="inline ml-2">Recovery starts with one call.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;