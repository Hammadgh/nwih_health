'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FaShieldAlt, FaInfoCircle, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

export default function HepatitisCPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section - match MAT gradient style */}
        <section className="relative bg-gradient-to-r from-[#0077C8] to-[#16A53F] py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Hepatitis C Treatment
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
                NWIH screens patients with substance use disorders and provides effective, confidential Hepatitis C care integrated with recovery support.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  Hepatitis C is a contagious viral infection that can silently damage the liver. Early testing and treatment prevent complications and protect your health.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview + Key Facts */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Understanding <span className="text-[#0077C8]">Hepatitis C</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-2">
                Left untreated, Hepatitis C can lead to cirrhosis, liver failure, liver cancer, and dangerous bleeding from enlarged veins. Many people have few or no symptoms until advanced disease.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {/* Symptoms Card */}
              <div className="bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                    <FaInfoCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 leading-tight">Common Symptoms</h3>
                    <p className="text-white/80 font-medium text-sm sm:text-base">Often mild or absent until late</p>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2 text-white/95 list-disc pl-5 text-sm sm:text-base">
                  <li>Fatigue; nausea or vomiting</li>
                  <li>Muscle and joint pain</li>
                  <li>Abdominal pain</li>
                  <li>Decreased appetite; weight loss</li>
                  <li>Jaundice; dark urine</li>
                  <li>Light or clay-colored stools</li>
                </ul>
              </div>

              {/* Transmission Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                    <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">How It Spreads</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Blood-to-blood contact</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-3">
                  At least 60% of new infections occur from sharing unsterilized needles and injection equipment. Transmission can also occur via inadequately sterilized medical procedures or body modifications (tattoos/piercings). Screening of blood products has made transfusion-related spread rare in the U.S.
                </p>
                <div className="bg-blue-50 border border-blue-200 text-blue-900 rounded-lg p-4 text-sm">
                  Reducing or stopping substance use and never sharing equipment are critical to prevention. We can help you access support.
                </div>
              </div>
            </div>

            {/* Treatment Card */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100 mb-12 sm:mb-16">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                  <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Curative Treatment</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Direct-acting antivirals (DAAs)</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base">
                Modern DAAs cure most people with an 8–12 week oral regimen. At NWIH, we screen, diagnose, and coordinate care alongside your substance use treatment to help you safely achieve cure and protect your liver.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/find-clinic"
                className="w-full bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <FaMapMarkerAlt className="mr-2 w-4 h-4" /> Find a Nearby Clinic
              </Link>
              <a
                href="https://liverfoundation.org/for-patients/about-the-liver/diseases-of-the-liver/hepatitis-c/support-for-patients-with-hepatitis-c/#what-if-i-need-financial-assistance-to-pay-for-treatment"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white border border-[#0077C8] text-[#0077C8] py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              >
                Financial Assistance Resources
              </a>
            </div>
          </div>
        </section>

        {/* Helpful Resources - match card grid style */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Helpful <span className="text-[#0077C8]">Resources</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Explore assistance programs and trusted education to support your treatment journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                    <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Pharmaceutical Assistance</h3>
                    <p className="text-gray-600 text-sm sm:text-base">American Liver Foundation</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-4">
                  Programs that may help eligible Hepatitis C patients reduce medication costs.
                </p>
                <a 
                  href="https://liverfoundation.org/for-patients/about-the-liver/diseases-of-the-liver/hepatitis-c/support-for-patients-with-hepatitis-c/#what-if-i-need-financial-assistance-to-pay-for-treatment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#0077C8] hover:text-[#16A53F] font-semibold transition-colors duration-300 text-sm sm:text-base"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


