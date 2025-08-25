'use client';
import Link from 'next/link';
import Script from 'next/script';
import Head from 'next/head';
import { useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import jobs from '../data/jobs';

// Note: Metadata export is removed because this is a client component.

export default function CareersPage() {
  const [selectedId, setSelectedId] = useState(jobs[0]?.id);
  const selectedJob = useMemo(() => jobs.find((j) => j.id === selectedId) || jobs[0], [selectedId]);

  const jobPostingsLd = jobs.map((job) => {
    // Best-effort salary parsing for JSON-LD
    let baseSalary;
    if (job.pay) {
      const hourlyMatch = job.pay.match(/\$([0-9]+)(?:\s?-\s?\$([0-9]+))?\s*\/?\s*hour/i);
      if (hourlyMatch) {
        const min = hourlyMatch[1] ? Number(hourlyMatch[1]) : undefined;
        const max = hourlyMatch[2] ? Number(hourlyMatch[2]) : undefined;
        baseSalary = {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: {
            '@type': 'QuantitativeValue',
            unitText: 'HOUR',
            ...(min ? { minValue: min } : {}),
            ...(max ? { maxValue: max } : {}),
            ...(min && !max ? { value: min } : {}),
          },
        };
      }
    }

    return {
      '@type': 'JobPosting',
      title: job.title,
      description: job.description,
      hiringOrganization: {
        '@type': 'Organization',
        name: 'Northwest Integrated Health',
        sameAs: 'https://nwihc.com',
      },
      employmentType: Array.isArray(job.employmentType) ? job.employmentType.join(',') : job.employmentType,
      jobLocation: job.location
        ? {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: job.location.split(',')[0].trim(),
              addressRegion: job.location.split(',')[1]?.trim() || 'WA',
              addressCountry: 'US',
            },
          }
        : undefined,
      directApply: true,
      applicantLocationRequirements: {
        '@type': 'Country',
        name: 'US',
      },
      ...(baseSalary ? { baseSalary } : {}),
      hiringOrganizationType: 'Healthcare',
      validThrough: '2026-12-31',
      url: job.applyUrl,
    };
  });

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Head>
          <title>Careers at NWIH — Join Our Team</title>
          <meta name="description" content="Explore careers at Northwest Integrated Health. View current openings including LPN and CMA positions. Apply now to join our patient-centered, integrated care team." />
          <link rel="canonical" href="/careers" />
          <meta property="og:title" content="Careers at NWIH — Join Our Team" />
          <meta property="og:description" content="Explore careers at Northwest Integrated Health. View current openings and apply today." />
        </Head>
        <Script
          id="jobposting-ld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: jobPostingsLd.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item,
            })),
          })}
        </Script>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#0077C8] to-[#005a9e] text-white">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Careers at Northwest Integrated Health</h1>
            <p className="text-white/90 max-w-3xl">
              Join our mission-driven team delivering compassionate, evidence-based care. We’re growing and
              regularly add new roles. See current openings below.
            </p>
          </div>
        </section>

        {/* Jobs Master-Detail Layout */}
        <section className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: List */}
            <div>
              <ul className="space-y-4">
                {jobs.map((job) => {
                  const active = job.id === selectedId;
                  return (
                    <li key={job.id}>
                      <button
                        onClick={() => setSelectedId(job.id)}
                        className={`w-full text-left rounded-lg border transition-colors ${
                          active ? 'border-[#0077C8] ring-1 ring-[#0077C8]' : 'border-gray-200 hover:border-[#0077C8]'
                        } bg-white`}
                        aria-pressed={active}
                      >
                        <div className="p-5 sm:p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h2 className={`text-base sm:text-lg font-semibold ${active ? 'text-[#005a9e]' : 'text-gray-900'}`}>
                                {job.title}
                              </h2>
                              <div className="mt-1 text-sm text-gray-600 flex flex-wrap gap-x-3 gap-y-1">
                                <span>Northwest Integrated Health</span>
                                {job.location && <span>• {job.location}</span>}
                                {job.department && <span>• {job.department}</span>}
                              </div>
                            </div>
                            {job.pay && (
                              <span className="shrink-0 inline-flex items-center rounded-md bg-gray-50 text-gray-800 text-xs sm:text-sm font-medium px-3 py-1 border border-gray-200">
                                {job.pay}
                              </span>
                            )}
                          </div>
                          {job.description && (
                            <p className="mt-3 text-sm text-gray-700 line-clamp-2">
                              {job.description}
                            </p>
                          )}
                          <div className="mt-3 text-xs sm:text-sm text-gray-600 flex flex-wrap gap-2">
                            {Array.isArray(job.employmentType) && job.employmentType.map((t) => (
                              <span key={t} className="inline-flex items-center px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right: Detail */}
            <div>
              <article className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{selectedJob.title}</h2>
                      <div className="mt-1 text-sm text-gray-600 flex flex-wrap gap-x-3 gap-y-1">
                        <span>Northwest Integrated Health</span>
                        {selectedJob.location && <span>• {selectedJob.location}</span>}
                        {selectedJob.department && <span>• {selectedJob.department}</span>}
                      </div>
                    </div>
                    {selectedJob.pay && (
                      <span className="shrink-0 inline-flex items-center rounded-md bg-gray-50 text-gray-800 text-xs sm:text-sm font-medium px-3 py-1 border border-gray-200">
                        {selectedJob.pay}
                      </span>
                    )}
                  </div>

                  {selectedJob.description && (
                    <p className="mt-4 text-gray-800">{selectedJob.description}</p>
                  )}

                  {selectedJob.responsibilities && selectedJob.responsibilities.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Primary Responsibilities</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {selectedJob.responsibilities.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedJob.qualifications && selectedJob.qualifications.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">License, Education, Experience</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {selectedJob.qualifications.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedJob.schedule && selectedJob.schedule.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Schedule</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {selectedJob.schedule.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedJob.benefits && selectedJob.benefits.length > 0 && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Benefits</h3>
                      <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                        {selectedJob.benefits.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-8 flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      {Array.isArray(selectedJob.employmentType) && selectedJob.employmentType.join(' • ')}
                    </div>
                    <a
                      href={selectedJob.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Apply for ${selectedJob.title} at Northwest Integrated Health`}
                      className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#16A53F] hover:bg-[#128a35] text-white text-sm font-semibold shadow-sm"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Future Jobs Note */}
          <div id="more-jobs" className="mt-10 p-5 rounded-lg bg-gray-50 border border-gray-100">
            <h3 className="text-base font-semibold text-gray-900 mb-1">More roles coming soon</h3>
            <p className="text-sm text-gray-700">
              We update this page as new positions open. Check back regularly for the latest opportunities.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


