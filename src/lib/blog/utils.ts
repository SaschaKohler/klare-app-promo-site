import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the blog post metadata type
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  coverImage: string;
  content: string;
  readingTime: string;
}

const BLOG_DIRECTORY = path.join(process.cwd(), 'content/blog');

// Function to get all blog posts sorted by date
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Get all markdown files from the blog directory
  const fileNames = fs.readdirSync(BLOG_DIRECTORY);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => {
      // Remove file extension to get the slug
      const slug = fileName.replace(/\.mdx?$/, '');
      
      // Read markdown file as string
      const fullPath = path.join(BLOG_DIRECTORY, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      
      // Use gray-matter to parse the post metadata
      const { data, content } = matter(fileContents);
      
      // Calculate reading time (rough estimate)
      const readingTime = calculateReadingTime(content);
      
      // Combine the data with the slug and reading time
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
        category: data.category,
        coverImage: data.coverImage,
        content: content,
        readingTime: readingTime
      } as BlogPost;
    });
  
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Function to get a specific blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    // Look for both .md and .mdx extensions
    let filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      filePath = path.join(BLOG_DIRECTORY, `${slug}.mdx`);
      if (!fs.existsSync(filePath)) {
        return null;
      }
    }
    
    // Read markdown file as string
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Use gray-matter to parse the post metadata
    const { data, content } = matter(fileContents);
    
    // Calculate reading time
    const readingTime = calculateReadingTime(content);
    
    // Combine the data with the slug
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author,
      category: data.category,
      coverImage: data.coverImage,
      content: content,
      readingTime: readingTime
    } as BlogPost;
  } catch (error) {
    console.error(`Error getting blog post by slug ${slug}:`, error);
    return null;
  }
}

// Function to calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} Min. Lesezeit`;
}
