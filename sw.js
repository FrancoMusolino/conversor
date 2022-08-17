import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) =>
    url.origin === 'https://api.frankfurter.app' &&
    url.pathname.startsWith('/currencies'),
  new StaleWhileRevalidate({ cacheName: 'currencies-api' })
);

self.addEventListener('install', () => {
  const channel = new BroadcastChannel('service-worker-channel');
  channel.postMessage({ promptToReload: true });

  channel.onmessage = (message) => {
    if (message.data.skipWaiting) {
      self.skipWaiting();
    }
  };
});
