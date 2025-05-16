import React from 'react';
import Image from 'next/image';

type OptimizedImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
};

/**
 * Optimierte Bildkomponente mit WebP/AVIF-Support und Blur-Effekt
 * Für alle Bilder außer App-Screenshots
 */
export default function OptimizedImage({
  src,
  alt,
  className = '',
  fill = false,
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
}: OptimizedImageProps) {
  // Einfacher Platzhalter für Blur-Loading
  const blurDataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
  
  // Prüfen auf SVG (kein Blur-Effekt für SVGs)
  const isSvg = src.toLowerCase().endsWith('.svg');
  
  return (
    <Image 
      src={src}
      alt={alt}
      className={`${className} ${isSvg ? '' : 'transition-opacity duration-500'}`}
      sizes={sizes}
      placeholder={isSvg ? undefined : 'blur'}
      blurDataURL={isSvg ? undefined : blurDataURL}
      priority={priority}
      loading={priority ? 'eager' : 'lazy'}
      {...(fill ? { fill: true } : { width, height })}
      onError={(e) => {
        console.warn(`Failed to load image: ${src}`);
        // Fallback zu Standard-Bild
        if (src !== '/images/default-image.png') {
          e.currentTarget.src = '/images/default-image.png';
        }
      }}
    />
  );
}
