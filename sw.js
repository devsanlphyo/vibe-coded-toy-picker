const CACHE_NAME = 'toy-picker-v4';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './css/style.css',
  './js/audio.js',
  './js/toys.js',
  './js/claw.js',
  './js/physics.js',
  './js/collection.js',
  './js/main.js',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.19.0/matter.min.js'
];

// Install Event: Pre-cache core assets
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[PWA ServiceWorker] Pre-caching v4 assets');
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.warn('[PWA ServiceWorker] Pre-cache non-fatal warning:', err);
      });
    })
  );
});

// Activate Event: Clean up stale caches & claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[PWA ServiceWorker] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network First with Offline Cache Fallback
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // If offline or network fails, fallback to cached version
        return caches.match(event.request);
      })
  );
});
