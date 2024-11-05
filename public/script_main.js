let input_txt_toggle = document.getElementsByClassName("input_txt");
let keyboard_txt_toggle = document.getElementsByClassName("keyboard_txt");
let keyboard_icon_toggle = document.getElementsByClassName("keyboard_icon");

let deals_img_toggle = document.getElementsByClassName("deals_img");

let sell_img_toggle = document.getElementsByClassName("sell_img");

const navBar = document.getElementById('top_nav_txt');
let scrollPosition = 0;


let input_txt = document.getElementsByClassName("input_txt");

document.getElementsByClassName("top_nav_bar")[0].addEventListener('click', () =>  {
    top_nav.style.display = "none";
});

function autoScroll() {
    scrollPosition += 1;
    navBar.style.transform = `translateX(${scrollPosition}px)`;
    requestAnimationFrame(autoScroll);
};
autoScroll();

let image = document.getElementById("slider_img");
let imageText = document.getElementById("slider_txt");

let image_wide = document.getElementById("slider_img_wide");
let imageText_wide = document.getElementById("slider_txt_wide");

let images = [
  { src: "gallery/home_img/welcome1.jpg", text: "What are your needs?" },
  { src: "gallery/home_img/welcome2.jpg", text: "What are your wants and pain points?" }
];

let currentIndex = 0;
let currentIndex_wide = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  image.src = images[currentIndex].src;
  imageText.innerHTML = images[currentIndex].text;
}

function changeImage_wide() {
    currentIndex_wide = (currentIndex_wide + 1) % images.length;
    image_wide.src = images[currentIndex_wide].src;
    imageText_wide.innerHTML = images[currentIndex_wide].text;
}

setInterval(changeImage, 10000);
setInterval(changeImage_wide, 9000);




let efficiency_img_wide = document.getElementById("efficiency_img");
let efficiency_txt_wide = document.getElementById("efficiency_txt");
let efficiency_images = [
    { src: "gallery/home_img/efficiency.jpg", text: "Fuel Efficiency in Motion" },
    { src: "gallery/home_img/quality.jpg", text: "Precision Craftsmanship, Inside and Out" }
];
let EfficiencycurrentIndex = 0;
function changeEfficiency_wide() {
    EfficiencycurrentIndex = (EfficiencycurrentIndex + 1) % efficiency_images.length;
    efficiency_img_wide.src = efficiency_images[EfficiencycurrentIndex].src;
    efficiency_txt_wide.innerHTML = efficiency_images[EfficiencycurrentIndex].text;
}
setInterval(changeEfficiency_wide, 10000);


let safety_img_wide = document.getElementById("safety_img");
let safety_txt_wide = document.getElementById("safety_txt");
let safety_images = [
    { src: "gallery/home_img/safety.jpg", text: "Protected on the Road" },
    { src: "gallery/home_img/design.jpg", text: "Sleek, Sophisticated, and Stunning" }
];
let SafetycurrentIndex = 0;
function changeSafety_wide() {
    SafetycurrentIndex = (SafetycurrentIndex + 1) % safety_images.length;
    safety_img_wide.src = safety_images[SafetycurrentIndex].src;
    safety_txt_wide.innerHTML = safety_images[SafetycurrentIndex].text;
}
setInterval(changeSafety_wide, 10000);



let price_img_wide = document.getElementById("price_img");
let price_txt_wide = document.getElementById("price_txt");
let price_images = [
    { src: "gallery/home_img/price.jpg", text: "Save Money, Drive Happy" },
    { src: "gallery/home_img/comfort.jpg", text: "Relax, Unwind, and Enjoy the Ride" }
];
let PricecurrentIndex = 0;
function changePrice_wide() {
    PricecurrentIndex = (PricecurrentIndex + 1) % price_images.length;
    price_img_wide.src = price_images[PricecurrentIndex].src;
    price_txt_wide.innerHTML = price_images[PricecurrentIndex].text;
}
setInterval(changePrice_wide, 10000);


