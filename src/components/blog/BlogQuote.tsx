import React from "react";

interface BlogQuoteProps {
  children?: React.ReactNode; // Make children optional
  author?: string;
  className?: string;
}

export const BlogQuote: React.FC<BlogQuoteProps> = ({
  children,
  author,
  className = "",
}) => {
  return (
    <blockquote
      className={`my-8 pl-6 border-l-4 border-primary italic ${className}`}
    >
      {children && <div className="text-lg">{children}</div>}
      {author && (
        <footer className="text-gray-600 mt-2 text-right">— {author}</footer>
      )}
    </blockquote>
  );
};
