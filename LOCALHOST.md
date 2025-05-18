### How to Use Localhost with the Multilingual Setup

This website supports both subdomain-based language switching (for production) and path-based language switching (for local development).

#### Running Locally

When running the application on `localhost`, the language switching works based on the URL path:

- Default (German): `http://localhost:3000/`
- English: `http://localhost:3000/en/`

Language detection and switching is handled automatically.

#### Next.js Configuration

For this to work correctly, we've made the following changes:

1. Created an `/src/app/en/` directory with its own `page.tsx` for English content.

2. Updated the `LanguageSwitcher.tsx` to detect localhost and use path-based navigation:

```typescript
// Inside getTargetUrl() function:
const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
    
if (isLocalhost) {
  // Use path-based language for localhost
  if (currentLang === 'de') {
    // Switch to English
    return `/en${path.replace(/^\/en/, '')}`;
  } else {
    // Switch to German
    return path.replace(/^\/en/, '');
  }
} else {
  // Use subdomain-based language for production
  if (currentLang === 'de') {
    // Switch to English
    return `${protocol}//en.${hostname.replace(/^en\./, '')}${path}`;
  } else {
    // Switch to German
    return `${protocol}//${hostname.replace(/^en\./, '')}${path}`;
  }
}
```

3. Ensured the `I18nProvider` can detect language both by path prefix and hostname.

#### Running the Development Server

To test locally, simply run:

```bash
npm run dev
# or
yarn dev
```

Then navigate to:
- `http://localhost:3000/` for German
- `http://localhost:3000/en/` for English

The language switcher will automatically convert between these paths when developing locally.