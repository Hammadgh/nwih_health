'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeBanner from './components/ui/HomeBanner';
import WhyChooseNWIH from './components/ui/WhyChooseNWIH';
import WhatToExpect from './components/ui/WhatToExpect';
import InsuranceProviders from './components/ui/InsuranceProviders';
import ClinicLocations from './components/ui/ClinicLocations';

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

        {/* Insurance Providers Section */}
        <InsuranceProviders />

        {/* Clinic Locations Section */}
        <ClinicLocations />

        
      </main>
      <Footer />
      
      {/* Insurance Verification Popup */}
      <InsurancePopup />
    </>
  );
}
