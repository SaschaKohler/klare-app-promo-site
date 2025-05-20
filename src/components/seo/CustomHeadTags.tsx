export default function CustomHeadTags() {
  return (
    <>
      {/* Google Search-Spezifische Favicon-Konfiguration */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      
      {/* Google nutzt diese spezifische Größe für Suchergebnisse */}
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
      
      {/* Verhindern, dass Google das Next.js-Standardsymbol nutzt */}
      <meta name="google" content="notranslate" />
    </>
  );
}