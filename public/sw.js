// Service Worker für aggressives Image-Caching
// public/sw.js

const CACHE_NAME = 'klare-app-images-v1';
const IMAGE_CACHE_NAME = 'klare-app-images-cache';

// URLs die gecacht werden sollen
const STATIC_CACHE_URLS = [
  '/images/app-screenshots-organized/',
];

// Installiere Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_CACHE_URLS);
    })
  );
});

// Aktiviere Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== IMAGE_CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch Event - Cache-First Strategy für Images
self.addEventListener('fetch', (event) => {
  // Nur für Image-Requests
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response) {
            // Cache Hit - return cached version
            return response;
          }
          
          // Cache Miss - fetch from network and cache
          return fetch(event.request).then((networkResponse) => {
            // Clone the response because it can only be consumed once
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }).catch(() => {
            // Network failed - try to serve fallback
            if (event.request.url.includes('app-screenshots')) {
              return new Response(
                '<svg width="280" height="580" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" text-anchor="middle" fill="#9ca3af">Image Loading...</text></svg>',
                { headers: { 'Content-Type': 'image/svg+xml' } }
              );
            }
          });
        });
      })
    );
  }
});
