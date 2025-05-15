import { siteConfig } from './config';

// Generate JSON-LD schema markup for organization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.orgName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.orgLogo}`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.contactEmail,
      contactType: 'customer service',
    },
    sameAs: [
      'https://www.facebook.com/klaremethodeapp', // Replace with actual social links
      'https://twitter.com/sascha_kohler', 
      'https://www.instagram.com/klaremethodeapp',
      'https://www.linkedin.com/in/saschakohler'
    ],
  };
}

// Generate JSON-LD schema markup for mobile application
export function generateAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MobileApplication',
    name: siteConfig.name,
    operatingSystem: 'iOS, ANDROID',
    applicationCategory: 'LifestyleApplication, HealthApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '47'
    },
    description: siteConfig.description,
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