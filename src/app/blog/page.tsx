import Link from "next/link";
import Image from "next/image";
import { formatDate, getAllBlogPosts } from "@/lib/blog/utils";

export const metadata = {
  title: "KLARE App Entwicklungsblog | Der Weg zur App",
  description:
    "Verfolge die Entwicklung der KLARE App. Erfahre mehr über den Entwicklungsprozess, technische Einblicke und kommende Features.",
};

export default async function BlogPage() {
  // Check if admin mode is enabled
  const isAdminMode = process.env.NEXT_PUBLIC_ADMIN_MODE === "true";

  // Fetch blog posts (including unpublished ones if in admin mode)
  const blogPosts = await getAllBlogPosts(isAdminMode);

  return (
    <main className="pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
            Mein KLARE{" "}
            <span className="text-klare-a dark:text-dark-klare-a">
              Herzensprojekt
            </span>
          </h1>
          <p className="text-lg text-klare-text-secondary dark:text-dark-klare-text-secondary max-w-3xl mx-auto">
            Willkommen in meinem persönlichen Blog zur KLARE-Methode. Hier teile
            ich meine Erfahrungen, Gedanken und Erkenntnisse auf dem Weg zu mehr
            Kongruenz – und gebe dir Einblicke in die Entwicklung meines
            Herzensprojekts, der KLARE App.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <div className="bg-white dark:bg-dark-klare-card shadow-xl rounded-xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Cover/Gradient with Title */}
              <div className="relative h-80 md:h-auto flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-klare-k to-klare-a"></div>
                <div className="relative z-10 flex flex-col items-center justify-center p-8 md:p-10 text-center w-full h-full">
                  {/* Badges */}
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    <span className="bg-white/20 px-4 py-1.5 rounded-full text-sm text-white">
                      Neuer Beitrag
                    </span>
                    {!blogPosts[0].published &&
                      process.env.NEXT_PUBLIC_ADMIN_MODE === "true" && (
                        <span className="bg-amber-500/80 px-4 py-1.5 rounded-full text-sm text-white">
                          Entwurf
                        </span>
                      )}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white max-w-sm">
                    {blogPosts[0].title}
                  </h2>

                  {/* Excerpt and CTA */}
                  <div className="flex flex-col items-center">
                    <p className="text-white/90 text-base mb-8 max-w-xs">
                      {blogPosts[0].excerpt}
                    </p>

                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="bg-white text-klare-a px-6 py-2.5 rounded-full font-medium hover:bg-white/90 transition-colors"
                    >
                      Jetzt lesen
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-klare-k text-white flex items-center justify-center font-bold">
                    {blogPosts[0].author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{blogPosts[0].author}</p>
                    <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">
                      {formatDate(blogPosts[0].date)}
                    </p>
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
                  {/* Entwurfs-Badge */}
                  {!post.published &&
                    process.env.NEXT_PUBLIC_ADMIN_MODE === "true" && (
                      <div className="absolute top-0 left-0 bg-amber-500/80 text-white text-xs py-1 px-3 m-2 rounded-full">
                        Entwurf
                      </div>
                    )}
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary mb-2">
                  {formatDate(post.date)}
                </p>
                <h3 className="text-xl font-bold mb-2 text-klare-text dark:text-dark-klare-text">
                  {post.title}
                </h3>
                <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-klare-k text-white flex items-center justify-center font-bold text-xs">
                    {post.author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <p className="ml-2 text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">
                    {post.author}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-klare-k to-klare-a dark:from-dark-klare-k dark:to-dark-klare-a text-white rounded-xl p-8 md:p-12 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Bleibe auf dem Laufenden
            </h3>
            <p className="mb-8">
              Erhalte Updates zur KLARE App direkt in dein Postfach. Sei unter
              den Ersten, die von neuen Features erfahren und exklusive
              Einblicke erhalten.
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

        {/* Über den Autor */}
        <div className="bg-white dark:bg-dark-klare-card shadow-xl rounded-xl overflow-hidden mb-12">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="md:col-span-1 relative h-full min-h-[280px] md:min-h-full bg-gradient-to-br from-klare-k to-klare-a flex items-center justify-center p-8">
              <div className="bg-white/10 w-48 h-48 rounded-full overflow-hidden mx-auto relative">
                {/* Hier kannst du ein Bild einfügen */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">SK</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 p-8">
              <h3 className="text-2xl font-bold mb-3 text-klare-text dark:text-dark-klare-text">
                Über mich - Sascha Kohler
              </h3>
              <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">
                Die KLARE-Methode und die darauf basierende App sind zu 100%
                meine eigene Entwicklung - entstanden aus persönlichen
                Lebenserfahrungen und meiner beruflichen Weiterentwicklung. Als
                Schöpfer dieser Methode möchte ich Menschen helfen, ihre
                persönliche Entwicklung selbstbestimmt und im eigenen Tempo zu
                gestalten.
              </p>
              <p className="text-klare-text-secondary dark:text-dark-klare-text-secondary mb-4">
                Mein Ansatz verbindet bewährte psychologische Konzepte mit
                praktischer Alltagsanwendung. Die KLARE-Methode ist das Ergebnis
                jahrelanger Erfahrung und der Erkenntnis, dass echte
                Transformation durch Kongruenz statt Optimierung entsteht.
              </p>
              <div className="mt-4">
                <Link
                  href="/blog/meine-reise-zur-klare-methode"
                  className="text-klare-a dark:text-dark-klare-a font-medium hover:underline inline-flex items-center"
                >
                  Mehr über meine Reise zur KLARE-Methode
                  <svg
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
