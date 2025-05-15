"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if consent was previously given
    const storedConsent = localStorage.getItem("cookieconsent_status");
    if (storedConsent === "dismiss" || storedConsent === "allow") {
      setConsentGiven(true);
    }
  }, []);

  // Only render on client-side
  if (!mounted) return null;

  return (
    <>
      {/* Google Tag Manager - Only loads after consent */}
      {consentGiven && (
        <>
          <Script
            id="google-tag-manager"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-WVVS7S7W'); // Replace GTM-XXXXXXX with your actual GTM ID
              `,
            }}
          />
        </>
      )}

      <Script
        id="cookie-consent-script"
        src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          window.cookieconsent.initialise({
            palette: {
              popup: {
                background: "#35363a", // Match to your site's dark theme
              },
              button: {
                background: "#55d6aa", // Match to KLARE Methode accent color
              },
            },
            theme: "edgeless",
            position: "bottom-right",
            content: {
              message:
                "Diese Website verwendet Cookies, um Ihr Erlebnis mit der KLARE Methode zu verbessern.",
              dismiss: "Verstanden!",
              link: "Mehr erfahren",
              href: "/datenschutz", // Link to your privacy policy
            },
            onStatusChange: function (status: string) {
              if (status === "dismiss" || status === "allow") {
                setConsentGiven(true);
                localStorage.setItem("cookieconsent_status", status);
              }
            },
          });
        }}
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css"
      />

      {/* Google Tag Manager NoScript (for browsers with JavaScript disabled) */}
      {consentGiven && (
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WVVS7S7W" // Replace GTM-XXXXXXX with your actual GTM ID
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
    </>
  );
}
