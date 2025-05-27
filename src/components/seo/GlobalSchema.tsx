'use client';

import { usePathname } from 'next/navigation';
import { generateOrganizationSchema, generateAppSchema, generateWebsiteSchema } from '@/lib/seo/schema';

export default function GlobalSchema() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');
  const lang = isEnglish ? 'en' : 'de';
  
  const organizationSchema = generateOrganizationSchema(lang);
  const appSchema = generateAppSchema(lang);
  const websiteSchema = generateWebsiteSchema(lang);

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
      />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}