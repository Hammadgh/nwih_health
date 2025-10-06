'use client';

import Image from 'next/image';
import { useState } from 'react';

const HomeBanner = () => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0077C8]/90 to-[#16A53F]/85 mix-blend-multiply z-10 pointer-events-none"></div>
      
      {/* Refined darkening overlay for optimal contrast */}
      <div className="absolute inset-0 bg-black/50 z-5 pointer-events-none"></div>
      
      {/* Background image - positioned to show faces properly on all screens */}
      <div className="absolute inset-0 pointer-events-none">
        {!imageError ? (
          <div className="relative w-full h-full">
            <Image 
              src="/images/homepagebannernew.jpg" 
              alt="NWIH Healthcare Professionals"
              fill
              className="object-cover object-[50%_30%] md:object-[50%_25%] lg:object-[40%_20%] xl:object-[50%_15%]" 
              priority
              onError={() => setImageError(true)}
              sizes="100vw"
              quality={72}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDABALDgwMDgwQEBQWFBoYGiQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCf/2wBDAQcHBwoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCP/wAARCAAQABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCeAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/2Q=="
              style={{ objectPosition: '50% 25%' }}
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"></div>
        )}
      </div>
      
      {/* Centered content container with improved spacing */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-20 flex items-center justify-center min-h-[80vh]">
        <div className="max-w-6xl mx-auto text-center w-full">
           {/* Subheading with improved contrast */}
           <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold sm:font-semibold mb-6 sm:mb-8 drop-shadow-xl text-white max-w-5xl mx-auto leading-tight sm:leading-relaxed text-center px-2 sm:px-0 ">
            <span className="block sm:inline">Opioid & Fentanyl Addiction</span>
            {/* <span className="block sm:inline">Fentanyl & Opioid Use Disorder</span> */}
          </h2>
          {/* Main heading with enhanced typography */}
          <h1 className=" italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-6 sm:mb-8 drop-shadow-2xl text-white leading-tight tracking-tight text-center max-w-6xl mx-auto px-4">
            <span className="block sm:inline" style={{ fontStyle: 'italic', fontWeight: 500 }}>THERE IS HELP. </span>
            {/* <span className="block sm:inline">Compassion</span> */}
          </h1>
          
         
          
          {/* Description with better readability */}
          <p className="text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 drop-shadow-lg text-white leading-relaxed">
            Northwest Integrated Health (NWIH) is a licensed methadone clinic and Opioid Treatment Program (OTP) offering fast, compassionate, and confidential help for opioid and fentanyl addiction.
          </p>
          
          {/* Location and contact info
          <div className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto drop-shadow-lg text-white leading-relaxed">
            <p className="mb-2">
              📍 Clinics in Tacoma, Puyallup, Lakewood & Lacey
            </p>
            <p className="font-semibold">
              📞 Call Now for Same-Day Help: 253-200-0300
            </p>
          </div> */}
          
          {/* Enhanced CTA buttons with better spacing and styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="tel:253-200-0300" 
              className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#16A53F] to-[#138a34] hover:from-[#138a34] hover:to-[#0f7a2e] text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center text-lg sm:text-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now for Same-Day Help
            </a>
            <a 
              href="/find-clinic" 
              className="group px-8 sm:px-10 py-4 sm:py-5 bg-white/95 hover:bg-white text-[#0077C8] font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center text-lg sm:text-xl transform hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Find a Clinic Near You
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner; 