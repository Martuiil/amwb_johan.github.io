self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('first-app')
        .then(function(cache) {
          cache.addAll([
            '/amwb_johan.github.io',
            '/amwb_johan.github.io/favicon.ico',
            '/amwb_johan.github.io/index.html',
            '/amwb_johan.github.io/src/css/app.css',
            '/amwb_johan.github.io/src/js/app.js',
            '/amwb_johan.github.io/src/images/icon-48x48.png',
            '/amwb_johan.github.io/src/images/icon-96x96.png',
            '/amwb_johan.github.io/src/images/icon-144x144.png',
            '/amwb_johan.github.io/src/images/icon-192x192.png',
            '/amwb_johan.github.io/src/images/icon-384x384.png',
            '/amwb_johan.github.io/src/images/icon-512x512.png'
          ])
        })
    );
    return self.clients.claim();
  });
  
  
self.addEventListener('fetch', function(event) {
event.respondWith(
    caches.match(event.request)
    .then(function(res) {
        return res;
    })
);
});
