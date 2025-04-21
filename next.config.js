/** @type {import('next').NextConfig} */
const nextConfig = {
  // This setting prevents data fetching during build time for statically exported pages
  output: 'standalone',
  experimental: {
    // This setting enables proper runtime for server components
    serverComponentsExternalPackages: ['postgres'],
  },
  // Disable static optimization
  reactStrictMode: true,
  staticPageGenerationTimeout: 1000,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig; 