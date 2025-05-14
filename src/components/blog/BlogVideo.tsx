import React from "react";

interface BlogVideoProps {
  src: string;
  title?: string;
  className?: string;
}

export const BlogVideo: React.FC<BlogVideoProps> = ({
  src,
  title,
  className = "",
}) => {
  return (
    <div className={`my-8 overflow-hidden rounded-lg ${className}`}>
      {title && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 text-xs font-medium">
          {title}
        </div>
      )}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={src}
          title={title || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};
