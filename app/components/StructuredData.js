export default function StructuredData({ type = 'organization', data = {} }) {
  const baseUrl = 'https://nwihc.com';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Northwest Integrated Health",
    "alternateName": "NWIH",
    "url": baseUrl,
    "logo": `${baseUrl}/Nwih-logo-vector (1) (1).png`,
    "description": "Northwest Integrated Health provides outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9720 South Tacoma Way",
      "addressLocality": "Lakewood",
      "addressRegion": "WA",
      "postalCode": "98499",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-253-200-0300",
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "Pierce County, Washington"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "14:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "11:00"
      }
    ],
    "medicalSpecialty": [
      "Addiction Medicine",
      "Substance Use Disorder Treatment",
      "Medication-Assisted Treatment"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 47.1719,
        "longitude": -122.5185
      },
      "geoRadius": "50000"
    },
    "sameAs": [
      "https://www.facebook.com/nwihc",
      "https://www.linkedin.com/company/nwihc"
    ]
  };

  const medicalClinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Northwest Integrated Health",
    "description": "Outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances",
    "url": baseUrl,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9720 South Tacoma Way",
      "addressLocality": "Lakewood",
      "addressRegion": "WA",
      "postalCode": "98499",
      "addressCountry": "US"
    },
    "telephone": "+1-253-200-0300",
    "email": "info@nwih.com",
    "openingHours": "Mo-Fr 06:00-14:30,Sa 07:00-11:00",
    "medicalSpecialty": "Addiction Medicine",
    "acceptsInsurance": true,
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Washington State Department of Health"
        }
      }
    ],
    "serviceType": [
      "Medication-Assisted Treatment",
      "Substance Use Disorder Treatment",
      "Mental Health Services",
      "Peer Counseling",
      "Recovery Coaching"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": data.breadcrumbs?.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    })) || []
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs?.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })) || []
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Northwest Integrated Health",
    "image": `${baseUrl}/Nwih-logo-vector (1) (1).png`,
    "description": "Outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances",
    "url": baseUrl,
    "telephone": "+1-253-200-0300",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9720 South Tacoma Way",
      "addressLocality": "Lakewood",
      "addressRegion": "WA",
      "postalCode": "98499",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 47.1719,
      "longitude": -122.5185
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "06:00",
        "closes": "14:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "07:00",
        "closes": "11:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
    "currenciesAccepted": "USD"
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Addiction Treatment Services",
    "description": "Comprehensive outpatient medication-assisted treatment for substance use disorders",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Northwest Integrated Health",
      "url": baseUrl
    },
    "serviceType": "Medical Service",
    "areaServed": {
      "@type": "State",
      "name": "Washington"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": baseUrl,
      "servicePhone": "+1-253-200-0300"
    }
  };

  let schema = organizationSchema;
  
  switch (type) {
    case 'medicalClinic':
      schema = medicalClinicSchema;
      break;
    case 'localBusiness':
      schema = localBusinessSchema;
      break;
    case 'service':
      schema = serviceSchema;
      break;
    case 'breadcrumb':
      schema = breadcrumbSchema;
      break;
    case 'faq':
      schema = faqSchema;
      break;
    case 'organization':
    default:
      schema = organizationSchema;
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema, null, 2)
      }}
    />
  );
}
