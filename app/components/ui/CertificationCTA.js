'use client';

const CertificationCTA = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            We are a <span className="text-[#0077C8]">certified and licensed</span> treatment center
          </h2>
        </div>

        {/* Certification Logos */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          
          {/* Washington State Department of Health Logo */}
          <div className="text-center">
            <div className="bg-white p-3 md:p-6 rounded-lg md:rounded-xl shadow-lg border border-gray-200 h-32 md:h-40 flex flex-col justify-center">
              <div className="flex items-center justify-center flex-1">
                <img 
                  src="/images/certifications/wasgington_state_health.png" 
                  alt="Washington State Department of Health" 
                  className="h-16 md:h-32 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* SAMHSA Logo - Middle Position */}
          <div className="text-center">
            <div className="bg-white p-3 md:p-6 rounded-lg md:rounded-xl shadow-lg border border-gray-200 h-32 md:h-40 flex flex-col justify-center">
              <div className="flex items-center justify-center flex-1">
                <img 
                  src="/images/certifications/samsha.png" 
                  alt="SAMHSA - Substance Abuse and Mental Health Services Administration" 
                  className="h-16 md:h-32 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* DEA Logo */}
          <div className="text-center">
            <div className="bg-white p-3 md:p-6 rounded-lg md:rounded-xl shadow-lg border border-gray-200 h-32 md:h-40 flex flex-col justify-center">
              <div className="flex items-center justify-center flex-1">
                <img 
                  src="/images/certifications/dea.png" 
                  alt="DEA - Drug Enforcement Administration" 
                  className="h-16 md:h-32 w-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationCTA;
