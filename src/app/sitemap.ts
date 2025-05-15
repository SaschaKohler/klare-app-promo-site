import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  
  const routes = [
    {
      url: `${siteConfig.url}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/datenschutz`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/impressum`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ] as MetadataRoute.Sitemap;

  // Add additional blog post URLs dynamically as needed
  // This example assumes you have a helper function to get blog posts
  // const blogPosts = getAllBlogPosts();
  // const blogPostsUrls = blogPosts.map(post => ({
  //   url: `${siteConfig.url}/blog/${post.slug}`,
  //   lastModified: new Date(post.dateModified || post.datePublished),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));

  // return [...routes, ...blogPostsUrls];
  return routes;
}