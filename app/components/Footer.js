'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaDirections } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#005BA0] to-[#005a9e] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/get-to-know-us" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Get to Know Us
                </Link>
              </li>
              <li>
                <Link href="/our-providers" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Our Providers
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* For Patients Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">For Patients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/start-treatment" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Begin Your Recovery
                </Link>
              </li>
              <li>
                <Link href="/remote-check-in" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Remote Check In
                </Link>
              </li>
              <li>
                <Link href="/patient-portal" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Patient Portal & Documents
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Insurance We Accept
                </Link>
              </li>
            </ul>
          </div>
          
          {/* For Partners Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">For Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/refer-patient" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Refer a Patient
                </Link>
              </li>
              <li>
                <Link href="/grants" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Grants and Research
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white transition-colors duration-200">
                  In the News
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Enhanced Find a Clinic Column with Map */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Find a Clinic</h3>
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 relative overflow-hidden backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              {/* Map Background */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
                style={{ 
                  backgroundImage: 'url(/mapback.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              
              {/* Content Overlay */}
              <div className="relative z-10">
                {/* Map Icon and Title */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#16A53F] rounded-lg flex items-center justify-center mr-3">
                    <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-white">Locations Near You</h4>
                    <p className="text-xs sm:text-sm text-gray-300">Multiple clinics across Washington</p>
                  </div>
                </div>
                
                
                
                {/* Call to Action Button */}
                <Link 
                  href="/find-clinic" 
                  className="inline-flex items-center justify-center w-full bg-[#f8971d] text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-300 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <FaMapMarkerAlt className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  Find Your Clinic
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="inline-block">
                <Image 
                  src="/footer-logo1.png" 
                  alt="NWIH Logo" 
                  width={120}
                  height={40}
                  className="h-13 md:h-16 w-auto" 
                  priority
                />
              </Link>
             
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-4 mb-4 md:mb-0">
                <Link href="/contact-us" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </Link>
                <Link href="/privacy-practices" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Notice of Privacy Practices
                </Link>
              </div>
              <p className="text-gray-300 text-sm">
                Copyright © {new Date().getFullYear()} NWIH. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 