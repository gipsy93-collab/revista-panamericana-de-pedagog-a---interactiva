// Self-destructing Service Worker to fix the caching issue
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('[SW] Eliminando caché estancada:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('[SW] Cachés limpias. Desregistrando Service Worker...');
      return self.registration.unregister();
    })
  );
});

// Bypass network
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
