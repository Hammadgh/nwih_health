import './globals.css';

export const metadata = {
  title: 'NWIH - Integrated Health Services',
  description: 'Northwest Integrated Health provides outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances.',
  keywords: 'addiction treatment, MAT, substance use disorder, clinic finder, NWIH',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
