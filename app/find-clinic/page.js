'use client';
// File: clinic-search.js
// Purpose: Main clinic search page with filtering options by city and zip code

import { useState, useEffect } from 'react';
import { washingtonCities, getClinicsByCity, getClinicsByZip, getAllClinics } from '../data/clinicData';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the map component with no SSR
const ClinicsMap = dynamic(() => import('../components/maps/ClinicsMap'), { ssr: false });

export default function FindClinic() {
  const [selectedCity, setSelectedCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [clinics, setClinics] = useState([]);
  const [view, setView] = useState('list'); // 'list' or 'map'
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchMethod, setSearchMethod] = useState('city'); // 'city' or 'zip'
  const [hasSearched, setHasSearched] = useState(false);
  
  // Handle city selection
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    if (city) {
      setIsLoading(true);
      setTimeout(() => {
        const results = getClinicsByCity(city);
        setClinics(results);
        setIsLoading(false);
        setHasSearched(true);
        if (results.length === 0) {
          setError(`No clinics found in ${city}. Please try another location.`);
    } else {
          setError('');
    }
      }, 300);
    } else {
      setClinics([]);
      setHasSearched(false);
    }
  };
  
  // Handle ZIP code search
  const handleZipSearch = (e) => {
    e.preventDefault();
    if (!zipCode.trim()) return;
    
    setIsLoading(true);
    setTimeout(() => {
      const results = getClinicsByZip(zipCode);
      setClinics(results);
      setIsLoading(false);
      setHasSearched(true);
      if (results.length === 0) {
        setError(`No clinics found near ZIP code ${zipCode}. Please try another location.`);
      } else {
        setError('');
      }
    }, 500);
  };
  
  // Handle geolocation
  const handleUseMyLocation = () => {
    setIsLoading(true);
    setError('');
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // In a real implementation, you would find the nearest clinics based on coordinates
          // For demo purposes, show all clinics as if they found nearby ones
          setTimeout(() => {
            const results = getAllClinics();
            setClinics(results);
            setIsLoading(false);
            setHasSearched(true);
            
            if (results.length === 0) {
              setError('No clinics found near your location.');
            } else {
              setError('');
            }
          }, 500);
        },
        (err) => {
          setError('Unable to access your location. Please allow location access or try another search method.');
          setIsLoading(false);
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setIsLoading(false);
    }
  };
  
  // View all clinics
  const handleViewAllClinics = () => {
    const results = getAllClinics();
    setClinics(results);
    setHasSearched(true);
    setError('');
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero section with background image */}
        <div className="bg-[#4a6c83] text-white py-20 px-4 relative">
          <div className="container mx-auto text-center max-w-3xl z-10 relative">
            <div className="flex justify-center mb-6">
              <div className="bg-white bg-opacity-20 rounded-full p-4">
                <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Local Clinic</h1>
            <p className="text-xl mb-10">
              Northwest Integrated Health has 6 convenient locations across Pierce County. Each location provides outpatient medication-assisted treatment for addiction to opioids, alcohol, and other substances.
            </p>
        
            {/* Search Interface */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="flex justify-center mb-8">
                <div className="inline-flex rounded-md bg-white shadow-sm">
                <button
                    onClick={() => {
                      setSearchMethod('city');
                      setZipCode('');
                    }}
                    className={`py-3 px-6 text-sm font-medium rounded-l-md focus:outline-none transition-colors ${
                      searchMethod === 'city' 
                        ? 'bg-[#14a1c5] text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                    Select your area
                </button>
                <button
                    onClick={() => {
                      setSearchMethod('zip');
                      setSelectedCity('');
                    }}
                    className={`py-3 px-6 text-sm font-medium rounded-r-md focus:outline-none transition-colors ${
                      searchMethod === 'zip' 
                        ? 'bg-[#14a1c5] text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                    Enter your zip
                </button>
                </div>
            </div>
            
              {searchMethod === 'city' ? (
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
                  <div className="relative flex-1">
                  <select
                    id="city"
                    name="city"
                    value={selectedCity}
                    onChange={handleCityChange}
                      className="block w-full rounded-md border-gray-300 border py-3 px-4 pr-10 appearance-none bg-white text-gray-700 focus:border-[#14a1c5] focus:ring-[#14a1c5]"
                  >
                      <option value="">Select your area</option>
                    {washingtonCities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                </div>
                </div>
              ) : (
                <form onSubmit={handleZipSearch} className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
                  <div className="relative flex-1">
                    <input
                      id="zip"
                      name="zip"
                      type="text"
                      value={zipCode}
                      onChange={e => setZipCode(e.target.value)}
                      className="block w-full rounded-md border-gray-300 border py-3 px-4 text-gray-700 focus:border-[#14a1c5] focus:ring-[#14a1c5]"
                      placeholder="Enter your ZIP code"
                    />
                  </div>
                    <button
                    type="submit"
                    className="bg-[#f8971d] text-white py-3 px-8 rounded font-medium hover:bg-[#e78300] transition-colors"
                    >
                      Go
                    </button>
                </form>
              )}
            
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
              <button
                onClick={handleUseMyLocation}
                  className="flex items-center text-white hover:text-gray-200 text-sm md:text-base font-medium"
              >
                  <div className="bg-[#14a1c5] bg-opacity-80 rounded-full p-1 mr-2">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                  </div>
                Use my location
              </button>
            
              <button
                onClick={handleViewAllClinics}
                  className="text-white border border-white px-5 py-2 rounded hover:bg-white hover:bg-opacity-10 transition-colors text-sm"
              >
                View all clinics
              </button>
            </div>
              </div>
          </div>
          <div className="absolute inset-0 bg-[#4a6c83] opacity-80"></div>
          </div>
          
        {/* Results Section */}
        {hasSearched && (
          <div className="bg-slate-100 py-10">
            <div className="container mx-auto px-4">
          {isLoading ? (
                <div className="text-center py-10">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#14a1c5]"></div>
              <p className="mt-2 text-gray-600">Searching for clinics...</p>
            </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 text-red-800 p-4 rounded max-w-3xl mx-auto">
                  {error}
                </div>
          ) : clinics.length > 0 ? (
                <div className="max-w-5xl mx-auto">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              {/* View toggle */}
                    <div className="flex border-b border-gray-200">
                  <button
                    onClick={() => setView('list')}
                        className={`flex-1 py-4 px-6 text-center font-medium ${
                      view === 'list'
                            ? 'bg-white text-[#14a1c5] border-b-2 border-[#14a1c5]'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                        <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                    </svg>
                    List View
                  </button>
                  <button
                    onClick={() => setView('map')}
                        className={`flex-1 py-4 px-6 text-center font-medium ${
                      view === 'map'
                            ? 'bg-white text-[#14a1c5] border-b-2 border-[#14a1c5]'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                        <svg className="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                    </svg>
                    Map View
                  </button>
              </div>
              
              {/* List view */}
              {view === 'list' && (
                      <div className="divide-y divide-gray-200">
                  {clinics.map((clinic) => (
                          <div key={clinic.id} className="p-6 hover:bg-gray-50">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                              <div>
                                <div className="font-bold text-lg text-[#14a1c5]">{clinic.name}</div>
                                <div className="text-gray-700 mb-2">{clinic.address}, {clinic.city}, {clinic.state} {clinic.zip}</div>
                                <div className="text-gray-600">Phone: <a href={`tel:${clinic.phone}`} className="text-[#14a1c5] hover:underline">{clinic.phone}</a></div>
                                {clinic.openDate && (
                                  <div className="text-gray-600 mt-1">Established: {clinic.openDate}</div>
                                )}
                                <div className="text-gray-600">Fax: {clinic.fax}</div>
                        </div>
                              <div className="mt-4 md:mt-0 flex gap-3">
                          <Link
                            href={`/find-clinic/Washington/${clinic.id}`}
                                  className="bg-[#f8971d] text-white py-2 px-4 rounded hover:bg-[#e78300] transition-colors text-sm font-medium"
                          >
                            Details
                          </Link>
                          <a
                                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address + ', ' + clinic.city + ', ' + clinic.state + ' ' + clinic.zip)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                                  className="border border-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-50 transition-colors text-sm font-medium"
                          >
                            Get directions
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Map view */}
              {view === 'map' && (
                      <div className="h-[600px] relative">
                        <ClinicsMap clinics={clinics} />
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No clinics found</h3>
                  <p className="text-gray-600">Please try a different location or view all available clinics.</p>
                </div>
              )}
            </div>
        </div>
        )}
      </main>
      <Footer />
    </>
  );
}