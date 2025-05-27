import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  
  // German pages
  const germanRoutes = [
    {
      url: `${siteConfig.url}/`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/blog`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/datenschutz`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/impressum`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/agb`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // English pages
  const englishRoutes = [
    {
      url: `${siteConfig.url}/en`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteConfig.url}/en/privacy`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/en/imprint`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${siteConfig.url}/en/terms`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  // Combine all routes
  const allRoutes = [...germanRoutes, ...englishRoutes];

  // Add additional blog post URLs dynamically as needed
  // This example assumes you have a helper function to get blog posts
  // const blogPosts = getAllBlogPosts();
  // const blogPostsUrls = blogPosts.map(post => ({
  //   url: `${siteConfig.url}/blog/${post.slug}`,
  //   lastModified: new Date(post.dateModified || post.datePublished),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));
  // 
  // // Add English blog posts
  // const englishBlogPostsUrls = blogPosts.map(post => ({
  //   url: `${siteConfig.url}/en/blog/${post.slug}`,
  //   lastModified: new Date(post.dateModified || post.datePublished),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));

  // return [...allRoutes, ...blogPostsUrls, ...englishBlogPostsUrls];
  return allRoutes;
}