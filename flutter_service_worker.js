'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "84539ad6e9e6aca41cf4ea6bc1f8994f",
"assets/AssetManifest.bin.json": "a156e4224a9ee6d79b2b70a1cb8476a2",
"assets/AssetManifest.json": "8daeb1ae776d4da7241ddab6ded0dc9b",
"assets/assets/empte_img/emptyImage.png": "6bb2d2c61bb39c0c571b95ae009acc4b",
"assets/assets/empte_img/im_emptyIcon_1.png": "545e13e1cabb2faf7eac9801f64f7f89",
"assets/assets/empte_img/im_emptyIcon_2.png": "bcff5e23332d92e74562eaf8f47c7bd1",
"assets/assets/empte_img/im_emptyIcon_3.png": "2698f6c94cec9450ced97499b70a34d6",
"assets/assets/images/alrumansiah_splash.png": "e0ca1f237265431c00b34988ff813f37",
"assets/assets/images/alsultan_icon.png": "2befb75b36ea3c1b3fa115dfd4be1137",
"assets/assets/images/circleavatorItem.png": "e0ca1f237265431c00b34988ff813f37",
"assets/assets/images/empty-cart.jpeg": "cf10f0380b91824873dbb617d99f048f",
"assets/assets/images/on_boarding1.png": "fe45b10551a8749b34d7c2357d5dcf65",
"assets/assets/images/on_boarding2.png": "64834733e5888fbae5666a5cc9c1d8b8",
"assets/assets/images/on_boarding3.png": "2a45695b3ab17b47a69113d5dfe78356",
"assets/assets/images/res_image.jpg": "e606af2523b4ca83fa41bb88e3454c43",
"assets/assets/images/res_image1.png": "576caa46940a074151ba8b402e9acae3",
"assets/assets/images/shafi_icon.JPG": "b21d9b148bf0161bdab01f3e6eba0581",
"assets/assets/images/shafi_icon_back.png": "51fdc0452c6cb82620dba20a4ddef831",
"assets/assets/images/sultan_background.png": "20a75751431d338d54e8873cef08bdd8",
"assets/assets/images/yahala.png": "cc51c1a3dfbd5d2194ebd1a25cb852a6",
"assets/FontManifest.json": "5e652c27b57cf1a903557acddaa45cc9",
"assets/fonts/MaterialIcons-Regular.otf": "6bccf28adc42395b24d79e1c3da1841d",
"assets/NOTICES": "548be954a0cf2db5f2c4bcf3f72ab747",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/empty_widget_fork/assets/images/emptyImage.png": "6bb2d2c61bb39c0c571b95ae009acc4b",
"assets/packages/empty_widget_fork/assets/images/im_emptyIcon_1.png": "545e13e1cabb2faf7eac9801f64f7f89",
"assets/packages/empty_widget_fork/assets/images/im_emptyIcon_2.png": "bcff5e23332d92e74562eaf8f47c7bd1",
"assets/packages/empty_widget_fork/assets/images/im_emptyIcon_3.png": "2698f6c94cec9450ced97499b70a34d6",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"assets/packages/persian_fonts/lib/fonts/Sahel.ttf": "25836e3d164d3f4a8d05f2c3cdbaf4af",
"assets/packages/persian_fonts/lib/fonts/Samim.ttf": "dff4f93c6702d280ea2acf25fb4270ae",
"assets/packages/persian_fonts/lib/fonts/Shabnam.ttf": "7b18a4a8f65b3f5eac92df3c91fe4400",
"assets/packages/persian_fonts/lib/fonts/Vazir.ttf": "c456d8064fe9bac3444d70a744446f90",
"assets/packages/persian_fonts/lib/fonts/Yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "59617274f048d33589f71030af76e8fb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2877ac824a1b18f1d80e8708747f66a0",
"/": "2877ac824a1b18f1d80e8708747f66a0",
"main.dart.js": "65863c7ce3f85d23c3ee1f063c45497d",
"manifest.json": "f01a5d85a47f9ac7b91337a9aa12c6b8",
"version.json": "7824446cff0434f62dc81f457396d34b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
