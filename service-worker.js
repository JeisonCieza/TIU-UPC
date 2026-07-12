const CACHE = "mi-app-v2";

const archivos = [
    "./",
    "./index.html",
    "./main.css",
    "./main.js",
    "./manifest.json",
    "./imgs/fondo-org.png",
    "./imgs/fondo3.png",
    "./imgs/perfil.png",
    "./icons/logo_upc.webp",
    "./fonts/BebasNeue-Regular.ttf",
    "./fonts/solano-gothic-mvb-bold.ttf",
    "./fonts/PublicSans-VariableFont_wght.ttf"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE).then(cache => {
            return cache.addAll(archivos);
        })
    )
});

self.addEventListener("fetch", event => {

    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request);
        })
    );
});