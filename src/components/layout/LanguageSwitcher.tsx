"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<"de" | "en">("de");

  useEffect(() => {
    // Ermitteln der aktuellen Sprache nur basierend auf dem Pfad
    const isEnglish = pathname.startsWith("/en");
    setCurrentLang(isEnglish ? "en" : "de");
  }, [pathname]);

  const getTargetUrl = (targetLang: "de" | "en") => {
    if (targetLang === "en") {
      // Wechsel zu Englisch: /en/ dem aktuellen Pfad voranstellen
      if (pathname.startsWith("/en")) {
        return pathname; // Bereits auf Englisch
      }
      return `/en${pathname === "/" ? "" : pathname}`;
    } else {
      // Wechsel zu Deutsch: /en/ vom Pfad entfernen
      if (pathname.startsWith("/en")) {
        const germanPath = pathname.substring(3);
        return germanPath || "/";
      }
      return pathname; // Bereits auf Deutsch
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <Link
        href={getTargetUrl("de")}
        className={`px-2 py-1 text-sm font-medium rounded ${
          currentLang === "de"
            ? "bg-klare-k text-white"
            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        }`}
      >
        DE
      </Link>
      <Link
        href={getTargetUrl("en")}
        className={`px-2 py-1 text-sm font-medium rounded ${
          currentLang === "en"
            ? "bg-klare-k text-white"
            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        }`}
      >
        EN
      </Link>
    </div>
  );
}
