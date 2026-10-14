// Service Worker para Barbería Fábrica de Muñecos (PWA Offline)
const CACHE_NAME = "fdm-barber-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/images/fdm-hero-team.jpg",
  "./assets/images/fdm-local-salon.jpg",
  "./assets/images/fdm-freestyle-tattoo.jpg",
  "./assets/images/fdm-fade-mural.jpg",
  "./assets/images/fdm-pomadas-debarbas.jpg",
  "./assets/images/fdm-geometrico-360.jpg",
  "./assets/images/fdm-barbero-accion.jpg",
  "./assets/images/fdm-taper-texturizado.jpg",
  "./assets/images/fdm-facial-mascarilla.jpg",
  "./assets/images/fdm-barba-mullet.jpg",
  "./assets/images/fdm-promo-poster.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // En segundo plano actualiza el cache
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.headers.get("accept")?.includes("text/html")) {
          return caches.match("./index.html");
        }
      });
    })
  );
});
