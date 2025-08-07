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

  // Auto-advance slides every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAnimating]);

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

        {/* Enhanced Professional Slider */}
        <div className="max-w-5xl mx-auto">
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
                    <div className="bg-white p-6 md:p-8 lg:p-10">
                      {/* Enhanced Header with Animation */}
                      <div className="flex items-center mb-6 md:mb-8 animate-fade-in">
                        <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl shadow-md mr-4 md:mr-6 transform transition-all duration-500 hover:scale-110">
                          <span className="text-white font-bold text-lg md:text-xl">{index + 1}</span>
                        </div>
                        <div>
                          <span className="text-xs md:text-sm font-semibold text-[#16A53F] uppercase tracking-wider animate-slide-up">
                            {step.step}
                          </span>
                          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 animate-slide-up-delay">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      {/* Enhanced Content Layout */}
                      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* Left Column - Icon and Description */}
                        <div className="flex items-start animate-fade-in-delay">
                          <div className="flex-shrink-0 mr-4 md:mr-6">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-[#0077C8] hover:text-white">
                              <div className="text-[#0077C8] transition-colors duration-500">
                                {step.icon}
                              </div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed animate-slide-up-delay-2">
                              {step.description}
                            </p>
                          </div>
                        </div>

                        {/* Right Column - Features List with Staggered Animation */}
                        <div className="space-y-3 md:space-y-4">
                          {step.details.map((detail, detailIndex) => (
                            <div 
                              key={detailIndex} 
                              className="flex items-center p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 animate-slide-up-delay-3"
                              style={{ animationDelay: `${detailIndex * 100}ms` }}
                            >
                              <div className="flex-shrink-0 mr-3 md:mr-4">
                                <div className="w-6 h-6 md:w-7 md:h-7 bg-[#16A53F] rounded-full flex items-center justify-center shadow-sm transform transition-all duration-300 hover:scale-110">
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

            {/* Enhanced Navigation Controls */}
            <div className="absolute -left-3 md:-left-6 top-1/2 transform -translate-y-1/2">
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  disabled={isAnimating}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0077C8] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isAnimating}
                  className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0077C8] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Next step"
                >
                  <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Enhanced Progress Indicators */}
          <div className="mt-8 md:mt-10">
            {/* Enhanced Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] h-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] relative"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Step Dots */}
            <div className="flex justify-center space-x-3 md:space-x-4">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  disabled={isAnimating}
                  className={`flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 ${
                    index === currentStep 
                      ? 'text-[#0077C8]' 
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                >
                  <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                    index === currentStep 
                      ? 'bg-[#0077C8] scale-125 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}></div>
                  <span className="text-xs md:text-sm font-medium hidden md:block">
                    Step {index + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Enhanced Step Counter */}
            <div className="text-center mt-4">
              <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full text-sm md:text-base text-gray-600 font-medium shadow-sm">
                <span className="w-2 h-2 bg-[#16A53F] rounded-full mr-2 animate-pulse"></span>
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