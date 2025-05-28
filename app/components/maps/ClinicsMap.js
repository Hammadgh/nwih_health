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

export default function ClinicsMap({ clinics }) {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  
  useFixLeafletIcons();

  useEffect(() => {
    if (!clinics || !clinics.length) return;

    // Calculate center point based on all clinics
    const calcCenter = () => {
      if (clinics.length === 1) {
        return [clinics[0].lat, clinics[0].lng];
      }

      let sumLat = 0, sumLng = 0;
      clinics.forEach(clinic => {
        sumLat += clinic.lat;
        sumLng += clinic.lng;
      });

      return [sumLat / clinics.length, sumLng / clinics.length];
    };
    
    // Initialize map only if it doesn't exist
    if (!mapRef.current) {
      const center = calcCenter();
      // Create map instance
      mapRef.current = L.map(mapContainerRef.current).setView(center, 10);
      
      // Add OpenStreetMap tile layer (free)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapRef.current);
      
      // Create bounds to fit all markers
      const bounds = L.latLngBounds();
      
      // Add markers for all clinics
      clinics.forEach(clinic => {
        if (clinic.lat && clinic.lng) {
          const marker = L.marker([clinic.lat, clinic.lng]).addTo(mapRef.current);
          
          // Add popup with clinic info
          marker.bindPopup(`
            <strong>${clinic.name}</strong><br>
            ${clinic.address}<br>
            ${clinic.city}, ${clinic.state} ${clinic.zip}<br>
            <a href="tel:${clinic.phone}">${clinic.phone}</a><br>
            <a href="/find-clinic/Washington/${clinic.id}" target="_blank">See Details</a>
          `);
          
          // Extend bounds to include this marker
          bounds.extend([clinic.lat, clinic.lng]);
        }
      });
      
      // Fit map to bounds with some padding if we have multiple clinics
      if (clinics.length > 1) {
        mapRef.current.fitBounds(bounds, {
          padding: [50, 50],
          maxZoom: 12
        });
      }
    }
    
    return () => {
      // Clean up map on component unmount
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [clinics]);

  return (
    <div ref={mapContainerRef} className="h-full w-full" style={{ minHeight: '400px' }}></div>
  );
} 