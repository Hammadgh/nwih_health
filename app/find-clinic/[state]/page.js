// File: state-clinics.js
// Purpose: Lists all clinics within Washington state

import { states, getClinicsByState } from '../../data/clinicData';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export async function generateStaticParams() {
  return states.map((state) => ({ state }));
}

export default function StateClinics({ params }) {
  const { state } = params;
  // All our clinics are in Washington state, but we're focusing on Pierce County
  const clinics = getClinicsByState('Washington');

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
          <div className="flex flex-wrap justify-between items-center mb-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900">All Pierce County Clinics</h2>
              <p className="text-gray-600 mt-1">Showing {clinics.length} results</p>
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
                        <p className="text-gray-600 mb-4">Established: {clinic.openDate}</p>
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
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}