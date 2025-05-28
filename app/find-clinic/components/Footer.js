'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#4a6c83] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/our-providers" className="text-gray-200 hover:text-white transition">
                  Our Providers
                </Link>
              </li>
              <li>
                <Link href="/join-our-team" className="text-gray-200 hover:text-white transition">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-200 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* For Patients Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">For Patients</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/remote-check-in" className="text-gray-200 hover:text-white transition">
                  Remote Check In
                </Link>
              </li>
              <li>
                <Link href="/patient-portal" className="text-gray-200 hover:text-white transition">
                  Patient Portal & Documents
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-gray-200 hover:text-white transition">
                  Insurance We Accept
                </Link>
              </li>
            </ul>
          </div>
          
          {/* For Partners Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">For Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/refer-patient" className="text-gray-200 hover:text-white transition">
                  Refer a Patient
                </Link>
              </li>
              <li>
                <Link href="/grants" className="text-gray-200 hover:text-white transition">
                  Grants and Research
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-200 hover:text-white transition">
                  In the News
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Find a Clinic Column with Map */}
          <div>
            <div className="mb-4">
              <h3 className="text-xl font-bold mb-2">Find a clinic near you</h3>
              <div className="bg-[#3a5c73] rounded-lg p-2 relative h-40 overflow-hidden">
                {/* Gray placeholder for map */}
                <div className="absolute inset-0 bg-gray-500 opacity-30"></div>
                {/* Map pin overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <Link href="/find-clinic" className="mt-3 bg-[#f8971d] text-white py-2 px-4 rounded hover:bg-[#e88a11] transition duration-300 inline-block w-full text-center">
                Find a clinic
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#5a7c93] mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-2xl font-bold text-white mb-2 inline-block">
                NWIH
              </Link>
              <p className="text-gray-300 text-sm">
                Integrated Health
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
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
                <Link href="/contact-us" className="text-gray-300 hover:text-white transition text-sm">
                  Contact Us
                </Link>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition text-sm">
                  Privacy Policy
                </Link>
                <Link href="/privacy-practices" className="text-gray-300 hover:text-white transition text-sm">
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