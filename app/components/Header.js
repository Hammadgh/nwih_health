'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
            <Link href="/services" className="nav-link text-white hover:text-white">
              Services
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
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo - larger */}
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
          
          {/* Main Navigation */}
          <nav className="hidden md:flex items-center space-x-2 header-nav">
            <Link href="/" className="nav-link text-[#0077C8]">
              Home
            </Link>
            <Link href="/new-patients" className="nav-link text-[#0077C8]">
              New Patients
            </Link>
            <Link href="/current-patients" className="nav-link text-[#0077C8]">
              Current Patients
            </Link>
            <Link href="/resources" className="nav-link text-[#0077C8]">
              Resources
            </Link>
            <Link href="/get-help" className="cta-button bg-gradient-to-r from-[#16A53F] to-[#128a35] hover:from-[#128a35] hover:to-[#0f7a2e] text-white font-semibold px-8 py-3 rounded-full ml-4 transition-all duration-300 text-base shadow-lg">
              Get Help Now
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="menu-button md:hidden text-[#0077C8] hover:text-[#005a9e]" 
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
                <Link href="/services" className="nav-link py-3 border-b border-gray-50 text-[#0077C8]" onClick={() => setIsMenuOpen(false)}>
                  Services
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
                
                {/* Secondary navigation for mobile */}
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
                  <Link 
                    href="/get-help" 
                    className="cta-button block bg-gradient-to-r from-[#16A53F] to-[#128a35] hover:from-[#128a35] hover:to-[#0f7a2e] text-white text-center font-semibold px-8 py-4 rounded-full transition-all duration-300 text-base shadow-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Help Now
                  </Link>
                </div>
                <div className="py-4 text-center">
                  <a href="tel:1-877-522-1275" className="phone-link header-phone font-semibold hover:text-[#16A53F] transition-all duration-300 text-base inline-flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
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