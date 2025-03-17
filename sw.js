const assetsToCache = [
  "/",
  "/index.html",
  "https://cdn-icons-png.flaticon.com/512/4441/4441163.png",
  // Adicione aqui outros assets estáticos do seu projeto
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('app-cache-v1').then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
