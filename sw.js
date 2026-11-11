/* Soberforever service worker — offline cache + tap-to-apply updates (app v1.17) */
const CACHE = 'soberforever-v18';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './walks.json'];
self.addEventListener('install', e => {
  // No automatic skipWaiting: a new version waits until the user taps
  // "Tap to update" in the app (or fully closes and reopens it).
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('message', e => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // walks.json updates daily from Health Connect — always go to the network
  // first so fresh numbers show without an app update. (A cache-busting
  // query string would NOT work here: the handler below matches with
  // ignoreSearch, so only a network-first branch defeats it.)
  try {
    if (new URL(e.request.url).pathname.endsWith('/walks.json')) {
      e.respondWith(
        fetch(e.request).then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
          return res;
        }).catch(() => caches.match(e.request))
      );
      return;
    }
  } catch (err) { /* fall through to the cache-first path */ }
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
