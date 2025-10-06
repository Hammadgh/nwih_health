import './globals.css';
import { defaultMetadata } from './utils/metadata';
import StructuredData from './components/StructuredData';
import GoogleAnalytics from './components/GoogleAnalytics';
import CoreWebVitals from './components/CoreWebVitals';
import SEOAudit from './components/SEOAudit';

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Preconnect for critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Font loading optimization */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Critical meta tags */}
        <link rel="canonical" href="https://nwihc.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0077C8" />
        <meta name="msapplication-TileColor" content="#0077C8" />
        
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data */}
        <StructuredData type="organization" />
        
        {/* Next/Image with priority handles preloading of the hero image */}
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <CoreWebVitals />
        <SEOAudit />
        {children}
      </body>
    </html>
  );
}
