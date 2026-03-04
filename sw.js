self.addEventListener('install', (e) => {
  console.log('App Ready Offline');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
