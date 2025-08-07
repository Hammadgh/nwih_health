'use client';

import { FaPhone, FaCheckCircle } from 'react-icons/fa';
import { MdLocalHospital, MdEmail } from 'react-icons/md';

const GetStartedNow = () => {

  const insurances = [
    "Aetna", "Amerigroup", "Cigna", "Coordinated Care", "First Choice Health",
    "Molina Healthcare", "Optum", "Premera", "Regence", "Washington Apple Health"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Started <span className="text-[#16A53F]">Now</span>
          </h2>
          <div className="w-24 h-1 bg-[#16A53F] mx-auto mb-6"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Walk In. Call In. Start Today.
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            You don't need to wait to get better. We make it easy to start methadone or Suboxone treatment in a supportive, respectful environment.
          </p>
        </div> */}

        {/* Key Information
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
            <MdLocalHospital className="w-12 h-12 text-[#16A53F] mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Multiple Clinic Locations</h4>
            <p className="text-gray-300">in Western Washington</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
            <FaPhone className="w-12 h-12 text-[#16A53F] mx-auto mb-4 " />
            <h4 className="text-xl font-bold mb-2">Call NWIH Now</h4>
            <p className="text-gray-300">253-200-0300</p>
          </div>
          <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
            <FaCheckCircle className="w-12 h-12 text-[#16A53F] mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-2">Confidential Form</h4>
            <p className="text-gray-300">Get started with our secure form</p>
          </div>
        </div> */}



        {/* Insurance Information */}
        {/* <div className="bg-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-white/20 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              We accept the following insurances:
            </h3>
            <p className="text-gray-300">
              NWIH does not deny services based on inability. Discounts are available based on family size and income.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {insurances.map((insurance, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 text-center">
                <span className="text-sm font-semibold">{insurance}</span>
              </div>
            ))}
          </div>
        </div> */}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] rounded-2xl p-8 md:p-12 text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Start Your Recovery Journey?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier life. Our compassionate team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:253-200-0300" 
              className="bg-white text-[#0077C8] hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <FaPhone className="mr-2 rotate-90" />
              Call Now: 253-200-0300
            </a>
            <a 
              href="/contact" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0077C8] font-bold py-4 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              <MdEmail className="mr-2" />
              Get Started Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedNow; 