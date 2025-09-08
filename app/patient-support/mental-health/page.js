'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { FaBrain, FaUserMd, FaUsers, FaMapMarkerAlt, FaPhone, FaShieldAlt, FaInfoCircle, FaCheckCircle, FaHeart } from 'react-icons/fa';

export default function MentalHealthCounselingPage() {
  const resources = [
    { name: 'Washington Recovery Hotline', link: 'tel:1-866-789-1511', external: false },
    { name: 'SAMHSA National Helpline', link: 'https://www.samhsa.gov/find-help/national-helpline', external: true },
    { name: 'National Institute of Mental Health', link: 'https://www.nimh.nih.gov/', external: true },
    { name: 'Mental Health America', link: 'https://www.mhanational.org/', external: true }
  ];

  const forms = [
    {
      name: "Medical History Form",
      description: "Complete your medical background information",
      link: "https://j8i.2a8.mwp.accessdomain.com/wp-content/uploads/2022/05/nwih_patnt_form_medHistory.pdf"
    },
    {
      name: "Patient Admission Form", 
      description: "Begin your treatment journey with us",
      link: "https://j8i.2a8.mwp.accessdomain.com/wp-content/uploads/2022/05/nwih_patnt_form_admission.pdf"
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[#0077C8] to-[#16A53F] py-12 sm:py-16 md:py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* subtle decorative accents */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-20 blur-3xl bg-[#16A53F]"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-3xl bg-[#0077C8]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Mental Health Counseling
              </h1>
              {/* professional divider line under heading */}
              <div className="mx-auto mb-6 sm:mb-8 h-1.5 w-40 sm:w-48 rounded-full bg-gradient-to-r from-white/90 via-white to-white/90"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-2">
                Licensed professionals helping you discuss all aspects of your mental health freely with compassion and expertise.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto">
                <p className="text-white text-base sm:text-lg leading-relaxed">
                  Our certified clinical psychologists and experienced social workers use psychotherapy to understand behaviors, emotions, and thoughts while teaching healthy coping mechanisms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Understanding Mental Health & Recovery
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-2">
                According to the National Institute of Mental Health, nearly 1 in 5 adults suffer from mental health conditions in the U.S., but only half receive treatment. Individuals with mental illness are twice as likely to have substance use problems.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white shadow-xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                    <FaBrain className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2 leading-tight">Individual Therapy</h3>
                    <p className="text-white/80 font-medium text-sm sm:text-base">One-on-one confidential sessions</p>
                  </div>
                </div>
                <ul className="grid gap-2 text-white/95 list-disc pl-5 text-sm sm:text-base">
                  <li>Explore thoughts, emotions, and behaviors</li>
                  <li>Identify stressors and triggers</li>
                  <li>Develop healthy coping strategies</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                    <FaUserMd className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Professional Expertise</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Licensed clinical psychologists</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base mb-3">
                  Our certified clinical psychologists and experienced social workers use evidence-based psychotherapy with compassion to help you feel heard and motivated.
                </p>
                <div className="bg-blue-50 border border-blue-200 text-blue-900 rounded-lg p-4 text-sm">
                  Mental health counseling and MAT can successfully treat cognitive, behavioral, and emotional aspects of mental health and substance use conditions.
                </div>
              </div>

              <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                    <FaHeart className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">Safe Environment</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Compassionate, judgment-free care</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  At first, counseling may feel awkward if you haven't discussed your struggles before. Our goal is to make you feel comfortable and supported throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Forms */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Patient <span className="text-[#0077C8]">Forms</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Click on the forms and print them directly from your internet browser window. Fill the forms completely with all your information and bring them to the clinic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              {forms.map((form, index) => (
                <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0077C8] to-[#16A53F] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mx-auto mb-3 sm:mb-4">
                      <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />
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
                    <FaInfoCircle className="mr-2 w-4 h-4" />
                    Download Form
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Helpful Resources */}
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Helpful <span className="text-[#0077C8]">Resources</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2">
                Access trusted mental health resources and support services to strengthen your recovery journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {resources.map((r, idx) => (
                <div key={idx} className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#16A53F] to-[#0077C8] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mr-3 sm:mr-4">
                      <FaShieldAlt className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{r.name}</h3>
                      <p className="text-gray-600 text-sm sm:text-base">Verified resource</p>
                    </div>
                  </div>
                  {r.external ? (
                    <a
                      href={r.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#0077C8] hover:text-[#16A53F] font-semibold transition-colors duration-300 text-sm sm:text-base"
                    >
                      Visit →
                    </a>
                  ) : (
                    <a
                      href={r.link}
                      className="inline-flex items-center text-[#0077C8] hover:text-[#16A53F] font-semibold transition-colors duration-300 text-sm sm:text-base"
                    >
                      Call Now →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/find-clinic"
                className="w-full bg-gradient-to-r from-[#0077C8] to-[#16A53F] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#005a9e] hover:to-[#128a35] transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <FaMapMarkerAlt className="mr-2 w-4 h-4" /> Find a Nearby Clinic
              </Link>
              <a 
                href="tel:253-200-0300"
                className="w-full bg-white border border-[#0077C8] text-[#0077C8] py-3 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center text-sm sm:text-base"
              >
                <FaPhone className="mr-2 w-4 h-4" /> Call 253-200-0300
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
