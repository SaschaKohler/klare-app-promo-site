FROM node:20-alpine AS base

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Installiere Abhängigkeiten für scharfe Build-Performance
RUN apk add --no-cache libc6-compat

# Optimierung für npm ci und Caching
FROM base AS dependencies
COPY package.json package-lock.json ./
# Nur Produktionsabhängigkeiten installieren für geringeren Speicherverbrauch
# Wir müssen --include=dev nutzen, weil einige Build-Abhängigkeiten benötigt werden
RUN npm ci --include=dev

# Build-Stage
FROM dependencies AS builder
# Sharp für bessere Image-Optimierung
RUN npm install --platform=linux --arch=x64 sharp

# Kopiere alle Dateien der Anwendung
COPY . .
# .env.local wird normalerweise nicht im Repository gespeichert, aber falls nötig
# COPY .env.local ./

# Build mit erhöhtem Arbeitsspeicher für bessere Image-Verarbeitung
ENV NODE_OPTIONS="--max_old_space_size=4096"
RUN npm run build

# Produktions-Stage
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

# Erstelle einen nicht-root Benutzer für mehr Sicherheit
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Kopiere das gebaute Projekt und die notwendigen Dateien
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Kopiere die .env.local Datei für Umgebungsvariablen (nur für lokales Testing)
# Für Produktion sollten Umgebungsvariablen über Kubernetes bereitgestellt werden
# COPY --from=builder /app/.env.local ./

# Setze die Berechtigungen für den nicht-root Benutzer
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Starte die Next.js-Anwendung
CMD ["node", "server.js"]