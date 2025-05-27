// Multilingual SEO Configuration
export const siteConfig = {
  // Base Information
  name: "KLARE Methode App",
  
  // URLs
  url: "https://klare-methode.app",
  siteUrl: "https://klare-methode.app",
  
  // Social Media
  twitterHandle: "@sascha_kohler",
  socialImageUrl: "/images/blog/klare-methode.png",
  
  // App Information
  appStoreUrl: "https://apps.apple.com/app/klare-methode/id123456789",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.klaremethode.app",
  
  // Organization
  orgName: "Sascha Kohler",
  orgLogo: "/images/logo.png",
  
  // Contact
  contactEmail: "office@sascha-kohler.at",
  
  // Locale Configuration
  defaultLocale: "de",
  locales: ["de", "en"],
  
  // Language-specific content
  content: {
    de: {
      title: "KLARE Methode App | Kongruenz statt Optimierung",
      description: "Entdecke die KLARE Methode App: In 5 Schritten zur vollständigen Kongruenz. Klarheit, Lebendigkeit, Ausrichtung, Realisierung, Entfaltung - Von Sascha Kohler",
      mainKeywords: [
        "Kongruenz",
        "Selbstentwicklung",
        "App",
        "KLARE Methode",
        "Persönlichkeitsentwicklung",
        "Transformation",
        "Lebensrad",
        "Sascha Kohler",
        "Persönlichkeitsentwicklung App",
        "Selbstfindung",
        "Authentizität"
      ],
      alternateTitle: "KLARE Methode | Persönlichkeitsentwicklung App",
      longDescription: "Die KLARE Methode App von Sascha Kohler führt dich in 5 systematischen Schritten zu vollständiger Kongruenz und Authentizität. Entdecke deine wahre Natur durch Klarheit, Lebendigkeit, Ausrichtung, Realisierung und Entfaltung.",
    },
    en: {
      title: "CLEAR Method App | Congruence over Optimization",
      description: "Discover the CLEAR Method App: 5 steps to complete congruence. Clarity, Liveliness, Evolvement, Action, Realization - By Sascha Kohler",
      mainKeywords: [
        "Congruence",
        "Personal Development",
        "App",
        "CLEAR Method",
        "Self-Development",
        "Transformation",
        "Life Wheel",
        "Sascha Kohler",
        "Personal Growth App",
        "Self-Discovery",
        "Authenticity"
      ],
      alternateTitle: "CLEAR Method | Personal Development App",
      longDescription: "The CLEAR Method App by Sascha Kohler guides you through 5 systematic steps to complete congruence and authenticity. Discover your true nature through Clarity, Liveliness, Evolvement, Action, and Realization.",
    }
  }
};

// Generate URL for image with base URL
export function getSocialImageUrl(imagePath: string): string {
  return `${siteConfig.url}${imagePath}`;
}

// Get localized content
export function getLocalizedContent(lang: string = 'de') {
  return siteConfig.content[lang as keyof typeof siteConfig.content] || siteConfig.content.de;
}

// Default SEO metadata with multilingual support
export function getDefaultSEO(lang: string = 'de') {
  const content = getLocalizedContent(lang);
  
  return {
    title: content.title,
    description: content.description,
    openGraph: {
      type: "website",
      locale: lang === 'en' ? 'en-US' : 'de-DE',
      url: lang === 'en' ? `${siteConfig.url}/en` : siteConfig.url,
      title: content.title,
      description: content.description,
      siteName: siteConfig.name,
      images: [
        {
          url: getSocialImageUrl(siteConfig.socialImageUrl),
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
    },
    twitter: {
      handle: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
      cardType: "summary_large_image",
      title: content.title,
      description: content.description,
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: content.mainKeywords.join(", "),
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
}

// Legacy support - keep for backward compatibility
export const defaultSEO = getDefaultSEO('de');

// Helper function to create page-specific metadata with multilingual support
export function createMetadata({
  title,
  description,
  path = "",
  ogImage = siteConfig.socialImageUrl,
  lang = 'de'
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  lang?: string;
}) {
  const content = getLocalizedContent(lang);
  const pageTitle = title ? `${title} | ${siteConfig.name}` : content.title;
  const pageDescription = description || content.description;
  const baseUrl = lang === 'en' ? `${siteConfig.url}/en` : siteConfig.url;
  const url = `${baseUrl}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: content.mainKeywords,
    alternates: {
      canonical: url,
      languages: {
        "de-DE": path ? `${siteConfig.url}${path}` : siteConfig.url,
        "en-US": path ? `${siteConfig.url}/en${path}` : `${siteConfig.url}/en`,
      },
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
      locale: lang === 'en' ? 'en-US' : 'de-DE',
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

// Helper function to generate hreflang alternates
export function getHreflangAlternates(path: string = '') {
  return {
    "de-DE": path ? `${siteConfig.url}${path}` : siteConfig.url,
    "en-US": path ? `${siteConfig.url}/en${path}` : `${siteConfig.url}/en`,
    "x-default": siteConfig.url, // Default to German version
  };
}

