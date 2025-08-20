'use client';

import { FaBrain, FaComments, FaUserMd, FaPills, FaMapMarkerAlt, FaUsers, FaClock, FaShieldAlt, FaHeart, FaCheckCircle } from 'react-icons/fa';
import { MdLocalPharmacy, MdHealthAndSafety, MdAccessibility, MdStar } from 'react-icons/md';

const WhyChooseNWIH = () => {
  const services = [
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Immediate Access",
      description: "Same-day appointments and walk-in availability when possible."
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Evidence-Based Treatment",
      description: "Proven MAT protocols with comprehensive support services."
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Integrated Care",
      description: "Medical, counseling, and support services all in one place."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Compassionate Care",
      description: "Understanding staff who have walked the recovery path."
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Convenient Locations",
      description: "Four clinics across Washington with in-house pharmacy."
    },
    {
      icon: <MdStar className="w-6 h-6" />,
      title: "Proven Results",
      description: "Thousands of patients have achieved lasting recovery."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Choose <span className="text-[#0077C8]">NWIH</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We specialize in Medication-Assisted Treatment (MAT) using proven protocols to stabilize opioid and fentanyl use. 
            Every treatment plan includes comprehensive support for lasting recovery.
          </p>
        </div>

        {/* Services Grid - Compact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[#0077C8]/20"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl text-white mb-3 group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNWIH; 