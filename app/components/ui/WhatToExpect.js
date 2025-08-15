'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPhone, FaUserMd, FaPills, FaHandshake, FaArrowRight, FaCheckCircle, FaArrowDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdLocalHospital, MdPsychology, MdSupport } from 'react-icons/md';

const WhatToExpect = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);

  const steps = [
    {
      step: "Step 1",
      title: "Intake & Assessment",
      description: "Call or walk in. We offer same-day appointments when available. You'll meet with a provider in person or via telehealth.",
      icon: <FaUserMd className="w-8 h-8" />
    },
    {
      step: "Step 2", 
      title: "Stabilization Begins",
      description: "After a medical exam and drug screen, we begin methadone or Suboxone treatment based on your needs. Medication is picked up daily at our in-house pharmacy.",
      icon: <FaPills className="w-8 h-8" />
    },
    {
      step: "Step 3",
      title: "Ongoing Support", 
      description: "We create a tailored plan using your ASAM evaluation, connecting you to therapy, counseling, and recovery coaching.",
      icon: <MdSupport className="w-8 h-8" />
    }
  ];

  const nextStep = () => {
    if (!isAnimating && currentStep < steps.length - 1) {
      setIsAnimating(true);
      setCurrentStep((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevStep = () => {
    if (!isAnimating && currentStep > 0) {
      setIsAnimating(true);
      setCurrentStep((prev) => prev - 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToStep = (stepIndex) => {
    if (!isAnimating && stepIndex !== currentStep) {
      setIsAnimating(true);
      setCurrentStep(stepIndex);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="w-full px-4 md:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            What to Expect — <span className="text-[#0077C8]">The NWIH Process</span>
          </h2>
          <div className="w-20 md:w-24 h-0.5 md:h-1 bg-[#16A53F] mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're with you through every step of the journey — from stabilization to long-term recovery.
          </p>
        </div>

        {/* Full Width Compact Slider */}
        <div className="w-full">
          {/* Main Slider Container */}
          <div className="relative">
            {/* Slider Track */}
            <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
              <div 
                ref={sliderRef}
                className="flex transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ transform: `translateX(-${currentStep * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white p-6 md:p-8 lg:p-10 xl:p-12">
                      {/* Compact Header */}
                      <div className="flex items-center justify-center mb-6 md:mb-8 animate-fade-in">
                        <div className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl shadow-md mr-6 md:mr-8 transform transition-all duration-500 hover:scale-110">
                          <span className="text-white font-bold text-xl md:text-2xl">{index + 1}</span>
                        </div>
                        <div className="text-center md:text-left">
                          <span className="text-sm md:text-base font-semibold text-[#16A53F] uppercase tracking-wider animate-slide-up">
                            {step.step}
                          </span>
                          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 animate-slide-up-delay">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Compact Content Layout */}
                      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-12 animate-fade-in-delay">
                        {/* Icon */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-xl flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-[#0077C8] hover:text-white shadow-lg">
                            <div className="text-[#0077C8] transition-colors duration-500">
                              {step.icon}
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="flex-1 text-center md:text-left">
                          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed animate-slide-up-delay-2 max-w-4xl">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute -left-4 md:-left-6 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  disabled={isAnimating}
                  className="w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0077C8] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto"
                  aria-label="Previous step"
                >
                  <FaChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              )}
            </div>

            <div className="absolute -right-4 md:-right-6 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
              {currentStep < steps.length - 1 && (
                <button
                  onClick={nextStep}
                  disabled={isAnimating}
                  className="w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0077C8] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed pointer-events-auto"
                  aria-label="Next step"
                >
                  <FaChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              )}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="mt-6 md:mt-8">
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] h-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] relative"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
              </div>
            </div>

            {/* Step Dots */}
            <div className="flex justify-center space-x-4 md:space-x-6">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  disabled={isAnimating}
                  className={`flex items-center space-x-3 transition-all duration-300 transform hover:scale-105 ${
                    index === currentStep 
                      ? 'text-[#0077C8]' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                >
                  <div className={`w-4 h-4 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-[#0077C8] scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}></div>
                  <span className="text-sm md:text-base font-medium">
                    Step {index + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Step Counter */}
            <div className="text-center mt-4">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-base md:text-lg text-gray-600 font-medium shadow-sm">
                <span className="w-3 h-3 bg-[#16A53F] rounded-full mr-3 animate-pulse"></span>
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