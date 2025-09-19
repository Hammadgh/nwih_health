/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  generateBuildId: async () => {
    return 'nwih-build-' + Date.now()
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Note: Headers don't work with static export, but keeping for reference
  // These would need to be configured at the server/CDN level for static sites
  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;
