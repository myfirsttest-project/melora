const CACHE_NAME = "melora-cache-v1";
const OFFLINE_URL = "/offline.html";

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                "/",
                "/index",
                "/event",
                "/about",
                 OFFLINE_URL,
                "/program",
                "/manifest.json",
                "/favicon.ico",
            ]);
        })
    );
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
        )
    );
    self.clients.claim();
});


self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
        event.respondWith(
            caches.match(event.request).then((response) => response || caches.match(OFFLINE_URL))
        );
        return;
    }

    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});