/**
 * Service Worker para RPP Interactivo
 * Estrategia: Network-First para HTML, Stale-While-Revalidate para assets
 */

const CACHE_NAME = 'rpp-interactivo-v2'; // Incrementamos versión para forzar actualización inicial

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/rpp_cover_42_1773790366603.png',
];

// Instalación: Precachear assets estáticos
self.addEventListener('install', (event) => {
  console.log('[SW] Installing v2...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => {
        console.error('[SW] Cache failed:', err);
      })
  );
  
  // Activar inmediatamente para reemplazar al SW viejo
  self.skipWaiting();
});

// Activación: Limpiar caches antiguas
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating v2...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          })
      );
    })
  );
  
  self.clients.claim();
});

// Fetch: Manejar requests
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  if (request.method !== 'GET') return;

  // 1. HTML y Navegación -> Siempre NETWORK FIRST
  // Esto garantiza que el navegador cargue el index.html nuevo con los nombres de .js y .css correctos (hash)
  if (request.mode === 'navigate' || url.pathname === '/' || url.pathname === '/index.html') {
    event.respondWith(networkFirst(request));
    return;
  }
  
  // 2. Assets estáticos (JS, CSS, Imágenes) -> STALE-WHILE-REVALIDATE
  // Carga rápido desde la caché, pero actualiza la caché silenciosamente en segundo plano
  if (isStaticAsset(request)) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  } 
  
  // 3. APIs -> Network First
  if (isAPIRequest(request)) {
    event.respondWith(networkFirst(request));
    return;
  }
});

// Helpers
function isStaticAsset(request) {
  const url = new URL(request.url);
  const staticExtensions = /\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|otf|eot)$/;
  return staticExtensions.test(url.pathname);
}

function isAPIRequest(request) {
  const url = new URL(request.url);
  return url.pathname.includes('/api/') || 
         url.hostname.includes('rss') ||
         url.hostname.includes('feed');
}

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  
  const fetchPromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch((err) => {
    console.error('[SW] Fetch failed in staleWhileRevalidate:', err);
  });
  
  // Devuelve el cache si existe, o si no, espera la red
  return cached || fetchPromise;
}

// Evento de mensaje para comunicación con la app
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
