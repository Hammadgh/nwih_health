# SEO Setup Guide for NWIH Website

This guide covers the comprehensive SEO optimizations implemented for the Northwest Integrated Health website.

## 🚀 Static Export Configuration

The site is configured for static export and can be deployed to any static hosting service.

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Static export (for static hosting)
npm run export
```

## 📊 SEO Features Implemented

### 1. Metadata System
- **Dynamic metadata** for each page with specific titles, descriptions, and keywords
- **Open Graph** tags for social media sharing
- **Twitter Card** optimization
- **Canonical URLs** to prevent duplicate content issues
- **Robots meta tags** for search engine crawling control

### 2. Structured Data (JSON-LD)
- **Organization schema** for business information
- **Medical clinic schema** for healthcare services
- **Breadcrumb navigation** schema
- **FAQ schema** support (ready for implementation)

### 3. Sitemap & Robots
- **Dynamic sitemap.xml** generation with all pages
- **robots.txt** with proper crawling rules
- **Priority and changefreq** settings for each page

### 4. Performance Optimizations
- **Image optimization** disabled for static export
- **Font preloading** for faster rendering
- **DNS prefetch** for external resources
- **Trailing slashes** for consistent URLs

## 🔧 Configuration Files

### Next.js Config (`next.config.mjs`)
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  generateBuildId: async () => {
    return 'nwih-build-' + Date.now()
  }
};
```

### Metadata System (`app/utils/metadata.js`)
- Page-specific metadata for all routes
- SEO-optimized titles and descriptions
- Keyword targeting for local search
- Social media optimization

## 📱 PWA Features
- **Web App Manifest** for mobile installation
- **Theme colors** matching brand
- **Icon sets** for different devices
- **Offline capability** ready

## 🎯 Local SEO Optimization

### Target Keywords
- Primary: "addiction treatment", "MAT", "substance use disorder"
- Local: "Pierce County", "Washington", "Lakewood"
- Service: "medication assisted treatment", "opioid treatment"

### Location-Based Content
- Clinic locations with structured data
- Local business information
- Service area targeting
- Contact information optimization

## 📈 Analytics & Tracking

### Google Analytics 4
- Ready for GA4 implementation
- Event tracking setup
- Conversion tracking ready
- Search Console integration

### Search Console
- Verification meta tag ready
- Sitemap submission ready
- Performance monitoring setup

## 🚀 Deployment Checklist

### Before Deployment
1. **Update Google Analytics ID** in `app/components/GoogleAnalytics.js`
2. **Add Google Search Console verification** in `app/utils/metadata.js`
3. **Create Open Graph image** (`/public/images/og-image.jpg`)
4. **Add favicon files** to `/public/` directory
5. **Test static export** with `npm run export`

### Static Hosting Services
- **Vercel**: Automatic deployment from Git
- **Netlify**: Drag and drop `out/` folder
- **GitHub Pages**: Upload `out/` folder contents
- **AWS S3**: Upload `out/` folder contents

### Post-Deployment
1. **Submit sitemap** to Google Search Console
2. **Verify robots.txt** is accessible
3. **Test all pages** for proper metadata
4. **Check mobile responsiveness**
5. **Validate structured data** with Google's Rich Results Test

## 🔍 SEO Testing Tools

### Recommended Tools
- **Google PageSpeed Insights**: Performance testing
- **Google Rich Results Test**: Structured data validation
- **Google Mobile-Friendly Test**: Mobile optimization
- **Screaming Frog**: Technical SEO audit
- **GTmetrix**: Performance analysis

### Validation URLs
- Sitemap: `https://yourdomain.com/sitemap.xml`
- Robots: `https://yourdomain.com/robots.txt`
- Manifest: `https://yourdomain.com/site.webmanifest`

## 📊 Performance Metrics

### Target Scores
- **Lighthouse SEO**: 95+
- **Lighthouse Performance**: 90+
- **Core Web Vitals**: All green
- **Mobile Usability**: 100%

### Key Metrics to Monitor
- Page load speed
- Mobile responsiveness
- Search engine indexing
- Local search visibility
- Social media sharing

## 🛠️ Maintenance

### Regular Updates
- Update sitemap when adding new pages
- Refresh metadata for seasonal content
- Monitor search console for errors
- Update structured data as needed
- Check for broken links

### Content Optimization
- Regular keyword research
- Local SEO monitoring
- Competitor analysis
- User experience improvements
- Conversion rate optimization

## 📞 Support

For technical issues or SEO questions, refer to:
- Next.js documentation
- Google Search Central
- Web.dev performance guides
- Lighthouse audit reports

---

**Note**: Remember to replace placeholder values (Google Analytics ID, verification codes) with actual values before deployment.
