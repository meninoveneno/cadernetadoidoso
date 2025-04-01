const assetsToCache = [
  "/",
  "/index.html",
  "https://raw.githubusercontent.com/meninoveneno/cadernetadoidoso/36e9c11990c7d3f23f991b31c589a8b308ff3318/icon.PNG",
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
