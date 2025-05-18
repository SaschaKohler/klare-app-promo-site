// @ts-check
import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Aktiviere MDX-Dateierweiterungen
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'klare-methode.app',
      },
      {
        protocol: 'https',
        hostname: 'en.klare-methode.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // Erhöht auf 24h für besseres Caching
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Aktiviere die Output-Option für Docker-Deployment
  output: "standalone",
  // Reduziere die Bundle-Größe
  poweredByHeader: false,
  // Verbessere Chunk-Loading und reduziere Client-Fehler
  experimental: {
    // Unterstützung für Pfad-basierte Internationalisierung
    i18n: {
      locales: ['de', 'en'],
      defaultLocale: 'de',
      localeDetection: true,
    }
  },
  // Verbessere Chunk-Loading
  webpack: (config, { dev, isServer }) => {
    // Optimiere Chunk-Splitting für bessere Performance
    config.optimization.splitChunks = {
      chunks: "all",
      cacheGroups: {
        default: false,
        vendors: false,
        commons: {
          name: "commons",
          chunks: "all",
          minChunks: 2,
          reuseExistingChunk: true,
        },
        shared: {
          name: "shared",
          minChunks: 2,
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    };

    // Temporär: Deaktiviere Minifizierung für einfachere Fehleranalyse
    // if (!isServer && !dev) {
    //   config.optimization.minimize = false;
    // }

    return config;
  },
};

const withMDX = nextMDX({
  // Unterstütze sowohl .md als auch .mdx Dateien
  extension: /\.(md|mdx)$/,
});

// Exportiere die Konfiguration
export default withMDX(nextConfig);
