'use client';

import { FaHandshake, FaHospital, FaGavel, FaUsers, FaUserMd, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdPsychology, MdSupport, MdLocalHospital } from 'react-icons/md';

const CommunityReferrals = () => {
  const partners = [
    "Care navigators",
    "Local jails", 
    "Drug courts",
    "Local hospitals"
  ];

  const teamMembers = [
    {
      icon: <FaUserMd className="w-8 h-8" />,
      title: "Addiction medicine physicians & psychiatrists",
      description: "Expert medical professionals specializing in addiction treatment"
    },
    {
      icon: <MdPsychology className="w-8 h-8" />,
      title: "Licensed substance use counselors",
      description: "Certified counselors providing evidence-based therapy"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Peer recovery coaches",
      description: "Support from those who understand the recovery journey"
    },
    {
      icon: <MdSupport className="w-8 h-8" />,
      title: "Mental health therapists",
      description: "Professional therapists addressing mental health needs"
    }
  ];

  const locations = [
    "Tacoma",
    "Puyallup", 
    "Lakewood"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Community Referrals & <span className="text-[#0077C8]">Network Trust</span>
          </h2>
          <div className="w-24 h-1 bg-[#16A53F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Partners Trust NWIH
          </p>
        </div>

        {/* Partnership Statement */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 mb-6">
              <div className="text-[#0077C8] mt-1">
                <FaHandshake className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  We're the first choice for care navigators, jails, drug courts, and local hospitals
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Throughout <span className="font-semibold text-[#0077C8]">Tacoma, Puyallup, and Lakewood</span>, they rely on us to deliver safe, structured, and reliable care for individuals with opioid and fentanyl addiction.
                </p>
              </div>
            </div>

            {/* Partner Types */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {partners.map((partner, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                  <span className="text-sm font-semibold text-gray-700">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our team includes:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-[#0077C8] mt-1">
                    {member.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {member.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        {/* <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] rounded-2xl p-8 md:p-12 text-white text-center mb-16 shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Trusted by the Community
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Care navigators, local jails, and drug courts constantly refer SUD patients to our clinics. They believe that our providers can keep them clean and help them recover physically and mentally for successful integration into society.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location, index) => (
              <div key={index} className="bg-white/20 rounded-lg px-4 py-2">
                <span className="font-semibold">{location}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        {/* <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              📞 Refer a Patient or Walk In Today
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Our integrated approach combines medical expertise with compassionate care to provide the best possible outcomes for every patient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:253-200-0300" 
                className="bg-[#16A53F] hover:bg-[#138a34] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Call for Referrals
              </a>
              <a 
                href="/find-clinic" 
                className="bg-[#0077C8] hover:bg-[#005a9e] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              >
                <FaMapMarkerAlt className="mr-2" />
                Find Our Locations
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CommunityReferrals; 