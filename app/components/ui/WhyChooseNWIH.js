'use client';

import { FaShieldAlt, FaUsers, FaHeart, FaClipboardCheck, FaPhone, FaMapMarkerAlt, FaPills, FaBrain, FaClock, FaUserMd } from 'react-icons/fa';
import { MdHealthAndSafety, MdLocalPharmacy, MdPsychology } from 'react-icons/md';

const WhyChooseNWIH = () => {
  const highlights = [
    {
      icon: <FaPills className="w-8 h-8" />,
      title: "MAT Expertise",
      description: "Methadone, Suboxone, and naltrexone"
    },
    {
      icon: <MdPsychology className="w-8 h-8" />,
      title: "Integrated Mental Health Support",
      description: "Professional counseling and therapy"
    },
    {
      icon: <MdLocalPharmacy className="w-8 h-8" />,
      title: "On-Site Medication Pickup",
      description: "Convenient pharmacy services"
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Same-Day Starts Available",
      description: "No waiting, start treatment immediately"
    }
  ];

  const trustFactors = [
    {
      icon: <FaUserMd className="w-6 h-6" />,
      title: "Expert Care Teams",
      description: "Experienced medical professionals dedicated to your recovery"
    },
    {
      icon: <FaHeart className="w-6 h-6" />,
      title: "Whole-Person Approach",
      description: "We treat the complete individual, not just symptoms"
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Peer Support Network",
      description: "Connect with others who understand your journey"
    },
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Trusted by Community",
      description: "Proven track record of successful recovery outcomes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        Main Heading
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Patients <span className="text-[#0077C8]">Trust</span> NWIH
          </h2>
          <div className="w-24 h-1 bg-[#16A53F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Recovery isn't just medication. We treat the whole person—with therapy, peer support, and trusted care teams.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Side - Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Our <span className="text-[#0077C8]">Core</span> Services
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-[#0077C8] mt-1 flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Trust Factors */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Why <span className="text-[#16A53F]">Choose</span> Us
            </h3>
            <div className="space-y-6">
              {trustFactors.map((factor, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-[#16A53F]"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-[#16A53F] mt-1 flex-shrink-0">
                      {factor.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {factor.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recovery Statement
        <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] rounded-2xl p-8 md:p-12 text-white text-center mb-16 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Recovery isn't just medication — we treat the whole person.
          </h3>
          <p className="text-lg opacity-90">
            Our comprehensive approach addresses the root causes and provides ongoing support for lasting recovery.
          </p>
        </div> */}

        {/* Call to Action */}
        {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              📞 Ready to Start Your Recovery Journey?
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