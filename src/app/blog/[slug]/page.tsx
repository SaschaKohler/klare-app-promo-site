import { serialize } from "next-mdx-remote/serialize";
import { notFound } from "next/navigation";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm";
import rehypeImgSize from "rehype-img-size";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog/utils";
import { BlogPostLayout } from "@/components/blog/BlogPostLayout";

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
      title: "Post Not Found | KLARE Blog",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | KLARE Blog`,
    description: post.excerpt,
  };
}

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  // For static generation, we only want published posts
  const posts = await getAllBlogPosts(false);

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostParams) {
  const post = await getBlogPostBySlug(params.slug);

  // Check if admin mode is enabled
  const isAdminMode = process.env.NEXT_PUBLIC_ADMIN_MODE === "true";

  // If the post doesn't exist or isn't published (and not in admin mode), return 404
  if (!post || (!post.published && !isAdminMode)) {
    notFound();
  }

  // Get all posts for related posts feature
  const allPosts = await getAllBlogPosts();

  // Filter out the current post and get up to 2 related posts (same category or random)
  const relatedPosts = allPosts
    .filter((p) => p.slug !== params.slug)
    .filter((p) => p.category === post.category)
    .slice(0, 2);

  // If we don't have enough related posts in the same category, add some random ones
  if (relatedPosts.length < 2) {
    const randomPosts = allPosts
      .filter(
        (p) =>
          p.slug !== params.slug &&
          !relatedPosts.map((rp) => rp.slug).includes(p.slug),
      )
      .slice(0, 2 - relatedPosts.length);

    relatedPosts.push(...randomPosts);
  }

  // Create a frontmatter object to pass to MDX
  const frontmatterData = {
    title: post.title,
    date: post.date,
    excerpt: post.excerpt,
    author: post.author,
    category: post.category,
    coverImage: post.coverImage,
    published: post.published,
  };

  // Serialize the MDX content with frontmatter
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeHighlight,
        [rehypeImgSize as any, { dir: "public" }],
      ],
      development: process.env.NODE_ENV === "development",
    },
    parseFrontmatter: true,
    scope: {
      // Pass frontmatter data to the MDX content
      frontmatter: frontmatterData,
    },
  });

  // Log for debugging
  console.log("Blog post data before rendering:", {
    slug: post.slug,
    title: post.title,
    date: post.date,
    coverImage: post.coverImage,
    excerpt: post.excerpt,
    author: post.author,
    category: post.category,
  });

  return (
    <BlogPostLayout
      frontmatter={frontmatterData}
      title={post.title}
      date={post.date}
      author={post.author}
      readingTime={post.readingTime}
      category={post.category}
      coverImage={post.coverImage}
      published={post.published}
      mdxSource={mdxSource}
      relatedPosts={relatedPosts.map((p) => ({
        id: p.slug,
        title: p.title,
        date: p.date,
        excerpt: p.excerpt,
        category: p.category,
      }))}
    />
  );
}
