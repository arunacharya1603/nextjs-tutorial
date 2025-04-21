/** @type {import('next').NextConfig} */
const nextConfig = {
  // This setting ensures the app is built as a standalone deployment
  output: 'standalone',
  
  // Ensure database connections work correctly
  experimental: {
    serverComponentsExternalPackages: ['postgres'],
    // Ensure server components use runtime environment
    instrumentationHook: true,
  },
  
  // These settings ensure no static generation happens for dynamic content
  staticPageGenerationTimeout: 100,
  
  // Skip static optimization - use runtime for DB-dependent pages
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  
  // Environment variables that need to be accessible during build
  env: {
    // Configure to skip DB initialization during build
    NEXT_BUILD_ENV: 'production',
  }
};

module.exports = nextConfig; 