'use client';

import { useState, useRef } from 'react';
import { FaPhone, FaUserMd, FaPills, FaHandshake, FaArrowRight, FaCheckCircle, FaArrowDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdLocalHospital, MdPsychology, MdSupport } from 'react-icons/md';

const WhatToExpect = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const sliderRef = useRef(null);

  const steps = [
    {
      step: "Step 1",
      title: "Intake & Assessment",
      description: "Call or walk in. We offer same-day appointments when available. You'll meet with a provider in person or via telehealth.",
      icon: <FaUserMd className="w-6 h-6" />,
      details: [
        "Same-day appointments available",
        "In-person or telehealth options",
        "Comprehensive initial assessment"
      ]
    },
    {
      step: "Step 2", 
      title: "Stabilization Begins",
      description: "After a medical exam and drug screen, we begin methadone or Suboxone treatment based on your needs. Medication is picked up daily at our in-house pharmacy.",
      icon: <FaPills className="w-6 h-6" />,
      details: [
        "Medical exam and drug screen",
        "Methadone or Suboxone treatment",
        "Daily medication pickup at in-house pharmacy"
      ]
    },
    {
      step: "Step 3",
      title: "Ongoing Support", 
      description: "We create a tailored plan using your ASAM evaluation, connecting you to therapy, counseling, and recovery coaching.",
      icon: <MdSupport className="w-6 h-6" />,
      details: [
        "ASAM evaluation-based planning",
        "Therapy and counseling services",
        "Recovery coaching support"
      ]
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            What to Expect — <span className="text-[#0077C8]">The NWIH Process</span>
          </h2>
          <div className="w-20 md:w-24 h-0.5 md:h-1 bg-[#16A53F] mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're with you through every step of the journey — from stabilization to long-term recovery.
          </p>
        </div>

        {/* Compact Professional Slider */}
        <div className="max-w-5xl mx-auto">
          {/* Main Slider Container */}
          <div className="relative">
            {/* Slider Track */}
            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
              <div 
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white p-6 md:p-8 lg:p-10">
                      {/* Compact Header */}
                      <div className="flex items-center mb-6 md:mb-8">
                        <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl shadow-md mr-4 md:mr-6">
                          <span className="text-white font-bold text-lg md:text-xl">{index + 1}</span>
                        </div>
                        <div>
                          <span className="text-xs md:text-sm font-semibold text-[#16A53F] uppercase tracking-wider">
                            {step.step}
                          </span>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Compact Content Layout */}
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Left Column - Icon and Description */}
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4 md:mr-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                              <div className="text-[#0077C8]">
                                {step.icon}
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Right Column - Features List */}
                        <div className="space-y-3 md:space-y-4">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                              <div className="flex-shrink-0 mr-3 md:mr-4">
                                <div className="w-6 h-6 md:w-7 md:h-7 bg-[#16A53F] rounded-full flex items-center justify-center shadow-sm">
                                  <FaCheckCircle className="text-white w-3 h-3 md:w-4 md:h-4" />
                                </div>
                              </div>
                              <span className="text-sm md:text-base lg:text-lg text-gray-700 font-medium">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Compact Navigation Controls */}
            <div className="absolute -left-3 md:-left-6 top-1/2 transform -translate-y-1/2">
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0077C8] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Previous step"
                >
                  <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              )}
            </div>

            <div className="absolute -right-3 md:-right-6 top-1/2 transform -translate-y-1/2">
              {currentStep < steps.length - 1 && (
                <button
                  onClick={nextStep}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0077C8] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Next step"
                >
                  <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Compact Progress Indicators */}
          <div className="mt-8 md:mt-10">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
              <div 
                className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] h-1.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            {/* Compact Step Dots */}
            <div className="flex justify-center space-x-3 md:space-x-4">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center space-x-2 transition-all duration-300 ${
                    index === currentStep 
                      ? 'text-[#0077C8]' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                >
                  <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-[#0077C8] scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}></div>
                  <span className="text-xs md:text-sm font-medium hidden md:block">
                    Step {index + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Compact Step Counter */}
            <div className="text-center mt-4">
              <span className="inline-flex items-center px-3 py-1.5 bg-gray-100 rounded-full text-xs md:text-sm text-gray-600 font-medium">
                <span className="w-1.5 h-1.5 bg-[#16A53F] rounded-full mr-2"></span>
                {currentStep + 1} of {steps.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect; 