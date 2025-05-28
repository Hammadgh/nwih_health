'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <div className="max-w-2xl mx-auto py-16">
          <h1 className="text-3xl font-bold text-[#0077C8] mb-6">Something Went Wrong</h1>
          <p className="text-xl text-gray-600 mb-8">
            We're sorry, but there was an error loading this page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="bg-[#0077C8] text-white hover:bg-[#005d9f] font-bold py-3 px-8 rounded-md text-lg transition duration-300"
            >
              Try Again
            </button>
            <Link 
              href="/" 
              className="bg-gray-200 text-gray-800 hover:bg-gray-300 font-bold py-3 px-8 rounded-md text-lg transition duration-300"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}