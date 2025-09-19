export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/404',
          '/500',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
        ],
        crawlDelay: 0,
      },
    ],
    sitemap: 'https://nwihc.com/sitemap.xml',
    host: 'https://nwihc.com',
  };
}

