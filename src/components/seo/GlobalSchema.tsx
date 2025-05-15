'use client';

import { generateOrganizationSchema, generateAppSchema } from '@/lib/seo/schema';

export default function GlobalSchema() {
  const organizationSchema = generateOrganizationSchema();
  const appSchema = generateAppSchema();

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
    </>
  );
}