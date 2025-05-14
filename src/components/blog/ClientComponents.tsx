"use client";

import React from "react";

// MDX custom components that need client-side functionality
export const FeatureList = ({ items }: { items: string[] }) => (
  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
    <h3 className="text-lg font-bold mb-4 text-klare-text dark:text-dark-klare-text">
      Hauptfunktionen
    </h3>
    <ul className="list-disc pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-klare-text dark:text-dark-klare-text">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const GradientBox = ({
  children,
  from,
  to,
}: {
  children: React.ReactNode;
  from?: string;
  to?: string;
}) => {
  const fromColor = from || "from-klare-k dark:from-dark-klare-k";
  const toColor = to || "to-klare-a dark:to-dark-klare-a";

  return (
    <div
      className={`bg-gradient-to-r ${fromColor} ${toColor} text-white rounded-xl p-8 my-8`}
    >
      {children}
    </div>
  );
};

export const CodeSnippet = ({
  language,
  code,
  title,
}: {
  language: string;
  code: string;
  title?: string;
}) => (
  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
    {title && (
      <h3 className="text-lg font-bold mb-4 text-klare-text dark:text-dark-klare-text">
        {title}
      </h3>
    )}
    <pre className="bg-gray-200 dark:bg-gray-900 p-4 overflow-x-auto rounded-lg text-sm">
      <code className={language ? `language-${language}` : ""}>{code}</code>
    </pre>
  </div>
);

export const CalloutBox = ({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "success";
}) => {
  const styles = {
    info: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700",
    warning:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700",
    success:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700",
  };

  return (
    <div className={`p-6 my-8 rounded-xl border ${styles[type]}`}>
      {children}
    </div>
  );
};

