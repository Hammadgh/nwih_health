'use client';

import { useEffect, useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function ClinicsMap({ clinics }) {
  const mapContainerRef = useRef(null);
  
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
    <div className="relative h-full w-full" style={{ minHeight: '400px' }}>
      {/* Static Map Background */}
      <div 
        className="w-full h-full bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
        style={{ 
          backgroundImage: 'url(/mapback.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Semi-transparent overlay for better marker visibility */}
      <div className="absolute inset-0 bg-white/10"></div>
      
      {/* Compass Rose */}
      <div className="absolute top-3 left-3 sm:top-6 sm:left-6">
        <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg border border-gray-200">
          <div className="text-center">
            <div className="text-xs sm:text-sm font-bold text-gray-800">N</div>
            <div className="text-sm sm:text-lg text-[#0077C8]">↑</div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6">
        <div className="bg-white rounded-lg p-2 sm:p-3 shadow-lg border border-gray-200">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-600">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#0077C8] rounded-full mr-2"></div>
              <span>NWIH Clinics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 