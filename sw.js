import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) =>
    url.origin === 'https://api.frankfurter.app' &&
    url.pathname.startsWith('/currencies'),
  new StaleWhileRevalidate({ cacheName: 'api-response' })
);

// self.addEventListener('install', (e) => {
//   self.skipWaiting();
// });
