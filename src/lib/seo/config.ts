// SEO Configuration
export const siteConfig = {
  // Base Information
  name: "KLARE Methode App",
  title: "KLARE Methode App | Kongruenz statt Optimierung",
  description:
    "Entdecke die KLARE Methode App: In 5 Schritten zur vollständigen Kongruenz. Klarheit, Lebendigkeit, Ausrichtung, Realisierung, Entfaltung - Von Sascha Kohler",
  mainKeywords: [
    "Kongruenz",
    "Selbstentwicklung",
    "App",
    "KLARE Methode",
    "Persönlichkeitsentwicklung",
    "Transformation",
    "Lebensrad",
  ],

  // URLs
  url: "https://klare-methode.app", // Replace with your actual domain
  siteUrl: "https://klare-methode.app", // Replace with your actual domain

  // Social Media
  twitterHandle: "@sascha_kohler", // Replace with your Twitter handle
  socialImageUrl: "/images/blog/klare-methode.png", // Path to your default social image

  // App Information
  appStoreUrl: "https://apps.apple.com/app/klare-methode/id123456789", // Replace with actual URL when available
  playStoreUrl:
    "https://play.google.com/store/apps/details?id=com.klaremethode.app", // Replace with actual URL when available

  // Organization
  orgName: "Sascha Kohler",
  orgLogo: "/images/logo.png",

  // Contact
  contactEmail: "office@sascha-kohler.at",

  // Locale
  defaultLocale: "at",
  locales: ["at", "en"],
};

// Generate URL for image with base URL
export function getSocialImageUrl(imagePath: string): string {
  return `${siteConfig.url}${imagePath}`;
}

// Default SEO metadata with fallbacks
export const defaultSEO = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.defaultLocale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: getSocialImageUrl(siteConfig.socialImageUrl),
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    handle: siteConfig.twitterHandle,
    site: siteConfig.twitterHandle,
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content: siteConfig.mainKeywords.join(", "),
    },
    {
      name: "author",
      content: siteConfig.orgName,
    },
    {
      name: "application-name",
      content: siteConfig.name,
    },
    {
      name: "apple-mobile-web-app-title",
      content: siteConfig.name,
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/images/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
};

// Helper function to create page-specific metadata
export function createMetadata({
  title,
  description,
  path = "",
  ogImage = siteConfig.socialImageUrl,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}) {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  const pageDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: getSocialImageUrl(ogImage),
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: siteConfig.defaultLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [getSocialImageUrl(ogImage)],
    },
  };
}

