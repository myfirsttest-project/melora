const CACHE_NAME = "melora-cache-v1";

const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/event/index.html",
  "/about/index.html",
  "/program/index.html",
  "/admission/index.html",
  "/offline.html",
];

// Install → cache important pages
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate → clean old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch → cache first, fallback to offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((res) => {
      return (
        res ||
        fetch(event.request).catch(() => caches.match("/offline.html"))
      );
    })
  );
});