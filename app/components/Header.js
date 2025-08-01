'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaPhone, FaMapMarkerAlt, FaUserMd, FaHeart, FaShieldAlt, FaUsers, FaInfoCircle } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
  };
  
  return (
    <header className="w-full header-shadow sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
      {/* Top header with contact info */}
      <div className="bg-gradient-to-r from-[#0077C8] to-[#005a9e] text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Contact Info */}
          <div className="flex items-center space-x-4 text-sm">
            <a href="tel:253-200-0300" className="flex items-center hover:text-[#16A53F] transition-all duration-300">
              <FaPhone className="w-3 h-3 mr-1" />
              253-200-0300
            </a>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">24/7 Support Available</span>
          </div>
          
          {/* Top Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <Link href="/about" className="hover:text-[#16A53F] transition-colors duration-200">
              Get to Know Us
            </Link>
            <Link href="/find-clinic" className="hover:text-[#16A53F] transition-colors duration-200">
              Find a Clinic
            </Link>
            <Link href="/contact" className="hover:text-[#16A53F] transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main header with logo and navigation */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
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
            
            {/* Main Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="nav-link text-[#0077C8] hover:text-[#005a9e] font-medium transition-colors duration-200">
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button 
                  className="nav-link text-[#0077C8] hover:text-[#005a9e] font-medium transition-colors duration-200 flex items-center"
                  onClick={() => toggleDropdown('services')}
                  onMouseEnter={() => setActiveDropdown('services')}
                >
                  Services
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 transition-all duration-300 ${
                  activeDropdown === 'services' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseLeave={() => setActiveDropdown(null)}>
                  <div className="p-4 space-y-3">
                    <Link href="/services/mat" className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors duration-200">
                      <FaUserMd className="w-4 h-4 text-[#0077C8] mr-3" />
                      <span className="text-gray-700">Medication-Assisted Treatment</span>
                    </Link>
                    <Link href="/services/mental-health" className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors duration-200">
                      <FaHeart className="w-4 h-4 text-[#0077C8] mr-3" />
                      <span className="text-gray-700">Mental Health Counseling</span>
                    </Link>
                    <Link href="/services/chemical-dependency" className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors duration-200">
                      <FaShieldAlt className="w-4 h-4 text-[#0077C8] mr-3" />
                      <span className="text-gray-700">Chemical Dependency Support</span>
                    </Link>
                    <Link href="/services/peer-coaching" className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors duration-200">
                      <FaUsers className="w-4 h-4 text-[#0077C8] mr-3" />
                      <span className="text-gray-700">Peer Recovery Coaching</span>
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Patients Dropdown */}
              <div className="relative">
                <button 
                  className="nav-link text-[#0077C8] hover:text-[#005a9e] font-medium transition-colors duration-200 flex items-center"
                  onClick={() => toggleDropdown('patients')}
                  onMouseEnter={() => setActiveDropdown('patients')}
                >
                  For Patients
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${activeDropdown === 'patients' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50 transition-all duration-300 ${
                  activeDropdown === 'patients' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseLeave={() => setActiveDropdown(null)}>
                  <div className="p-4 space-y-3">
                    <div className="border-b border-gray-100 pb-2">
                      <h4 className="text-sm font-semibold text-[#0077C8] uppercase tracking-wider mb-2">New Patients</h4>
                      <Link href="/new-patients" className="block text-gray-700 hover:text-[#0077C8] text-sm py-1 transition-colors duration-200">
                        Getting Started
                      </Link>
                      <Link href="/what-to-expect" className="block text-gray-700 hover:text-[#0077C8] text-sm py-1 transition-colors duration-200">
                        What to Expect
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[#0077C8] uppercase tracking-wider mb-2">Current Patients</h4>
                      <Link href="/patient-portal" className="block text-gray-700 hover:text-[#0077C8] text-sm py-1 transition-colors duration-200">
                        Patient Portal
                      </Link>
                      <Link href="/resources" className="block text-gray-700 hover:text-[#0077C8] text-sm py-1 transition-colors duration-200">
                        Resources
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <Link href="/find-clinic" className="nav-link text-[#0077C8] hover:text-[#005a9e] font-medium transition-colors duration-200 flex items-center">
                <FaMapMarkerAlt className="w-4 h-4 mr-1" />
                Find a Clinic
              </Link> */}
              
              {/* <Link href="/about" className="nav-link text-[#0077C8] hover:text-[#005a9e] font-medium transition-colors duration-200 flex items-center">
                <FaInfoCircle className="w-4 h-4 mr-1" />
                About
              </Link> */}
            </nav>

            {/* Call Now Button - Desktop */}
            <div className="hidden lg:block">
              <a 
                href="tel:253-200-0300" 
                className="cta-button bg-gradient-to-r from-[#16A53F] to-[#128a35] hover:from-[#128a35] hover:to-[#0f7a2e] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-base shadow-lg flex items-center"
              >
                <FaPhone className="w-4 h-4 mr-2" />
                Call Now 
              </a>
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="menu-button lg:hidden text-[#0077C8] hover:text-[#005a9e] p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
          <div className="mobile-menu lg:hidden bg-white/98 backdrop-blur-sm border-t border-gray-100 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-1">
                {/* Main navigation for mobile */}
                <Link href="/" className="block py-3 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                  Home
                </Link>
                
                {/* Services Section */}
                <div className="border-t border-gray-100 pt-2">
                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</h3>
                  <Link href="/services/mat" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    Medication-Assisted Treatment
                  </Link>
                  <Link href="/services/mental-health" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    Mental Health Counseling
                  </Link>
                  <Link href="/services/chemical-dependency" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    Chemical Dependency Support
                  </Link>
                  <Link href="/services/peer-coaching" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    Peer Recovery Coaching
                  </Link>
                </div>
                
                {/* Patients Section */}
                <div className="border-t border-gray-100 pt-2">
                  <h3 className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">For Patients</h3>
                  <Link href="/new-patients" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    New Patients
                  </Link>
                  <Link href="/what-to-expect" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    What to Expect
                  </Link>
                  <Link href="/patient-portal" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    Patient Portal
                  </Link>
                  <Link href="/resources" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    Resources
                  </Link>
                </div>
                
                {/* Other Links */}
                <div className="border-t border-gray-100 pt-2">
                  <Link href="/find-clinic" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    Find a Clinic
                  </Link>
                  <Link href="/about" className="block py-2 px-4 text-[#0077C8] hover:bg-gray-50 rounded-md transition-colors duration-200" onClick={closeAllDropdowns}>
                    About
                  </Link>
                </div>
                
                {/* CTA for mobile */}
                <div className="border-t border-gray-100 pt-4">
                  <a 
                    href="tel:253-200-0300" 
                    className="cta-button block bg-gradient-to-r from-[#16A53F] to-[#128a35] hover:from-[#128a35] hover:to-[#0f7a2e] text-white text-center font-semibold px-6 py-3 rounded-full transition-all duration-300 text-base shadow-lg"
                    onClick={closeAllDropdowns}
                  >
                    <div className="flex items-center justify-center">
                      <FaPhone className="w-4 h-4 mr-2" />
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