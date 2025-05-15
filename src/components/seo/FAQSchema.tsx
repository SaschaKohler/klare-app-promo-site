'use client';

import { generateFAQSchema } from '@/lib/seo/schema';

interface FAQSchemaProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}