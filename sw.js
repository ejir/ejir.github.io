var cdn = {
  unpkg: 'https://cdn.jsdelivr.net',
  max: 'https://code.aliyun.com'
}

var vendor = {
  bootstrap: 'https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/',
  fontAwesome: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3',
  raven: 'https://unpkg.com/raven-js@3.7.0'
};

var URLS = {
  app: [
    './',
    './x.jpg',
    './index.html',
    './manifest.json'
  ]
}

var CACHE_NAMES = {
  app: 'app-cache-v3',
  vendor: 'vendor-cache-v5'
};

function isVendor(url) {
  return url.startsWith(cdn.unpkg) || url.startsWith(cdn.max);
}

function cacheAll(cacheName, urls) {
  return caches.open(cacheName).then((cache) => cache.addAll(urls));
}

function addToCache(cacheName, request, response) {
  if (response.ok) {
    var clone = response.clone()
    caches.open(cacheName).then((cache) => cache.put(request, clone));
  }
  return response;
}

function lookupCache(request) {
  return caches.match(request).then(function(cachedResponse) {
    if (!cachedResponse) {
      throw Error(`${request.url} not found in cache`);
    }
    return cachedResponse;
  });
}

function fetchThenCache(request, cacheName) {
  var fetchRequest = fetch(request);
  // add to cache, but don't block resolve of this promise on caching
  fetchRequest.then((response) => addToCache(cacheName, request, response));
  return fetchRequest;
}

function raceRequest(request, cacheName) {
  var attempts = [
    fetchThenCache(request, cacheName),
    lookupCache(request)
  ];
  return new Promise(function(resolve, reject) {
    // resolve this promise once one resolves
    attempts.forEach((attempt) => attempt.then(resolve));
    // reject if all promises reject
    attempts.reduce((verdict, attempt) => verdict.catch(() => attempt))
      .catch(() => reject(Error('Unable to resolve request from network or cache.')));
  })
}

function cleanupCache() {
  var validKeys = Object.keys(CACHE_NAMES).map((key) => CACHE_NAMES[key]);
  return caches.keys().then((localKeys) => Promise.all(
    localKeys.map((key) => {
      if (validKeys.indexOf(key) === -1) { // key no longer in our list
        return caches.delete(key);
      }
    })
  ));
}

self.addEventListener('install', function(evt) {
  var cachingCompleted = Promise.all([
    cacheAll(CACHE_NAMES.app, URLS.app)
  ]).then(() => self.skipWaiting())

  evt.waitUntil(cachingCompleted);
});

self.addEventListener('activate', function(evt) {
  evt.waitUntil(Promise.all([
    cleanupCache(),
    self.clients.claim() // claim immediately so the page can be controlled by the sw immediately
  ]));
});

self.addEventListener('fetch', function(evt) {
  var request = evt.request;
  var response;

  // only handle GET requests
  if (request.method !== 'GET') return;


    // app request: race cache/fetch (bonus: update in background)
    response = raceRequest(request, CACHE_NAMES.app);
  
  evt.respondWith(response);
});
