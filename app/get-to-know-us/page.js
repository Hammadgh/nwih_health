'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GetToKnowUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      {/* Hero Section with Video */}
      <section className="relative bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get to Know Us
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-4">
            Northwest Integrated Health - Where Recovery Meets Compassion
          </p>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 opacity-90">
            <span className="font-semibold">Proven Results:</span> We've helped thousands of patients recover from addiction with our evidence-based approach. 
            Our success stories speak for themselves - recovery is possible, and we're here to make it happen.
          </p>
          
          {/* Video Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/hH0u5e8QcBE"
                title="Northwest Integrated Health - Get to Know Us"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Mission & Vision
              </h2>
                             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                 Dedicated to transforming lives through comprehensive, evidence-based addiction treatment with proven results
               </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#0077C8] rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0077C8]">Our Mission</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To create an evidence-based, patient-centered, integrated, comprehensive treatment model for substance-use-disorder; and to increase awareness about addiction as a chronic disease.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200/50 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#16A53F] rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#16A53F]">Our Goal</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To provide an interdisciplinary approach to addictive disorders, where counseling, education, support and medical treatment are integrated to provide a comprehensive model of treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results & Success Stories */}
      <section className="py-16 bg-gradient-to-r from-[#0077C8]/5 to-[#16A53F]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Proven Results & Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our evidence-based approach has transformed thousands of lives
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Proven Success Rate</h3>
                <p className="text-gray-600">
                  Our evidence-based treatment model has helped thousands of patients achieve lasting recovery
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Long-term Recovery</h3>
                <p className="text-gray-600">
                  Patients maintain sobriety and rebuild their lives with our comprehensive support system
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200/50 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Patient Satisfaction</h3>
                <p className="text-gray-600">
                  High patient satisfaction rates with compassionate, personalized care
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/50">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why We're the Best Choice</h3>
                <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  <strong>We're not just another treatment center</strong> - we're a proven leader in addiction recovery. 
                  Our evidence-based approach combines medical expertise with compassionate care, resulting in 
                  <span className="text-[#0077C8] font-semibold"> higher recovery rates and better long-term outcomes</span> than traditional methods. 
                  When you choose NWIH, you're choosing a team that has already helped thousands of patients 
                  successfully recover and rebuild their lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Beliefs
              </h2>
                             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                 Understanding addiction as a treatable chronic disease - proven by thousands of successful recoveries
               </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mt-6"></div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200/50">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Chronic Disease</h3>
                  <p className="text-gray-600 text-sm">
                    Like diabetes or hypertension, addiction is manageable
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Lifestyle & Therapy</h3>
                  <p className="text-gray-600 text-sm">
                    Best treatment combines lifestyle modification and behavioral therapy
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Support Network</h3>
                  <p className="text-gray-600 text-sm">
                    Family and friends provide essential support for recovery
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl border border-blue-200/50">
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  <strong>Key Insight:</strong> Medications cannot cure a chronic disease, however they can stabilize the condition and provide harm reduction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peer Counseling */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Peer Counseling Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Connecting with others who understand your journey
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mt-6"></div>
            </div>
            
            <div className="bg-gradient-to-r from-[#0077C8]/5 to-[#16A53F]/5 p-8 rounded-2xl border border-[#0077C8]/20">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0077C8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Why Peer Support Matters</h3>
                      <p className="text-gray-700 leading-relaxed">
                        People recovering from addiction to opioids, stimulants, and alcohol often find NA (Narcotics Anonymous) 
                        or AA (Alcoholics Anonymous) helpful. Having a circle of peers with similar experiences is essential.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 italic">
                      "The burden of withdrawals and the uncertainties of adapting to a new life are lighter when shared with 
                      people with similar struggles."
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#16A53F] rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-[#0077C8]">Our Peer Counselors</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Peer counselors at NWIH are trained peer specialists who have gone through their own experiences of 
                    recovery from mental illness or addiction. This combination of skill and personal experience delivers 
                    empathetic support for long-term recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of patients who have already achieved lasting recovery with our proven, evidence-based approach. 
            We provide a patient-centered, quality integrated health program for the treatment of substance use disorders 
            with a caring heart in the Pacific Northwest.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a 
              href="tel:253-503-0226" 
              className="group bg-white text-[#0077C8] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Today: 253-503-0226
            </a>
            
            <Link 
              href="/find-clinic" 
              className="group border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#0077C8] transition-all duration-300 inline-flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find a Clinic
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-lg font-medium">
              Thank you for your interest in our program and please remember, we are here to help.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GetToKnowUs;
