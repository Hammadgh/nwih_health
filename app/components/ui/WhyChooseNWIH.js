'use client';

import { FaBrain, FaComments, FaUserMd, FaPills, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';
import { MdLocalPharmacy, MdHealthAndSafety } from 'react-icons/md';

const WhyChooseNWIH = () => {
  const services = [
    {
      icon: <FaBrain className="w-6 h-6" />,
      title: "Licensed mental health counseling",
      description: "Professional therapy and mental health support integrated into your treatment plan."
    },
    {
      icon: <FaComments className="w-6 h-6" />,
      title: "Chemical dependency support",
      description: "Specialized counseling and support groups for substance use recovery."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Peer recovery coaching",
      description: "Connect with experienced peers who understand your recovery journey."
    },
    {
      icon: <MdHealthAndSafety className="w-6 h-6" />,
      title: "Hepatitis C care",
      description: "Comprehensive care and treatment for hepatitis C and related health concerns."
    },
    {
      icon: <MdLocalPharmacy className="w-6 h-6" />,
      title: "In-house pharmacy for medication pickup",
      description: "Convenient on-site pharmacy services for all your medication needs."
    },
    {
      icon: <FaUserMd className="w-6 h-6" />,
      title: "Same-day addiction treatment starts",
      description: "Immediate access to opioid treatment programs with no waiting lists for urgent care needs."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Why Choose <span className="text-[#0077C8]">NWIH</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We specialize in Medication-Assisted Treatment (MAT) using methadone, buprenorphine (Suboxone), and naltrexone to stabilize opioid and fentanyl use. Every treatment plan includes access to:
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#0077C8] rounded-lg text-white mb-3">
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

        {/* Recovery Statement */}
        <div className="text-center">
          <div className="bg-white rounded-lg p-8 md:p-10 shadow-sm border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              We don't just manage symptoms — we support your full recovery.
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our comprehensive approach addresses the root causes of addiction and provides ongoing support for lasting recovery and wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseNWIH; 