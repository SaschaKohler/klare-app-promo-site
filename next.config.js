/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    // Füge weitere Domains hinzu, falls benötigt
    // domains: ['localhost', 'example.com'],
  },
  // Aktiviere die Output-Option für Docker-Deployment
  output: 'standalone',
};

module.exports = nextConfig;