let top_rated_img = document.getElementById("top_rated_img");
let top_rated_txt = document.getElementById("top_rated_txt");
let top_rated_images = [
    { src: "gallery/brands_rated/RWJ.jpg", text: "Top Rated" },
    { src: "gallery/brands_rated/porsche.jpg", text: "Luxury Brand" },
    { src: "gallery/brands_rated/toyota.jpg", text: "Luxury and Non-Luxury Brand" },
    { src: "gallery/brands_rated/bmw.jpg", text: "Luxury Brand" },
    { src: "gallery/brands_rated/mercedes.jpg", text: "Luxury Brand" },
    { src: "gallery/brands_rated/audi.jpg", text: "Luxury Brand" },
    { src: "gallery/brands_rated/honda.jpg", text: "Non-Luxury Brand" },
    { src: "gallery/brands_rated/tesla.jpg", text: "Electric and Hybrid Brand" }
];
let RatingscurrentIndex = 0;
function top_rating() {
    RatingscurrentIndex = (RatingscurrentIndex + 1) % top_rated_images.length;
    top_rated_img.src = top_rated_images[RatingscurrentIndex].src;
    top_rated_txt.innerHTML = top_rated_images[RatingscurrentIndex].text;
}
setInterval(top_rating, 5000);


let car_rated_img = document.getElementById("car_rated_img");
let car_rated_txt = document.getElementById("car_rated_txt");
let car_rated_images = [
    { src: "gallery/brands_rated/RWJ.jpg", text: "Top Rated" },
    { src: "gallery/cars_rated/bmwX5.jpg", text: "Luxury Cars" },
    { src: "gallery/cars_rated/toyotaRav.jpg", text: "Non-Luxury Cars" },
    { src: "gallery/cars_rated/HondaAccord.jpg", text: "Non-Luxury Cars" },
    { src: "gallery/cars_rated/LexusUx.jpg", text: "Electric and Hybrid Cars" },
    { src: "gallery/cars_rated/camryUx.jpg", text: "Electric and Hybrid Cars" }
];
let carcurrentIndex = 0;
function car_rating() {
    carcurrentIndex = (carcurrentIndex + 1) % car_rated_images.length;
    car_rated_img.src = car_rated_images[carcurrentIndex].src;
    car_rated_txt.innerHTML = car_rated_images[carcurrentIndex].text;
}
setInterval(car_rating, 5000);


let shop_image = document.getElementById("shop_slider_img");
let shopText = document.getElementById("shop_slider_txt");

let shop_image_wide = document.getElementById("wide_shop_slider_img");
let shop_imageText_wide = document.getElementById("wide_shop_slider_txt");

let shop_all_images = [
  { src: "gallery/brands_rated/RWJ.jpg", text: "Perfect Rides" }
];

let shop_currentIndex = 0;
let shop_currentIndex_wide = 0;

function shop_changeImage() {
    shop_currentIndex = (shop_currentIndex + 1) % shop_all_images.length;
    shop_image.src = shop_all_images[shop_currentIndex].src;
    shopText.innerHTML = shop_all_images[shop_currentIndex].text;
}

function shop_changeImage_wide() {
    shop_currentIndex_wide = (shop_currentIndex_wide + 1) % shop_all_images.length;
    shop_image_wide.src = shop_all_images[shop_currentIndex_wide].src;
    shop_imageText_wide.innerHTML = shop_all_images[shop_currentIndex_wide].text;
}

setInterval(shop_changeImage, 20000);
setInterval(shop_changeImage_wide, 20000);



let save_shop_image = document.getElementById("save_shop_slider_img");
let save_shopText = document.getElementById("save_shop_slider_txt");

let save_shop_image_wide = document.getElementById("save_wide_shop_slider_img");
let save_shop_imageText_wide = document.getElementById("save_wide_shop_slider_txt");

let save_shop_all_images = [
  { src: "gallery/brands_rated/RWJ.jpg", text: "Welcome" },
  { src: "gallery/save_img/save1.jpg", text: "To" },
  { src: "gallery/save_img/save2.jpg", text: "My" },
  { src: "gallery/save_img/save3.jpg", text: "Rides" },
  { src: "gallery/save_img/save4.jpg", text: "Garage" }
];

let save_shop_currentIndex = 0;
let save_shop_currentIndex_wide = 0;

function save_shop_changeImage() {
    save_shop_currentIndex = (save_shop_currentIndex + 1) % save_shop_all_images.length;
    save_shop_image.src = save_shop_all_images[save_shop_currentIndex].src;
    save_shopText.innerHTML = save_shop_all_images[save_shop_currentIndex].text;
}

