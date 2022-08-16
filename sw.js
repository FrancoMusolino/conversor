import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) => url.href === 'https://api.frankfurter.app/currencies',
  new NetworkFirst({ cacheName: 'api-response' })
);

// self.addEventListener('install', (e) => {
//   self.skipWaiting();
// });
