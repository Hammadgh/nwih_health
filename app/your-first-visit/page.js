'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const YourFirstVisit = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const sliderRef = useRef(null);

  const visitSteps = [
    {
      step: "Step 1",
      title: "Check-In & Paperwork",
      description: "Upon arrival, you'll complete necessary forms and provide your identification and insurance information.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      details: [
        "Complete intake forms",
        "Provide photo ID and insurance",
        "Review privacy policies",
        "Time: 15-20 minutes"
      ]
    },
    {
      step: "Step 2",
      title: "Initial Assessment",
      description: "Meet with our medical team for a comprehensive evaluation including medical history, physical exam, and drug screening.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      details: [
        "Medical history review",
        "Physical examination",
        "Drug screening test",
        "Time: 45-60 minutes"
      ]
    },
    {
      step: "Step 3",
      title: "Treatment Plan Development",
      description: "Our team creates a personalized treatment plan tailored to your specific needs and recovery goals.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      details: [
        "Discuss treatment options",
        "Set recovery goals",
        "Ask questions",
        "Time: 30-45 minutes"
      ]
    },
    {
      step: "Step 4",
      title: "Treatment Initiation",
      description: "Begin your medication-assisted treatment and schedule your next appointment and medication pickup.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      details: [
        "Receive first dose",
        "Schedule follow-up",
        "Get medication pickup time",
        "Time: 30-45 minutes"
      ]
    }
  ];

  const nextStep = () => {
    if (!isAnimating && currentStep < visitSteps.length - 1) {
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
        setCurrentStep((prev) => (prev + 1) % visitSteps.length);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isAnimating]);

  // FAQ data (SEO-focused for first visit page)
  const faqs = [
    {
      id: 1,
      question: "What should I bring to my first visit?",
      answer: "Photo ID, insurance card (if any), list of medications, payment method, and plan for a 2–3 hour visit."
    },
    {
      id: 2,
      question: "How long does the first appointment take?",
      answer: "Typically 2–3 hours: check‑in, comprehensive assessment, treatment planning, and—when appropriate—same‑day MAT start."
    },
    {
      id: 3,
      question: "Can I start treatment on my first day?",
      answer: "Yes. If clinically appropriate after assessment, we initiate MAT the same day and schedule medication pickup."
    },
    {
      id: 4,
      question: "Do you offer telehealth for follow‑ups?",
      answer: "Yes. We offer virtual visits when appropriate to keep care convenient and consistent."
    },
    {
      id: 5,
      question: "What happens after the first visit?",
      answer: "You return for medication pickup, begin your routine, and start counseling and coaching with regular check‑ins."
    },
    {
      id: 6,
      question: "Is my information confidential?",
      answer: "Yes. We follow HIPAA and 42 CFR Part 2 to protect your privacy and treatment records."
    },
    {
      id: 7,
      question: "Do you accept Medicaid, Medicare, and major insurance?",
      answer: "Yes. Coverage varies by plan; call 253‑200‑0300 for quick verification."
    }
  ];

  // Structured data for search engines (FAQPage)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section - Enhanced Professional Design */}
      <section className="relative bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230077C8' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#0077C8]/10 to-[#16A53F]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-[#16A53F]/10 to-[#0077C8]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            
            
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Your First Visit
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0077C8] to-[#16A53F] mt-2">
                Made Simple
              </span>
            </h1>
           
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-4xl mx-auto font-medium">
              Taking the first step towards recovery shouldn't be complicated. Our streamlined process 
              <span className="font-semibold text-gray-800"> gets you from arrival to treatment in just 2-3 hours</span>, 
              with compassionate care every step of the way.
            </p>
            
            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <div className="w-8 h-8 bg-[#0077C8] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Same-Day Start</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <div className="w-8 h-8 bg-[#16A53F] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">No Judgment</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                <div className="w-8 h-8 bg-[#0077C8] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Multiple Locations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What to Bring
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Come prepared with these essential items to make your visit as smooth as possible
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200/50">
                <div className="w-16 h-16 bg-[#0077C8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V4a2 2 0 114 0v2m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Photo ID</h3>
                <p className="text-gray-700 text-center">
                  Valid government-issued photo identification (driver's license, passport, state ID)
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl border border-green-200/50">
                <div className="w-16 h-16 bg-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Insurance Card</h3>
                <p className="text-gray-700 text-center">
                  Current health insurance information (if you have coverage)
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl border border-purple-200/50">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Medical History</h3>
                <p className="text-gray-700 text-center">
                  List of current medications and relevant medical information
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl border border-orange-200/50">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Payment Method</h3>
                <p className="text-gray-700 text-center">
                  Cash, credit card, or other payment method for any applicable fees
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-2xl border border-red-200/50">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Time</h3>
                <p className="text-gray-700 text-center">
                  Plan for 2-3 hours for your complete initial assessment and treatment plan
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-2xl border border-teal-200/50">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Support Person</h3>
                <p className="text-gray-700 text-center">
                  Optional: Bring a trusted friend or family member for support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process Slider */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Main Heading */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                Your Visit <span className="text-[#0077C8]">Step-by-Step</span>
              </h2>
              <div className="w-20 md:w-24 h-0.5 md:h-1 bg-[#16A53F] mx-auto mb-4 md:mb-6"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                From arrival to departure, here's exactly what happens during your first visit
              </p>
            </div>

            {/* Enhanced Professional Slider */}
            <div className="relative">
              {/* Slider Track */}
              <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                <div 
                  ref={sliderRef}
                  className="flex transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ transform: `translateX(-${currentStep * 100}%)` }}
                >
                  {visitSteps.map((step, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <div className="bg-white p-6 md:p-8 lg:p-10">
                        {/* Enhanced Header with Animation */}
                        <div className="flex items-center mb-6 md:mb-8">
                          <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl shadow-md mr-4 md:mr-6 transform transition-all duration-500 hover:scale-110">
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

                        {/* Enhanced Content Layout */}
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                          {/* Left Column - Icon and Description */}
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-4 md:mr-6">
                              <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center transform transition-all duration-500 hover:scale-110 hover:bg-[#0077C8] hover:text-white">
                                <div className="text-[#0077C8] transition-colors duration-500">
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
                              <div 
                                key={detailIndex} 
                                className="flex items-center p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                              >
                                <div className="flex-shrink-0 mr-3 md:mr-4">
                                  <div className="w-6 h-6 md:w-7 md:h-7 bg-[#16A53F] rounded-full flex items-center justify-center shadow-sm transform transition-all duration-300 hover:scale-110">
                                    <svg className="text-white w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
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
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
              </div>

              <div className="absolute -right-3 md:-right-6 top-1/2 transform -translate-y-1/2">
                {currentStep < visitSteps.length - 1 && (
                  <button
                    onClick={nextStep}
                    disabled={isAnimating}
                    className="w-10 h-10 md:w-12 md:h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-[#0077C8] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label="Next step"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
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
                  style={{ width: `${((currentStep + 1) / visitSteps.length) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                </div>
              </div>

              {/* Enhanced Step Dots */}
              <div className="flex justify-center space-x-3 md:space-x-4">
                {visitSteps.map((_, index) => (
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
                  {currentStep + 1} of {visitSteps.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                What Happens Next?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your journey to recovery continues with ongoing support and care
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200/50">
                <h3 className="text-2xl font-bold text-[#0077C8] mb-4">Next Day</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#0077C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Return for medication pickup</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#0077C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Begin daily medication routine</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#0077C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Start counseling sessions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200/50">
                <h3 className="text-2xl font-bold text-[#16A53F] mb-4">First Week</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#16A53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Regular check-ins with medical team</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#16A53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Medication adjustments if needed</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#16A53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Begin recovery coaching program</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-[#0077C8] to-[#16A53F] p-8 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Your Recovery Journey Continues</h3>
              <p className="text-lg mb-6">
                With ongoing support, regular check-ins, and a comprehensive treatment plan, 
                you'll be on your way to lasting recovery and a better life.
              </p>
              <Link 
                href="/start-treatment" 
                className="inline-flex items-center bg-white text-[#0077C8] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More About Treatment
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about your first visit and treatment process
              </p>
              <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mt-4 md:mt-6"></div>
            </div>
            
            <div className="space-y-3 md:space-y-4">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-white rounded-lg md:rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-4 md:px-6 py-4 md:py-5 text-left focus:outline-none focus:ring-2 focus:ring-[#0077C8] focus:ring-opacity-50 rounded-lg md:rounded-xl"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      <div className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ${
                        openFAQ === faq.id ? 'rotate-180' : ''
                      }`}>
                        <svg className="w-full h-full text-[#0077C8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 md:px-6 pb-4 md:pb-5">
                      <div className="border-t border-gray-100 pt-4 md:pt-5">
                        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
      
      {/* SEO: FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Footer />
    </div>
  );
};

export default YourFirstVisit;