function save_shop_changeImage_wide() {
    save_shop_currentIndex_wide = (save_shop_currentIndex_wide + 1) % save_shop_all_images.length;
    save_shop_image_wide.src = save_shop_all_images[save_shop_currentIndex_wide].src;
    save_shop_imageText_wide.innerHTML = save_shop_all_images[save_shop_currentIndex_wide].text;
}

setInterval(save_shop_changeImage, 6000);
setInterval(save_shop_changeImage_wide, 6000);


// deals
for (const key of deals_img_toggle) {
    let deals_all_images = [
        { src: "gallery/buy_img/buy1.jpg" },
        { src: "gallery/buy_img/buy2.jpg" },
        { src: "gallery/buy_img/buy3.jpg" }
    ];

    let deals_current_index = 0;

    function deals_func() {
        deals_current_index = (deals_current_index + 1) % deals_all_images.length;
        key.src = deals_all_images[deals_current_index].src;
    }
    
    setInterval(deals_func, 8000);
}


// sell
for (const key of sell_img_toggle) {
    let sell_all_images = [
        { src: "gallery/sell_img/sell1.jpg" },
        { src: "gallery/sell_img/sell2.jpg" }
    ];

    let sell_current_index = 0;

    function sell_func() {
        sell_current_index = (sell_current_index + 1) % sell_all_images.length;
        key.src = sell_all_images[sell_current_index].src;
    }
    
    setInterval(sell_func, 8000);
}


// keyboard
for (const key of input_txt_toggle) {
    key.addEventListener('input', () =>  {
        for (const key_txt of keyboard_txt_toggle) {
            key_txt.style.display = "none";
        }
        for (const key_icon of keyboard_icon_toggle) {
            key_icon.style.display = "none";
        }
    })

    key.addEventListener('mouseleave', () =>  {
        for (const key_txt of keyboard_txt_toggle) {
            key_txt.style.display = "inline";
        }
        for (const key_icon of keyboard_icon_toggle) {
            key_icon.style.display = "inline";
        }
    })
}








let fundToggle = document.getElementsByClassName('fundToggle');
let fundDisplay = document.getElementsByClassName('fundDisplay');

let trackToggle = document.getElementsByClassName('trackToggle');
let trackDisplay = document.getElementsByClassName('trackDisplay');

let userToggle = document.getElementsByClassName('userToggle');
let userDisplay = document.getElementsByClassName('userDisplay');


for (const fundToggleKey of fundToggle)  {
    for (const fundDisplayKey of fundDisplay)  {

        for (const trackDisplayKey of trackDisplay)  {
            for (const userDisplayKey of userDisplay)  {

                fundToggleKey.addEventListener('click', () =>  {
                    if (fundDisplayKey.style.display != "flex" || trackDisplayKey.style.display != "none" || userDisplayKey.style.display != "none")  {
                        fundDisplayKey.style.display = "flex";
                        trackDisplayKey.style.display = "none";
                        userDisplayKey.style.display = "none";
                    }
                })
            }
        }
    }
}

for (const trackToggleKey of trackToggle)  {
    for (const trackDisplayKey of trackDisplay)  {

        for (const fundDisplayKey of fundDisplay)  {
            for (const userDisplayKey of userDisplay)  {

                trackToggleKey.addEventListener('click', () =>  {
                    if (fundDisplayKey.style.display != "none" || trackDisplayKey.style.display != "flex" || userDisplayKey.style.display != "none")  {
                        fundDisplayKey.style.display = "none";
                        trackDisplayKey.style.display = "flex";
                        userDisplayKey.style.display = "none";
                    }
                })
            }
        }
    }
}

for (const userToggleKey of userToggle)  {
    for (const userDisplayKey of userDisplay)  {

        for (const fundDisplayKey of fundDisplay)  {
            for (const trackDisplayKey of trackDisplay)  {

                userToggleKey.addEventListener('click', () =>  {
                    if (fundDisplayKey.style.display != "none" || trackDisplayKey.style.display != "none" || userDisplayKey.style.display != "flex")  {
                        fundDisplayKey.style.display = "none";
                        trackDisplayKey.style.display = "none";
                        userDisplayKey.style.display = "flex";
                    }
                })
            }
        }
    }
}



