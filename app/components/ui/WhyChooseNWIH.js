'use client';

import { FaShieldAlt, FaUsers, FaHeart, FaClipboardCheck, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdHealthAndSafety, MdLocalPharmacy, MdPsychology } from 'react-icons/md';

const WhyChooseNWIH = () => {
  const features = [
    {
      icon: <MdHealthAndSafety className="w-8 h-8" />,
      title: "Licensed Mental Health Counseling",
      description: "Professional counseling to support your mental health journey"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Chemical Dependency Support",
      description: "Specialized support for substance use disorders"
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Peer Recovery Coaching",
      description: "Support from those who understand your journey"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Hepatitis C Care",
      description: "Comprehensive care for hepatitis C treatment"
    },
    {
      icon: <MdLocalPharmacy className="w-8 h-8" />,
      title: "In-House Pharmacy",
      description: "Convenient medication pickup on-site"
    }
  ];

  const benefits = [
    {
      icon: <FaClipboardCheck className="w-6 h-6" />,
      title: "Whole-person, evidence-based care",
      description: "Comprehensive treatment plans tailored to your needs"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Community trust & reach",
      description: "A recovery network that works with proven results"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Expertise of your care team",
      description: "Trusted by the community with experienced professionals"
    },
    {
      icon: <FaClipboardCheck className="w-6 h-6" />,
      title: "Clear 3-step process",
      description: "From first call to ongoing care - we guide you every step"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-[#0077C8]">NWIH</span>
          </h2>
          <div className="w-24 h-1 bg-[#16A53F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted, Integrated Opioid Treatment
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto mt-4 leading-relaxed">
            We specialize in Medication-Assisted Treatment (MAT) using methadone, buprenorphine (Suboxone), and naltrexone to stabilize opioid and fentanyl use. Every treatment plan includes access to:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-[#0077C8] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Recovery Statement */}
        <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] rounded-2xl p-8 md:p-12 text-white text-center mb-16 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            We don't just manage symptoms — we support your full recovery.
          </h3>
          <p className="text-lg opacity-90">
            Our comprehensive approach addresses the root causes and provides ongoing support for lasting recovery.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-[#0077C8]"
            >
              <div className="flex items-start space-x-4">
                <div className="text-[#0077C8] mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              📞 Confidential Help Is One Call Away
            </h3>
            <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] rounded-xl p-6 mb-6">
              <a 
                href="tel:253-200-0300" 
                className="text-3xl md:text-4xl font-bold text-white hover:text-gray-100 transition-colors duration-200 inline-flex items-center"
              >
                <FaPhone className="mr-3" />
                253-200-0300
              </a>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Take the first step towards recovery. Our compassionate team is here to help 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:253-200-0300" 
                className="bg-[#16A53F] hover:bg-[#138a34] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Call Now
              </a>
              <a 
                href="/find-clinic" 
                className="bg-[#0077C8] hover:bg-[#005a9e] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <FaMapMarkerAlt className="mr-2" />
                Find a Clinic
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhyChooseNWIH; 