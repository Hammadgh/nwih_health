'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full header-shadow">
      {/* Top header with primary navigation */}
      <div className="bg-[#0077C8] text-white">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-between">
          {/* Phone Number */}
          <div className="font-semibold">
            <a href="tel:1-877-522-1275" className="flex items-center hover:text-[#16A53F] transition-colors duration-300 text-base">
              1-877-522-1275
            </a>
          </div>
          
          {/* Top Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="nav-link">
              About Us
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/find-clinic" className="nav-link">
              Find a Clinic
            </Link>
            <Link href="/careers" className="nav-link">
              Careers
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and secondary navigation */}
      <div className="bg-white border-b border-gray-200 header-shadow">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo - larger */}
          <Link href="/" className="flex items-center py-1">
            <Image 
              src="/Nwih-logo-vector (1) (1).png" 
              alt="NWIH Logo" 
              width={180} 
              height={55} 
              className="h-auto" 
              priority
            />
          </Link>
          
          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[#0077C8] font-medium">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/new-patients" className="nav-link">
              New Patients
            </Link>
            <Link href="/current-patients" className="nav-link">
              Current Patients
            </Link>
            <Link href="/resources" className="nav-link">
              Resources
            </Link>
            <Link href="/get-help" className="bg-[#16A53F] hover:bg-[#0077C8] text-white font-bold px-6 py-2.5 rounded-full ml-2 transition-all duration-300 shadow-sm hover:shadow-md text-lg">
              Get Help Now
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-[#0077C8]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 header-shadow">
            <div className="container mx-auto px-4 py-3">
              <div className="flex flex-col space-y-3 text-[#0077C8]">
                {/* Primary navigation for mobile */}
                <h3 className="font-bold text-sm text-gray-500 pt-2">MAIN MENU</h3>
                <Link href="/about" className="py-2 border-b border-gray-100 nav-link">
                  About Us
                </Link>
                <Link href="/services" className="py-2 border-b border-gray-100 nav-link">
                  Services
                </Link>
                <Link href="/find-clinic" className="py-2 border-b border-gray-100 nav-link">
                  Find a Clinic
                </Link>
                <Link href="/careers" className="py-2 border-b border-gray-100 nav-link">
                  Careers
                </Link>
                <Link href="/contact" className="py-2 border-b border-gray-100 nav-link">
                  Contact
                </Link>
                
                {/* Secondary navigation for mobile */}
                <h3 className="font-bold text-sm text-gray-500 pt-4">PATIENTS</h3>
                <Link href="/" className="py-2 border-b border-gray-100 nav-link">
                  Home
                </Link>
                <Link href="/new-patients" className="py-2 border-b border-gray-100 nav-link">
                  New Patients
                </Link>
                <Link href="/current-patients" className="py-2 border-b border-gray-100 nav-link">
                  Current Patients
                </Link>
                <Link href="/resources" className="py-2 border-b border-gray-100 nav-link">
                  Resources
                </Link>
                
                {/* CTA and phone for mobile */}
                <div className="pt-4">
                  <Link href="/get-help" className="block bg-[#16A53F] hover:bg-[#0077C8] text-white text-center font-bold px-6 py-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md text-lg">
                    Get Help Now
                  </Link>
                </div>
                <div className="py-3 text-center">
                  <a href="tel:1-877-522-1275" className="font-semibold hover:text-[#16A53F] transition-colors duration-300 text-base">
                    1-877-522-1275
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 