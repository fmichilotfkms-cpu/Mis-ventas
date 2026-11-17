const VERSION = 'mis-ventas-v4';
const SHELL = ['./', './index.html', './anime.umd.min.js', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './apple-touch-icon.png'];
const FONTS = 'mis-ventas-fonts';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('mis-ventas-') && k !== VERSION && k !== FONTS).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { c.put(req, res.clone()); return res; }).catch(() => hit))));
    return;
  }

  if (url.origin !== location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;

  e.respondWith(caches.open(VERSION).then(c => c.match(req, { ignoreSearch: true }).then(hit => {
    const net = fetch(req).then(res => { if (res && res.ok) c.put(req, res.clone()); return res; }).catch(() => null);
    if (hit) { try { e.waitUntil(net); } catch (_) {} return hit; }
    return net.then(res => res || (req.mode === 'navigate' ? c.match('./index.html') : Response.error()));
  })));
});
