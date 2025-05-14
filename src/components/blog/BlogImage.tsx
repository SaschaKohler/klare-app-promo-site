import React from "react";
import Image from "next/image";

interface BlogImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt,
  width = 1200,
  height = 630,
  className = "",
}) => {
  return (
    <div className={`my-8 overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};
