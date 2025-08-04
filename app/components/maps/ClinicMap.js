'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Workaround for Leaflet marker icon issue in Next.js
const useFixLeafletIcons = () => {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;
    
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });
  }, []);
};

export default function ClinicMap({ clinic }) {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  
  useFixLeafletIcons();

  useEffect(() => {
    if (!clinic || !clinic.lat || !clinic.lng) return;
    
    // Initialize map only if it doesn't exist
    if (!mapRef.current) {
      // Create map instance
      mapRef.current = L.map(mapContainerRef.current).setView([clinic.lat, clinic.lng], 15);
      
      // Add OpenStreetMap tile layer (free)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapRef.current);
      
      // Add marker for clinic location
      const marker = L.marker([clinic.lat, clinic.lng]).addTo(mapRef.current);
      
      // Add popup with clinic info
      marker.bindPopup(`
        <strong>${clinic.name}</strong><br>
        ${clinic.address}<br>
        ${clinic.city}, ${clinic.state} ${clinic.zip}<br>
        <a href="tel:${clinic.phone}">${clinic.phone}</a>
      `).openPopup();
    }
    
    return () => {
      // Clean up map on component unmount
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [clinic]);

  return (
    <div ref={mapContainerRef} className="h-full w-full" style={{ minHeight: '400px' }}></div>
  );
} 