'use client';

import { FaPhone, FaUserMd, FaPills, FaHandshake, FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { MdLocalHospital, MdPsychology, MdSupport } from 'react-icons/md';

const WhatToExpect = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Intake & Assessment",
      description: "Call or walk in. We offer same-day appointments when available. You'll meet with a provider in person or via telehealth.",
      icon: <FaUserMd className="w-8 h-8" />,
      details: [
        "Same-day appointments available",
        "In-person or telehealth options",
        "Comprehensive initial assessment"
      ]
    },
    {
      step: "Step 2", 
      title: "Stabilization Begins",
      description: "After a medical exam and drug screen, we begin methadone or Suboxone treatment based on your needs. Medication is picked up daily at our in-house pharmacy.",
      icon: <FaPills className="w-8 h-8" />,
      details: [
        "Medical exam and drug screen",
        "Methadone or Suboxone treatment",
        "Daily medication pickup at in-house pharmacy"
      ]
    },
    {
      step: "Step 3",
      title: "Ongoing Support", 
      description: "We create a tailored plan using your ASAM evaluation, connecting you to therapy, counseling, and recovery coaching.",
      icon: <MdSupport className="w-8 h-8" />,
      details: [
        "ASAM evaluation-based planning",
        "Therapy and counseling services",
        "Recovery coaching support"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What to Expect — <span className="text-[#0077C8]">The NWIH Process</span>
          </h2>
          <div className="w-24 h-1 bg-[#16A53F] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're with you through every step of the journey — from stabilization to long-term recovery.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-12">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Step Number and Icon */}
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-r from-[#0077C8] to-[#16A53F] rounded-full w-20 h-20 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="text-[#0077C8] mr-4">
                      {step.icon}
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-[#16A53F] uppercase tracking-wide">
                        {step.step}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <FaCheckCircle className="text-[#16A53F] w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="bg-[#0077C8] rounded-full w-12 h-12 flex items-center justify-center text-white shadow-lg">
                    <FaArrowRight className="w-5 h-5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default WhatToExpect; 