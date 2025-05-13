import { serialize } from 'next-mdx-remote/serialize';
import { notFound } from 'next/navigation';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import rehypeImgSize from 'rehype-img-size';
import { getAllBlogPosts, getBlogPostBySlug } from '@/lib/blog/utils';
import BlogPostLayout from '@/components/blog/BlogPostLayout';

// Define the type for the route parameters
interface BlogPostParams {
  params: {
    slug: string;
  };
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostParams) {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | KLARE Blog',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | KLARE Blog`,
    description: post.excerpt,
  };
}

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const post = await getBlogPostBySlug(params.slug);
  
  // If the post doesn't exist, return 404
  if (!post) {
    notFound();
  }
  
  // Get all posts for related posts feature
  const allPosts = await getAllBlogPosts();
  
  // Filter out the current post and get up to 2 related posts (same category or random)
  const relatedPosts = allPosts
    .filter(p => p.slug !== params.slug)
    .filter(p => p.category === post.category)
    .slice(0, 2);
  
  // If we don't have enough related posts in the same category, add some random ones
  if (relatedPosts.length < 2) {
    const randomPosts = allPosts
      .filter(p => p.slug !== params.slug && !relatedPosts.map(rp => rp.slug).includes(p.slug))
      .slice(0, 2 - relatedPosts.length);
    
    relatedPosts.push(...randomPosts);
  }
  
  // Serialize the MDX content
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeHighlight,
        [rehypeImgSize as any, { dir: 'public' }],
      ],
    },
  });
  
  return (
    <BlogPostLayout
      title={post.title}
      date={post.date}
      author={post.author}
      readingTime={post.readingTime}
      category={post.category}
      mdxSource={mdxSource}
      relatedPosts={relatedPosts.map(p => ({
        id: p.slug,
        title: p.title,
        date: p.date,
        excerpt: p.excerpt,
        category: p.category,
      }))}
    />
  );
}
