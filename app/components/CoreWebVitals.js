'use client';

import { useEffect } from 'react';

export default function CoreWebVitals() {
  useEffect(() => {
    // Core Web Vitals measurement
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      }).catch(error => {
        console.log('Web Vitals not available:', error);
      });
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/homepagebannernew.jpg',
        '/Nwih-logo-vector (1) (1).png',
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize font loading
    const optimizeFonts = () => {
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          document.documentElement.classList.add('fonts-loaded');
        });
      }
    };

    // Lazy load non-critical images
    const lazyLoadImages = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
          imageObserver.observe(img);
        });
      }
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeFonts();
    lazyLoadImages();

    // Prefetch next page on hover
    const prefetchOnHover = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        }, { once: true });
      });
    };

    prefetchOnHover();
  }, []);

  return null;
}
