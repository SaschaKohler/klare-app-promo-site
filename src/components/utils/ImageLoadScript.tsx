import React from 'react';
import Script from 'next/script';

export default function ImageLoadScript() {
  return (
    <>
      <Script
        id="image-load-script"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            // Prüfe, ob die Verbindung langsam ist und lade ggf. niedrigere Qualität
            function isSlowConnection() {
              return (
                navigator.connection?.saveData === true ||
                (navigator.connection?.effectiveType && 
                 ['slow-2g', '2g', '3g'].includes(navigator.connection.effectiveType))
              );
            }
            
            // Prüfe, ob der Nutzer auf Datenvermeidung eingestellt hat
            function userPrefersSavingData() {
              return navigator.connection?.saveData === true;
            }
            
            // Sammeln von Bildlade-Metriken
            function trackImageLoading() {
              window.addEventListener('load', () => {
                // Messe LCP (Largest Contentful Paint) Element
                if (window.PerformanceObserver) {
                  const observer = new PerformanceObserver((entryList) => {
                    const entries = entryList.getEntries();
                    if (entries.length > 0) {
                      const lcp = entries[entries.length - 1];
                      if (lcp.element?.tagName?.toLowerCase() === 'img') {
                        // LCP ist ein Bild, vermerken
                        console.log('LCP ist ein Bild:', lcp.element.src);
                      }
                    }
                  });
                  observer.observe({ type: 'largest-contentful-paint', buffered: true });
                }
                
                // Finde alle Bilder, die eine data-load-time haben
                const allImages = document.querySelectorAll('img[data-load-time]');
                allImages.forEach(img => {
                  const loadTime = parseInt(img.getAttribute('data-load-time'));
                  if (loadTime && loadTime > 1000) {
                    // Bilder, die über 1 Sekunde geladen haben, werden geloggt
                    console.log('Langsam geladenes Bild:', img.src, loadTime + 'ms');
                  }
                });
              });
            }
            
            // Event-Listener für alle Bilder, um Ladezeiten zu messen
            function setupImageLoadTracking() {
              document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('img').forEach(img => {
                  const startTime = performance.now();
                  img.addEventListener('load', () => {
                    const loadTime = Math.round(performance.now() - startTime);
                    img.setAttribute('data-load-time', loadTime.toString());
                  });
                });
              });
            }
            
            // Initialisierung
            if (!isSlowConnection() && !userPrefersSavingData()) {
              // Normales Laden von Bildern mit hoher Qualität
            } else {
              // Logge, dass niedrigere Qualität geladen wird
              console.log('Bilder in niedrigerer Qualität geladen aufgrund von Verbindungsqualität');
            }
            
            // Tracking einrichten
            trackImageLoading();
            setupImageLoadTracking();
          `,
        }}
      />
    </>
  );
}
