'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FaUsers, FaBrain, FaMapMarkerAlt, FaPhone, FaShieldAlt, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

export default function ChemicalDependencyCounselingPage() {
  const resources = [
    { name: 'NA Meetings in Pierce County', link: 'https://pcana.org/meetings/', external: true },
    { name: 'AA Meetings in Pierce County', link: 'https://www.pugetsoundaa.org/find-a-meeting/', external: true },
    { name: 'SAMHSA', link: 'https://findtreatment.gov/', external: true },
    { name: 'National Institute On Drug Abuse (NIDA)', link: 'https://nida.nih.gov/', external: true }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0077C8] to-[#16A53F] py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* subtle decorative accents */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-20 blur-3xl bg-[#16A53F]"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl bg-[#0077C8]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Chemical Dependency Counseling
              </h1>
              {/* professional divider line under heading */}
              <div className="mx-auto mb-6 sm:mb-8 h-1 w-20 sm:w-24 rounded-full bg-gradient-to-r from-white/80 via-white to-white/80"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
                Counselors help you examine the reasons for addiction and take practical steps toward recovery with individualized support.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  Our licensed counselors work with you in individual and group settings, analyze your background and current needs, and develop an integrated treatment plan so you can gain your life back.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                What to Expect
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-2">
                Everyday life can be complex and confusing. When a mind-altering substance is part of it, challenges multiply. Counseling offers structure, skills, and support to break the cycle.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                    <FaBrain className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 leading-tight">Individual Counseling</h3>
                    <p className="text-white/80 font-medium text-sm sm:text-base">Personalized, confidential sessions</p>
                  </div>
                </div>
                <ul className="grid gap-2 text-white/95 list-disc pl-5 text-sm sm:text-base">
                  <li>Explore root causes and triggers</li>
                  <li>Build coping skills and relapse prevention</li>
                  <li>Create a practical recovery plan</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                    <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Group Counseling</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Community and accountability</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-3">
                  Peer-supported sessions help you learn from others, practice new skills, and stay motivated with shared goals.
                </p>
                <div className="bg-blue-50 border border-blue-200 text-blue-900 rounded-lg p-4 text-sm">
                  Recovery is easier when you feel supported. Our team fosters a safe, respectful environment.
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                    <FaCheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Integrated Planning</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Coordinated with your care</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  We coordinate with MAT, Hepatitis C care, and mental health services as needed so your plan fits your life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Helpful Resources */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Helpful Resources
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Explore trusted education and community support to strengthen your recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {resources.map((r, idx) => (
                <div key={idx} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                      <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{r.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Verified external resource</p>
                    </div>
                  </div>
                  <a
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#0077C8] hover:text-[#16A53F] font-semibold transition-colors duration-300 text-sm sm:text-base"
                  >
                    Visit →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/find-clinic"
                className="w-full bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <FaMapMarkerAlt className="mr-2 w-4 h-4" /> Find a Nearby Clinic
              </Link>
              <a 
                href="tel:253-200-0300"
                className="w-full bg-white border border-[#0077C8] text-[#0077C8] py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <FaPhone className="mr-2 w-4 h-4" /> Call 253-200-0300
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


