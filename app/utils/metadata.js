// SEO metadata utility for consistent metadata across pages

const baseUrl = 'https://nwihc.com';

// Default metadata for the site
export const defaultMetadata = {
  title: 'NWIH - Northwest Integrated Health | Addiction Treatment Services',
  description: 'Northwest Integrated Health provides outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances. Find clinics in Pierce County, Washington.',
  keywords: 'addiction treatment, MAT, substance use disorder, clinic finder, NWIH, Pierce County, Washington, opioid treatment, alcohol treatment, medication assisted treatment',
  authors: [{ name: 'Northwest Integrated Health' }],
  creator: 'Northwest Integrated Health',
  publisher: 'Northwest Integrated Health',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    siteName: 'Northwest Integrated Health',
    title: 'NWIH - Northwest Integrated Health | Addiction Treatment Services',
    description: 'Northwest Integrated Health provides outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances. Find clinics in Pierce County, Washington.',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Northwest Integrated Health - Addiction Treatment Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nwihc',
    creator: '@nwihc',
    title: 'NWIH - Northwest Integrated Health | Addiction Treatment Services',
    description: 'Northwest Integrated Health provides outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances.',
    images: [`${baseUrl}/images/og-image.jpg`],
  },
  alternates: {
    canonical: baseUrl,
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: 'NWIH - Northwest Integrated Health | Addiction Treatment Services',
    description: 'Northwest Integrated Health provides outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances. Find clinics in Pierce County, Washington.',
    keywords: 'addiction treatment, MAT, substance use disorder, clinic finder, NWIH, Pierce County, Washington, opioid treatment, alcohol treatment',
  },
  contact: {
    title: 'Contact Us - Northwest Integrated Health | Get Help Today',
    description: 'Contact Northwest Integrated Health for addiction treatment services. Call 253-200-0300 or visit our clinic in Lakewood, Washington. Walk-ins welcome Monday-Saturday.',
    keywords: 'contact NWIH, addiction treatment contact, Lakewood clinic, Pierce County addiction help, 253-200-0300',
  },
  findClinic: {
    title: 'Find a Clinic - Northwest Integrated Health Locations',
    description: 'Find Northwest Integrated Health clinic locations in Pierce County, Washington. 6 convenient locations providing medication-assisted treatment for addiction.',
    keywords: 'NWIH clinic locations, Pierce County addiction treatment, find clinic near me, medication assisted treatment locations',
  },
  patientSupport: {
    title: 'Patient Support Services - Northwest Integrated Health',
    description: 'Comprehensive patient support services including mental health, peer counseling, recovery coaching, and chemical dependency treatment at Northwest Integrated Health.',
    keywords: 'patient support, mental health services, peer counseling, recovery coaching, chemical dependency treatment, NWIH support',
  },
  careers: {
    title: 'Careers - Join Northwest Integrated Health Team',
    description: 'Join the Northwest Integrated Health team and help make a difference in addiction treatment. View current job openings and career opportunities.',
    keywords: 'NWIH careers, addiction treatment jobs, healthcare careers, Pierce County jobs, medication assisted treatment careers',
  },
  getToKnowUs: {
    title: 'About Us - Northwest Integrated Health',
    description: 'Learn about Northwest Integrated Health\'s mission to provide compassionate, evidence-based addiction treatment services in Pierce County, Washington.',
    keywords: 'about NWIH, addiction treatment mission, evidence-based treatment, Pierce County healthcare, Northwest Integrated Health history',
  },
  startTreatment: {
    title: 'Start Treatment - Northwest Integrated Health',
    description: 'Ready to start your recovery journey? Learn how to begin treatment at Northwest Integrated Health. Walk-ins welcome, insurance accepted.',
    keywords: 'start addiction treatment, begin recovery, NWIH treatment process, walk-in treatment, insurance accepted',
  },
  firstVisit: {
    title: 'Your First Visit - What to Expect | Northwest Integrated Health',
    description: 'Prepare for your first visit to Northwest Integrated Health. Learn what to bring, what to expect, and how we make your treatment journey comfortable.',
    keywords: 'first visit NWIH, what to expect, addiction treatment preparation, first appointment, treatment process',
  },
};

// Generate metadata for specific pages
export function generateMetadata({
  page = 'home',
  title,
  description,
  keywords,
  openGraph = {},
  twitter = {},
  canonical,
}) {
  const pageData = pageMetadata[page] || pageMetadata.home;
  
  const finalTitle = title || pageData.title;
  const finalDescription = description || pageData.description;
  const finalKeywords = keywords || pageData.keywords;
  const finalCanonical = canonical || `${baseUrl}/${page === 'home' ? '' : page}/`;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    authors: defaultMetadata.authors,
    creator: defaultMetadata.creator,
    publisher: defaultMetadata.publisher,
    robots: defaultMetadata.robots,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: finalTitle,
      description: finalDescription,
      url: finalCanonical,
      ...openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: finalTitle,
      description: finalDescription,
      ...twitter,
    },
    alternates: {
      canonical: finalCanonical,
    },
    verification: defaultMetadata.verification,
  };
}

// Generate sitemap data
export function generateSitemapData() {
  const baseUrl = 'https://nwihc.com';
  const currentDate = new Date().toISOString();
  
  const staticPages = [
    { url: '', priority: 1.0, changefreq: 'weekly' },
    { url: '/contact/', priority: 0.9, changefreq: 'monthly' },
    { url: '/find-clinic/', priority: 0.9, changefreq: 'weekly' },
    { url: '/patient-support/', priority: 0.8, changefreq: 'monthly' },
    { url: '/patient-support/mental-health/', priority: 0.7, changefreq: 'monthly' },
    { url: '/patient-support/chemical-dependency/', priority: 0.7, changefreq: 'monthly' },
    { url: '/patient-support/mat/', priority: 0.7, changefreq: 'monthly' },
    { url: '/patient-support/peer-counseling/', priority: 0.7, changefreq: 'monthly' },
    { url: '/patient-support/recovery-coaching/', priority: 0.7, changefreq: 'monthly' },
    { url: '/careers/', priority: 0.6, changefreq: 'weekly' },
    { url: '/get-to-know-us/', priority: 0.6, changefreq: 'monthly' },
    { url: '/start-treatment/', priority: 0.8, changefreq: 'monthly' },
    { url: '/your-first-visit/', priority: 0.7, changefreq: 'monthly' },
  ];

  // Add clinic location pages
  const clinicPages = [
    { url: '/find-clinic/washington/lakewood/', priority: 0.8, changefreq: 'monthly' },
    { url: '/find-clinic/washington/parkland/', priority: 0.8, changefreq: 'monthly' },
    { url: '/find-clinic/washington/westgate/', priority: 0.8, changefreq: 'monthly' },
    { url: '/find-clinic/washington/38th-st/', priority: 0.8, changefreq: 'monthly' },
  ];

  const allPages = [...staticPages, ...clinicPages];

  return allPages.map(page => ({
    url: `${baseUrl}${page.url}`,
    lastmod: currentDate,
    changefreq: page.changefreq,
    priority: page.priority,
  }));
}