import type { MDXComponents } from "mdx/types";
import { BlogImage } from "./src/components/blog/BlogImage";
import { BlogVideo } from "./src/components/blog/BlogVideo";
import { BlogQuote } from "./src/components/blog/BlogQuote";
import { BlogCallout } from "./src/components/blog/BlogCallout";
import { BlogDivider } from "./src/components/blog/BlogDivider";
import {
  CodeSnippet,
  FeatureList,
  GradientBox,
  CalloutBox,
} from "./src/components/blog/ClientComponents";
import Link from "next/link";

// Diese Datei ist erforderlich für @next/mdx und folgt dem Next.js-Standard
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Standard-Komponenten überschreiben
    h1: ({ children, ...props }) => (
      <h1
        className="text-3xl md:text-4xl font-display font-bold my-6 text-klare-text dark:text-dark-klare-text"
        {...props}
      >
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2
        className="text-2xl md:text-3xl font-display font-bold mt-10 mb-6 text-klare-text dark:text-dark-klare-text"
        {...props}
      >
        {children}
      </h2>
    ),
    h3: ({ children, ...props }) => (
      <h3
        className="text-xl md:text-2xl font-display font-bold mt-8 mb-4 text-klare-text dark:text-dark-klare-text"
        {...props}
      >
        {children}
      </h3>
    ),
    h4: ({ children, ...props }) => (
      <h4
        className="text-lg md:text-xl font-bold mt-6 mb-4 text-klare-text dark:text-dark-klare-text"
        {...props}
      >
        {children}
      </h4>
    ),
    p: ({ children, ...props }) => (
      <p className="my-4 text-klare-text dark:text-dark-klare-text" {...props}>
        {children}
      </p>
    ),
    a: ({ href, children, ...props }) => {
      const isInternalLink = href && href.startsWith("/");

      if (isInternalLink) {
        return (
          <Link
            href={href}
            className="text-klare-k dark:text-dark-klare-k hover:underline"
            {...props}
          >
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
          {...props}
        >
          {children}
        </a>
      );
    },
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-5 my-4 space-y-2" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }) => (
      <ol className="list-decimal pl-5 my-4 space-y-2" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }) => (
      <li className="text-klare-text dark:text-dark-klare-text" {...props}>
        {children}
      </li>
    ),
    blockquote: ({ children, ...props }) => (
      <blockquote
        className="border-l-4 border-klare-a dark:border-dark-klare-a pl-4 my-6 italic text-klare-text-secondary dark:text-dark-klare-text-secondary"
        {...props}
      >
        {children}
      </blockquote>
    ),
    pre: ({ children, ...props }) => (
      <pre
        className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6"
        {...props}
      >
        {children}
      </pre>
    ),
    code: ({ className, children, ...props }) => {
      // Wenn es eine className hat, ist es ein Code-Block, sonst inline-Code
      return className ? (
        <code className={`${className} text-sm`} {...props}>
          {children}
        </code>
      ) : (
        <code
          className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-klare-text dark:text-dark-klare-text"
          {...props}
        >
          {children}
        </code>
      );
    },
    img: ({ src, alt, ...props }) => {
      if (!src) return null;

      return (
        <div className="my-8 relative">
          <img
            src={src}
            alt={alt || "Blog image"}
            className="rounded-lg w-full"
            {...props}
          />
          {alt && (
            <p className="text-sm text-center mt-2 text-klare-text-secondary dark:text-dark-klare-text-secondary">
              {alt}
            </p>
          )}
        </div>
      );
    },
    table: ({ children, ...props }) => (
      <div className="overflow-x-auto my-6">
        <table
          className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
          {...props}
        >
          {children}
        </table>
      </div>
    ),
    thead: ({ children, ...props }) => (
      <thead className="bg-gray-50 dark:bg-gray-800" {...props}>
        {children}
      </thead>
    ),
    tbody: ({ children, ...props }) => (
      <tbody
        className="divide-y divide-gray-200 dark:divide-gray-700"
        {...props}
      >
        {children}
      </tbody>
    ),
    tr: ({ children, ...props }) => <tr {...props}>{children}</tr>,
    th: ({ children, ...props }) => (
      <th
        className="px-6 py-3 text-left text-xs font-medium text-klare-text-secondary dark:text-dark-klare-text-secondary uppercase tracking-wider"
        {...props}
      >
        {children}
      </th>
    ),
    td: ({ children, ...props }) => (
      <td
        className="px-6 py-4 whitespace-nowrap text-sm text-klare-text dark:text-dark-klare-text"
        {...props}
      >
        {children}
      </td>
    ),

    // Benutzerdefinierte Komponenten
    BlogImage,
    BlogVideo,
    BlogQuote,
    BlogCallout,
    BlogDivider,
    CodeSnippet,
    FeatureList,
    GradientBox,
    CalloutBox,

    // Bestehende Komponenten beibehalten
    ...components,
  };
}

