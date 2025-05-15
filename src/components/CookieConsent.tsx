"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render on client-side
  if (!mounted) return null;

  return (
    <>
      <Script
        id="cookie-consent-script"
        src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          window.cookieconsent.initialise({
            palette: {
              popup: {
                background: "#35363a" // Match to your site's dark theme
              },
              button: {
                background: "#55d6aa" // Match to KLARE Methode accent color
              }
            },
            theme: "edgeless",
            position: "bottom-right",
            content: {
              message: "Diese Website verwendet Cookies, um Ihr Erlebnis mit der KLARE Methode zu verbessern.",
              dismiss: "Verstanden!",
              link: "Mehr erfahren",
              href: "/datenschutz" // Link to your privacy policy
            }
          });
        }}
      />
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
    </>
  );
}
