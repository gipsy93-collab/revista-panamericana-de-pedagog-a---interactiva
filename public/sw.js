/**
 * Service Worker para RPP Interactivo
 * Estrategia: Cache First, luego Network
 */

const CACHE_NAME = 'rpp-interactivo-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/rpp_cover_42_1773790366603.png',
];

// Instalación: Precachear assets estáticos
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((err) => {
        console.error('[SW] Cache failed:', err);
      })
  );
  
  // Activar inmediatamente
  self.skipWaiting();
});

// Activación: Limpiar caches antiguas
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  
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

// Fetch: Estrategia Cache First
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Solo manejar GET requests
  if (request.method !== 'GET') return;
  
  // Estrategia diferente según el tipo de request
  if (isStaticAsset(request)) {
    // Cache First para assets estáticos
    event.respondWith(cacheFirst(request));
  } else if (isAPIRequest(request)) {
    // Network First para APIs
    event.respondWith(networkFirst(request));
  }
  // Dejar pasar otros requests normalmente
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

async function cacheFirst(request) {
  const cached = await caches.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    
    return response;
  } catch (error) {
    console.error('[SW] Fetch failed:', error);
    // Aquí podríamos retornar una página offline
    throw error;
  }
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

// Evento de mensaje para comunicación con la app
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
