'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full header-shadow sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Sticky Top Bar with Sliding Animation */}
      <div className="bg-[#16A53F] text-white py-2 px-4 text-center text-sm font-medium overflow-hidden">
        <div className="container mx-auto">
          {/* Sliding Text Animation */}
          <div className="flex items-center justify-center">
            {/* Desktop Text - Original sliding animation */}
            <div className="hidden sm:flex items-center space-x-2 animate-slide-text">
              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>24/7 Help Available: Call</span>
              <a href="tel:1-877-522-1275" className="font-bold hover:text-gray-200 transition-colors">
                1-877-522-1275
              </a>
              <span>— Walk-ins Welcome!</span>
            </div>
            
            {/* Mobile Text - New attention-grabbing animation */}
            <div className="sm:hidden flex items-center space-x-2">
              <svg className="w-4 h-4 mr-2 flex-shrink-0 animate-call-attention" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="animate-text-pulse">24/7 Help: Call</span>
              <a href="tel:1-877-522-1275" className="font-bold hover:text-gray-200 transition-colors animate-text-pulse">
                1-877-522-1275
              </a>
              <span className="animate-text-pulse">— Walk-ins Welcome!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top header with primary navigation - Hidden on mobile */}
      <div className="hidden lg:block bg-gradient-to-r from-[#0077C8] to-[#005a9e] text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Phone Number */}
          {/* <div className="header-phone">
            <a href="tel:1-877-522-1275" className="phone-link flex items-center hover:text-[#16A53F] transition-all duration-300 text-sm sm:text-base">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="hidden sm:inline">1-877-522-1275</span>
              <span className="sm:hidden">1-877-522-1275</span>
            </a>
          </div> */}
          
          {/* Top Navigation Links */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-auto header-nav">
            <Link href="/about" className="nav-link text-white hover:text-white text-sm">
              <span className="nav-link-text">Get to Know Us</span>
            </Link>
            <Link href="/find-clinic" className="nav-link text-white hover:text-white text-sm">
              <span className="nav-link-text">Find The Nearest Clinic</span>
            </Link>
            <Link href="/careers" className="nav-link text-white hover:text-white text-sm">
              <span className="nav-link-text">Careers</span>
            </Link>
            <Link href="/contact" className="nav-link text-white hover:text-white text-sm">
              <span className="nav-link-text">Contact</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and secondary navigation */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="logo-container flex items-center">
              <Image 
                src="/Nwih-logo-vector (1) (1).png" 
                alt="NWIH Logo" 
                width={200}
                height={60}
                className="h-12 sm:h-16 lg:h-18 w-auto" 
                priority
              />
            </Link>
            
            {/* Main Navigation - Centered - Better responsive breakpoints */}
            <nav className="hidden xl:flex items-center justify-center flex-1 space-x-6 2xl:space-x-8 header-nav ml-4 xl:ml-8">
              {/* <Link href="/" className="nav-link text-[#0077C8] text-sm 2xl:text-base">
                <span className="nav-link-text">Home</span>
              </Link> */}
              
              <Link href="/start-treatment" className="nav-link text-[#0077C8] text-sm 2xl:text-base">
                <span className="nav-link-text">Begin Your Recovery</span>
              </Link>
              
              <Link href="/what-to-expect" className="nav-link text-[#0077C8] text-sm 2xl:text-base">
                <span className="nav-link-text">Your First Visit</span>
              </Link>
              
              <Link href="/understanding-treatment" className="nav-link text-[#0077C8] text-sm 2xl:text-base">
                <span className="nav-link-text">How Treatment Works</span>
              </Link>
              
              <Link href="/patient-resources" className="nav-link text-[#0077C8] text-sm 2xl:text-base">
                <span className="nav-link-text">Patient Support</span>
              </Link>
            </nav>

            {/* Call Now Button - Right aligned */}
            <div className="hidden xl:block ml-auto">
              <a 
                href="tel:1-877-522-1275" 
                className="cta-button bg-gradient-to-r from-[#16A53F] to-[#128a35] hover:from-[#128a35] hover:to-[#0f7a2e] text-white font-semibold px-4 2xl:px-6 py-2 2xl:py-3 rounded-full transition-all duration-300 text-sm 2xl:text-base shadow-lg flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Start Recovery 
              </a>
            </div>
            
            {/* Mobile menu button - Shows on screens smaller than xl */}
            <button 
              className="menu-button xl:hidden text-[#0077C8] hover:text-[#005a9e] ml-4" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown - Shows on screens smaller than xl */}
        {isMenuOpen && (
          <div className="mobile-menu xl:hidden bg-white/98 backdrop-blur-sm border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1 text-[#0077C8]">
                {/* Primary navigation for mobile */}
                {/* <h3 className="header-nav font-semibold text-sm text-gray-500 pt-2 pb-2 uppercase tracking-wider">Main Menu</h3> */}
                
                <Link href="/start-treatment" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                Begin Your Recovery
                </Link>
                <Link href="/what-to-expect" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                Your First Visit
                </Link>
                <Link href="/understanding-treatment" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                How Treatment Works
                </Link>
                <Link href="/patient-resources" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                Patient Support
                </Link>
                <Link href="/find-clinic" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Find a Clinic
                </Link>
                
                {/* Secondary navigation for mobile */}
                <h3 className="header-nav font-semibold text-sm text-gray-500 pt-4 pb-2 uppercase tracking-wider">More</h3>
                
                <Link href="/contact" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
                <Link href="/about" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                Get to Know Us
                </Link>
                <Link href="/careers" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Careers
                </Link>
                
               
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 