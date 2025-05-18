'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { translations, Language } from '@/lib/i18n';

// Kontext für die Spracheinstellungen
const useI18n = () => {
  const pathname = usePathname();
  const [lang, setLang] = useState<Language>('de');

  useEffect(() => {
    // Sprache basierend auf Pfad oder Hostname ermitteln
    const isEnglish = pathname.startsWith('/en') || (typeof window !== 'undefined' && window.location.hostname.startsWith('en.'));
    setLang(isEnglish ? 'en' : 'de');
  }, [pathname]);

  const t = (key: string) => {
    // Pfad im Objekt finden und zurückgeben, z.B. "header.features" -> translations[lang].header.features
    const pathParts = key.split('.');
    let result: any = translations[lang];
    
    for (const part of pathParts) {
      if (result && result[part] !== undefined) {
        result = result[part];
      } else {
        console.warn(`Translation key not found: ${key} for language: ${lang}`);
        return key; // Schlüssel als Fallback zurückgeben
      }
    }
    
    return result;
  };

  return {
    lang,
    t,
    isEnglish: lang === 'en'
  };
};

export default useI18n;