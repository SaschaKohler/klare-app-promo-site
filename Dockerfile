FROM node:20-alpine AS base

# Arbeitsverzeichnis im Container setzen
WORKDIR /app

# Installiere Abhängigkeiten für bessere Performance
RUN apk add --no-cache libc6-compat curl

# Abhängigkeiten-Stage
FROM base AS dependencies
COPY package.json package-lock.json ./
# Saubere Installation der Abhängigkeiten
RUN npm ci --include=dev

# Build-Stage
FROM dependencies AS builder
# Sharp für bessere Image-Optimierung (Linux/x64 spezifisch)
RUN npm install --platform=linux --arch=x64 sharp

# Kopiere alle Quellcode-Dateien
COPY . .

# Führe Bildoptimierungsskript explizit aus
# RUN npm run optimize-all

# Build mit erhöhtem Arbeitsspeicher 
ENV NODE_OPTIONS="--max_old_space_size=4096"
RUN npm run build

# Production-Stage - schlank und sicher
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Erstelle einen Nicht-Root-Benutzer für Sicherheit
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    # Erstelle benötigte Verzeichnisse mit passenden Berechtigungen
    mkdir -p /app/.next/cache/images && \
    mkdir -p /tmp && \
    # Setze Berechtigungen für wichtige Verzeichnisse
    chown -R nextjs:nodejs /app && \
    chown -R nextjs:nodejs /tmp

# Kopiere nur die notwendigen Dateien
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Setze den Nicht-Root-Benutzer als aktiven Benutzer
USER nextjs

# Gesundheitscheck für Container-Orchestrierung
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Starte die Next.js-Anwendung
CMD ["node", "server.js"]
