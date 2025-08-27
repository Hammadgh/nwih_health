'use client';

import Link from 'next/link';
import { FaPhone, FaUserMd, FaPills, FaHandshake, FaArrowRight, FaCheckCircle, FaArrowDown } from 'react-icons/fa';
import { MdLocalHospital, MdPsychology, MdSupport } from 'react-icons/md';

const WhatToExpect = () => {
  const steps = [
  {
    step: "01",
    title: "Initiation",
    description: "Your recovery starts here. Whether you walk in or schedule an appointment, our team will provide a complete medical assessment and create a personalized treatment plan designed for your needs.",
    icon: <FaUserMd className="w-6 h-6" />
  },
  {
    step: "02", 
    title: "Stabilization",
    description: "Begin medication-assisted treatment in a safe and supportive environment. We closely monitor your progress, adjust doses as needed, and help you gain stability and confidence on your recovery path.",
    icon: <FaPills className="w-6 h-6" />
  },
  {
    step: "03",
    title: "Maintenance", 
    description: "Stay on track with long-term support. Through counseling, therapy, relapse prevention, and continued medical care, we’ll help you build the tools and resilience for lasting recovery.",
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
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index}>
                {/* Step Card */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-xl border-0 overflow-hidden hover:shadow-2xl hover:scale-[1.01] hover:border-[#0077C8]/30 transition-all duration-300">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-green-50/20 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077C8] via-[#16A53F] to-[#0077C8] hover:from-[#16A53F] hover:via-[#0077C8] hover:to-[#16A53F] transition-all duration-500"></div>
                  
                  {/* Step Number and Icon Container */}
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="relative">
                        <span className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0077C8] to-[#16A53F] hover:from-[#16A53F] hover:to-[#0077C8] transition-all duration-500">
                          {step.step}
                        </span>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-100/40 to-green-100/40 rounded-full blur-lg opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-105 hover:from-green-100 hover:to-blue-100 transition-all duration-300">
                      <div className="text-[#0077C8] hover:text-[#16A53F] transition-colors duration-300">
                        {step.icon}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="relative z-10 mb-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight hover:text-[#0077C8] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mt-2 rounded-full hover:w-20 hover:from-[#16A53F] hover:to-[#0077C8] transition-all duration-500"></div>
                  </div>
                  
                  {/* Description */}
                  <div className="relative z-10">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed hover:text-gray-800 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Bottom Corner Accent */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#0077C8]/20 rounded-br-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  
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

        {/* Compact CTA Button - Below Process Steps */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Ready to learn more about starting your recovery journey?
          </p>
          <Link 
            href="/start-treatment" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white rounded-xl font-semibold text-base hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Begin Your Recovery
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        {/* Call to Action - Ready to Start Your Recovery Journey */}
      </div>
      
      {/* Full-width CTA section that breaks out of container */}
      <div className="mt-16 md:mt-20 w-full bg-gradient-to-r from-[#0077C8] to-[#16A53F] py-16 md:py-20">
        <div className="text-center px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
            Ready to Start Your Recovery Journey?
          </h3>
          <p className="text-base md:text-lg mb-4 text-white opacity-90">
            Join thousands of customers who have found lasting recovery with NWIH
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:253-200-0300" 
              className="bg-white text-[#0077C8] px-6 py-3 rounded-xl font-semibold text-base hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Recovery Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;