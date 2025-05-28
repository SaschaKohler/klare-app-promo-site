import React from "react";
import Image from "next/image";

type OptimizedAppScreenshotProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

/**
 * Hochoptimierte Komponente für App-Screenshots
 * - Automatische Format-Auswahl (AVIF -> WebP -> PNG)
 * - Responsive Größen mit Next.js Image Optimization
 * - Blur-Placeholder für bessere UX
 * - Lazy Loading mit intersection observer
 */
export default function OptimizedAppScreenshot({
  src,
  alt,
  className = "",
  priority = false,
  width = 280,
  height = 580,
}: OptimizedAppScreenshotProps) {
  // Base filename ohne Extension
  const baseFileName = src.replace(/\.(png|jpe?g|webp|avif)$/, "");
  
  // Responsive sizes configuration
  const responsiveSizes = `
    (max-width: 640px) 280px,
    (max-width: 1024px) 380px,
    ${width}px
  `;

  // Generate blur placeholder based on image type
  const generateBlurDataURL = () => {
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="280" height="580" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f3f4f6"/>
        <rect width="90%" height="15%" x="5%" y="10%" rx="8" fill="#e5e7eb" opacity="0.3"/>
        <rect width="70%" height="8%" x="5%" y="30%" rx="4" fill="#e5e7eb" opacity="0.2"/>
        <rect width="85%" height="8%" x="5%" y="40%" rx="4" fill="#e5e7eb" opacity="0.2"/>
        <circle cx="50%" cy="65%" r="20%" fill="#e5e7eb" opacity="0.1"/>
      </svg>`
    ).toString('base64')}`;
  };

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-lg ${className}`}
      style={{ width, height }}
    >
      <picture>
        {/* Modern AVIF format - smallest file size */}
        <source
          srcSet={`${baseFileName}.avif`}
          type="image/avif"
          media="(min-width: 640px)"
        />
        <source
          srcSet={`${baseFileName}-small.avif`}
          type="image/avif"
          media="(max-width: 639px)"
        />
        
        {/* WebP fallback - good compression */}
        <source
          srcSet={`${baseFileName}.webp`}
          type="image/webp"
          media="(min-width: 640px)"
        />
        <source
          srcSet={`${baseFileName}-small.webp`}
          type="image/webp"
          media="(max-width: 639px)"
        />
        
        {/* PNG fallback - universal support */}
        <Image
          src={`${baseFileName}.png`}
          alt={alt}
          fill
          sizes={responsiveSizes}
          className="object-contain transition-opacity duration-300"
          placeholder="blur"
          blurDataURL={generateBlurDataURL()}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          quality={85}
          style={{
            objectFit: 'contain',
            objectPosition: 'center'
          }}
        />
      </picture>
    </div>
  );
}
