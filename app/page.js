'use client';

<<<<<<< HEAD
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBanner from './components/ui/HomeBanner';
import WhyChooseNWIH from './components/ui/WhyChooseNWIH';
import WhatToExpect from './components/ui/WhatToExpect';
import CommunityReferrals from './components/ui/CommunityReferrals';
import GetStartedNow from './components/ui/GetStartedNow';
=======
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBanner from './components/ui/HomeBanner';
>>>>>>> cbba33a22434bb68daab371daa2b275a09d19c5f

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <HomeBanner />

<<<<<<< HEAD
        {/* Why Choose NWIH Section */}
        <WhyChooseNWIH />

        {/* What to Expect Section */}
        <WhatToExpect />

        {/* Community Referrals Section */}
        <CommunityReferrals />

        {/* Get Started Now Section */}
        <GetStartedNow />
=======
        {/* Services Section */}
        <section className="py-16 bg-[#e6f7fa]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[#0077C8]">Chemical Dependency</h3>
                <p className="text-gray-600">
                  Our specialists help examine the reasons for addiction and provide personalized treatment plans for recovery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[#0077C8]">Mental Health</h3>
                <p className="text-gray-600">
                  Counselors help with the thinking patterns in recovery, addressing the psychological aspects of addiction.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[#0077C8]">Medication-Assisted Treatment</h3>
                <p className="text-gray-600">
                  We offer Methadone, Buprenorphine & Naltrexone products to help manage withdrawal and reduce cravings.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Statement Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Mission</h2>
            <div className="bg-[#e6f7fa] p-8 rounded-lg border-l-4 border-[#0077C8] shadow-md">
              <p className="text-xl text-gray-700 italic leading-relaxed text-center">
                &quot;To create an evidence-based, patient-centered, comprehensive, integrated health model for substance-use-disorder treatment; and to increase awareness about addiction as a chronic disease.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* Find Clinic CTA */}
        <section className="bg-[#0077C8] text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">We Welcome Walk-ins and Referrals</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              We welcome walk-ins and referrals from our community partners like County Jails, Needle Exchange Programs, Emergency Rooms, and Primary Care Clinics.
            </p>
            <Link 
              href="/find-clinic" 
              className="bg-white text-[#0077C8] hover:bg-gray-100 font-bold py-3 px-8 rounded-md text-lg transition duration-300"
          >
              Find a Clinic Near You
            </Link>
        </div>
        </section>
>>>>>>> cbba33a22434bb68daab371daa2b275a09d19c5f
      </main>
      <Footer />
    </>
  );
}
