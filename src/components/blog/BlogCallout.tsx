import React from "react";

interface BlogCalloutProps {
  children?: React.ReactNode; // Make children optional
  type?: "info" | "warning" | "success";
  className?: string;
}

export const BlogCallout: React.FC<BlogCalloutProps> = ({
  children,
  type = "info",
  className = "",
}) => {
  const typeStyles = {
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700",
    success:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700",
  };

  return (
    <div
      className={`my-8 p-4 border-l-4 rounded-r-lg ${typeStyles[type]} ${className}`}
    >
      {children}
    </div>
  );
};
