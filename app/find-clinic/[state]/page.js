'use client';
// File: state-clinics.js
// Purpose: Lists all clinics within Washington state with list and map views

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getClinicsByState } from '../../../app/data/clinicData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function StateClinics() {
  const params = useParams();
  const { state } = params;
  const [clinics, setClinics] = useState([]);
  const [view, setView] = useState('list');

  useEffect(() => {
    // All our clinics are in Washington state, but we're focusing on Pierce County
    setClinics(getClinicsByState('Washington'));
  }, [state]);

  return (
    <>
      <Header />
      <main className="bg-slate-100 min-h-screen pb-12">
        {/* State Header */}
        <div className="bg-[#4a6c83] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Pierce County Clinics
            </h1>
            <p className="text-xl">
              Find NWIH clinics in Pierce County offering addiction treatment services.
            </p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-gray-500 hover:text-[#0090c6]">
                  Home
                </Link>
                <svg className="w-3 h-3 mx-2 fill-current text-gray-400" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                </svg>
              </li>
              <li className="flex items-center">
                <Link href="/find-clinic" className="text-gray-500 hover:text-[#0090c6]">
                  Find a Clinic
                </Link>
                <svg className="w-3 h-3 mx-2 fill-current text-gray-400" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                </svg>
              </li>
              <li>
                <span className="text-gray-700 font-medium">Washington Clinics</span>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Content container */}
        <div className="container mx-auto px-4 py-8">
          {/* Filter & View Toggle */}
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                All Pierce County Clinics
              </h2>
              <p className="text-gray-600 mt-1">
                Showing {clinics.length} results
              </p>
            </div>
            
            <div className="mt-4 sm:mt-0">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => setView('list')}
                  className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-l-lg ${
                    view === 'list'
                      ? 'bg-[#0090c6] text-white hover:bg-[#007ba8]'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  </svg>
                  List
                </button>
                <button
                  type="button"
                  onClick={() => setView('map')}
                  className={`px-4 py-2 text-sm font-medium border border-gray-300 rounded-r-lg ${
                    view === 'map'
                      ? 'bg-[#0090c6] text-white hover:bg-[#007ba8]'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M12 1.586l-4 4-8-8-4 4V17.414l4-4 8 8 4-4V1.586zM3.707 3.293L2 5v10.414l1-1V5.414l.707-.707zM17 4.414l-1 1v10.172l-.707.707L6.414 7.414l1.293-1.293L16 14.414V4.414z" clipRule="evenodd"></path>
                  </svg>
                  Map
                </button>
              </div>
            </div>
          </div>

          {clinics.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No clinics found in Pierce County.</p>
              <Link href="/find-clinic" className="mt-4 inline-block text-[#0090c6] hover:text-[#007ba8] hover:underline">
                Return to clinic finder
              </Link>
            </div>
          ) : (
            <>
              {/* List view */}
              {view === 'list' && (
                <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                  {clinics.map((clinic) => (
                    <div
                      key={clinic.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {clinic.city} - {clinic.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {clinic.address}, {clinic.city}, {clinic.state} {clinic.zip}
                        </p>
                        <p className="text-gray-600 mb-4">
                          Phone: {clinic.phone}<br />
                          Fax: {clinic.fax}
                        </p>
                        {clinic.openDate && (
                          <p className="text-gray-600 mb-4">
                            Established: {clinic.openDate}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {clinic.services.map((service) => (
                            <span
                              key={service}
                              className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-[#e6f7fa] text-[#0090c6]"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          <Link
                            href={`/find-clinic/${clinic.state}/${clinic.id}`}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f8971d] hover:bg-[#e88a11]"
                          >
                            Details
                          </Link>
                          <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                              `${clinic.address}, ${clinic.city}, ${clinic.state} ${clinic.zip}`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
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
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
                    <div className="bg-gray-200 rounded-lg shadow-inner h-96 flex items-center justify-center relative">
                      <div className="absolute inset-0">
                        {/* In real app, this would be an actual map component */}
                        <div className="h-full w-full bg-blue-50">
                          {clinics.map((clinic) => (
                            <div 
                              key={clinic.id} 
                              className="absolute w-6 h-6 bg-[#0090c6] rounded-full flex items-center justify-center text-white text-xs font-bold"
                              style={{
                                left: `${Math.random() * 90 + 5}%`,
                                top: `${Math.random() * 85 + 5}%`,
                                transform: 'translate(-50%, -50%)'
                              }}
                              title={`${clinic.city} - ${clinic.name}`}
                            >
                              {clinic.id}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="text-center z-10 bg-white bg-opacity-80 p-4 rounded">
                        <p className="text-gray-600 mb-2">Interactive Map</p>
                        <p className="text-gray-500 text-sm">
                          (In a production app, this would be Google Maps or Mapbox)
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Map Legend</h3>
                      <div className="flex flex-wrap gap-4">
                        {clinics.map((clinic) => (
                          <div key={clinic.id} className="flex items-center">
                            <div className="w-4 h-4 bg-[#0090c6] rounded-full mr-2 flex items-center justify-center text-white text-[8px]">
                              {clinic.id}
                            </div>
                            <span className="text-sm text-gray-700">{clinic.city} - {clinic.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}