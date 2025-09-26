// File: clinic-detail.js
// Purpose: Shows detailed information for a specific clinic location including services, contact info, and hours

import { getAllClinics, getClinicById } from '../../../data/clinicData';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import ClinicImageSlider from '../../components/ClinicImageSlider';

// Dynamically import the map component with no SSR
const ClinicMap = dynamic(() => import('../../../components/maps/ClinicMap'), { ssr: false });

export async function generateStaticParams() {
  const clinics = getAllClinics();
  return clinics.map((clinic) => ({
    state: clinic.state,
    id: String(clinic.id)
  }));
}

export default function ClinicDetail({ params }) {
  const { id } = params;
  const clinic = getClinicById(id);
  
  if (!clinic) {
    return (
      <>
        <Header />
        <main className="bg-slate-100 min-h-screen py-12">
          <div className="container mx-auto px-4">
            <div className="text-center py-12">
              <p className="text-gray-600">Clinic not found.</p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-slate-100 min-h-screen pb-12">
        {/* Clinic Header */}
        <div className="bg-[#4a6c83] text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">
              {clinic.city} - {clinic.name}
            </h1>
            <p className="text-xl">
              Northwest Integrated Health
            </p>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm">
            <ol className="list-none p-0 flex flex-wrap">
              <li className="flex items-center">
                <Link href="/" className="text-[#0090c6] hover:text-[#007ba8]">
                  Home
                </Link>
                <svg className="w-3 h-3 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </li>
              <li className="flex items-center">
                <Link href="/find-clinic" className="text-[#0090c6] hover:text-[#007ba8]">
                  Find a Clinic
                </Link>
                <svg className="w-3 h-3 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </li>
              <li className="flex items-center">
                <Link href={`/find-clinic/${clinic.state}`}
                  className="text-[#0090c6] hover:text-[#007ba8]">
                  {clinic.state}
                </Link>
                <svg className="w-3 h-3 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
              </li>
              <li>
                <span className="text-gray-500">{clinic.city} - {clinic.name}</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* Clinic Details */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Map */}
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <ClinicMap clinic={clinic} />
              </div>
              
              {/* Clinic Info */}
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Location Information</h2>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
                  <p className="text-gray-700">
                    {clinic.address}<br />
                    {clinic.city}, {clinic.state} {clinic.zip}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact</h3>
                  <p className="text-gray-700">
                    Phone: <a href={`tel:${clinic.phone}`} className="text-[#0090c6]">{clinic.phone}</a><br />
                    Fax: {clinic.fax}
                  </p>
                </div>
                
                {clinic.openDate && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Established</h3>
                    <p className="text-gray-700">
                      {clinic.openDate}
                    </p>
                  </div>
                )}
                
                <div className="flex space-x-3 mb-6">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${clinic.address}, ${clinic.city}, ${clinic.state} ${clinic.zip}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#f8971d] hover:bg-[#e88a11]"
                  >
                    Get Directions
                  </a>
                  <a
                    href={`tel:${clinic.phone}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#0090c6] hover:bg-[#007ba8]"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
            
            {/* Services Section */}
            <div className="p-6 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Offered</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {clinic.services.map((service) => (
                  <span
                    key={service}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#e6f7fa] text-[#0090c6]"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                We provide evidence-based, patient-centered comprehensive integrated health services for substance use disorder treatment.
              </p>
              <p className="text-gray-700">
                Our team of medical providers, counselors, and support staff are dedicated to helping you on your recovery journey.
              </p>
            </div>
            
            {/* Hours Section */}
            <div className="p-6 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hours of Operation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Medication Hours</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>Monday - Friday: 6:00 AM - 2:30 PM</li>
                    <li>Saturday: 7:00 AM - 11:00 AM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Counseling Hours</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                    <li>Saturday & Sunday: Closed</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                Hours may vary by location. Please call to confirm exact hours for this clinic.
              </p>
            </div>

            {/* Location Photos */}
            {(() => {
              const guideContentByClinicId = {
                // Lakewood
                1: [
                  {
                    src: '/images/lakewood_images/IMG_4016.jpg',
                    title: 'Clinic Exterior'
                  },
                  {
                    src: '/images/lakewood_images/IMG_4018.jpg',
                    title: 'Street View'
                  },
                  {
                    src: '/images/lakewood_images/IMG_4019.jpg',
                    title: 'Building Entrance'
                  },
                  {
                    src: '/images/lakewood_images/IMG_4020.jpg',
                    title: 'Accessible Entrance'
                  },
                  {
                    src: '/images/lakewood_images/IMG_4034.jpg',
                    title: 'Sitting Area'
                  },
                  {
                    src: '/images/lakewood_images/IMG_4035.jpg',
                    title: 'Reception Area'
                  }
                ],
                // Tacoma – 38th Street
                2: [
                  {
                    src: '/images/38th_st_images/IMG_4028.jpg',
                    title: 'Clinic Exterior and Parking'
                  },
                  {
                    src: '/images/38th_st_images/IMG_4029.jpg',
                    title: 'Clinic Exterior and Parking'
                  },
                  {
                    src: '/images/38th_st_images/IMG_4030.jpg',
                    title: 'Parking Entrance'
                  },
                  {
                    src: '/images/38th_st_images/image000000.JPG',
                    title: 'Front desk and waiting area'
                  },
                  {
                    src: '/images/38th_st_images/image000001.JPG',
                    title: 'Waiting Area'
                  },
                  {
                    src: '/images/38th_st_images/image000002.JPG',
                    title: 'Patient Parking'
                  },
                  {
                    src: '/images/38th_st_images/image000003.JPG',
                    title: 'Main Entrance'
                  }
                ],
                // Tacoma – Westgate
                4: [
                  {
                    src: '/images/westgate_pictures/IMG_4009.jpg',
                    title: 'Clinic Building'
                  },
                  {
                    src: '/images/westgate_pictures/IMG_2406.jpg',
                    title: 'Suite Signage'
                  },
                  {
                    src: '/images/westgate_pictures/IMG_2407.jpg',
                    title: 'Entrance Area'
                  },
                  {
                    src: '/images/westgate_pictures/IMG_2409.jpg',
                    title: 'Building View'
                  }
                ],
                // Parkland
                6: [
                  {
                    src: '/images/parkland_images/IMG_3999.jpg',
                    title: 'Welcome'
                  },
                  {
                    src: '/images/parkland_images/IMG_4002.jpg',
                    title: 'Reception'
                  },
                  {
                    src: '/images/parkland_images/IMG_4004.jpg',
                    title: 'Building Exterior'
                  },
                  {
                    src: '/images/parkland_images/IMG_4005.jpg',
                    title: 'Sitting Area'
                  },
                  {
                    src: '/images/parkland_images/IMG_4008.jpg',
                    title: 'Entrance Walkway'
                  }
                ]
              };

              const items = guideContentByClinicId[clinic.id];
              if (!items || items.length === 0) return null;

              return (
                <div className="p-6 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Location Photos</h2>
                  <ClinicImageSlider items={items} />
                </div>
              );
            })()}
          </div>
          
          {/* Call to Action */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Recovery Journey?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:253-200-0300"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#f8971d] hover:bg-[#e88a11]"
              >
                Call Us Today
              </a>
              <Link
                href="/find-clinic"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-[#0090c6] bg-white hover:bg-gray-50 border-[#0090c6]"
              >
                Find Another Location
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}