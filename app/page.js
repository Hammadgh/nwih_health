'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeBanner from './components/ui/HomeBanner';
import WhyChooseNWIH from './components/ui/WhyChooseNWIH';
import WhatToExpect from './components/ui/WhatToExpect';
import CommunityReferrals from './components/ui/CommunityReferrals';
import ClinicLocations from './components/ui/ClinicLocations';
import GetStartedNow from './components/ui/GetStartedNow';
import InsurancePopup from './components/ui/InsurancePopup';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <HomeBanner />

        {/* Why Choose NWIH Section */}
        <WhyChooseNWIH />

        {/* What to Expect Section */}
        <WhatToExpect />

        {/* Community Referrals Section */}
        <CommunityReferrals />

        {/* Clinic Locations Section */}
        <ClinicLocations />

        {/* Get Started Now Section */}
        <GetStartedNow />
      </main>
      <Footer />
      
      {/* Insurance Verification Popup */}
      <InsurancePopup />
    </>
  );
}
