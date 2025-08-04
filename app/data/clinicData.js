export const washingtonRegions = [
  'Puget Sound',
  'Olympic Peninsula',
  'Southwest Washington',
  'Central Washington',
  'Eastern Washington',
  'Northwest Washington'
];

export const washingtonCities = [
  'Tacoma',
  'Lakewood',
  'Puyallup',
  'Parkland',
  'Port Orchard',
  'Bremerton', 
  'Tumwater',
  'Seattle',
  'Bellevue',
  'Olympia',
  'Spokane',
  'Vancouver'
];

// Map cities to regions
export const cityToRegionMap = {
  'Tacoma': 'Puget Sound',
  'Lakewood': 'Puget Sound',
  'Puyallup': 'Puget Sound',
  'Parkland': 'Puget Sound',
  'Port Orchard': 'Olympic Peninsula',
  'Bremerton': 'Olympic Peninsula',
  'Tumwater': 'Southwest Washington',
  'Seattle': 'Puget Sound',
  'Bellevue': 'Puget Sound',
  'Olympia': 'Southwest Washington',
  'Spokane': 'Eastern Washington',
  'Vancouver': 'Southwest Washington'
};

// For backward compatibility
export const states = [
  'Washington'
];

export const clinics = [
  {
    id: 1,
    name: 'Lakewood',
    address: '9720 S Tacoma Way',
    city: 'Lakewood',
    state: 'Washington',
    zip: '98499',
    phone: '253-503-3666',
    lat: 47.1549,
    lng: -122.4746,
    services: ['MAT', 'Methadone', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound'
  },
  {
    id: 2,
    name: 'Tacoma - South',
    address: '3727 South Tacoma Way',
    city: 'Tacoma',
    state: 'Washington',
    zip: '98409',
    phone: '253-300-7474',
    lat: 47.2195,
    lng: -122.4842,
    services: ['MAT', 'Methadone', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound'
  },
  {
    id: 3,
    name: 'Puyallup',
    address: '3800 3rd St. SE',
    city: 'Puyallup',
    state: 'Washington',
    zip: '98374',
    phone: '253-904-7867',
    lat: 47.1892,
    lng: -122.2843,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound'
  },
  {
    id: 4,
    name: 'Tacoma - Westgate',
    address: '5929 Westgate Blvd',
    city: 'Tacoma',
    state: 'Washington',
    zip: '98406',
    phone: '253-503-0226',
    lat: 47.2567,
    lng: -122.5127,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound'
  },
  {
    id: 5,
    name: 'Tacoma - PCA',
    address: '510 Tacoma Ave S',
    city: 'Tacoma',
    state: 'Washington',
    zip: '98402',
    phone: '253-200-0300',
    lat: 47.2529,
    lng: -122.4443,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound'
  },
  {
    id: 6,
    name: 'Tacoma - Portland Ave',
    address: '1415 E 72nd St, Suite B',
    city: 'Tacoma',
    state: 'Washington',
    zip: '98404',
    phone: '253-200-0300',
    lat: 47.1932,
    lng: -122.4082,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound'
  },
  {
    id: 7,
    name: 'Parkland',
    address: '123 132nd St S',
    city: 'Parkland',
    state: 'Washington',
    zip: '98444',
    phone: '253-200-0300',
    lat: 47.1257,
    lng: -122.4338,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Puget Sound'
  },
  {
    id: 8,
    name: 'Port Orchard',
    address: '2475 Bethel Rd SE',
    city: 'Port Orchard',
    state: 'Washington',
    zip: '98366',
    phone: '253-200-0300',
    lat: 47.5226,
    lng: -122.6131,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Olympic Peninsula'
  },
  {
    id: 9,
    name: 'Tumwater',
    address: '6977 Littlerock Rd SW',
    city: 'Tumwater',
    state: 'Washington',
    zip: '98512',
    phone: '253-200-0300',
    lat: 46.9971,
    lng: -122.9118,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Southwest Washington'
  },
  {
    id: 10,
    name: 'Bremerton',
    address: '3309 Perry Ave NE',
    city: 'Bremerton',
    state: 'Washington',
    zip: '98310',
    phone: '253-200-0300',
    lat: 47.6093,
    lng: -122.6269,
    services: ['MAT', 'Buprenorphine', 'Naltrexone'],
    region: 'Olympic Peninsula'
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