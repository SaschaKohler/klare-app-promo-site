"use client";

import Script from "next/script";
import { useEffect } from "react";

const GoogleTagManagerDirect = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    
    // Log initialization to console
    console.log("GTM Direct: Initializing dataLayer");
  }, []);

  return (
    <>
      {/* Google Tag Manager - Script */}
      <Script
        id="gtm-script-direct"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WVVS7S7W');
          `,
        }}
      />

      {/* Google Tag Manager - NoScript (for browsers with JavaScript disabled) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe 
              src="https://www.googletagmanager.com/ns.html?id=GTM-WVVS7S7W"
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

export default GoogleTagManagerDirect;
