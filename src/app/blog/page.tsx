import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog/utils';

export const metadata = {
  title: 'KLARE App Entwicklungsblog | Der Weg zur App',
  description: 'Verfolge die Entwicklung der KLARE App. Erfahre mehr über den Entwicklungsprozess, technische Einblicke und kommende Features.',
};

export default async function BlogPage() {
  // Fetch all blog posts
  const blogPosts = await getAllBlogPosts();

  return (
    <main className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            KLARE App <span className="text-klare-a dark:text-dark-klare-a">Entwicklungsblog</span>
          </h1>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-2xl mx-auto">
            Verfolge die Entwicklung der KLARE App. Hier teile ich regelmäßig Updates, technische Einblicke und Gedanken zum Entwicklungsprozess.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="bg-white dark:bg-dark-klare-card shadow-xl rounded-xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-klare-k to-klare-a opacity-90"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm mb-4">Neuer Beitrag</span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">{blogPosts[0].title}</h2>
                  <p className="mb-4 text-center opacity-90">{blogPosts[0].excerpt}</p>
                  <Link 
                    href={`/blog/${blogPosts[0].slug}`} 
                    className="bg-white text-klare-a px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors"
                  >
                    Jetzt lesen
                  </Link>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-klare-k text-white flex items-center justify-center font-bold">
                    {blogPosts[0].author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{blogPosts[0].author}</p>
                    <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">{blogPosts[0].date}</p>
                  </div>
                </div>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center">
                  <span className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary mr-2">
                    {blogPosts[0].readingTime}
                  </span>
                  <span className="text-sm bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full text-klare-text-secondary dark:text-dark-klare-text-secondary">
                    {blogPosts[0].category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.slice(1).map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="bg-white dark:bg-dark-klare-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-klare-k to-klare-a flex items-center justify-center">
                  <div className="absolute top-0 right-0 bg-white/20 text-white text-xs py-1 px-3 m-2 rounded-full">
                    {post.category}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary mb-2">{post.date}</p>
                <h3 className="text-xl font-bold mb-2 text-klare-text dark:text-dark-klare-text">{post.title}</h3>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">{post.excerpt}</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-klare-k text-white flex items-center justify-center font-bold text-xs">
                    {post.author.split(' ').map(name => name[0]).join('')}
                  </div>
                  <p className="ml-2 text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">{post.author}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-klare-k to-klare-a dark:from-dark-klare-k dark:to-dark-klare-a text-white rounded-xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Bleibe auf dem Laufenden</h3>
            <p className="mb-8">
              Erhalte Updates zur KLARE App direkt in dein Postfach. Sei unter den Ersten, die von neuen Features erfahren und exklusive Einblicke erhalten.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse"
                className="px-5 py-3 rounded-full sm:rounded-r-none w-full mb-4 sm:mb-0 bg-white/10 border border-white/30 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-klare-k dark:text-dark-klare-k px-6 py-3 rounded-full sm:rounded-l-none font-medium hover:bg-white/90 transition-colors whitespace-nowrap">
                Abonnieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
