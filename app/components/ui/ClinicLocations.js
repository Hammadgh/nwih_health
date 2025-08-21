'use client';

import { FaMapMarkerAlt, FaPhone, FaCar, FaBus, FaTrain, FaDirections, FaHome, FaClock, FaParking, FaUsers } from 'react-icons/fa';
import { clinics } from '../../data/clinicData';
import Link from 'next/link';

const ClinicLocations = () => {
  // Get unique cities and count clinics per city
  const cityStats = clinics.reduce((acc, clinic) => {
    if (!acc[clinic.city]) {
      acc[clinic.city] = { count: 0, clinics: [] };
    }
    acc[clinic.city].count++;
    acc[clinic.city].clinics.push(clinic);
    return acc;
  }, {});

  const mainCities = Object.keys(cityStats).slice(0, 6); // Top 6 cities

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden">
      {/* Map Background with opacity */}
      <div className="absolute inset-0 opacity-100">
        <img 
          src="/high_quality_map.png" 
          alt="High Quality Washington State Map with NWIH Clinic Locations" 
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000"
          style={{ filter: 'grayscale(5%) brightness(1.05)' }}
        />
      </div>
      
      {/* Gradient overlay for better text readability - reduced opacity to show more map */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-blue-50/50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Start Your Journey –  <span className="text-[#0077C8]">Locate Nearby NWIH Clinics</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            {clinics.length} convenient locations across Washington State with easy access by car, bus, and public transportation. 
            Our modern facilities are designed for your comfort and privacy.
          </p>
        </div>

        {/* Main Content - Single Column Layout */}
        <div className="w-full">

          {/* Location Information */}
          <div className="bg-white/80 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-2xl border border-gray-200/50 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center mb-6 sm:mb-8">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 mb-3 sm:mb-0">
                <FaDirections className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Location & Accessibility</h3>
                <p className="text-gray-600 text-sm sm:text-base">Easy access from anywhere in Washington</p>
              </div>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Clinic Statistics */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                <div className="grid grid-cols-3 gap-8 sm:gap-12 lg:gap-16 justify-items-center max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#0077C8]">{clinics.length}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Total Locations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#16A53F]">{Object.keys(cityStats).length}</div>
                    <div className="text-xs sm:text-sm text-gray-600">Cities Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#0077C8]">6</div>
                    <div className="text-xs sm:text-sm text-gray-600">Regions</div>
                  </div>
                  
                </div>
              </div>

              {/* Facility Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <FaHome className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A53F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Modern Facilities</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Comfortable, private treatment spaces</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <FaClock className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A53F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Flexible Hours</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Early morning to evening availability</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <FaParking className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A53F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Free Parking</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Convenient parking at all locations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 sm:p-4 bg-gray-50 rounded-lg">
                  <FaUsers className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A53F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900 font-semibold text-sm sm:text-base">Expert Staff</p>
                    <p className="text-gray-600 text-xs sm:text-sm">Licensed professionals at every location</p>
                  </div>
                </div>
              </div>

              {/* Transportation Options */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg sm:rounded-xl p-4 sm:p-6">
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center">
                  <FaDirections className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#0077C8]" />
                  Transportation Options
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="flex items-center space-x-3">
                    <FaCar className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A53F]" />
                    <div>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">By Car</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Easy access from all areas</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaBus className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A53F]" />
                    <div>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">By Bus</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Multiple routes nearby</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaTrain className="w-4 h-4 sm:w-5 sm:h-5 text-[#16A53F]" />
                    <div>
                      <p className="text-gray-900 font-medium text-sm sm:text-base">By Train</p>
                      <p className="text-gray-600 text-xs sm:text-sm">Regional transit access</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <a
                  href="/find-clinic"
                  className="inline-flex items-center w-full justify-center bg-[#16A53F] text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base"
                >
                  <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Find Your Nearest Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocations; 