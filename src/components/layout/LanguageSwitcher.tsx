"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<"de" | "en">("de");

  useEffect(() => {
    // Ermitteln der aktuellen Sprache basierend auf der URL
    const isEnglish =
      pathname.startsWith("/en") ||
      (typeof window !== "undefined" &&
        window.location.hostname.startsWith("en."));
    setCurrentLang(isEnglish ? "en" : "de");
  }, [pathname]);

  const getTargetUrl = () => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      const protocol = window.location.protocol;
      const path = window.location.pathname;

      // Prüfen ob wir auf localhost sind
      const isLocalhost = hostname === "localhost" || hostname === "127.0.0.1";

      if (isLocalhost) {
        // Beim Localhost verwenden wir Pfad-basierte Sprache
        if (currentLang === "de") {
          // Wechsel zu Englisch - Stelle sicher, dass wir nicht doppelt /en haben
          const cleanPath = path.replace(/^\/en/, "");
          return `/en${cleanPath}`;
        } else {
          // Wechsel zu Deutsch - Entferne /en Präfix
          return path.replace(/^\/en/, "") || "/";
        }
      } else {
        // Bei Produktions-Domain verwenden wir Subdomain-basierte Sprache
        if (currentLang === "de") {
          // Wechsel zu Englisch
          return `${protocol}//en.${hostname.replace(/^en\./, "")}${path}`;
        } else {
          // Wechsel zu Deutsch
          return `${protocol}//${hostname.replace(/^en\./, "")}${path}`;
        }
      }
    }
    return "#";
  };

  return (
    <div className="flex items-center space-x-2">
      <Link
        href={currentLang === "en" ? getTargetUrl() : "#"}
        className={`px-2 py-1 text-sm font-medium rounded ${
          currentLang === "de"
            ? "bg-klare-k text-white"
            : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
        }`}
      >
        DE
      </Link>
      <Link
        href={currentLang === "de" ? getTargetUrl() : "#"}
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
