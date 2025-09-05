'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FaPills, FaShieldAlt, FaPhone, FaMapMarkerAlt, FaFileAlt, FaDownload, FaExclamationTriangle, FaInfoCircle, FaClock } from 'react-icons/fa';

export default function MATPage() {
  const medications = [
    {
      name: "Methadone/Dolophine/Methadose",
      type: "Opioid Agonist",
      description: "This is an opioid agonist and should never be injected. Methadone pills and tablets contain talc. If injected, talc may cause blood clots throughout the body.",
      warning: "You will only receive methadone if you are seeing both a mental healthcare provider and a chemical dependency counselor.",
      administration: "Administered orally as a liquid. NWIH co-prescribes naloxone with every methadone prescription.",
      availableAt: ["Tacoma South", "Lakewood South"],
      icon: <FaPills className="w-6 h-6 sm:w-8 sm:h-8" />
    },
    {
      name: "Naltrexone/Vivitrol/ReVia",
      type: "Opioid Receptor Antagonist",
      description: "This is not an opioid. It is an opioid receptor antagonist that binds to opioid receptors without activating them, making it difficult for other chemicals to bind.",
      effects: "Decreases euphoria from opioids or alcohol and reduces cravings while naltrexone is in the body.",
      administration: "Available as oral tablet or intramuscular depot injection for long-term treatment.",
      note: "Naltrexone is not naloxone. Available at every NWIH clinic.",
      icon: <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />
    },
    {
      name: "Buprenorphine/Suboxone/Subutex/Sublocade",
      type: "Long-lasting Opioid",
      description: "This is a long-lasting, relatively non-euphoric opioid that reduces the intensity of any opioids taken on top of buprenorphine.",
      administration: "Administered by injection under the skin for slow absorption and long-term treatment.",
      note: "Available at every clinic. NWIH co-prescribes naloxone with every buprenorphine prescription.",
      icon: <FaPills className="w-6 h-6 sm:w-8 sm:h-8" />
    },
    {
      name: "Naloxone",
      type: "Opioid Receptor Antagonist",
      description: "This is not an opioid. Naloxone is an opioid receptor antagonist that prevents other chemicals from binding and removes opioids from the body.",
      use: "Injected during an opioid overdose.",
      note: "Available at every NWIH clinic. Co-prescribed with every methadone and buprenorphine prescription.",
      icon: <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />
    }
  ];

  const clinics = [
    {
      name: "Tacoma South",
      address: "3727 South Tacoma Way",
      city: "Tacoma, WA 98409",
      phone: "253-300-7474",
      services: ["Methadone", "Buprenorphine", "Naltrexone"]
    },
    {
      name: "Lakewood South",
      address: "9720 South Tacoma Way",
      city: "Lakewood, WA 98499",
      phone: "253-503-3666",
      services: ["Methadone", "Buprenorphine", "Naltrexone"]
    }
  ];

  const forms = [
    {
      name: "Medical History Form",
      description: "Complete your medical background information",
      icon: <FaFileAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "https://j8i.2a8.mwp.accessdomain.com/wp-content/uploads/2022/05/nwih_patnt_form_medHistory.pdf"
    },
    {
      name: "Patient Admission Form",
      description: "Begin your treatment journey with us",
      icon: <FaFileAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "https://j8i.2a8.mwp.accessdomain.com/wp-content/uploads/2022/05/nwih_patnt_form_admission.pdf"
    },
    {
      name: "Courtesy Dosing Form",
      description: "Request medication dosing at other locations while away from your treatment clinic",
      icon: <FaFileAlt className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "https://j8i.2a8.mwp.accessdomain.com/wp-content/uploads/2022/05/nwih_patnt_form_guestDosing.pdf"
    }
  ];

  const resources = [
    {
      name: "Suboxone Copay Assistance",
      description: "Eligible patients may pay as little as $5 per month with insurance",
      link: "https://www.suboxone.com/"
    },
    {
      name: "Vivitrol Copay Assistance",
      description: "Eligible patients may pay as little as $0 per prescription",
      link: "https://www.vivitrol.com/"
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
                Medication Assisted Treatment (MAT)
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
                Evidence-based treatment for substance use disorders with comprehensive medication support and monitoring.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  Trying to withdraw from a substance abruptly, without tapering or using safer replacement substances, may lead to relapse. The pain and stress of abrupt withdrawal may be overwhelming. NWIH offers Medication-Assisted Treatment (MAT) as a solution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MAT Overview */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our <span className="text-[#0077C8]">MAT Program</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-2">
                Our Opioid Treatment Program (OTP) clinicians prescribe and administer medications to patients enrolled in the MAT program while closely monitoring their improvements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {medications.map((med, index) => (
                <div key={index} className="bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                      {med.icon}
                    </div>
                                         <div className="min-w-0 flex-1">
                       <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 break-words leading-tight">{med.name}</h3>
                       <p className="text-white/80 font-medium text-sm sm:text-base">{med.type}</p>
                     </div>
                  </div>
                  
                  <p className="text-white/90 mb-4 leading-relaxed text-sm sm:text-base">{med.description}</p>
                  
                  {med.warning && (
                    <div className="bg-white/20 border border-white/30 rounded-lg p-3 sm:p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <FaExclamationTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-white mr-2" />
                        <span className="font-semibold text-white text-sm sm:text-base">Important</span>
                      </div>
                      <p className="text-white text-xs sm:text-sm">{med.warning}</p>
                    </div>
                  )}
                  
                  {med.effects && (
                    <p className="text-white/90 mb-4 leading-relaxed text-sm sm:text-base">{med.effects}</p>
                  )}
                  
                  {med.administration && (
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <FaInfoCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 mr-2" />
                        <span className="font-semibold text-sm sm:text-base">Administration</span>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm">{med.administration}</p>
                    </div>
                  )}
                  
                  {med.availableAt && (
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4 mb-4">
                      <div className="flex items-center mb-2">
                        <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 mr-2" />
                        <span className="font-semibold text-sm sm:text-base">Available at</span>
                      </div>
                      <div className="space-y-1">
                        {med.availableAt.map((clinic, idx) => (
                          <p key={idx} className="text-white/90 text-xs sm:text-sm">{clinic}</p>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {med.note && (
                    <div className="bg-white/10 rounded-lg p-3 sm:p-4">
                      <div className="flex items-center mb-2">
                        <FaInfoCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 mr-2" />
                        <span className="font-semibold text-sm sm:text-base">Note</span>
                      </div>
                      <p className="text-white/90 text-xs sm:text-sm">{med.note}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAT Clinics */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                MAT <span className="text-[#0077C8]">Clinics</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                The following clinics offer Methadone, Buprenorphine and Naltrexone products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {clinics.map((clinic, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                      <FaMapMarkerAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{clinic.name}</h3>
                      <p className="text-[#0077C8] font-medium text-sm sm:text-base">MAT Treatment Center</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-center text-gray-600">
                      <FaMapMarkerAlt className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-[#16A53F] flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{clinic.address}</p>
                        <p className="text-sm sm:text-base">{clinic.city}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-[#16A53F] flex-shrink-0" />
                      <a href={`tel:${clinic.phone}`} className="text-[#0077C8] hover:text-[#16A53F] transition-colors duration-300 text-sm sm:text-base">
                        {clinic.phone}
                      </a>
                    </div>
                    
                    {clinic.openDate && (
                      <div className="flex items-center text-gray-600">
                        <FaClock className="w-4 h-4 sm:w-5 sm:h-5 mr-3 text-[#16A53F] flex-shrink-0" />
                        <p className="text-sm sm:text-base">Established: {clinic.openDate}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-t border-gray-100 pt-3 sm:pt-4">
                    <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Available Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {clinic.services.map((service, idx) => (
                        <span key={idx} className="bg-[#16A53F]/10 text-[#16A53F] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Forms */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Patient <span className="text-[#0077C8]">Forms</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Click on the forms and print them directly from your internet browser window. Fill the forms completely with all your information and bring them to the clinic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {forms.map((form, index) => (
                <div key={index} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
                      {form.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{form.name}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{form.description}</p>
                  </div>
                  
                                     <a 
                     href={form.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white py-3 px-4 sm:px-6 rounded-lg font-semibold hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                   >
                     <FaDownload className="mr-2 w-4 h-4" />
                     Download Form
                   </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Helpful Resources */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Helpful <span className="text-[#0077C8]">Resources</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Access financial assistance programs and additional support to make your treatment more accessible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                      <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{resource.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">{resource.description}</p>
                    </div>
                  </div>
                  
                                     <a 
                     href={resource.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center text-[#0077C8] hover:text-[#16A53F] font-semibold transition-colors duration-300 text-sm sm:text-base"
                   >
                     Learn More →
                   </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-[#0077C8] to-[#16A53F]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Start MAT Treatment?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              Our compassionate team is here to support you every step of the way. Contact us today to learn more about our MAT program and begin your path to recovery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:253-200-0300" 
                className="bg-white text-[#0077C8] px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center"
              >
                <FaPhone className="mr-2 w-4 h-4" />
                Call 253-200-0300
              </a>
              <Link 
                href="/find-clinic" 
                className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-white hover:text-[#0077C8] transition-all duration-300 inline-flex items-center justify-center"
              >
                <FaMapMarkerAlt className="mr-2 w-4 h-4" />
                Find Your Clinic
              </Link>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </>
  );
}
