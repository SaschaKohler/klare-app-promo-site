# Favicon-Konfiguration für KLARE Methode App

Für die korrekte Anzeige von Favicons in Suchmaschinenergebnissen und Browser-Tabs werden verschiedene 
Favicon-Dateien in unterschiedlichen Formaten benötigt.

## Erforderliche Dateien

Die folgenden Dateien müssen im `public` Verzeichnis der Website vorhanden sein:

1. `favicon.ico` - Für ältere Browser und als Fallback
2. `favicon.svg` - Das SVG-Favicon (bereits vorhanden)
3. `favicon-16x16.png` - 16x16 PNG Version
4. `favicon-32x32.png` - 32x32 PNG Version
5. `apple-touch-icon.png` - 180x180 PNG für Apple-Geräte
6. `android-chrome-192x192.png` - 192x192 PNG für Android
7. `android-chrome-512x512.png` - 512x512 PNG für Android
8. `site.webmanifest` - Web App Manifest (bereits erstellt)

## Generierungsmethoden

### Option 1: Verwendung eines Online-Generators

1. Besuche https://realfavicongenerator.net/
2. Lade die `favicon.svg` Datei hoch
3. Passe die Einstellungen an und generiere alle Dateien
4. Lade das Paket herunter und extrahiere die Dateien ins `public` Verzeichnis

### Option 2: Verwendung von ImageMagick (Kommandozeile)

Installiere ImageMagick (falls noch nicht installiert):
```bash
brew install imagemagick
```

Führe dann das bereitgestellte Skript aus:
```bash
chmod +x ./scripts/generate-favicons.sh
./scripts/generate-favicons.sh
```

### Option 3: Verwendung eines Grafik-Editors

Öffne die SVG-Datei in einem Grafik-Editor wie Figma, Sketch oder Adobe Illustrator und exportiere
sie in den verschiedenen Größen.

## Überprüfung

Nach dem Hinzufügen aller Favicon-Dateien und der Aktualisierung der `layout.tsx` sollte das Favicon:
1. Im Browser-Tab angezeigt werden
2. In Lesezeichen erscheinen
3. In Suchmaschinenergebnissen korrekt dargestellt werden

Hinweis: Suchmaschinenergebnisse werden möglicherweise nicht sofort aktualisiert,
da Suchmaschinen die Website erst erneut crawlen müssen.
