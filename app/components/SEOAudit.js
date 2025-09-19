'use client';

import { useEffect, useState } from 'react';

export default function SEOAudit() {
  const [auditResults, setAuditResults] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const runSEOAudit = () => {
      const results = {
        title: checkTitle(),
        metaDescription: checkMetaDescription(),
        headings: checkHeadings(),
        images: checkImages(),
        links: checkLinks(),
        performance: checkPerformance(),
        mobile: checkMobile(),
        accessibility: checkAccessibility(),
      };

      setAuditResults(results);
    };

    const checkTitle = () => {
      const title = document.querySelector('title');
      const titleText = title?.textContent || '';
      
      return {
        exists: !!title,
        length: titleText.length,
        score: titleText.length >= 30 && titleText.length <= 60 ? 'good' : 'needs-improvement',
        value: titleText,
        recommendations: titleText.length < 30 
          ? ['Title is too short. Aim for 30-60 characters.'] 
          : titleText.length > 60 
          ? ['Title is too long. Aim for 30-60 characters.'] 
          : ['Title length is optimal.']
      };
    };

    const checkMetaDescription = () => {
      const metaDesc = document.querySelector('meta[name="description"]');
      const descText = metaDesc?.getAttribute('content') || '';
      
      return {
        exists: !!metaDesc,
        length: descText.length,
        score: descText.length >= 120 && descText.length <= 160 ? 'good' : 'needs-improvement',
        value: descText,
        recommendations: descText.length < 120 
          ? ['Meta description is too short. Aim for 120-160 characters.'] 
          : descText.length > 160 
          ? ['Meta description is too long. Aim for 120-160 characters.'] 
          : ['Meta description length is optimal.']
      };
    };

    const checkHeadings = () => {
      const h1s = document.querySelectorAll('h1');
      const h2s = document.querySelectorAll('h2');
      const h3s = document.querySelectorAll('h3');
      
      return {
        h1Count: h1s.length,
        h2Count: h2s.length,
        h3Count: h3s.length,
        score: h1s.length === 1 ? 'good' : 'needs-improvement',
        recommendations: h1s.length === 0 
          ? ['Add an H1 heading to the page.'] 
          : h1s.length > 1 
          ? ['Use only one H1 heading per page.'] 
          : ['H1 heading structure is good.']
      };
    };

    const checkImages = () => {
      const images = document.querySelectorAll('img');
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
      
      return {
        totalImages: images.length,
        imagesWithoutAlt: imagesWithoutAlt.length,
        score: imagesWithoutAlt.length === 0 ? 'good' : 'needs-improvement',
        recommendations: imagesWithoutAlt.length > 0 
          ? [`${imagesWithoutAlt.length} images are missing alt text.`] 
          : ['All images have alt text.']
      };
    };

    const checkLinks = () => {
      const links = document.querySelectorAll('a[href]');
      const internalLinks = Array.from(links).filter(link => 
        link.href.startsWith(window.location.origin) || link.href.startsWith('/')
      );
      const externalLinks = Array.from(links).filter(link => 
        !link.href.startsWith(window.location.origin) && !link.href.startsWith('/')
      );
      
      return {
        totalLinks: links.length,
        internalLinks: internalLinks.length,
        externalLinks: externalLinks.length,
        score: 'good',
        recommendations: ['Link structure looks good.']
      };
    };

    const checkPerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      const loadTime = navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0;
      
      return {
        loadTime: Math.round(loadTime),
        score: loadTime < 3000 ? 'good' : 'needs-improvement',
        recommendations: loadTime > 3000 
          ? ['Page load time is slow. Consider optimizing images and scripts.'] 
          : ['Page load time is good.']
      };
    };

    const checkMobile = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      const hasViewport = !!viewport;
      
      return {
        hasViewport,
        score: hasViewport ? 'good' : 'needs-improvement',
        recommendations: hasViewport 
          ? ['Mobile viewport is configured.'] 
          : ['Add viewport meta tag for mobile optimization.']
      };
    };

    const checkAccessibility = () => {
      const hasLang = document.documentElement.lang;
      const hasSkipLink = document.querySelector('a[href="#main"], a[href="#content"]');
      
      return {
        hasLang: !!hasLang,
        hasSkipLink: !!hasSkipLink,
        score: hasLang ? 'good' : 'needs-improvement',
        recommendations: hasLang 
          ? ['Language attribute is set.'] 
          : ['Add lang attribute to html element.']
      };
    };

    // Run audit after page load
    if (document.readyState === 'complete') {
      runSEOAudit();
    } else {
      window.addEventListener('load', runSEOAudit);
    }

    return () => {
      window.removeEventListener('load', runSEOAudit);
    };
  }, []);

  if (!auditResults) return null;

  return (
    <div className="seo-audit" style={{ display: 'none' }}>
      {/* This component runs SEO audit in development */}
      {process.env.NODE_ENV === 'development' && (
        <div style={{ 
          position: 'fixed', 
          bottom: '10px', 
          right: '10px', 
          background: 'white', 
          border: '1px solid #ccc', 
          padding: '10px', 
          fontSize: '12px',
          maxWidth: '300px',
          zIndex: 9999
        }}>
          <h4>SEO Audit Results</h4>
          <div>
            <strong>Title:</strong> {auditResults.title.score} 
            ({auditResults.title.length} chars)
          </div>
          <div>
            <strong>Meta Description:</strong> {auditResults.metaDescription.score} 
            ({auditResults.metaDescription.length} chars)
          </div>
          <div>
            <strong>H1 Count:</strong> {auditResults.headings.h1Count}
          </div>
          <div>
            <strong>Images without Alt:</strong> {auditResults.images.imagesWithoutAlt}
          </div>
          <div>
            <strong>Load Time:</strong> {auditResults.performance.loadTime}ms
          </div>
        </div>
      )}
    </div>
  );
}
