const CACHE_NAME = 'caderneta-v1';
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    'https://cdn-icons-png.flaticon.com/512/4441/4441163.png'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request)
            .then(response => response || fetch(e.request))
    );
});
