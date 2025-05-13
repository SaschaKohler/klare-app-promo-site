import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// MDX components with custom styling
const MdxComponents = {
  // Custom heading components
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl md:text-4xl font-display font-bold my-6 text-klare-text dark:text-dark-klare-text">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl md:text-3xl font-display font-bold mt-10 mb-6 text-klare-text dark:text-dark-klare-text">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl md:text-2xl font-display font-bold mt-8 mb-4 text-klare-text dark:text-dark-klare-text">
      {children}
    </h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg md:text-xl font-bold mt-6 mb-4 text-klare-text dark:text-dark-klare-text">
      {children}
    </h4>
  ),
  
  // Paragraph
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="my-4 text-klare-text dark:text-dark-klare-text">
      {children}
    </p>
  ),
  
  // Custom link component
  a: ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isInternalLink = href && href.startsWith('/');
    
    if (isInternalLink) {
      return (
        <Link href={href} className="text-klare-k dark:text-dark-klare-k hover:underline">
          {children}
        </Link>
      );
    }
    
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-klare-k dark:text-dark-klare-k hover:underline"
      >
        {children}
      </a>
    );
  },
  
  // Lists
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-5 my-4 space-y-2">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-5 my-4 space-y-2">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-klare-text dark:text-dark-klare-text">
      {children}
    </li>
  ),
  
  // Blockquote
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-klare-a dark:border-dark-klare-a pl-4 my-6 italic text-klare-text-secondary dark:text-dark-klare-text-secondary">
      {children}
    </blockquote>
  ),
  
  // Code blocks
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6">
      {children}
    </pre>
  ),
  code: ({ className, children }: { className?: string; children: React.ReactNode }) => {
    // If it has a className, it's a code block, otherwise it's inline code
    return className ? (
      <code className={`${className} text-sm`}>
        {children}
      </code>
    ) : (
      <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-klare-text dark:text-dark-klare-text">
        {children}
      </code>
    );
  },
  
  // Images
  img: ({ src, alt }: { src: string; alt: string }) => {
    if (!src) return null;
    
    return (
      <div className="my-8 relative">
        <img 
          src={src} 
          alt={alt || 'Blog image'} 
          className="rounded-lg w-full"
        />
        {alt && (
          <p className="text-sm text-center mt-2 text-klare-text-secondary dark:text-dark-klare-text-secondary">
            {alt}
          </p>
        )}
      </div>
    );
  },
  
  // Table
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-gray-50 dark:bg-gray-800">{children}</thead>
  ),
  tbody: ({ children }: { children: React.ReactNode }) => (
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">{children}</tbody>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr>{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-klare-text-secondary dark:text-dark-klare-text-secondary uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-6 py-4 whitespace-nowrap text-sm text-klare-text dark:text-dark-klare-text">
      {children}
    </td>
  ),
  
  // Custom components for blog content
  CalloutBox: ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'success' }) => {
    const styles = {
      info: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700',
      warning: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700',
      success: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700',
    };
    
    return (
      <div className={`p-6 my-8 rounded-xl border ${styles[type]}`}>
        {children}
      </div>
    );
  },
  
  GradientBox: ({ children, from, to }: { children: React.ReactNode; from?: string; to?: string }) => {
    const fromColor = from || 'from-klare-k dark:from-dark-klare-k';
    const toColor = to || 'to-klare-a dark:to-dark-klare-a';
    
    return (
      <div className={`bg-gradient-to-r ${fromColor} ${toColor} text-white rounded-xl p-8 my-8`}>
        {children}
      </div>
    );
  },
  
  FeatureList: ({ items }: { items: string[] }) => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
      <h3 className="text-lg font-bold mb-4 text-klare-text dark:text-dark-klare-text">Hauptfunktionen</h3>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-klare-text dark:text-dark-klare-text">{item}</li>
        ))}
      </ul>
    </div>
  ),
  
  CodeSnippet: ({ language, code, title }: { language: string; code: string; title?: string }) => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 my-8">
      {title && (
        <h3 className="text-lg font-bold mb-4 text-klare-text dark:text-dark-klare-text">{title}</h3>
      )}
      <pre className="bg-gray-200 dark:bg-gray-900 p-4 overflow-x-auto rounded-lg text-sm">
        <code className={language ? `language-${language}` : ''}>
          {code}
        </code>
      </pre>
    </div>
  ),
};

export default MdxComponents;