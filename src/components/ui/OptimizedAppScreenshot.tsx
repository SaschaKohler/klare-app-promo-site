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
 * Optimierte Komponente für App-Screenshots
 * Nutzt automatisch responsive Größen, WebP/AVIF-Formate und Blur-Placeholders
 */
export default function OptimizedAppScreenshot({
  src,
  alt,
  className = "",
  priority = false,
  width = 280,
  height = 580,
}: OptimizedAppScreenshotProps) {
  const baseFileName = src.replace(/\.(png|jpe?g|webp|avif)$/, "");

  // Ermittlung der optimalen Bildgröße basierend auf der übergebenen Größe
  const sizeSuffix = width <= 280 ? "small" : "medium";

  // Konstruktion der responsiven Bildpfade
  const srcPath = `${baseFileName}-${sizeSuffix}.png`;

  // Einfacher Platzhalter für Blur-Loading
  const blurDataURL =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";

  return (
    <div
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Image
        src={srcPath}
        alt={alt}
        fill
        sizes={`(max-width: 640px) 280px, (max-width: 1024px) 380px, 280px`}
        className="object-contain"
        placeholder="blur"
        blurDataURL={blurDataURL}
        priority={priority}
      />
    </div>
  );
}
