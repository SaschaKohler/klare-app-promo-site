// @ts-check
import nextMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Aktiviere MDX-Dateierweiterungen
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["localhost", "klare-methode.app"],
    // Füge weitere Domains hinzu, falls benötigt
    // domains: ['localhost', 'example.com'],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Aktiviere die Output-Option für Docker-Deployment
  output: "standalone",
  // Reduziere die Bundle-Größe
  poweredByHeader: false,
  // Verbessere Chunk-Loading und reduziere Client-Fehler
  experimental: {
    // Reduziert den Speicherverbrauch durch Optimierung der Server-Komponenten
    serverComponentsExternalPackages: [],
    // CSS-Optimierung auskommentiert, um Build-Fehler zu vermeiden
    // optimizeCss: true,
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

