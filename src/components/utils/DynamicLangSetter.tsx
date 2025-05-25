"use client";

import { useEffect } from "react";
import { useI18n } from "@/lib/i18n/I18nProvider";

export default function DynamicLangSetter() {
  const { lang } = useI18n();

  useEffect(() => {
    // HTML lang-Attribut dynamisch setzen
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return null; // Diese Komponente rendert nichts sichtbares
}
