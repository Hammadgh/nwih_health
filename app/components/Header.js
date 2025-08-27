'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showButtonAnimation, setShowButtonAnimation] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  
  // Improved scroll handler with hysteresis to prevent flickering
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 100; // Higher threshold for more stability
    const hysteresis = 20; // Buffer zone to prevent rapid toggling
    
    // Only update if we've scrolled enough to matter
    if (Math.abs(currentScrollY - lastScrollY.current) < 5) {
      return;
    }
    
    // Use hysteresis to prevent rapid state changes
    if (currentScrollY > scrollThreshold + hysteresis && !scrolled) {
      setScrolled(true);
    } else if (currentScrollY < scrollThreshold - hysteresis && scrolled) {
      setScrolled(false);
    }
    
    lastScrollY.current = currentScrollY;
  }, [scrolled]);
  
  useEffect(() => {
    // Improved throttling with better performance
    const throttledHandleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking.current = false;
        });
        ticking.current = true;
      }
    };
    
    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [handleScroll]);

  // Button animation effect - triggers after 1.5 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('Button animation triggered!', new Date().toLocaleTimeString());
      setShowButtonAnimation(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <header className={`w-full header-shadow sticky top-0 z-[2147483647] isolate bg-white/95 backdrop-blur-sm transition-all duration-300 ease-out ${scrolled ? 'scrolled' : ''}`}>
      {/* Sticky Top Bar with Improved Animation */}
      <div className={`bg-[#16A53F] text-white py-2 px-4 text-center text-sm font-medium transition-all duration-300 ease-out pointer-events-none ${
        scrolled 
          ? 'max-h-0 py-0 opacity-0 overflow-hidden' 
          : 'max-h-12 opacity-100'
      }`}>
        <div className="container mx-auto">
          {/* Sliding Text Animation */}
          <div className="flex items-center justify-center">
            {/* Desktop Text - Original sliding animation */}
            <div className="hidden sm:flex items-center space-x-2" style={{ animation: 'pulse 1.5s ease-in-out infinite' }}>
              <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Help Available: Call</span>
              <a href="tel:1-877-522-1275" className="font-bold hover:text-gray-200 transition-colors pointer-events-auto">
                253-200-0300
              </a>
              <span>— Walk-ins Welcome!</span>
            </div>
            
            {/* Mobile Text - New attention-grabbing animation */}
            <div className="sm:hidden flex items-center space-x-2">
              <svg className="w-4 h-4 mr-2 flex-shrink-0 animate-call-attention" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="animate-text-pulse"> Help: Call</span>
              <a href="tel:1-877-522-1275" className="font-bold hover:text-gray-200 transition-colors animate-text-pulse pointer-events-auto">
                1-877-522-1275
              </a>
              <span className="animate-text-pulse">— Walk-ins Welcome!</span>
            </div>
          </div>
        </div>
      </div>

      {/* Top header with primary navigation - Improved transition */}
      <div className={`hidden lg:block bg-gradient-to-r from-[#0077C8] to-[#005a9e] text-white transition-all duration-300 ease-out pointer-events-none ${
        scrolled 
          ? 'max-h-0 py-0 opacity-0 overflow-hidden' 
          : 'max-h-12 opacity-100'
      }`}>
        <div className="container mx-auto px-4 py-2 flex items-center justify-start">
          {/* Top Navigation Links */}
          <div className="hidden lg:flex items-center justify-end w-full ml-0 space-x-4 xl:space-x-6 header-nav text-left">
            
            <Link href="/get-to-know-us" className="nav-link text-white hover:text-white text-sm pointer-events-auto">
              <span className="nav-link-text">Get to Know Us</span>
            </Link>
            
            <Link href="/careers" className="nav-link text-white hover:text-white text-sm pointer-events-auto">
              <span className="nav-link-text">Careers</span>
            </Link>
            <Link href="/contact" className="nav-link text-white hover:text-white text-sm pointer-events-auto">
              <span className="nav-link-text">Contact</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and secondary navigation - Improved transitions */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300 ease-out">
        <div className={`container mx-auto px-4 transition-all duration-300 ease-out ${
          scrolled ? 'py-2 lg:py-2' : 'py-3 lg:py-4'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo with improved scaling */}
            <Link href="/" className="logo-container flex items-center">
              <Image 
                src="/Nwih-logo-vector (1) (1).png" 
                alt="NWIH Logo" 
                width={200}
                height={60}
                className={`transition-all duration-300 ease-out w-auto ${
                  scrolled ? 'h-10 sm:h-12 lg:h-16' : 'h-12 sm:h-16 lg:h-20'
                }`} 
                priority
              />
            </Link>
            
            {/* Main Navigation - Centered - Better responsive breakpoints */}
            <nav className="hidden xl:flex items-center justify-center flex-1 space-x-6 2xl:space-x-8 header-nav ml-4 xl:ml-8 relative z-[2147483647]">
              
              <Link href="/start-treatment" className="nav-link text-[#0077C8] text-sm 2xl:text-base relative z-50" style={{ pointerEvents: 'auto' }}>
                <span className="nav-link-text">Begin Your Recovery</span>
              </Link>
              
              <Link href="/your-first-visit" className="nav-link text-[#0077C8] text-sm 2xl:text-base relative z-50" style={{ pointerEvents: 'auto' }}>
                <span className="nav-link-text">Your First Visit</span>
              </Link>
              
              <Link href="/find-clinic" className="nav-link text-[#0077C8] text-sm 2xl:text-base relative z-50" style={{ pointerEvents: 'auto' }}>
                <span className="nav-link-text">Find The Nearest Clinic</span>
              </Link>
              
              <Link href="/patient-resources" className="nav-link text-[#0077C8] text-sm 2xl:text-base relative z-50" style={{ pointerEvents: 'auto' }}>
                <span className="nav-link-text">Patient Support</span>
              </Link>
            </nav>

            {/* Call Now Button - Right aligned */}
            <div className="hidden xl:block ml-auto relative z-[2147483647]">
              <a 
                href="tel:1-877-522-1275" 
                className="cta-button animate-pulse bg-gradient-to-r from-[#16A53F] to-[#128a35] hover:from-[#128a35] hover:to-[#0f7a2e] text-white font-semibold px-4 2xl:px-6 py-2 2xl:py-3 rounded-full text-sm 2xl:text-base shadow-lg flex items-center cursor-pointer"
                style={{
                  pointerEvents: 'auto',
                  position: 'relative',
                  zIndex: 999
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Get Help Now
              </a>
            </div>
            
            {/* Mobile menu button - Shows on screens smaller than xl */}
            <button 
              className="menu-button xl:hidden text-[#0077C8] hover:text-[#005a9e] ml-4 transition-all duration-300 ease-out" 
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
                {/* Primary navigation for mobile - mirrors desktop */}
                <Link href="/start-treatment" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Begin Your Recovery
                </Link>
                <Link href="/your-first-visit" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Your First Visit
                </Link>
                <Link href="/find-clinic" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Find The Nearest Clinic
                </Link>
                <Link href="/patient-resources" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Patient Support
                </Link>
                
                {/* Secondary navigation for mobile */}
                <h3 className="header-nav font-semibold text-sm text-gray-500 pt-4 pb-2 uppercase tracking-wider">More</h3>
                <Link href="/get-to-know-us" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Get to Know Us
                </Link>
                <Link href="/careers" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Careers
                </Link>
                <Link href="/contact" className="nav-link py-3 border-b border-gray-50 text-[#0077C8] text-base" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}