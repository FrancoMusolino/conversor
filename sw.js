import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({ url }) =>
    url.origin === 'https://api.frankfurter.app' &&
    url.pathname.startsWith('/currencies'),
  new StaleWhileRevalidate({ cacheName: 'currencies-api-response' })
);

//BroadcastChannel crea un canal Pub/Sub entre el Service Worker y todos los browser context conectados al mismo

self.addEventListener('install', () => {
  const channel = new BroadcastChannel('service-worker-channel');
  channel.postMessage({ promptToReload: true });

  channel.onmessage = (message) => {
    if (message.data.skipWaiting) {
      self.skipWaiting();
    }
  };
});

// It should Work? Lets try
