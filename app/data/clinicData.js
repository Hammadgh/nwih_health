export const washingtonRegions = [
  'Puget Sound'
];

export const washingtonCities = [
  'Tacoma',
  'Lakewood',
  'Puyallup',
  'Parkland'
];

// Map cities to regions
export const cityToRegionMap = {
  'Tacoma': 'Puget Sound',
  'Lakewood': 'Puget Sound',
  'Puyallup': 'Puget Sound',
  'Parkland': 'Puget Sound'
};

// For backward compatibility
export const states = [
  'Washington'
];

export const clinics = [
  {
    id: 1,
    name: 'Lakewood',
    address: '9720 South Tacoma Way',
    city: 'Lakewood',
    state: 'Washington',
    zip: '98499-4456',
    phone: '253-503-3666',
    fax: '253-503-1633',
    lat: 47.1549,
    lng: -122.4746,
    services: ['MAT', 'Methadone', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound',
    openDate: '4/19/2017'
  },
  {
    id: 2,
    name: 'Tacoma - 38th Street',
    address: '3727 S Tacoma Way',
    city: 'Tacoma',
    state: 'Washington',
    zip: '98409-3134',
    phone: '253-300-7474',
    fax: '253-442-6122',
    lat: 47.2195,
    lng: -122.4842,
    services: ['MAT', 'Methadone', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound',
    openDate: '5/25/2019'
  },
  {
    id: 3,
    name: 'Puyallup',
    address: '3800 3rd ST SE',
    city: 'Puyallup',
    state: 'Washington',
    zip: '98374-1109',
    phone: '253-604-7422',
    fax: '253-302-8493',
    lat: 47.1892,
    lng: -122.2843,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound',
    openDate: '8/20/2009'
  },
  {
    id: 4,
    name: 'NWIH Tacoma',
    address: '5929 Westgate Blvd. STE A',
    city: 'Tacoma',
    state: 'Washington',
    zip: '98406-2567',
    phone: '253-503-0226',
    fax: '253-625-7912',
    lat: 47.2567,
    lng: -122.5127,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound',
    openDate: '11/7/2022'
  },
  {
    id: 5,
    name: 'PCA Location',
    address: '510 Tacoma Ave S',
    city: 'Tacoma',
    state: 'Washington',
    zip: '98402-5416',
    phone: '253-502-5490',
    fax: '253-328-9027',
    lat: 47.2529,
    lng: -122.4443,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound',
    openDate: '3/5/2025'
  },
  {
    id: 6,
    name: 'Parkland Location',
    address: '123 132nd St S',
    city: 'Parkland',
    state: 'Washington',
    zip: '98444-4807',
    phone: '253-317-4185',
    fax: '253-444-0545',
    lat: 47.1257,
    lng: -122.4338,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound',
    openDate: '3/5/2025'
  }
];

export const getClinicsByState = (state) => {
  return clinics.filter(clinic => clinic.state === state);
};

export const getClinicsByCity = (city) => {
  return clinics.filter(clinic => clinic.city === city);
};

export const getClinicsByRegion = (region) => {
  return clinics.filter(clinic => clinic.region === region);
};

export const getClinicById = (id) => {
  return clinics.find(clinic => clinic.id === Number(id));
};

export const getClinicsByZip = (zip, radius = 30) => {
  // Improved ZIP code search - more precise matching
  if (!zip || zip.length < 3) return [];
  
  const zipPrefix = zip.substring(0, 3);
  
  // First try exact match
  const exactMatches = clinics.filter(clinic => clinic.zip === zip);
  if (exactMatches.length > 0) {
    return exactMatches;
  }
  
  // Then try prefix match
  const prefixMatches = clinics.filter(clinic => clinic.zip.startsWith(zipPrefix));
  if (prefixMatches.length > 0) {
    return prefixMatches;
  }
  
  // Finally, if we have coordinates, we could find clinics within radius
  // This would be more accurate in a real implementation
  // For now, return closest ZIP codes based on numeric difference
  const zipNum = parseInt(zip, 10);
  if (!isNaN(zipNum)) {
    return clinics
      .map(clinic => ({
        clinic,
        distance: Math.abs(parseInt(clinic.zip, 10) - zipNum)
      }))
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3) // Return top 3 closest
      .map(item => item.clinic);
  }
  
  return [];
};

export const getAllClinics = () => {
  return clinics;
};

// Simple haversine distance calculation (in miles)
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 3958.8; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const distance = R * c;
  return distance;
};