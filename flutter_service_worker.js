'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "54e528c08f3d3d3f63e5a25e210789ac",
"index.html": "633c6a4832187cdccada2b85fb9ff36a",
"/": "633c6a4832187cdccada2b85fb9ff36a",
"main.dart.js": "51673a7860cac53ef0c54b02d01ee997",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4109c2fdffe97dcc386db09142b4a6cc",
".git/config": "4f5bbb8054f24b4d1e411e2a3347fb5b",
".git/objects/95/4805266d8fd81df3eeff880756c44d87b54650": "ce0323efe3af02cb82338445eee83d1b",
".git/objects/92/a83f9a3f72615f43fc741eaf92bdefec064bda": "ab887538a6b72bf53029a25b440220d3",
".git/objects/66/b8098bb7e772e230b3582f16e83f2b31184125": "e8120e553daa8db54dcef96edc102c10",
".git/objects/66/592a102cbb9555a47675c9ae518723fcc30aaa": "89a864091a64a6f7c0b4f3bcbdf2017e",
".git/objects/3b/b95a26236e0d4e5b3319ca3917fe0ab2ab1eac": "1ae1c546c21cb21ea4d29e7676ea489f",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/05/1ba2f29b3b0dac728d22923dcbeab88cb73886": "f39c28ea5ee5a9c1a1c7f831d220159e",
".git/objects/9c/7281697cd60d5b7f4e237aedfa5c8943faecd2": "ff61ed9441a1550f8da4d38734cfe59d",
".git/objects/9c/b357653ea955e1d3c38d55a275100e9f967119": "52b614db7a6ffb8bf0ed5891e85a5689",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/aebac28865e6bdb9b0bc4b2d327ab9ff8649fa": "0a3cf943a229a2a8304367fce8c4f94a",
".git/objects/b4/a4bed008f10d523e7c43b5f1037755943d764e": "83ec3591bad9ff9227d1afe56c7c7ba2",
".git/objects/d1/d1d0b7802c5354925da9098da1f0c9bac74ab4": "d4d4638dcc121adc009cf895cd0aba3d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/b5888d7345c54824f47d2b1db4303ea920abb1": "e2e0ea7ddace258417aafd66b9c989b4",
".git/objects/e3/568ac4932f33cbb4796cbed77c68926073d87f": "1f2a87ade00d66e5c195df0d5bcc3450",
".git/objects/c6/d294943266b5a0b0d7f645298ad43d6cd72b39": "1968232a0c2694a9accd31f94b5ff00f",
".git/objects/16/6ff4d3d626201c4c206361a0f6d50f632abb4e": "0877db712b7f3022a21010387ac39c7a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/f2856b6f0f867a3bc86ceb06bc384c14fd95c3": "0db8b5888bfb5d5e7dc3a1a2e703e525",
".git/objects/81/74f776ab61450d8efa119365b677f7f531140e": "d5ff2966270553b343df22cffaa01b55",
".git/objects/43/45e40e3604262f875f10f8ee0355f6e0bdbbdd": "ac2ca9df9b93148ae87013c9a10e1d6c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/ccf4a2bb50ebee5b809fdb3a1b07f5a2898c7f": "b0b4ffc8871d8b3da906d65159cf4710",
".git/objects/65/6b5109e041e3af617f7cda472439a08ecee0e7": "b683d276019967b524c1ad2b11afbefd",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/2a7c73067cb198807effa876ba4913c311b560": "b6f0e86caffff0b51424cb5fe986fdfa",
".git/objects/3a/76d9eab095eaf5dc3e42d0420fd5aa5d6532a3": "c37f3ba7437c25472a4d8cc08eab2d1a",
".git/objects/53/8e7040759772683f6deb198b25fb8111527edd": "cb700ad8054deba7a1be1fde518f5315",
".git/objects/5e/a82f010355f7f7ec768ec5177f04481a8cdd4c": "273a43b4e9f921bf26ec9cfc07ec7761",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/8489f3b5d0bfa849fd6486fad8f81d82d64f15": "fd8536f0d4586eab9f198737d00db705",
".git/objects/06/25816954410edef8f25cdbfb7d95643498b875": "36fa39945927bbad65b2a4f0beea83e8",
".git/objects/6c/d81915db4246fca77a42c090cd86e78ef931db": "eec04da393144a32a0b515526f189e33",
".git/objects/0f/aa3678619dd3fe70cc0faef0d605bba5d69de5": "1da2064c3370dc7d197bb75ec82afaca",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/681ce9200e756f74ecdc2e7609185cbd1be21c": "bb0ff748df737b27794e658cc96ac1ac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/5005015533a86d775d5f3430ae4ab43ce882b3": "37261cca837b5156a0044cd028ac0401",
".git/objects/e1/d08e2c542d2bf7d0e3d9ce6b1ed85467114cc2": "a1958f99f0d73273838a2f1710c2d749",
".git/objects/f6/eab96eee7b40ffb060f87412c9044b9b37eba8": "8082d41a799271aaf00f3a314ce72f5e",
".git/objects/e9/76567bf7d6e7cfcd846a6f979794ceae443d00": "54e77d4184836b9360b9b6b374515eb2",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/cb/049c330dc2a25c28c70ba654c5ad59cd1b3ea5": "5b8b3555d26d4822858d734690b65b53",
".git/objects/2d/31c05e1f92f7aa3c56c5f7d0230217d17f83bc": "ee3252d3c00a928ffde8ced8c2f206fc",
".git/objects/83/2fbeef549a0075157ba6160ca8006fca5296d1": "79da40887b9cd361de626387d5d03d60",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/70/f55f7d88a7eaa6833bb5e59b01d571787ae948": "24b6d3853fda95827464860f13ade344",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4f/2437df593f831004a753fd5f9a7f8ab99c885b": "9e6c3d044cac82791cd0e8f99412f21d",
".git/objects/12/117a4e47198d9412df864f65e5c25b2f2c7dd6": "409b756a5e7da8e19829f0534a8ff339",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "4e696edfaecfa565a21b0af046199b6b",
".git/logs/refs/heads/main": "a6a4ab2b24948567c466e97814fa26bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4151b5aee374456a94390d2152d0e449",
".git/index": "d0fa2efb4dc30df849741fc7fa6cfce7",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "fd2220066f1362f688d26a19e2234602",
"assets/NOTICES": "562f03fe9b5d623028cf3ff892d14b88",
"assets/FontManifest.json": "2da28a2f7f57394156f12453629146ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "12b7ca50c9638e2b5bfd1f0ce46e441d",
"assets/fonts/MaterialIcons-Regular.otf": "8648b2193a20106e72cd47c2c7c297db",
"assets/assets/images/download.png": "87fe6fa858e5fde8f59a5d7de367e2fc",
"assets/assets/icons/search.svg": "05d446ea13892155c7ad367bf51c7ef9",
"assets/assets/icons/home.svg": "47c820e8de9251fc8690f7f94ee6deb3",
"assets/assets/icons/logout.svg": "723fd8a2866305b9427e73c2b559dd3f",
"assets/assets/icons/no_connection.svg": "d6fcea3fc1bbb97790b009a708bcc48c",
"assets/assets/icons/qr_scan.svg": "7d8d6265fd26709d491763f2c18cff82",
"assets/assets/icons/search_filled.svg": "98be573b1b2bf0fcea3b917a28d4e179",
"assets/assets/icons/settings.svg": "5a1748b8c2db1ae7b20ed2cd6a613140",
"assets/assets/icons/cart.svg": "1728a99db5f885acae37012962a275ae",
"assets/assets/icons/connection.svg": "29fa38b3f15a306711c6bc831bf3936e",
"assets/assets/icons/add.svg": "461bd58efe5b250b76ea0a139b95cee8",
"assets/assets/icons/orders.svg": "c6382042f9369810a7d20e8361d8dfe6",
"assets/assets/icons/reload.svg": "00ed31098e275c169678e19481e253b8",
"assets/assets/icons/stat.svg": "4a364fbf4b6bc0ba2c298130e47fc8ee",
"assets/assets/icons/printer.svg": "a6f6d0b980be4c7f9051843273976a94",
"assets/assets/icons/customers.svg": "61af4b259f134af8a81d2d7ec9612a75",
"assets/assets/icons/edit.svg": "8f0128c182c4c5d6735f7b629ec7f053",
"assets/assets/icons/sync.svg": "08f21cae08dd84ebe1152769fc459c5f",
"assets/assets/icons/tables.svg": "dc6947e06df1b4df81fb5bb3c489fe08",
"assets/assets/icons/pause.svg": "a137466c802ec3e3aeefdac8d3e2d921",
"assets/assets/icons/CustomIcons.ttf": "2b50c74396e89dac4fc85e1b6bbd4749",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
