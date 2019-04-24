importScripts("precache-manifest.634e21c428594495cb89b6e2df6c6ff4.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.0/workbox-sw.js");

/* eslint-disable no-undef */

// Write your own Service Worker related code here. You don't need to implement
// caching strategies, as Workbox will auto-inject that part when you build your
// project. This is the perfect place to implement other great SW features.
// (e.g. Web Push, etc...)
workbox.core.clientsClaim();
workbox.precaching.cleanupOutdatedCaches();

// This part is needed by the webpack Workbox plugin to inject the precache manifest.
// See https://developers.google.com/web/tools/workbox/modules/workbox-precaching
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// See https://developers.google.com/web/tools/workbox/modules/workbox-routing
workbox.routing.registerNavigationRoute('/index.html');
workbox.routing.registerRoute(
  new RegExp('/vendor/(?!.*loader).*.js$'),
  new workbox.strategies.StaleWhileRevalidate(),
  'GET'
);

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Uncomment next line to enable offline Google Analytics
// workbox.googleAnalytics.initialize();

