import React from "react";

interface BlogDividerProps {
  className?: string;
}

export const BlogDivider: React.FC<BlogDividerProps> = ({ className = "" }) => {
  return (
    <hr
      className={`my-8 border-t-2 border-gray-200 dark:border-gray-700 ${className}`}
    />
  );
};
