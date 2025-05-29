'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPatientsMenuOpen, setIsPatientsMenuOpen] = useState(false);
  
  return (
    <header className="w-full header-shadow sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Top header with primary navigation */}
      <div className="bg-gradient-to-r from-[#0077C8] to-[#005a9e] text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Phone Number */}
          <div className="header-phone">
            <a href="tel:1-877-522-1275" className="phone-link flex items-center hover:text-[#16A53F] transition-all duration-300 text-base">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              1-877-522-1275
            </a>
          </div>
          
          {/* Top Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 header-nav">
            <Link href="/about" className="nav-link text-white hover:text-white">
              About Us
            </Link>
            <Link href="/find-clinic" className="nav-link text-white hover:text-white">
              Find a Clinic
            </Link>
            <Link href="/careers" className="nav-link text-white hover:text-white">
              Careers
            </Link>
            <Link href="/contact" className="nav-link text-white hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and secondary navigation */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="logo-container flex items-center">
              <Image 
                src="/Nwih-logo-vector (1) (1).png" 
                alt="NWIH Logo" 
                width={200} 
                height={60} 
                className="h-auto" 
                priority
              />
            </Link>
            
            {/* Main Navigation - Centered */}
            <nav className="hidden md:flex items-center justify-center flex-1 space-x-8 header-nav ml-8">
              <Link href="/" className="nav-link text-[#0077C8]">
                Home
              </Link>
              
              {/* Patients Mega Menu */}
              <div 
                className="relative"
                onMouseEnter={() => setIsPatientsMenuOpen(true)}
                onMouseLeave={() => setIsPatientsMenuOpen(false)}
              >
                <button className="dropdown-button nav-link text-[#0077C8] flex items-center">
                  Patients
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${isPatientsMenuOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mega Menu Dropdown */}
                <div className={`mega-menu absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 transition-all duration-300 ${
                  isPatientsMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {/* New Patients */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-[#0077C8] text-sm uppercase tracking-wider border-b border-gray-100 pb-2">New Patients</h3>
                        <div className="space-y-2">
                          <Link href="/new-patients" className="mega-menu-link block text-gray-700 hover:text-[#0077C8] transition-colors duration-200 text-sm py-1">
                            Getting Started
                          </Link>
                          <Link href="/new-patients/intake" className="mega-menu-link block text-gray-700 hover:text-[#0077C8] transition-colors duration-200 text-sm py-1">
                            Intake Process
                          </Link>
                          <Link href="/new-patients/what-to-expect" className="mega-menu-link block text-gray-700 hover:text-[#0077C8] transition-colors duration-200 text-sm py-1">
                            What to Expect
                          </Link>
                        </div>
                      </div>
                      
                      {/* Current Patients */}
                      <div className="space-y-3">
                        <h3 className="font-semibold text-[#0077C8] text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Current Patients</h3>
                        <div className="space-y-2">
                          <Link href="/current-patients" className="mega-menu-link block text-gray-700 hover:text-[#0077C8] transition-colors duration-200 text-sm py-1">
                            Patient Portal
                          </Link>
                          <Link href="/current-patients/remote-check-in" className="mega-menu-link block text-gray-700 hover:text-[#0077C8] transition-colors duration-200 text-sm py-1">
                            Remote Check-in
                          </Link>
                          <Link href="/current-patients/resources" className="mega-menu-link block text-gray-700 hover:text-[#0077C8] transition-colors duration-200 text-sm py-1">
                            Resources
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom CTA */}
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <div className="bg-gradient-to-r from-[#e6f7fa] to-[#f0fdf4] p-3 rounded-lg">
                        <p className="text-sm text-gray-600 mb-2">Need immediate help?</p>
                        <a href="tel:1-877-522-1275" className="text-[#0077C8] font-medium text-sm hover:text-[#005a9e] transition-colors duration-200">
                          Call us at 1-877-522-1275
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link href="/resources" className="nav-link text-[#0077C8]">
                Resources
              </Link>
            </nav>

            {/* Call Now Button - Right aligned */}
            <div className="hidden md:block ml-auto">
              <a 
                href="tel:1-877-522-1275" 
                className="cta-button bg-gradient-to-r from-[#16A53F] to-[#128a35] hover:from-[#128a35] hover:to-[#0f7a2e] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-base shadow-lg flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="menu-button md:hidden text-[#0077C8] hover:text-[#005a9e] ml-auto" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden bg-white/98 backdrop-blur-sm border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1 text-[#0077C8]">
                {/* Primary navigation for mobile */}
                <h3 className="header-nav font-semibold text-sm text-gray-500 pt-2 pb-2 uppercase tracking-wider">Main Menu</h3>
                <Link href="/about" className="nav-link py-3 border-b border-gray-50 text-[#0077C8]" onClick={() => setIsMenuOpen(false)}>
                  About Us
                </Link>
                <Link href="/find-clinic" className="nav-link py-3 border-b border-gray-50 text-[#0077C8]" onClick={() => setIsMenuOpen(false)}>
                  Find a Clinic
                </Link>
                <Link href="/careers" className="nav-link py-3 border-b border-gray-50 text-[#0077C8]" onClick={() => setIsMenuOpen(false)}>
                  Careers
                </Link>
                <Link href="/contact" className="nav-link py-3 border-b border-gray-50 text-[#0077C8]" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                
                {/* Patient navigation for mobile */}
                <h3 className="header-nav font-semibold text-sm text-gray-500 pt-4 pb-2 uppercase tracking-wider">Patients</h3>
                <Link href="/" className="nav-link py-3 border-b border-gray-50 text-[#0077C8]" onClick={() => setIsMenuOpen(false)}>
                  Home
                </Link>
                <Link href="/new-patients" className="nav-link py-3 border-b border-gray-50 text-[#0077C8]" onClick={() => setIsMenuOpen(false)}>
                  New Patients
                </Link>
                <Link href="/current-patients" className="nav-link py-3 border-b border-gray-50 text-[#0077C8]" onClick={() => setIsMenuOpen(false)}>
                  Current Patients
                </Link>
                <Link href="/resources" className="nav-link py-3 border-b border-gray-50 text-[#0077C8]" onClick={() => setIsMenuOpen(false)}>
                  Resources
                </Link>
                
                {/* CTA and phone for mobile */}
                <div className="pt-6">
                  <a 
                    href="tel:1-877-522-1275" 
                    className="cta-button block bg-gradient-to-r from-[#16A53F] to-[#128a35] hover:from-[#128a35] hover:to-[#0f7a2e] text-white text-center font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      Call Now
                    </div>
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