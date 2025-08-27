'use client';

import { FaBrain, FaComments, FaUserMd, FaPills, FaMapMarkerAlt, FaUsers, FaClock, FaShieldAlt, FaHeart, FaCheckCircle } from 'react-icons/fa';
import { MdLocalPharmacy, MdHealthAndSafety, MdAccessibility, MdStar } from 'react-icons/md';

const WhyChooseNWIH = () => {
  const services = [
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Same-Day Recovery Start",
      description: "Walk-in MAT treatment with immediate access to addiction medicine specialists. No waiting, start your recovery journey asap."
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Proven MAT Treatment",
      description: "Evidence-based medication-assisted treatment for opioid addiction recovery. Clinically proven to reduce cravings and prevent relapse."
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Compassionate Addiction Care",
      description: "Non-judgmental treatment from experienced recovery professionals who understand the challenges of addiction and recovery."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Complete Recovery Services",
      description: "Medical treatment, counseling, and support all in one location. Comprehensive care designed for lasting recovery success."
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Washington MAT Clinics",
      description: "Multiple addiction treatment centers across Washington with on-site pharmacies for convenient, accessible care."
    },
    {
      icon: <MdStar className="w-6 h-6" />,
      title: "Trusted Recovery Results",
      description: "Thousands of patients successfully treated for opioid addiction with proven long-term recovery outcomes and ongoing support."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Medication‑Assisted Treatment in <span className="text-[#0077C8]">Washington</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
            Same‑day starts, evidence‑based addiction care, and whole‑person support designed for lasting recovery. 
            Expert MAT for opioid and fentanyl use—delivered with compassion and clinical excellence.
          </p>
        </div>

        {/* Services Grid - Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-6 lg:p-7 xl:p-8 2xl:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:border-[#0077C8]/20 overflow-hidden relative"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077C8] to-[#16A53F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 md:w-16 lg:w-18 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-2xl md:rounded-xl text-white mb-5 md:mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-4 md:mb-3 leading-tight">
                  {service.title}
                </h3>
              </div>
              <p className="text-lg md:text-base lg:text-lg text-gray-600 leading-relaxed text-center px-2">
                {service.description}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#16A53F] to-[#0077C8] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNWIH; 