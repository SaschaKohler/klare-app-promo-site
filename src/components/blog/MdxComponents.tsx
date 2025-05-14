"use client";

import React from "react";
import Link from "next/link";
import {
  FeatureList,
  GradientBox,
  CodeSnippet,
  CalloutBox,
} from "./ClientComponents";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

// MDX components with custom styling
const MdxComponents = {
  // Custom heading components
  h1: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h1
      className="text-3xl md:text-4xl font-display font-bold my-6 text-klare-text dark:text-dark-klare-text"
      {...props}
    />
  ),
  h2: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h2
      className="text-2xl md:text-3xl font-display font-bold mt-10 mb-6 text-klare-text dark:text-dark-klare-text"
      {...props}
    />
  ),
  h3: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h3
      className="text-xl md:text-2xl font-display font-bold mt-8 mb-4 text-klare-text dark:text-dark-klare-text"
      {...props}
    />
  ),
  h4: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >,
  ) => (
    <h4
      className="text-lg md:text-xl font-bold mt-6 mb-4 text-klare-text dark:text-dark-klare-text"
      {...props}
    />
  ),

  // Paragraph
  p: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
  ) => (
    <p className="my-4 text-klare-text dark:text-dark-klare-text" {...props} />
  ),

  // Custom link component
  a: ({
    href,
    children,
    ...rest
  }: DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >) => {
    const isInternalLink = href && href.startsWith("/");

    if (isInternalLink) {
      return (
        <Link
          href={href || "#"}
          className="text-klare-k dark:text-dark-klare-k hover:underline"
          {...rest}
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
        {...rest}
      >
        {children}
      </a>
    );
  },

  // Lists
  ul: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLUListElement>,
      HTMLUListElement
    >,
  ) => <ul className="list-disc pl-5 my-4 space-y-2" {...props} />,
  ol: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >,
  ) => <ol className="list-decimal pl-5 my-4 space-y-2" {...props} />,
  li: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>,
  ) => <li className="text-klare-text dark:text-dark-klare-text" {...props} />,

  // Blockquote
  blockquote: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLQuoteElement>,
      HTMLQuoteElement
    >,
  ) => (
    <blockquote
      className="border-l-4 border-klare-a dark:border-dark-klare-a pl-4 my-6 italic text-klare-text-secondary dark:text-dark-klare-text-secondary"
      {...props}
    />
  ),

  // Code blocks
  pre: (
    props: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>,
  ) => (
    <pre
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto my-6"
      {...props}
    />
  ),
  code: ({
    className,
    ...props
  }: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
    // If it has a className, it's a code block, otherwise it's inline code
    return className ? (
      <code className={`${className} text-sm`} {...props} />
    ) : (
      <code
        className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-klare-text dark:text-dark-klare-text"
        {...props}
      />
    );
  },

  // Images
  img: ({ src, alt, ...rest }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    if (!src) return null;

    return (
      <div className="my-8 relative">
        <img
          src={src}
          alt={alt || "Blog image"}
          className="rounded-lg w-full"
          {...rest}
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
  table: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLTableElement>,
      HTMLTableElement
    >,
  ) => (
    <div className="overflow-x-auto my-6">
      <table
        className="min-w-full divide-y divide-gray-200 dark:divide-gray-700"
        {...props}
      />
    </div>
  ),
  thead: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >,
  ) => <thead className="bg-gray-50 dark:bg-gray-800" {...props} />,
  tbody: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLTableSectionElement>,
      HTMLTableSectionElement
    >,
  ) => (
    <tbody
      className="divide-y divide-gray-200 dark:divide-gray-700"
      {...props}
    />
  ),
  tr: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLTableRowElement>,
      HTMLTableRowElement
    >,
  ) => <tr {...props} />,
  th: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLTableHeaderCellElement>,
      HTMLTableHeaderCellElement
    >,
  ) => (
    <th
      className="px-6 py-3 text-left text-xs font-medium text-klare-text-secondary dark:text-dark-klare-text-secondary uppercase tracking-wider"
      {...props}
    />
  ),
  td: (
    props: DetailedHTMLProps<
      HTMLAttributes<HTMLTableDataCellElement>,
      HTMLTableDataCellElement
    >,
  ) => (
    <td
      className="px-6 py-4 whitespace-nowrap text-sm text-klare-text dark:text-dark-klare-text"
      {...props}
    />
  ),

  // Custom components imported from ClientComponents
  CalloutBox,
  GradientBox,
  FeatureList,
  CodeSnippet,
};

export default MdxComponents;
