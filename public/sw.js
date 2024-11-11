self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '../views/pages/index.ejs',
          './styles.css',
          './style_message.css',
          './script_main.js',
          './script.js',
          './search.js',
          './password.js',
          './cars.json',
          './animatev2.js',
          './gallery/home_img/comfort.avif',
          './gallery/home_img/design.avif',
          './gallery/home_img/efficiency.avif',
          './gallery/home_img/price.avif',
          './gallery/home_img/quality.avif',
          './gallery/home_img/safety.avif',
          './gallery/home_img/welcome1.avif',
          './gallery/home_img/welcome2.avif',
          './gallery/brands_rated/audi.avif',
          './gallery/brands_rated/bmw.avif',
          './gallery/brands_rated/chevrolet.avif',
          './gallery/brands_rated/dodge.avif',
          './gallery/brands_rated/ford.avif',
          './gallery/brands_rated/honda.avif',
          './gallery/brands_rated/hyundai.avif',
          './gallery/brands_rated/jeep.avif',
          './gallery/brands_rated/kia.avif',
          './gallery/brands_rated/land.avif',
          './gallery/brands_rated/lexus.avif',
          './gallery/brands_rated/mercedes.avif',
          './gallery/brands_rated/mitsubishi.avif',
          './gallery/brands_rated/nissan.avif',
          './gallery/brands_rated/peugeot.avif',
          './gallery/brands_rated/porsche.avif',
          './gallery/brands_rated/rolls_royce.avif',
          './gallery/brands_rated/RWJ.avif',
          './gallery/brands_rated/tesla.avif',
          './gallery/brands_rated/toyota.avif',
          './gallery/brands_rated/volkswagen.avif',
          './gallery/buy_img/buy1.jpg',
          './gallery/buy_img/buy2.jpg',
          './gallery/buy_img/buy3.jpg',
          './gallery/cars_rated/bmwX5.avif',
          './gallery/cars_rated/camryUx.avif',
          './gallery/cars_rated/HondaAccord.avif',
          './gallery/cars_rated/LexusUx.avif',
          './gallery/cars_rated/toyotaRav.avif',
          './gallery/save_img/save1.jpg',
          './gallery/save_img/save2.jpg',
          './gallery/save_img/save3.jpg',
          './gallery/save_img/save4.jpg',
          './gallery/sell_img/sell1.jpg',
          './gallery/sell_img/sell2.jpg',
          './gallery/favicon.ico',
          './gallery/news_img/news_home.avif',
        ]);
      })
    );
});
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });