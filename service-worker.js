/* eslint-disable no-restricted-globals */
const CACHE_NAME = "adhkar-quran-v1";
const ASSETS = [
  "./index.html",
  "./styles.css",
  "./app.js",
  "./quran-long.js",
  "./quran-extra-50.js",
  "./register-sw.js",
  "./manifest.webmanifest",
  "./icon.svg",
  "./al-quran-quran-clipart-collection-27.webp",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        ASSETS.map((url) =>
          cache.add(url).catch(() => {
            /* أيقونة الويب قد تكون غير موجودة في بعض النسخ */
          }),
        ),
      ),
    ),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))),
    ),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const copy = res.clone();
        if (res.ok) {
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return res;
      })
      .catch(() => caches.match(event.request)),
  );
});
