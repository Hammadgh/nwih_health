'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaHeart, FaBrain, FaUsers, FaGraduationCap, FaHandsHelping, FaLeaf, FaPhone, FaMapMarkerAlt, FaQuoteLeft, FaCheckCircle, FaShieldAlt, FaHome } from 'react-icons/fa';

const GetToKnowUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
             {/* Hero Section with Mission & Vision (combined in one banner) */}
       <section className="relative bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white py-12 md:py-16 overflow-hidden">
         <div className="absolute inset-0 bg-black/20"></div>
         <div className="container mx-auto px-4 relative z-10">
           <div className="text-center max-w-6xl mx-auto">
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
               Get to Know <span className="text-white">Northwest Integrated Health</span>
             </h1>
             <div className="mx-auto mb-6 sm:mb-8 h-1.5 w-full rounded-full bg-gradient-to-r from-white/80 via-white to-white/80"></div>
             
             {/* Mission & Vision Cards */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 max-w-6xl mx-auto">
               {/* Mission */}
               <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/20 shadow-lg">
                 <h2 className="text-2xl sm:text-2xl font-bold text-white mb-4 drop-shadow-lg">Our Mission</h2>
                 <p className="text-white/95 text-base sm:text-lg leading-relaxed mb-3">
                   At Northwest Integrated Health, our mission is to provide compassionate, evidence-based care for individuals and families impacted by substance use disorders.
                 </p>
                 <p className="text-white/95 text-base sm:text-lg leading-relaxed">
                   We take an interdisciplinary approach that integrates counseling, education, medical treatment, and ongoing support to create a comprehensive model of recovery.
                 </p>
               </div>
               {/* Vision */}
               <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-white/20 shadow-lg">
                 <h2 className="text-2xl sm:text-2xl font-bold text-white mb-4 drop-shadow-lg">Our Vision</h2>
                 <p className="text-white/95 text-base sm:text-lg leading-relaxed mb-3">
                   We believe addiction is a chronic medical condition—similar to diabetes or hypertension—that cannot always be cured but can be successfully managed. With the right combination of lifestyle changes, behavioral therapy, medication, and strong support networks, long-term recovery is possible.
                 </p>
                 <p className="text-white/95 text-base sm:text-lg leading-relaxed mb-3">
                   While medications cannot "cure" addiction, they play an important role in stabilizing health, reducing harm, and giving patients the foundation they need to rebuild their lives.
                 </p>
                 <p className="text-white/95 text-base sm:text-lg leading-relaxed">
                   Our dedicated team is here to walk alongside you, offering patient-centered treatment that respects your dignity, values, and goals. With care rooted in science and compassion, we are committed to helping our community heal and thrive across the Pacific Northwest.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>


      {/* Our Approach */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our <span className="text-[#0077C8]">Approach</span>
              </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We believe recovery requires more than one solution. That's why our program brings together:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Medical Treatment */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaHeart className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Medical Treatment</h3>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Evidence-based medication-assisted treatment to stabilize health and reduce harm.
              </p>
            </div>

            {/* Counseling & Therapy */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaBrain className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Counseling & Therapy</h3>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                One-on-one and group counseling to build coping strategies and support emotional healing.
              </p>
            </div>
            
            {/* Education & Support */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaGraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Education & Support</h3>
                  </div>
                </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Tools, resources, and community connections to help patients and families navigate recovery.
                </p>
              </div>
              
            {/* Lifestyle Guidance */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaLeaf className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Lifestyle Guidance</h3>
                  </div>
                </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Encouragement toward healthy habits, routines, and long-term wellness.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment to Care */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Commitment to <span className="text-[#0077C8]">Care</span>
              </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We are committed to delivering exceptional care that makes a real difference in your recovery journey.
               </p>
            </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaCheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Evidence-Based Care</h3>
                </div>
                  </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Delivering evidence-based care tailored to each individual's unique needs and circumstances.
                  </p>
                </div>
                
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaHeart className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Safe Environment</h3>
                </div>
                  </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Creating a safe, respectful, and stigma-free environment where healing can flourish.
                  </p>
                </div>
                
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Family Support</h3>
                </div>
                  </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Supporting families and communities as part of the healing process and recovery journey.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Accessible Treatment</h3>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Offering accessible treatment across the Pacific Northwest with convenient locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Northwest Integrated Health */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Why Choose <span className="text-[#0077C8]">Northwest Integrated Health?</span>
              </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              We offer comprehensive, patient-centered care that focuses on your long-term recovery and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaHeart className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Patient-Centered Care</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Respects your journey</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Patient-centered care that respects your journey and individual needs throughout the recovery process.
              </p>
            </div>
            
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Experienced Providers</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Compassionate professionals</p>
                    </div>
                  </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Experienced, compassionate providers who understand the complexities of addiction and recovery.
                    </p>
                  </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaCheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Comprehensive Services</h3>
                  <p className="text-gray-600 text-sm sm:text-base">All under one roof</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Comprehensive services under one roof, providing integrated care for all aspects of recovery.
              </p>
                </div>
                
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaLeaf className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Long-Term Recovery</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Not just short-term treatment</p>
                    </div>
                  </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Focus on long-term recovery, not just short-term treatment, with ongoing support and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* A Message to You */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            A Message to <span className="text-white">You</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2">
            Recovery is possible — and you don't have to face it alone. Our team is here with a caring heart and the expertise to guide you every step of the way.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
            <a 
              href="tel:253-200-0300" 
              className="group bg-white text-[#0077C8] px-8 sm:px-10 py-4 sm:py-5 rounded-lg font-semibold text-lg sm:text-xl hover:bg-gray-50 transition-all duration-300 inline-flex items-center shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              <FaPhone className="mr-3 w-5 h-5 sm:w-6 sm:h-6 rotate-90" />
              Call Us Now: 253-200-0300
            </a>
            
           
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 max-w-3xl mx-auto">
            <p className="text-white text-base sm:text-lg font-medium">
              Thank you for your interest in our program. We are here to help you take the first step toward recovery.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GetToKnowUs;