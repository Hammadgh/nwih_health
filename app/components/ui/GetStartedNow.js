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