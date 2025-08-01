import './globals.css';

export const metadata = {
  title: 'NWIH - Integrated Health Services',
  description: 'Northwest Integrated Health provides outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances.',
  keywords: 'addiction treatment, MAT, substance use disorder, clinic finder, NWIH',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
