"use client";
import { usePathname } from "next/navigation";
import { siteConfig, getHreflangAlternates } from "@/lib/seo/config";

export default function HreflangTags() {
  const pathname = usePathname();
  
  // Convert pathname to work with both languages
  const basePath = pathname.startsWith('/en') ? pathname.replace('/en', '') : pathname;
  const alternates = getHreflangAlternates(basePath);

  return (
    <>
      {Object.entries(alternates).map(([lang, url]) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={url}
        />
      ))}
    </>
  );
}
