'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { FaUserMd, FaPills, FaHeart, FaUsers, FaBrain, FaHandshake, FaPhone, FaFileAlt, FaMapMarkerAlt, FaShieldAlt } from 'react-icons/fa';

export default function PatientSupport() {
  const services = [
    {
      title: "Medication Assisted Treatment",
      description: "Comprehensive MAT programs including methadone, buprenorphine, naltrexone, and naloxone for treating substance use disorders.",
      icon: <FaPills className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "/patient-support/mat",
      features: ["Methadone Treatment", "Buprenorphine/Suboxone", "Naltrexone/Vivitrol", "Naloxone Access"]
    },
    {
      title: "Hepatitis C Treatment",
      description: "Specialized testing and treatment for Hepatitis C, with a focus on patients with injection drug use history.",
      icon: <FaHeart className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "/patient-support/hepatitis-c",
      features: ["Testing & Diagnosis", "Treatment Programs", "Needle Exchange Support", "Recovery Integration"]
    },
    {
      title: "Chemical Dependency Counseling",
      description: "Professional counseling to help examine addiction causes and develop personalized recovery strategies.",
      icon: <FaBrain className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "/patient-support/chemical-dependency",
      features: ["Individual Therapy", "Group Sessions", "Recovery Planning", "Relapse Prevention"]
    },
    {
      title: "Mental Health Counseling",
      description: "Certified clinical psychologists and experienced social workers providing comprehensive mental health support.",
      icon: <FaUserMd className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "/patient-support/mental-health",
      features: ["Clinical Psychology", "Social Work Support", "Dual Diagnosis", "Trauma-Informed Care"]
    },
    {
      title: "Peer Counseling",
      description: "Support from peers with similar recovery experiences, creating essential community connections.",
      icon: <FaUsers className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "/patient-support/peer-counseling",
      features: ["Peer Support Groups", "Shared Experience", "Community Building", "Recovery Mentorship"]
    },
    {
      title: "Recovery Coaching",
      description: "Personalized coaching to acquire essential skills and tools for lasting recovery and life transformation.",
      icon: <FaHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
      link: "/patient-support/recovery-coaching",
      features: ["Life Skills Training", "Goal Setting", "Accountability", "Long-term Support"]
    }
  ];

  const resources = [
    {
      title: "Patient Forms",
      icon: <FaFileAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      items: [
        { name: "Medical History Form", link: "https://j8i.2a8.mwp.accessdomain.com/wp-content/uploads/2022/05/nwih_patnt_form_medHistory.pdf", external: true },
        { name: "Patient Admission Form", link: "https://j8i.2a8.mwp.accessdomain.com/wp-content/uploads/2022/05/nwih_patnt_form_admission.pdf", external: true },
        { name: "Courtesy Dosing Form", link: "https://j8i.2a8.mwp.accessdomain.com/wp-content/uploads/2022/05/nwih_patnt_form_guestDosing.pdf", external: true }
      ]
    },
    {
      title: "Support Resources",
      icon: <FaShieldAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      items: [
        { name: "Suboxone Copay Assistance", link: "https://www.suboxone.com/", external: true },
        { name: "Vivitrol Copay Assistance", link: "https://www.vivitrol.com/", external: true },
        { name: "Washington Recovery Hotline", link: "tel:1-866-789-1511", external: false }
      ]
    },
    {
      title: "Community Support",
      icon: <FaUsers className="w-5 h-5 sm:w-6 sm:h-6" />,
      items: [
        { name: "NA Meetings in Pierce County", link: "#", external: false },
        { name: "AA Meetings in Pierce County", link: "#", external: false },
        { name: "Recovery Community Events", link: "#", external: false }
      ]
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0077C8] to-[#16A53F] py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Patient Support & Resources
            </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
                Comprehensive addiction treatment services designed to support your recovery journey with evidence-based care and compassionate support.
              </p>
             
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-[#0077C8]">Treatment Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                We offer a full spectrum of evidence-based treatment options tailored to your individual needs and recovery goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <Link 
                  key={index} 
                  href={service.link}
                  className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 hover:border-[#0077C8]/20"
                >
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-[#0077C8] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
                        <div className="w-2 h-2 bg-[#16A53F] rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
            </div>

                  <div className="mt-4 sm:mt-6 text-[#0077C8] font-semibold group-hover:text-[#16A53F] transition-colors duration-300 text-sm sm:text-base">
                    Learn More →
                  </div>
                </Link>
              ))}
            </div>
            </div>
          </section>

        {/* Resources Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Patient <span className="text-[#0077C8]">Resources</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Access essential forms, support programs, and community resources to support your recovery journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl flex items-center justify-center text-white mr-3 sm:mr-4">
                      {resource.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{resource.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {resource.items.map((item, idx) => (
                      <div key={idx}>
                        {item.link.startsWith('tel:') ? (
                          <a 
                            href={item.link}
                            className="text-[#0077C8] hover:text-[#16A53F] transition-colors duration-300 block text-sm sm:text-base"
                          >
                            {item.name}
                          </a>
                        ) : item.external ? (
                          <a 
                            href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                            className="text-[#0077C8] hover:text-[#16A53F] transition-colors duration-300 block text-sm sm:text-base"
                          >
                            {item.name} ↗
                          </a>
                        ) : (
                          <a 
                            href={item.link}
                            className="text-[#0077C8] hover:text-[#16A53F] transition-colors duration-300 block text-sm sm:text-base"
                          >
                            {item.name}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </section>

          
      </main>
      <Footer />
    </>
  );
}
