// SEO metadata utility for consistent metadata across pages

// Default metadata for the site
export const defaultMetadata = {
  title: 'NWIH - Integrated Health Services',
  description: 'Northwest Integrated Health provides outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances.',
  keywords: 'addiction treatment, MAT, substance use disorder, clinic finder, NWIH',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nwihc.com',
    siteName: 'Northwest Integrated Health',
    images: [
      {
        url: 'https://nwihc.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Northwest Integrated Health',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nwihc',
  },
};

// Generate metadata for specific pages
export function generateMetadata({
  title = defaultMetadata.title,
  description = defaultMetadata.description,
  keywords = defaultMetadata.keywords,
  openGraph = {},
  twitter = {},
}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      ...openGraph,
    },
    twitter: {
      ...defaultMetadata.twitter,
      title,
      description,
      ...twitter,
    },
  };
}