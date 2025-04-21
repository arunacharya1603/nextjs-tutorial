/** @type {import('next').NextConfig} */
const nextConfig = {
  // This setting prevents data fetching during build time for statically exported pages
  output: 'standalone',
  experimental: {
    // This setting enables proper runtime for server components
    serverComponentsExternalPackages: ['postgres'],
  },
};

module.exports = nextConfig; 