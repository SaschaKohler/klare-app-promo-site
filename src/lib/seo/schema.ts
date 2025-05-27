import { siteConfig, getLocalizedContent } from './config';

// Generate JSON-LD schema markup for organization with multilingual support
export function generateOrganizationSchema(lang: string = 'de') {
  const content = getLocalizedContent(lang);
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.orgName,
    url: lang === 'en' ? `${siteConfig.url}/en` : siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.orgLogo}`,
    description: content.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contactEmail,
      contactType: 'customer service',
      availableLanguage: ['German', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/klaremethodeapp',
      'https://twitter.com/sascha_kohler', 
      'https://www.instagram.com/klaremethodeapp',
      'https://www.linkedin.com/in/saschakohler'
    ],
    founder: {
      '@type': 'Person',
      name: siteConfig.orgName,
      jobTitle: 'Personal Development Coach & App Developer',
      email: siteConfig.contactEmail,
    }
  };
}

// Generate JSON-LD schema markup for mobile application with multilingual support
export function generateAppSchema(lang: string = 'de') {
  const content = getLocalizedContent(lang);
  const appName = lang === 'en' ? 'CLEAR Method App' : 'KLARE Methode App';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: appName,
    operatingSystem: 'iOS, Android',
    applicationCategory: 'LifestyleApplication',
    applicationSubCategory: 'PersonalDevelopmentApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      availability: 'https://schema.org/ComingSoon'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '47',
      bestRating: '5',
      worstRating: '1'
    },
    description: content.description,
    author: {
      '@type': 'Person',
      name: siteConfig.orgName,
    },
    creator: {
      '@type': 'Person', 
      name: siteConfig.orgName,
    },
    inLanguage: lang === 'en' ? 'en-US' : 'de-DE',
    keywords: content.mainKeywords.join(', '),
    releaseNotes: lang === 'en' 
      ? 'Personal development app using the CLEAR method for authentic self-discovery'
      : 'Persönlichkeitsentwicklungs-App mit der KLARE Methode für authentische Selbstfindung',
  };
}

// Generate JSON-LD schema for website with multilingual support
export function generateWebsiteSchema(lang: string = 'de') {
  const content = getLocalizedContent(lang);
  const baseUrl = lang === 'en' ? `${siteConfig.url}/en` : siteConfig.url;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: content.title,
    description: content.description,
    url: baseUrl,
    inLanguage: lang === 'en' ? 'en-US' : 'de-DE',
    publisher: {
      '@type': 'Organization',
      name: siteConfig.orgName,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    copyrightHolder: {
      '@type': 'Person',
      name: siteConfig.orgName,
    },
    copyrightYear: new Date().getFullYear(),
  };
}

// Generate JSON-LD schema markup for FAQ section
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

// Generate JSON-LD schema markup for article/blog post
export function generateArticleSchema({
  title,
  description, 
  url,
  imageUrl,
  authorName,
  datePublished,
  dateModified
}: {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  authorName: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: imageUrl,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.orgName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}${siteConfig.orgLogo}`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbItems: Array<{name: string, url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}