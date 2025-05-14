import React from "react";
import { MDXRemote } from "next-mdx-remote";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { BlogImage } from "./BlogImage";
import { BlogVideo } from "./BlogVideo";
import { BlogQuote } from "./BlogQuote";
import { BlogCallout } from "./BlogCallout";
import { BlogDivider } from "./BlogDivider";
import { BlogGradientBox } from "./BlogGradientBox";
import { BlogFeatureList } from "./BlogFeatureList";
import { formatDate } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";

interface CodeSnippetProps {
  language: string;
  code: string;
  title?: string;
  showLineNumbers?: boolean;
}

interface MdxContentProps {
  source: any;
}

const CodeSnippet = ({
  language,
  code,
  title,
  showLineNumbers = true,
}: CodeSnippetProps) => {
  return (
    <div className="my-8 rounded-lg overflow-hidden">
      {title && (
        <div className="bg-gray-800 text-gray-200 px-4 py-2 text-xs font-medium">
          {title}
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
          margin: 0,
          borderRadius: title ? "0 0 0.5rem 0.5rem" : "0.5rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

// Custom components for MDX
const components: MDXComponents = {
  h1: (props) => (
    <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-lg md:text-xl font-bold mt-6 mb-3" {...props} />
  ),
  h5: (props) => (
    <h5 className="text-base md:text-lg font-bold mt-5 mb-2" {...props} />
  ),
  h6: (props) => (
    <h6 className="text-sm md:text-base font-bold mt-4 mb-2" {...props} />
  ),
  p: (props) => <p className="my-4 leading-7" {...props} />,
  a: (props) => {
    const { href, ...rest } = props;
    if (href?.startsWith("/")) {
      return (
        <Link
          href={href}
          className="text-primary underline hover:text-primary-dark transition"
          {...rest}
        />
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline hover:text-primary-dark transition"
        {...rest}
      />
    );
  },
  ul: (props) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
  ol: (props) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
  li: (props) => <li className="leading-7" {...props} />,
  // Ensure we're properly handling the children prop for custom components
  blockquote: (props) => {
    // Ensure children is properly extracted from props
    const { children, ...rest } = props;
    return <BlogQuote children={children} {...rest} />;
  },
  hr: () => <BlogDivider />,
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => {
    const { children, className, ...divProps } = props;
    return (
      <pre className={className} {...divProps}>
        {children}
      </pre>
    );
  },
  img: (props) => {
    const { src, alt, width, height, ...rest } = props;
    if (!src) return null;
    return (
      <BlogImage
        src={src}
        alt={alt || ""}
        width={width ? Number(width) : 1200}
        height={height ? Number(height) : 630}
        {...rest}
      />
    );
  },
  // Use the component name as is for these custom components
  BlogImage,
  BlogVideo,
  BlogQuote,
  BlogCallout,
  BlogDivider,
  BlogFeatureList,
  BlogGradientBox,
  CodeSnippet,
  Date: ({ date }: { date: string }) => (
    <time dateTime={date} className="text-gray-500 text-sm">
      {formatDate(date)}
    </time>
  ),
  // Add any other custom components here
};

function DynamicMdxContent({ source }: MdxContentProps) {
  console.log("DynamicMdxContent - source:", source);
  
  return (
    <div className="prose dark:prose-invert prose-lg max-w-none">
      <MDXRemote {...source} components={components} />
    </div>
  );
}

export default DynamicMdxContent;
