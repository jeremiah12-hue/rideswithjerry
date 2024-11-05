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
          './save.js',
          './password.js',
          './check.js',
          './cars.json',
          './animatev2.js',
          './gallery/home_img/comfort.jpg',
          './gallery/home_img/design.jpg',
          './gallery/home_img/efficiency.jpg',
          './gallery/home_img/price.jpg',
          './gallery/home_img/quality.jpg',
          './gallery/home_img/safety.jpg',
          './gallery/home_img/welcome1.jpg',
          './gallery/home_img/welcome2.jpg',
          './gallery/brands_rated/audi.jpg',
          './gallery/brands_rated/bmw.jpg',
          './gallery/brands_rated/chevrolet.jpg',
          './gallery/brands_rated/dodge.jpg',
          './gallery/brands_rated/ford.jpg',
          './gallery/brands_rated/honda.jpg',
          './gallery/brands_rated/hyundai.jpg',
          './gallery/brands_rated/jeep.jpg',
          './gallery/brands_rated/kia.jpg',
          './gallery/brands_rated/land.jpg',
          './gallery/brands_rated/lexus.jpg',
          './gallery/brands_rated/mercedes.jpg',
          './gallery/brands_rated/mitsubishi.jpg',
          './gallery/brands_rated/nissan.jpg',
          './gallery/brands_rated/peugeot.jpg',
          './gallery/brands_rated/porsche.jpg',
          './gallery/brands_rated/rolls_royce.jpg',
          './gallery/brands_rated/RWJ.jpg',
          './gallery/brands_rated/tesla.jpg',
          './gallery/brands_rated/toyota.jpg',
          './gallery/brands_rated/volkswagen.jpg',
          './gallery/buy_img/buy1.jpg',
          './gallery/buy_img/buy2.jpg',
          './gallery/buy_img/buy3.jpg',
          './gallery/cars_rated/bmwX5.jpg',
          './gallery/cars_rated/camryUx.jpg',
          './gallery/cars_rated/HondaAccord.jpg',
          './gallery/cars_rated/LexusUx.jpg',
          './gallery/cars_rated/toyotaRav.jpg',
          './gallery/save_img/save1.jpg',
          './gallery/save_img/save2.jpg',
          './gallery/save_img/save3.jpg',
          './gallery/save_img/save4.jpg',
          './gallery/sell_img/sell1.jpg',
          './gallery/sell_img/sell2.jpg',
          './gallery/favicon.ico',
          './gallery/news_img/news_home.jpg',
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