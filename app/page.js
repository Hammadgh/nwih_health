import { generateMetadata } from './utils/metadata';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeBanner from './components/ui/HomeBanner';
import WhyChooseNWIH from './components/ui/WhyChooseNWIH';
import CertificationCTA from './components/ui/CertificationCTA';
import WhatToExpect from './components/ui/WhatToExpect';
import InsuranceProviders from './components/ui/InsuranceProviders';
import FullWidthCTA from './components/ui/FullWidthCTA';
import ClinicLocations from './components/ui/ClinicLocations';
import StructuredData from './components/StructuredData';

export const metadata = generateMetadata({ page: 'home' });

export default function Home() {
  return (
    <>
      <StructuredData type="medicalClinic" />
      <Header />
      <main>
        {/* Hero Banner */}
        <HomeBanner />

        {/* Why Choose NWIH Section */}
        <WhyChooseNWIH />

        {/* Certification CTA Section */}
        <CertificationCTA />
        {/* Full-width CTA */}
            <FullWidthCTA />
        {/* What to Expect Section */}
        <WhatToExpect />

        {/* Clinic Locations Section */}
        <ClinicLocations />

        {/* Insurance Providers Section */}
        <InsuranceProviders />
      </main>
      <Footer />
    </>
  );
}
