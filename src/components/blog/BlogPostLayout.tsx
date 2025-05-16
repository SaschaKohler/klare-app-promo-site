"use client";

import { BlogHeader } from "./BlogHeader";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamischer Import für Client-Komponenten
const DynamicMdxContent = dynamic(() => import("./DynamicMdxContent"), {
  ssr: false,
  loading: () => <p>Loading content...</p>,
});

interface BlogPostLayoutProps {
  frontmatter?: {
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    published?: boolean;
  };
  // Für direkte Props
  title?: string;
  date?: string;
  author?: string;
  readingTime?: string;
  category?: string;
  coverImage?: string; // Direct prop for cover image
  published?: boolean; // Veröffentlichungsstatus
  mdxSource?: any; // Für next-mdx-remote
  children?: React.ReactNode; // Für @next/mdx
  relatedPosts?: Array<{
    id: string;
    title: string;
    date: string;
    excerpt: string;
    coverImage?: string;
    category?: string;
  }>;
  source?: any; // Für Abwärtskompatibilität
  customImage?: React.ReactNode; // Custom image component
}

export const BlogPostLayout: React.FC<BlogPostLayoutProps> = (props) => {
  // Unterstütze sowohl direkte Props als auch Frontmatter
  const {
    frontmatter,
    title: titleProp,
    date: dateProp,
    author,
    readingTime,
    category,
    coverImage,
    mdxSource,
    children,
    relatedPosts,
    source,
    customImage,
    published,
  } = props;
  // Debug frontmatter with better object inspection
  // console.log(
  //   "BlogPostLayout - frontmatter:",
  //   frontmatter
  //     ? {
  //         title: frontmatter.title,
  //         date: frontmatter.date,
  //         excerpt: frontmatter.excerpt,
  //         coverImage: frontmatter.coverImage,
  //         published: frontmatter.published
  //       }
  //     : "undefined",
  // );

  // console.log("BlogPostLayout - direct props:", {
  //   titleProp,
  //   dateProp,
  //   coverImage,
  // });

  // Get published status if available
  const isPublished =
    props.published !== undefined
      ? props.published
      : frontmatter?.published !== undefined
        ? frontmatter?.published
        : true;
  const title = titleProp || frontmatter?.title || "";
  const date = dateProp || frontmatter?.date || "";
  const coverImagePath = coverImage || frontmatter?.coverImage;

  // Verwende entweder mdxSource oder source (für Abwärtskompatibilität)
  const contentSource = mdxSource || source;

  return (
    <main className="pt-28 pb-16 bg-white dark:bg-dark-klare-bg">
      <article className="container mx-auto px-4 md:px-0 max-w-3xl">
        <BlogHeader
          title={title}
          date={date}
          image={coverImagePath}
          author={author}
          readingTime={readingTime}
          category={category}
          published={isPublished}
          customImage={customImage}
        />

        {/* Unterstütze beide Rendering-Methoden */}
        <div className="prose dark:prose-invert prose-lg max-w-none">
          {contentSource && <DynamicMdxContent source={contentSource} />}
          {!contentSource && children}
        </div>

        {/* Author Info */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-12 pt-8">
          <h3 className="text-xl font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Über den Autor
          </h3>
          <div className="flex items-start">
            <div className="w-16 h-16 rounded-full bg-klare-k text-white flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
              {author
                ?.split(" ")
                .map((n) => n[0])
                .join("") || "SK"}
            </div>
            <div>
              <p className="font-bold text-klare-text dark:text-dark-klare-text mb-2">
                {author || "Sascha Kohler"}
              </p>
              <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                Lebens- und Sozialberater, NLP-Master & Trainer, Entwickler der
                KLARE Methode. Sascha widmet sich der Erforschung und Anwendung
                transformativer Methoden zur persönlichen Entwicklung und
                begleitet Menschen auf ihrem Weg zu mehr Kongruenz.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-klare-text dark:text-dark-klare-text">
              Ähnliche Artikel
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.id}`}
                  className="bg-white dark:bg-dark-klare-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="h-40 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-klare-l to-klare-k opacity-90">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h4 className="text-xl font-bold text-white px-4 text-center">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary mb-2">
                      {new Date(post.date).toLocaleDateString("de-DE", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section Placeholder */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12">
          <h3 className="text-2xl font-bold mb-6 text-klare-text dark:text-dark-klare-text">
            Kommentare
          </h3>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
            <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">
              Kommentarfunktion wird in Kürze freigeschaltet.
            </p>
            <button className="bg-klare-k dark:bg-dark-klare-k text-white px-6 py-2 rounded-full font-medium hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90 transition-colors">
              Für Updates anmelden
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};
