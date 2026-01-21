const CACHE_NAME = "ihao-pwa-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./photoshop.png",
  "./coreldraw.png",
  "./Photoshop_qr_code.png",
  "./CorelDraw_qr_code.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
