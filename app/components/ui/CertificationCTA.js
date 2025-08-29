'use client';

const CertificationCTA = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Professional Background Design */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0077C8]/5 via-[#16A53F]/3 to-[#0077C8]/5"></div>
      
     
      
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            NWIH is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077C8] to-[#16A53F]">State-Licensed & Federally Certified</span> Addiction Treatment Center
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Our certifications and licenses ensure the highest standards of care and compliance with federal and state regulations
          </p>
        </div>

        {/* Certification Logos */}
        <div className="grid grid-cols-3 gap-3 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
          
                     {/* Washington State Department of Health Logo */}
           <div className="text-center group">
             <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200/50 h-28 md:h-32 flex flex-col justify-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center flex-1">
                <img 
                  src="/images/certifications/wasgington_state_health.png" 
                  alt="Washington State Department of Health" 
                  className="h-16 md:h-32 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3 font-medium">Washington State Health</p>
          </div>

                     {/* SAMHSA Logo - Middle Position */}
           <div className="text-center group">
             <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200/50 h-28 md:h-32 flex flex-col justify-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center flex-1">
                <img 
                  src="/images/certifications/samsha.png" 
                  alt="SAMHSA - Substance Abuse and Mental Health Services Administration" 
                  className="h-16 md:h-32 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3 font-medium">SAMHSA Certified</p>
          </div>

                     {/* DEA Logo */}
           <div className="text-center group">
             <div className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl border border-gray-200/50 h-28 md:h-32 flex flex-col justify-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center flex-1">
                <img 
                  src="/images/certifications/dea.png" 
                  alt="DEA - Drug Enforcement Administration" 
                  className="h-16 md:h-32 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3 font-medium">DEA Licensed</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CertificationCTA;
