'use client';

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-2xl mx-auto py-16">
          <h1 className="text-6xl font-bold text-[#0077C8] mb-6">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/" 
            className="bg-[#0077C8] text-white hover:bg-[#005d9f] font-bold py-3 px-8 rounded-md text-lg transition duration-300"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}