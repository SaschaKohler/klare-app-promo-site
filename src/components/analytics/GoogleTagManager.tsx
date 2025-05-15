"use client";

import Script from "next/script";
import { useEffect } from "react";

// Add global type for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface GoogleTagManagerProps {
  id: string; // GTM container ID
}

const GoogleTagManager = ({ id }: GoogleTagManagerProps) => {
  // Initialize dataLayer
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
  }, []);

  return (
    <>
      {/* Google Tag Manager - Script */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${id}');
          `,
        }}
      />

      {/* Google Tag Manager - NoScript (for browsers with JavaScript disabled) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=${id}"
              height="0" 
              width="0" 
              style="display:none;visibility:hidden">
            </iframe>
          `,
        }}
      />
    </>
  );
};

export default GoogleTagManager;
