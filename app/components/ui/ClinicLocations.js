'use client';

import { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaCar, FaBus, FaTrain, FaDirections } from 'react-icons/fa';
import { clinics } from '../../data/clinicData';

const ClinicLocations = () => {
  const [selectedClinic, setSelectedClinic] = useState(clinics[0]);

  // Show all clinics instead of just 6
  const allClinics = clinics;

  return (
    <section className="relative py-16 lg:py-20 overflow-hidden">
      {/* Map Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(/mapback.png)' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-green-900/95" />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Find Nearby NWIH Clinics 
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Convenient locations across Washington State with easy access by car, bus, and public transportation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Map Style Layout */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-[#16A53F]" />
                All Clinic Locations ({allClinics.length})
              </h3>
              
              {/* Map Grid - Scrollable for all clinics */}
              <div className="max-h-96 overflow-y-auto">
                <div className="grid grid-cols-1 gap-3">
                  {allClinics.map((clinic, index) => (
                    <div 
                      key={clinic.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        selectedClinic?.id === clinic.id 
                          ? 'border-[#16A53F] bg-[#16A53F]/20' 
                          : 'border-white/30 bg-white/5 hover:border-white/50 hover:bg-white/10'
                      }`}
                      onClick={() => setSelectedClinic(clinic)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-3 h-3 bg-[#16A53F] rounded-full mt-2 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm">{clinic.name}</h4>
                          <p className="text-gray-300 text-xs">{clinic.city}, {clinic.state}</p>
                          <p className="text-gray-400 text-xs">{clinic.address}</p>
                          <p className="text-[#16A53F] text-xs font-medium">{clinic.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Selected Clinic Details */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 sticky top-4">
            {selectedClinic && (
              <>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <FaMapMarkerAlt className="w-5 h-5 mr-2 text-[#16A53F]" />
                  {selectedClinic.name}
                </h3>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-[#16A53F] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">{selectedClinic.address}</p>
                      <p className="text-gray-300">{selectedClinic.city}, {selectedClinic.state} {selectedClinic.zip}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3">
                    <FaPhone className="w-4 h-4 text-[#16A53F] flex-shrink-0" />
                    <a 
                      href={`tel:${selectedClinic.phone}`}
                      className="text-white hover:text-[#16A53F] transition-colors font-medium"
                    >
                      {selectedClinic.phone}
                    </a>
                  </div>

                  {/* Services */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedClinic.services.map((service, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-[#16A53F]/20 text-[#16A53F] text-xs rounded-full border border-[#16A53F]/30"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Transportation Info */}
                  <div className="bg-white/5 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <FaDirections className="w-4 h-4 mr-2 text-[#16A53F]" />
                      Getting There
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <FaCar className="w-3 h-3 text-[#16A53F]" />
                        <span className="text-gray-300">Easy access from major roads</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaBus className="w-3 h-3 text-[#16A53F]" />
                        <span className="text-gray-300">Multiple bus routes nearby</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaTrain className="w-3 h-3 text-[#16A53F]" />
                        <span className="text-gray-300">Public transportation accessible</span>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="flex space-x-3">
                    <a
                      href={`tel:${selectedClinic.phone}`}
                      className="flex-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white font-bold py-3 px-4 rounded-lg text-center hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-200"
                    >
                      Call Now
                    </a>
                    <a
                      href={`https://maps.google.com/?q=${selectedClinic.address}, ${selectedClinic.city}, ${selectedClinic.state}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 text-white font-bold py-3 px-4 rounded-lg text-center border border-white/30 hover:bg-white/20 transition-all duration-200"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Or find the nearest clinic easily by your location.
          </p>
          <a
            href="/find-clinic"
            className="inline-flex items-center bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white font-bold py-3 px-6 rounded-lg hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-200"
          >
            <FaMapMarkerAlt className="w-4 h-4 mr-2" />
            Find All Clinics
          </a>
        </div>
      </div>
    </section>
  );
};

export default ClinicLocations; 