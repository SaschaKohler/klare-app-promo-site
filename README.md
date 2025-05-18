# klare-app-promo-site

Die KLARE-App Promo-Website ist jetzt mit Mehrsprachigkeit ausgestattet!

## Neu hinzugefügte Features

1. **Mehrsprachige Unterstützung**:
   - Deutschsprachige Seite auf `klare-methode.app` (Hauptdomain)
   - Englischsprachige Seite auf `en.klare-methode.app` (Subdomain)
   - Übersetzungsdateien in `/src/lib/i18n/`

2. **Sprachumschalter**:
   - Einfaches Wechseln zwischen Deutsch und Englisch
   - Intelligente Erkennung der aktuellen Sprache basierend auf Subdomain

3. **CLEAR-Logo für die englische Version**:
   - Anpassung mit CLEAR (statt KLARE) in der englischen Version
   - Gleiche Farbschemata, aber anders angeordnet:
     - C: Blau (wie K)
     - L: Violett (unverändert)
     - E: Pink (wie A)
     - A: Amber (wie R)
     - R: Grün (wie E)

4. **Übersetzungen**:
   - Alle Texte sind in beiden Sprachen verfügbar
   - Klare Übersetzungsstruktur für einfache Wartung und Erweiterung

## Setup für Mehrsprachigkeit

### Struktur

- `/src/lib/i18n/de.ts`: Deutsche Übersetzungen
- `/src/lib/i18n/en.ts`: Englische Übersetzungen
- `/src/lib/i18n/I18nProvider.tsx`: Kontext-Provider für Übersetzungen
- `/src/lib/i18n/index.ts`: Export der Übersetzungsfunktionen
- `/src/app/en/`: Englische Version der Website

### Verwendung in Komponenten

```tsx
// HeroSection.tsx oder andere Komponenten
"use client";

import { useI18n } from "@/lib/i18n/I18nProvider";

export default function Component() {
  const { t, isEnglish } = useI18n();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
      
      {/* Bedingte Logik basierend auf der Sprache */}
      {isEnglish ? (
        <ClearSvg letter="C" />
      ) : (
        <KlareSvg letter="K" />
      )}
    </div>
  );
}
```

## Deployment

Die Website sollte auf einer Domain eingerichtet werden, die Subdomains unterstützt:

- Hauptdomain: `klare-methode.app` (deutsche Version)
- Subdomain: `en.klare-methode.app` (englische Version)

Die Spracherkennung basiert auf der Subdomain, daher ist es wichtig, dass beide URLs korrekt konfiguriert sind.

## Erweiterung um weitere Sprachen

Um weitere Sprachen hinzuzufügen:

1. Neue Übersetzungsdatei erstellen (z.B. `fr.ts` für Französisch)
2. Übersetzungsdatei in `index.ts` importieren und in `translations` hinzufügen
3. Den `Language`-Typ erweitern: `export type Language = 'de' | 'en' | 'fr';`
4. Neue Subdomain einrichten (z.B. `fr.klare-methode.app`)
5. Spracherkennung in `I18nProvider.tsx` anpassen

## Server-Konfiguration

Für die korrekte Funktion der subdomainbasierten Mehrsprachigkeit muss der Server so konfiguriert sein, dass er alle Anfragen an die gleiche Next.js-Anwendung weiterleitet, unabhängig von der Subdomain.

### Beispiel nginx-Konfiguration

```nginx
server {
    listen 80;
    server_name klare-methode.app en.klare-methode.app;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## Bekannte Einschränkungen

- Da die Spracherkennung auf Client-Side JavaScript basiert, kann es beim ersten Laden der Seite zu einem kurzen "Flackern" kommen, bevor die richtige Sprache angezeigt wird.
- Für eine vollständig SEO-optimierte Lösung wäre eine statische Generierung pro Sprache besser, was in einem späteren Update umgesetzt werden könnte.
