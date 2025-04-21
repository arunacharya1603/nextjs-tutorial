const fs = require('fs');
const { execSync } = require('child_process');

// Copy production config to next.config.js
console.log('Setting up production configuration...');
fs.copyFileSync('next.config.prod.js', 'next.config.js');

// Set environment variable for build
process.env.NEXT_BUILD_ENV = 'production';

// Run the build
try {
  console.log('Running production build...');
  execSync('pnpm run build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} 