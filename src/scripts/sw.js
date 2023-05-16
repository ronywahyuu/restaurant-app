import 'regenerator-runtime';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icons/maskable_icon.png',
  './icons/maskable_icon_x48.png',
  './icons/maskable_icon_x72.png',
  './icons/maskable_icon_x96.png',
  './icons/maskable_icon_x128.png',
  './icons/maskable_icon_x192.png',
  './icons/maskable_icon_x384.png',
  './icons/maskable_icon_x512.png',
  // hero
  './images/heros/hero-image_1-large.jpg',
  './images/heros/hero-image_1-small.jpg',
  './images/heros/hero-image_4-large.jpg',
  './images/heros/hero-image_4-small.jpg',
  './index.html',
  './favicon.png',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',

  './35.bundle.js',
  './918.bundle.js',
  './773.bundle.js',
  './521.bundle.js',
  './150.bundle.js',
  './708.bundle.js',
  './869.bundle.js',
  './502.bundle.js',
];

self.addEventListener('install', (event) => {
  // console.log('Installing service worker..');
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  // console.log('Activating service worker...');
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request);
  // event.respondWith(CacheHelper.revalidateCache(event.request));
  if (!(event.request.url.indexOf('http') === 0)) return;

  event.respondWith(CacheHelper.revalidateCache(event.request));
});
