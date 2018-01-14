importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "404.html",
    "revision": "6f2c6888e9f517bf8389b3622a5fcea7"
  },
  {
    "url": "app/app-19d4485784.js",
    "revision": "19d44857842ee242a10c970b18e6f7c2"
  },
  {
    "url": "app/vendor-f3aa146537.js",
    "revision": "f3aa14653755e031fbecffdff6c06325"
  },
  {
    "url": "content/css/main-c0011a7f7a.css",
    "revision": "d41b1b11818c0a31648ce55156a2c771"
  },
  {
    "url": "content/css/vendor-f05d0565f7.css",
    "revision": "f05d0565f71f51dd1862a36ac9c85b67"
  },
  {
    "url": "content/fonts/default-skin-b257fa9c5a.svg",
    "revision": "b257fa9c5ac8c515ac4d77a667ce2943"
  },
  {
    "url": "content/images/bg-a8dade884b.jpg",
    "revision": "a8dade884b07a25cb5ea5386975a2aef"
  },
  {
    "url": "content/images/dota_6-d49b3c9698.83d.jpg",
    "revision": "d49b3c96988eb3a3a1b1e9db2308345e"
  },
  {
    "url": "content/images/dota_v6-d2d14c2f27.85g_lod.jpg",
    "revision": "d2d14c2f27fe9063b9f64c31786cea28"
  },
  {
    "url": "content/images/dota-6-12e4abed56.86-ai.jpg",
    "revision": "12e4abed563c7e8641111e842c5b2482"
  },
  {
    "url": "content/images/dota-imba-map-032099831f.jpg",
    "revision": "032099831fe3467dd85dfdab2e5a1bf2"
  },
  {
    "url": "content/images/lightbox/default-skin-3ba3b1beb0.svg",
    "revision": "3ba3b1beb0f9bc74d63ecb7e084dfedc"
  },
  {
    "url": "content/images/lightbox/default-skin-e3f799c6de.png",
    "revision": "e3f799c6dec9af194c86decdf7392405"
  },
  {
    "url": "content/images/lightbox/preloader-e34aafbb48.gif",
    "revision": "e34aafbb485a96eaf2a789b2bf3af6fe"
  },
  {
    "url": "content/images/overlays/01-3888ecc030.png",
    "revision": "3888ecc03086ee849014409a07864ba6"
  },
  {
    "url": "content/images/overlays/02-06cefc0cc8.png",
    "revision": "06cefc0cc8bd642ccdd3135e650197dd"
  },
  {
    "url": "content/images/overlays/03-0a1396ef34.png",
    "revision": "0a1396ef34d321f8c447c68c5056fc1f"
  },
  {
    "url": "content/images/overlays/04-51f1b9c3e2.png",
    "revision": "51f1b9c3e256a651da5cf5dfe8204461"
  },
  {
    "url": "content/images/overlays/05-acb4b13ad6.png",
    "revision": "acb4b13ad6bf258c24daa53e9ca2f747"
  },
  {
    "url": "content/images/overlays/06-e25cdb8cfc.png",
    "revision": "e25cdb8cfc9019880c36c107d92e6f38"
  },
  {
    "url": "content/images/overlays/07-d7874b3604.png",
    "revision": "d7874b3604b242cc9945c3d652c80d87"
  },
  {
    "url": "content/images/overlays/08-b85f136c7d.png",
    "revision": "b85f136c7dbbd034469077f99a31019d"
  },
  {
    "url": "content/images/overlays/09-a67596aabd.png",
    "revision": "a67596aabdbed532dab23829db04495b"
  },
  {
    "url": "content/js/bootstrap.min.js",
    "revision": "dcdbfb1add69b22e5a78418ee63b7778"
  },
  {
    "url": "content/js/jquery-2.2.3.min.js",
    "revision": "33cabfa15c1060aaa3d207c653afb1ee"
  },
  {
    "url": "content/js/mdb.min.js",
    "revision": "4a94ebf710a9ee07d478216f4d09b369"
  },
  {
    "url": "content/js/tether.js",
    "revision": "acb52c8b03fc145332fe7c334f6c4b01"
  },
  {
    "url": "content/js/tether.min.js",
    "revision": "dbdaedc86c547ce682ae96274b172997"
  },
  {
    "url": "index.html",
    "revision": "336ace178c60e2a69a84cc88c341699c"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
