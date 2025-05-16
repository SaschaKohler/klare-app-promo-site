import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogHeaderProps {
  title: string;
  date: string;
  image?: string;
  author?: string;
  readingTime?: string;
  category?: string;
  published?: boolean; // Neue Property
  customImage?: React.ReactNode; // For custom image component like the journal visualization
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  date,
  image,
  author = "Sascha Kohler",
  readingTime = "5 Min. Lesezeit",
  category = "Features",
  published = true,
  customImage,
}) => {
  // Detailed logging for debugging
  // console.log("BlogHeader - image path received:", image);
  // console.log(
  //   "BlogHeader - customImage received:",
  //   customImage ? "Present" : "Not present",
  // );
  // Format date to match the old format
  const formattedDate = new Date(date).toLocaleDateString("de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Get author initials for the avatar
  const authorInitials = author
    ?.split(" ")
    .map((name) => name.charAt(0))
    .join("");

  return (
    <header className="mb-8">
      <Link
        href="/blog"
        className="inline-flex items-center text-klare-k dark:text-dark-klare-k hover:underline mb-6"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Zurück zur Übersicht
      </Link>

      <h1 className="text-3xl md:text-4xl font-display font-bold mb-4 text-klare-text dark:text-dark-klare-text">
        {title}
      </h1>

      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-klare-k text-white flex items-center justify-center font-bold">
          {authorInitials || "SK"}
        </div>
        <div className="ml-3">
          <p className="font-medium text-klare-text dark:text-dark-klare-text">
            {author}
          </p>
          <p className="text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">
            {formattedDate} · {readingTime}
          </p>
        </div>
      </div>

      {category && (
        <div className="flex items-center mb-8">
          <span className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm text-klare-text-secondary dark:text-dark-klare-text-secondary">
            {category}
          </span>

          {/* Entwurfs-Badge für nicht veröffentlichte Beiträge */}
          {!published && process.env.NEXT_PUBLIC_ADMIN_MODE === "true" && (
            <span className="ml-2 bg-amber-100 dark:bg-amber-800 px-3 py-1 rounded-full text-sm text-amber-600 dark:text-amber-200">
              Entwurf
            </span>
          )}
        </div>
      )}

      {/* Featured Image */}
      {customImage ? (
        customImage
      ) : image ? (
        <div className="relative w-full h-96 rounded-xl overflow-hidden mb-10">
          <Image
            src={image}
            alt={`Cover image for ${title}`}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
            sizes="(max-width: 768px) 100vw, 800px"
            priority={category === "Featured"}
            onError={(e) => {
              // Handle image loading error
              console.warn(`Failed to load image: ${image}`);
              // Fallback to a default image
              e.currentTarget.src = "/images/blog/default-cover.jpg";
            }}
          />
        </div>
      ) : (
        // Fallback when no image is provided
        <div className="w-full h-40 rounded-xl overflow-hidden mb-10 bg-gradient-to-r from-klare-k to-klare-l flex items-center justify-center">
          <span className="text-white text-xl font-bold">{title}</span>
        </div>
      )}
    </header>
  );
};
