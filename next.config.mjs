// @ts-check
import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Aktiviere MDX-Dateierweiterungen
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['localhost'],
    // Füge weitere Domains hinzu, falls benötigt
    // domains: ['localhost', 'example.com'],
  },
  // Aktiviere die Output-Option für Docker-Deployment
  output: 'standalone',
};

const withMDX = nextMDX({
  // Unterstütze sowohl .md als auch .mdx Dateien
  extension: /\.(md|mdx)$/,
});

// Exportiere die Konfiguration
export default withMDX(nextConfig);