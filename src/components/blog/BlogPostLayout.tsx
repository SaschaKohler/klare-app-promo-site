import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MdxContent from './MdxContent';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  author: string;
  readingTime: string;
  category: string;
  mdxSource: MDXRemoteSerializeResult;
  relatedPosts?: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    category: string;
  }[];
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  date,
  author,
  readingTime,
  category,
  mdxSource,
  relatedPosts = []
}) => {
  return (
    <main className="pt-28 pb-16 bg-white dark:bg-dark-klare-bg">
      <article className="container mx-auto px-4 md:px-0 max-w-3xl">
        {/* Article Header */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-klare-k dark:text-dark-klare-k hover:underline mb-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zurück zur Übersicht
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            {title}
          </h1>
          
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-klare-k text-white flex items-center justify-center font-bold">
              {author.split(' ').map(name => name[0]).join('')}
            </div>
            <div className="ml-3">
              <p className="font-medium text-klare-text dark:text-dark-klare-text">{author}</p>
              <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">{date} · {readingTime}</p>
            </div>
          </div>
          
          <div className="flex items-center mb-8">
            <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">
              {category}
            </span>
          </div>
        </div>
        
        {/* MDX Content */}
        <MdxContent source={mdxSource} />
        
        {/* Author Bio */}
        <div className="border-t border-gray-200 dark:border-gray-700 my-12 pt-8">
          <h3 className="text-xl font-bold mb-4 text-klare-text dark:text-dark-klare-text">Über den Autor</h3>
          <div className="flex items-start">
            <div className="w-16 h-16 rounded-full bg-klare-k text-white flex items-center justify-center font-bold text-xl mr-4 flex-shrink-0">
              {author.split(' ').map(name => name[0]).join('')}
            </div>
            <div>
              <p className="font-bold text-klare-text dark:text-dark-klare-text mb-2">{author}</p>
              <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">
                Lebens- und Sozialberater, NLP-Master & Trainer, Entwickler der KLARE Methode. Sascha widmet sich der Erforschung und Anwendung transformativer Methoden zur persönlichen Entwicklung und begleitet Menschen auf ihrem Weg zu mehr Kongruenz.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-klare-text dark:text-dark-klare-text">Ähnliche Artikel</h3>
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
                        <h4 className="text-xl font-bold text-white px-4 text-center">{post.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary mb-2">{post.date}</p>
                    <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary">{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Comments Section Placeholder */}
        <div className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-12">
          <h3 className="text-2xl font-bold mb-6 text-klare-text dark:text-dark-klare-text">Kommentare</h3>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 text-center">
            <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">Kommentarfunktion wird in Kürze freigeschaltet.</p>
            <button className="bg-klare-k dark:bg-dark-klare-k text-white px-6 py-2 rounded-full font-medium hover:bg-klare-k/90 dark:hover:bg-dark-klare-k/90 transition-colors">
              Für Updates anmelden
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogPostLayout;