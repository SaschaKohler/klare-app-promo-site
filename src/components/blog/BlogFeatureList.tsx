import React from "react";

interface BlogFeatureListProps {
  items?: string[];
  title?: string;
}
// MDX custom components that need client-side functionality
export const BlogFeatureList: React.FC<BlogFeatureListProps> = ({
  items,
  title = "Hauptfunktionen",
}) => (
  <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
    <h3 className="text-lg font-bold mb-4 text-klare-text dark:text-dark-klare-text">
      {title}
    </h3>
    <ul className="list-disc pl-5 space-y-2">
      {items?.map((item, index) => (
        <li key={index} className="text-klare-text dark:text-dark-klare-text">
          {item}
        </li>
      ))}
    </ul>
  </div>
);
