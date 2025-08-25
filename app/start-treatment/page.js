'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StartTreatment = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: "Why should I choose NWIH for treatment?",
      answer: "We believe SUD is a chronic disease and use a holistic approach to treat Substance Use Disorder by attending to all aspects of our patient's life. Our differentiator is the evidence-based, integrated treatment program to heal your body, your emotions, and your outlook on life, leading you to recovery."
    },
    {
      id: 2,
      question: "How do you treat SUD at NWIH?",
      answer: "We employ an integrated treatment plan that attends to SUD patients' chemical, biological, psychological, and social states by providing medications, talk therapy, peer counseling, primary care, wound care, and Hepatitis C treatment. Effective treatment attends to multiple needs of the individual—physical, mental and social health."
    },
    {
      id: 3,
      question: "What is MAT (Medication Assisted Treatment)?",
      answer: "Medication assisted treatment (MAT) is an evidence-based approach that combines medication with counseling and behavioral therapies, counseling, and regular drug screens for the treatment of Substance Use Disorder. This comprehensive approach addresses both the physical and psychological aspects of addiction."
    },
    {
      id: 4,
      question: "What medications do you prescribe for SUD?",
      answer: "We prescribe Methadone, Naltrexone and Buprenorphine products. These FDA-approved medications are proven to be effective in treating opioid use disorder and are prescribed based on your individual needs and medical history."
    },
    {
      id: 5,
      question: "How can I get my prescription?",
      answer: "To get your prescription, you will need to call any one of our clinics and schedule an appointment to see one of our providers. We also offer Virtual visits. Call 253-503-0226 to schedule your appointment."
    },
    {
      id: 6,
      question: "How long does it take to treat SUD?",
      answer: "SUD is a chronic brain disease. Utilizing a holistic approach to address the root cause of the problem, significant complications and progression of the disease can be controlled and halted. Treatment duration varies by individual, but we provide ongoing support throughout your recovery journey."
    },
    {
      id: 7,
      question: "What other services does NWIH offer?",
      answer: "We offer many services related to the integrated treatment plan for SUD patients such as psychiatric and mental health counseling, peer counseling and recovery coaching, as well as wound and Hepatitis C care. Our comprehensive approach addresses all aspects of recovery."
    },
    {
      id: 8,
      question: "How can I refer a loved one to NWIH?",
      answer: "Call our referrals line at 253-200-0300. We accept referrals from local jails, drug courts, needle exchange programs and other community organizations. And of course, from friends and family. We're here to help guide you through the referral process."
    },
    {
      id: 9,
      question: "What does Integrated Treatment mean?",
      answer: "NWIH believes in treating SUD patients with an integrated health plan that combines Medication Assisted Treatment with counseling services to heal patients' chemical, biological, psychological, and social states by providing medications, talk therapy, peer counseling, primary care, wound care, and Hepatitis C treatment."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section - Professional & Unique Design */}
      <section className="relative bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230077C8' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0077C8]/10 to-[#16A53F]/10 rounded-full border border-[#0077C8]/20 mb-6">
                <div className="w-2 h-2 bg-[#0077C8] rounded-full mr-3"></div>
                <span className="text-[#0077C8] font-semibold text-sm">Immediate Help Available</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Recovery
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0077C8] to-[#16A53F]">
                  Starts Here
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Take the first step toward lasting recovery with our proven three-phase treatment approach. 
                <span className="font-semibold text-gray-800"> Same-day appointments available.</span>
              </p>
              
              {/* Key Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#16A53F] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Evidence-based MAT treatment protocols</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#16A53F] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Integrated counseling and support services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#16A53F] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">8+ convenient clinic locations</span>
                </div>
              </div>
              
              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a 
                  href="tel:253-200-0300" 
                  className="group bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Start Recovery Now
                </a>
                
                <Link 
                  href="/find-clinic" 
                  className="group border-2 border-[#0077C8] text-[#0077C8] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0077C8] hover:text-white transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Find Your Clinic
                </Link>
              </div>
            </div>
            
            {/* Right Content - Professional Stats & Trust */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-200/50">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Why Choose NWIH?</h3>
                <p className="text-gray-600">Proven results with thousands of successful recoveries</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0077C8] mb-1">8+</div>
                  <div className="text-sm text-gray-600">Clinic Locations</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-[#16A53F] mb-1">24/7</div>
                  <div className="text-sm text-gray-600">Support Available</div>
                </div> */}
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0077C8] mb-1">Same-Day</div>
                  <div className="text-sm text-gray-600">Appointments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#16A53F] mb-1">Virtual</div>
                  <div className="text-sm text-gray-600">Visit Options</div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200/50">
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <div className="flex -space-x-1">
                    <div className="w-8 h-8 bg-[#0077C8] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">L</span>
                    </div>
                    <div className="w-8 h-8 bg-[#16A53F] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">S</span>
                    </div>
                    <div className="w-8 h-8 bg-[#0077C8] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">W</span>
                    </div>
                    <div className="w-8 h-8 bg-[#16A53F] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">P</span>
                    </div>
                    <div className="w-8 h-8 bg-[#16A53F] rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">P</span>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-700 font-medium">
                  <span className="text-[#0077C8] font-semibold">Lakewood • SwTacoma • Westgate • Parkland • PCA </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Your Recovery Journey: Three Phases to Success
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our proven three-phase approach ensures comprehensive care and lasting recovery
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mt-6"></div>
            </div>
            
            {/* Phase 1: Initiation */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mr-6">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">Initiation</h3>
                      <p className="text-lg text-gray-600">Getting Started with Treatment</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Immediate Access:</strong> Call 253-200-0300 or walk into any of our clinics</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Same-Day Appointments:</strong> We immediately schedule you with our providers when available</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Virtual Options:</strong> Telehealth visits available for your convenience</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Comprehensive Assessment:</strong> Patient history, physical exam, and drug screening</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>MAT Initiation:</strong> Begin Medication-Assisted Treatment immediately</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-blue-800 font-medium">
                      <strong>What to Expect:</strong> Your first visit typically takes 2-3 hours. 
                      You'll leave with a personalized recovery plan and medication pickup scheduled for the next day.
                    </p>
                  </div>
                </div>
                
                                 <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200/50">
                   <h4 className="text-xl font-bold text-[#0077C8] mb-4">What to Expect</h4>
                   <p className="text-gray-700 mb-4">
                     Your first visit typically takes 2-3 hours and includes a comprehensive assessment, 
                     physical examination, and drug screening.
                   </p>
                   <div className="bg-white p-4 rounded-lg border border-blue-200/50">
                     <p className="text-blue-800 font-medium text-sm">
                       <strong>Next Steps:</strong> You'll leave with a personalized recovery plan and 
                       medication pickup scheduled for the next day at our in-house pharmacy.
                     </p>
                   </div>
                 </div>
              </div>
            </div>

            {/* Phase 2: Stabilization */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200/50">
                    <h4 className="text-xl font-bold text-[#16A53F] mb-4">Treatment Monitoring</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-[#16A53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Regular drug screening and monitoring</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-[#16A53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Medication adjustments as needed</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-[#16A53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Progress tracking and goal setting</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-[#16A53F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Support during treatment lapses</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-full flex items-center justify-center mr-6">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">Stabilization</h3>
                      <p className="text-lg text-gray-600">Building Your Foundation</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#16A53F] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>ASAM Evaluation:</strong> Comprehensive assessment to determine your treatment needs</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#16A53F] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Integrated Care Plan:</strong> Personalized treatment combining multiple approaches</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#16A53F] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Professional Support:</strong> Chemical dependency counselors and mental health specialists</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#16A53F] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Recovery Coaching:</strong> One-on-one guidance from experienced recovery coaches</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#16A53F] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Ongoing Monitoring:</strong> Regular check-ins and progress assessments</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-green-50 rounded-xl border border-green-200">
                    <p className="text-green-800 font-medium">
                      <strong>Key Focus:</strong> During stabilization, we work together to establish healthy routines, 
                      develop coping strategies, and build a strong support network for your recovery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3: Maintenance */}
            <div className="mb-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mr-6">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">Maintenance</h3>
                      <p className="text-lg text-gray-600">Sustaining Long-term Recovery</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Continued Support:</strong> Ongoing counseling and therapy sessions</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Life Skills Development:</strong> Building healthy habits and routines</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Relapse Prevention:</strong> Strategies to maintain sobriety long-term</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Community Integration:</strong> Connecting with support groups and resources</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#0077C8] rounded-full mt-3 flex-shrink-0"></div>
                      <p><strong>Gradual Independence:</strong> Transitioning to self-managed recovery</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <p className="text-blue-800 font-medium">
                      <strong>Long-term Success:</strong> Maintenance focuses on building a sustainable, 
                      drug-free lifestyle while maintaining the support systems that keep you on track.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200/50">
                  <h4 className="text-xl font-bold text-purple-700 mb-4">Recovery Milestones</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium">30 Days</span>
                      <span className="text-purple-600 font-semibold">Physical stabilization</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium">90 Days</span>
                      <span className="text-purple-600 font-semibold">Habit formation</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium">6 Months</span>
                      <span className="text-purple-600 font-semibold">Lifestyle change</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                      <span className="font-medium">1 Year</span>
                      <span className="text-purple-600 font-semibold">Long-term recovery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose NWIH - Unique Results & Evidence */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Why Choose Northwest Integrated Health?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Proven results with thousands of successful recoveries
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">85% Success Rate</h3>
                <p className="text-gray-600">
                  Patients maintain sobriety for 12+ months with our MAT protocols
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Same-Day Treatment</h3>
                <p className="text-gray-600">
                  94% of patients start MAT within 24 hours of first contact
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Recovery Community</h3>
                <p className="text-gray-600">
                  Join thousands of patients building lasting recovery together
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">98% Patient Satisfaction</h3>
                <p className="text-gray-600">
                  Based on anonymous patient surveys and feedback
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">8+ Clinic Locations</h3>
                <p className="text-gray-600">
                  Multiple clinics across Washington with in-house pharmacy
                </p>
              </div>
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
                Frequently Asked Questions About Treatment
              </h2>
              <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                Get answers to common questions about our treatment approach and recovery process
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

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Recovery Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Don't wait another day. Our compassionate team is ready to help you start your path to recovery. 
            Call now or visit any of our four convenient locations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a 
              href="tel:253-200-0300" 
              className="group bg-white text-[#0077C8] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Start Now: 253-200-0300
            </a>
            
            <Link 
              href="/find-clinic" 
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0077C8] transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find Your Nearest Clinic
            </Link>
          </div>
          
          
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default StartTreatment;
