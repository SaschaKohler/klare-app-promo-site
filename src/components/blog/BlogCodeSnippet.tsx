import React from "react";

interface BlogCodeSnippetProps {
  language?: string;
  code?: string;
  title?: string;
}

export const BlogCodeSnippet: React.FC<BlogCodeSnippetProps> = ({
  language,
  code,
  title,
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
