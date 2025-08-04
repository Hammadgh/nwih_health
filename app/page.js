'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import HomeBanner from './components/ui/HomeBanner';
import WhyChooseNWIH from './components/ui/WhyChooseNWIH';
import WhatToExpect from './components/ui/WhatToExpect';
import CommunityReferrals from './components/ui/CommunityReferrals';
import GetStartedNow from './components/ui/GetStartedNow';

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

        {/* Get Started Now Section */}
        <GetStartedNow />
      </main>
      <Footer />
    </>
  );
}
