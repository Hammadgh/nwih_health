'use client';

import Image from 'next/image';
import { useState } from 'react';
import QuickContactForm from './QuickContactForm';

const HomeBanner = () => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Darker gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0077C8]/95 to-[#16A53F]/90 mix-blend-multiply z-10"></div>
      
      {/* Additional stronger darkening overlay */}
      <div className="absolute inset-0 bg-black/60 z-5"></div>
      
      {/* Background image - positioned lower to show faces better */}
      <div className="absolute inset-0">
        {!imageError ? (
          <div className="relative w-full h-full">
            <Image 
              src="/images/homepagebanner.jpg" 
              alt="NWIH Healthcare Professionals"
              fill
              className="object-cover object-top md:object-[50%_25%]" 
              priority
              onError={() => setImageError(true)}
              sizes="100vw"
              quality={90}
              style={{ objectPosition: '50% 25%' }} 
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
        )}
      </div>
      
      <div className="container mx-auto px-4 py-14 md:py-20 lg:py-24 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left content area - enhanced text visibility with stronger shadows */}
          <div className="w-full lg:w-3/5 text-white mb-10 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg text-white">
              Welcome to Northwest Integrated Health
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 drop-shadow-lg text-white">
              Compassionate, Evidence-Based Care for Opioid Use Disorder
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl drop-shadow-md text-white">
              At NWIH, we understand that recovery is a journey—and we're here to support you every step of the way. 
              Whether you're reaching out for the first time or continuing your treatment; 
              our dedicated team provides nonjudgmental, integrated care designed around you.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="tel:253-200-0300" 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#16A53F] hover:bg-[#138a34] text-white font-medium rounded-md shadow-md transition-colors duration-200 inline-flex items-center text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Today
              </a>
              <a 
                href="/find-clinic" 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white hover:bg-gray-100 text-[#0077C8] font-medium rounded-md shadow-md transition-colors duration-200 inline-flex items-center text-sm sm:text-base"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Find a Clinic
              </a>
            </div>
          </div>
          
          {/* Right form area */}
          <div className="w-full lg:w-2/5 lg:pl-6">
            <QuickContactForm className="max-w-md mx-auto shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner; 