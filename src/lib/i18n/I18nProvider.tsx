"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { translations, Language } from "@/lib/i18n";

type I18nContextType = {
  lang: Language;
  t: (key: string) => string | any;
  isEnglish: boolean;
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [lang, setLang] = useState<Language>("de");

  useEffect(() => {
    // Sprache basierend auf Pfad oder Hostname ermitteln
    const isEnglish =
      pathname.startsWith("/en") ||
      (typeof window !== "undefined" &&
        window.location.hostname.startsWith("en."));
    setLang(isEnglish ? "en" : "de");
  }, [pathname]);

  const t = (key: string) => {
    // Pfad im Objekt finden und zurückgeben, z.B. "header.features" -> translations[lang].header.features
    const pathParts = key.split(".");
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

  return (
    <I18nContext.Provider value={{ lang, t, isEnglish: lang === "en" }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
};
