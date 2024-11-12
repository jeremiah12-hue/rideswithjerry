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
  { src: "gallery/home_img/welcome1.avif", text: "What are your needs?" },
  { src: "gallery/home_img/welcome2.avif", text: "What are your wants and pain points?" }
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
    { src: "gallery/home_img/efficiency.avif", text: "Fuel Efficiency in Motion" },
    { src: "gallery/home_img/quality.avif", text: "Precision Craftsmanship, Inside and Out" }
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
    { src: "gallery/home_img/safety.avif", text: "Protected on the Road" },
    { src: "gallery/home_img/design.avif", text: "Sleek, Sophisticated, and Stunning" }
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
    { src: "gallery/home_img/price.avif", text: "Save Money, Drive Happy" },
    { src: "gallery/home_img/comfort.avif", text: "Relax, Unwind, and Enjoy the Ride" }
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
    { src: "gallery/brands_rated/RWJ.avif", text: "Top Rated" },
    { src: "gallery/brands_rated/porsche.avif", text: "Luxury Brand" },
    { src: "gallery/brands_rated/toyota.avif", text: "Luxury and Non-Luxury Brand" },
    { src: "gallery/brands_rated/bmw.avif", text: "Luxury Brand" },
    { src: "gallery/brands_rated/mercedes.avif", text: "Luxury Brand" },
    { src: "gallery/brands_rated/audi.avif", text: "Luxury Brand" },
    { src: "gallery/brands_rated/honda.avif", text: "Non-Luxury Brand" },
    { src: "gallery/brands_rated/tesla.avif", text: "Electric and Hybrid Brand" }
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
    { src: "gallery/brands_rated/RWJ.avif", text: "Top Rated" },
    { src: "gallery/cars_rated/bmwX5.avif", text: "Luxury Cars" },
    { src: "gallery/cars_rated/toyotaRav.avif", text: "Non-Luxury Cars" },
    { src: "gallery/cars_rated/HondaAccord.avif", text: "Non-Luxury Cars" },
    { src: "gallery/cars_rated/LexusUx.avif", text: "Electric and Hybrid Cars" },
    { src: "gallery/cars_rated/camryUx.avif", text: "Electric and Hybrid Cars" }
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
  { src: "gallery/brands_rated/RWJ.avif", text: "Perfect Rides" }
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











document.addEventListener('DOMContentLoaded', function() {

    const mobile_top_nav = document.getElementById('mobile_top_nav');
    const wide_top_nav = document.getElementById('wide_top_nav');
    const sideDiv = document.getElementsByClassName('user_right_nav')[0];

    window.addEventListener('scroll', function() {
        const navRect = mobile_top_nav.getBoundingClientRect();

        const wide_navRect = wide_top_nav.getBoundingClientRect();
    
        if (navRect.bottom < 0 || wide_navRect.bottom < 0) {
            sideDiv.style.right = '0';
        } else {
            sideDiv.style.right = '-200px';
        }
    })

})

let off_user_right_nav = document.getElementById('off_user_right_nav');
let on_user_right_nav = document.getElementById('on_user_right_nav');

let user_cont = document.getElementsByClassName('username_container')[0];
let call_cont = document.getElementsByClassName('call_cont')[0];

off_user_right_nav.addEventListener('click', () =>  {
    user_cont.style.display = 'none';
    call_cont.style.display = 'none';

    off_user_right_nav.style.display = 'none';

    on_user_right_nav.style.display = 'block';
})

on_user_right_nav.addEventListener('click', () =>  {
    user_cont.style.display = 'flex';
    call_cont.style.display = 'flex';

    on_user_right_nav.style.display = 'none';

    off_user_right_nav.style.display = 'block';
})


document.getElementById('close_pls_login_cont').addEventListener('click', () =>  {
    document.getElementById('pls_login_bg').style.top = '-300vh';
})

document.getElementById('toggle_logged_user_message').addEventListener('click', () => {
    fetch('/api/auth/check-login', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include' // Include cookies in the request
    })
    .then(response => response.json())
    .then(data => {
        if (data.isLoggedIn) {
            // User is logged in, proceed with authenticated actions
            window.location.href = '/message';
        } else {
            // Show the login prompt if the URL is not /message
            document.getElementById('pls_login_bg').style.top = '0vh';
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('toggle_logged_user_saved_products').addEventListener('click', () => {
    fetch('/api/auth/check-login', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include' // Include cookies in the request
    }) 
    .then(response => response.json())
    .then(data => {
        if (data.isLoggedIn) {
            // User is logged in, proceed with authenticated actions
            window.location.href = '/product-save';
        } else {
            // Show the login prompt if the URL is not /message
            document.getElementById('pls_login_bg').style.top = '0vh';
        }
    })
    .catch(error => console.error('Error:', error));
});



fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        document.getElementById('mobile_logged_user_username').innerText = data.username;
        document.getElementById('dual_side_logged_user_username').innerText = data.username;

        document.getElementById('mobile_acc_username').value = data.username;
        document.getElementById('wide_acc_username').value = data.username;

        document.getElementById('mobile_acc_country').value= data.country;
        document.getElementById('wide_acc_country').value = data.country;

        document.getElementById('mobile_acc_city').value = data.city;
        document.getElementById('wide_acc_city').value = data.city;

        document.getElementById('mobile_acc_contact').value = data.contact;
        document.getElementById('wide_acc_contact').value = data.contact;

        document.getElementById('mobile_acc_email').value = data.email;
        document.getElementById('wide_acc_email').value = data.email;
    })
.catch(error => console.error('Error fetching data:', error));





function formatExpirationDate(input) {
    // Remove any non-digit characters
    let value = input.value.replace(/\D/g, '');
    
    // If the value is longer than 4, truncate it to 4
    if (value.length > 4) {
        value = value.slice(0, 4);
    }
    
    // Add '/' after the first two digits
    if (value.length >= 3) {
        value = value.slice(0, 2) + '/' + value.slice(2);
    }
    
    // Update the input value
    input.value = value;
}

const expirationInputs = document.getElementsByClassName('expiration-date');
const errorContainers = document.getElementsByClassName('expire-error-message');

// Function to validate expiration date
function validateExpirationDate(input, container) {
    const expirationValue = input.value;

    // Check if the input length is 5 (MM/YY format)
    if (expirationValue.length === 5) {
        // Get the current date
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1; // Months are 0-based
        const currentYear = currentDate.getFullYear() % 100; // Get last two digits of the year

        // Parse the expiration date
        const [inputMonth, inputYear] = expirationValue.split('/').map(Number);

        // Check if the input date is valid
        if (inputYear < currentYear || (inputYear === currentYear && inputMonth < currentMonth)) {
            container.style.display = 'flex'; // Show error message
        } else {
            container.style.display = 'none'; // Hide error message
        }
    } else {
        container.style.display = 'none'; // Hide error message if input is not complete
    }
}

// Attach event listeners if elements exist
if (expirationInputs.length > 0 && errorContainers.length > 0) {
    for (let i = 0; i < expirationInputs.length; i++) {
        const expirationInput = expirationInputs[i];
        const errorContainer = errorContainers[i];

        expirationInput.addEventListener('input', function() {
            formatExpirationDate(this); // Format the input value
            validateExpirationDate(this, errorContainer);
        });
    }
}



document.addEventListener('DOMContentLoaded', function() {
    function formatCardNumber(value) {
        // Remove all non-digit characters
        value = value.replace(/\D/g, '');
        console.log('Formatted value (digits only):', value);
    
        // Add spaces after every 4 digits
        const formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
        console.log('Formatted value (with spaces):', formattedValue);
        
        return formattedValue;
    }
    
    // Function to validate card number
    function validateCardNumber(cardNumber) {
        // Remove spaces and hyphens
        cardNumber = cardNumber.replace(/[\s-]/g, '');
        console.log('Card number for validation (no spaces/hyphens):', cardNumber);
    
        // Regular expression for card number validation
        const cardNumberPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35[0-9]{3})[0-9]{11})$/;
    
        // Check if the card number matches the pattern
        const isValidFormat = cardNumberPattern.test(cardNumber);
        console.log('Is card number valid format?', isValidFormat);
        
        if (!isValidFormat) {
            return false; // Invalid card number format
        }
    
        // Luhn algorithm check
        const isLuhnValid = luhnCheck(cardNumber);
        console.log('Is card number valid according to Luhn algorithm?', isLuhnValid);
        
        return isLuhnValid;
    }
    
    // Luhn algorithm implementation
    function luhnCheck(cardNumber) {
        let sum = 0;
        let alternate = false;
    
        // Loop through the card number from right to left
        for (let i = cardNumber.length - 1; i >= 0; i--) {
            let n = parseInt(cardNumber.charAt(i), 10);
            console.log(`Current digit (from right): ${n}, Alternate: ${alternate}`);
    
            if (alternate) {
                n *= 2;
                if (n > 9) {
                    n -= 9;
                }
            }
            sum += n;
            alternate = !alternate;
            console.log('Current sum:', sum);
        }
    
        const isValid = sum % 10 === 0; // Valid if sum is divisible by 10
        console.log('Final sum:', sum, 'Is valid:', isValid);
        return isValid;
    }
    
    // Event listener for card number input
    const cardNumberInputs = document.getElementsByClassName('card-number');
    const errorMessageDiv = document.querySelector('.mobile-card-error-message'); 
    const wide_errorMessageDiv = document.querySelector('.wide-card-error-message');
    
    for (let input of cardNumberInputs) {
        input.addEventListener('input', function() {
            // Format the input value
            this.value = formatCardNumber(this.value);
    
            // Validate the card number
            const cardNumber = this.value;
            
            if (validateCardNumber(cardNumber)) {
                errorMessageDiv.style.display = 'none';
                wide_errorMessageDiv.style.display = 'none';
            } else {
                errorMessageDiv.style.display = 'block';
                wide_errorMessageDiv.style.display = 'block';
            }
        });
    }
})


document.addEventListener('DOMContentLoaded', function() {
    let amountSelectContainers = document.getElementsByClassName('amount');
    let paymentContainers = document.getElementsByClassName('choose_payment_method');

    let wide_currency = document.getElementById('wide_currency');
    let mobile_currency = document.getElementById('mobile_currency');
    let mobile_selected_currency = document.getElementById('mobile_selected_currency');
    let wide_selected_currency = document.getElementById('wide_selected_currency');

    let mobile_funded_amount = document.getElementById('mobile_funded_amount');
    let wide_funded_amount = document.getElementById('wide_funded_amount');

    let mobile_transaction_fees = document.getElementById('mobile_transaction_fees');
    let wide_transaction_fees = document.getElementById('wide_transaction_fees');

    let mobile_total_amount = document.getElementById('mobile_total_amount');
    let wide_total_amount = document.getElementById('wide_total_amount');

    let withdrawAmount = document.getElementsByClassName('withdrawAmount');

    // Function to show the payment container
    function showPaymentContainer() {
        for (let paymentContainer of paymentContainers) {
            paymentContainer.style.display = 'flex';
        }

        mobile_selected_currency.innerHTML = mobile_currency.value;
        wide_selected_currency.innerHTML = wide_currency.value;
    }

    function calculateTotals() {
        // Clear previous values
        mobile_transaction_fees.innerHTML = '';
        wide_transaction_fees.innerHTML = '';
        mobile_total_amount.innerHTML = '';
        wide_total_amount.innerHTML = '';

        // Get funded amounts and parse them
        let mobile_funded = parseFloat(mobile_funded_amount.innerHTML.trim());
        let wide_funded = parseFloat(wide_funded_amount.innerHTML.trim());

        // Check if funded amounts are valid numbers
        if (isNaN(mobile_funded) || isNaN(wide_funded)) {
            console.error("Invalid funded amounts");
            return; // Exit if funded amounts are not valid
        }

        // Handle mobile currency
        if (mobile_currency.value === 'USD') {
            mobile_transaction_fees.innerHTML = '0.25';
            mobile_total_amount.innerHTML = (0.25 + mobile_funded).toFixed(2);
        } else if (mobile_currency.value === 'NGN') {
            mobile_transaction_fees.innerHTML = '0.98';
            mobile_total_amount.innerHTML = (0.98 + mobile_funded).toFixed(2);
        }

        // Handle wide currency
        if (wide_currency.value === 'USD') {
            wide_transaction_fees.innerHTML = '0.25';
            wide_total_amount.innerHTML = (0.25 + wide_funded).toFixed(2);
        } else if (wide_currency.value === 'NGN') {
            wide_transaction_fees.innerHTML = '0.98';
            wide_total_amount.innerHTML = (0.98 + wide_funded).toFixed(2);
        }
    }

    // Add event listeners for currency changes
    mobile_currency.addEventListener('change', calculateTotals);
    wide_currency.addEventListener('change', calculateTotals);

    // Add event listeners to each amount input container
    for (let i = 0; i < amountSelectContainers.length; i++) {
        amountSelectContainers[i].addEventListener('input', () => {
            // Only show payment containers if there is input
            if (amountSelectContainers[i].value.trim() !== '') {
                showPaymentContainer();
            }

            // Update the funded amounts
            mobile_funded_amount.innerHTML = amountSelectContainers[i].value;
            wide_funded_amount.innerHTML = amountSelectContainers[i].value;

            // Recalculate totals whenever the funded amount changes
            calculateTotals();
        });
    }

    for (let i = 0; i < withdrawAmount.length; i++) {
        withdrawAmount[i].addEventListener('input', () => {

            // Update the funded amounts
            mobile_funded_amount.innerHTML = withdrawAmount[i].value;
            wide_funded_amount.innerHTML = withdrawAmount[i].value;

            // Recalculate totals whenever the funded amount changes
            calculateTotals();
        });
    }

    // Add input event listeners to funded amount inputs
    mobile_funded_amount.addEventListener('input', calculateTotals);
    wide_funded_amount.addEventListener('input', calculateTotals);
});

document.addEventListener('DOMContentLoaded', function() {
    let cardSelectContainers = document.getElementsByClassName('card_select');
    let cardContainers = document.getElementsByClassName('add_card_container');
    let transaction_summary_container = document.getElementsByClassName('transaction_summary_container');

    // Function to toggle the display of the card container
    function toggleCardContainer(index) {
        if (cardContainers[index].style.display !== 'flex') {
            cardContainers[index].style.display = 'flex';
            transaction_summary_container[index].style.display = 'none';
        } else {
            cardContainers[index].style.display = 'none';
            transaction_summary_container[index].style.display = 'none';
        }
    }

    // Add event listeners to each card select container
    for (let i = 0; i < cardSelectContainers.length; i++) {
        cardSelectContainers[i].addEventListener('change', () => {
            toggleCardContainer(i);
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let cardNameContainers = document.getElementsByClassName('cardholder_name');
    let transaction_summary_container = document.getElementsByClassName('transaction_summary_container');
    let expire_error_message = document.getElementsByClassName('expire-error-message');
    let card_error_message = document.getElementsByClassName('card-error-message');
    let card_number = document.getElementsByClassName('card-number');
    let expiration_date = document.getElementsByClassName('expiration-date');
    let cvv = document.getElementsByClassName('cvv');

    // Function to toggle the display of the card container
    function toggleSummaryContainer(index) {
        // Check if all conditions are met
        const iscardNameContainersValid = cardNameContainers[index].value.trim() !== '';
        const isCardNumberValid = card_number[index].value.trim() !== '';
        const isExpirationDateValid = expiration_date[index].value.trim() !== '';
        const isCvvValid = cvv[index].value.trim() !== '';
        const isExpireErrorVisible = expire_error_message[index].style.display === 'flex';
        const isCardErrorVisible = card_error_message[index].style.display === 'flex';

        // Show the summary container only if all conditions are met
        if (!isExpireErrorVisible && !isCardErrorVisible && isCardNumberValid && isExpirationDateValid && isCvvValid && iscardNameContainersValid) {
            transaction_summary_container[index].style.display = 'flex';
        } else {
            transaction_summary_container[index].style.display = 'none';
        }
    }

    // Add event listeners to each card select container
    for (let i = 0; i < cardNameContainers.length; i++) {
        cardNameContainers[i].addEventListener('input', () => {
            toggleSummaryContainer(i);
        });
    }

    for (let i = 0; i < card_number.length; i++) {
        card_number[i].addEventListener('input', () => {
            toggleSummaryContainer(i);
        });
    }

    for (let i = 0; i < cvv.length; i++) {
        cvv[i].addEventListener('input', () => {
            toggleSummaryContainer(i);
        });
    }

    for (let i = 0; i < expiration_date.length; i++) {
        expiration_date[i].addEventListener('input', () => {
            toggleSummaryContainer(i);
        });
    }
});




document.addEventListener('DOMContentLoaded', function() {
    let currency_selectContainers = document.getElementsByClassName('currency_select');
    
    let wide_currency = document.getElementById('wide_currency');
    let mobile_currency = document.getElementById('mobile_currency');
    let mobile_selected_currency = document.getElementById('mobile_selected_currency');
    let wide_selected_currency = document.getElementById('wide_selected_currency');

    function summaryEval() {
        mobile_selected_currency.innerHTML = mobile_currency.value; // Use textContent for safer text retrieval
        wide_selected_currency.innerHTML = wide_currency.value;// Use textContent for safer text retrieval
    }

    // Convert HTMLCollection to an Array and iterate over it
    for (let i = 0; i < currency_selectContainers.length; i++) {
        currency_selectContainers[i].addEventListener('change', () => {
            summaryEval();
        });
    }
});



document.addEventListener('DOMContentLoaded', function() {
    let nairaSwitches = document.getElementsByClassName('nairaSwitch');
    let dollarSwitches = document.getElementsByClassName('dollarSwitch');

    let fundOns = document.getElementsByClassName('fundOn');
    let fundToggleNones = document.getElementsByClassName('fundToggleNone');

    function switchToNGN() {
        for (let fundToggleNone of fundToggleNones) {
            fundToggleNone.style.display = 'flex';
        } 

        for (let fundOn of fundOns) {
            fundOn.style.display = 'none';
        }

        for (let dollarSwitch of dollarSwitches) {
            dollarSwitch.style.display = 'flex'; 
        }

        for (let nairaSwitch of nairaSwitches) {
            nairaSwitch.style.display = 'none';
        }
    }

    function switchToUSD() {
        for (let fundOn of fundOns) {
            fundOn.style.display = 'flex';
        }

        for (let fundToggleNone of fundToggleNones) {
            fundToggleNone.style.display = 'none';
        }

        for (let nairaSwitch of nairaSwitches) {
            nairaSwitch.style.display = 'flex';
        }

        for (let dollarSwitch of dollarSwitches) {
            dollarSwitch.style.display = 'none';
        }
    }

    for (let nairaSwitch of nairaSwitches) {
        nairaSwitch.addEventListener('click', () =>  {
            switchToNGN();
        })
    }

    for (let dollarSwitch of dollarSwitches) {
        dollarSwitch.addEventListener('click', () =>  {
            switchToUSD();
        })
    }
    switchToUSD();
});


 // Check if the JSON response is present on the screen
const checkForForbiddenMessage = () => {
    const preElements = document.getElementsByTagName('pre');
    for (let i = 0; i < preElements.length; i++) {
        const preElement = preElements[i];
        if (preElement) {
            // Redirect to the login page
            window.location.href = '/login';
            break;
        }
    }
};


// Optionally, you can set up a timer to periodically check for the message
setInterval(checkForForbiddenMessage, 1000); // Check every second





document.addEventListener('DOMContentLoaded', function() {
    let withdrawAmount = document.getElementsByClassName('withdrawAmount');
    let amount_error_msg = document.getElementsByClassName('amount_error_msg');
    let choose_withdrawal_method = document.getElementsByClassName('choose_withdrawal_method');

    let wide_currency = document.getElementById('wide_currency');
    let mobile_currency = document.getElementById('mobile_currency');

    let mobile_usd_bal = parseFloat(document.getElementById('mobile_usd_bal').textContent);
    let mobile_ngn_bal = parseFloat(document.getElementById('mobile_ngn_bal').textContent);
    let wide_usd_bal = parseFloat(document.getElementById('wide_usd_bal').textContent);
    let wide_ngn_bal = parseFloat(document.getElementById('wide_ngn_bal').textContent);

    let mobile_selected_currency = document.getElementById('mobile_selected_currency');
    let wide_selected_currency = document.getElementById('wide_selected_currency');

    let mobile_funded_amount = document.getElementById('mobile_funded_amount');
    let wide_funded_amount = document.getElementById('wide_funded_amount');

    function toggle(i) {
        let amount = withdrawAmount[i].value.trim(); // Get the input value and trim whitespace
        let amountNumber = parseFloat(amount); // Convert input value to a number

        mobile_selected_currency.innerHTML = mobile_currency.value;
        wide_selected_currency.innerHTML = wide_currency.value;

        // Check for empty input
        if (amount === '') {
            amount_error_msg[i].style.display = 'flex'; // Show error message for empty input
            amount_error_msg[i].textContent = 'Please enter an amount.'; // Set error message text 
            choose_withdrawal_method[i].style.display = 'none'; // Hide withdrawal method
            return; // Exit the function early
        }

        // Convert balances to float for comparison based on selected currency
        let mobile_balance = mobile_currency.value === 'NGN' ? mobile_ngn_bal : mobile_usd_bal;
        let wide_balance = wide_currency.value === 'NGN' ? wide_ngn_bal : wide_usd_bal;

        // Check for NGN currency
        if (mobile_currency.value === 'NGN' || wide_currency.value === 'NGN') {
            if (amountNumber > parseFloat(mobile_balance) || amountNumber > parseFloat(wide_balance)) {
                amount_error_msg[i].style.display = 'flex'; // Show error message
                amount_error_msg[i].textContent = 'Insufficient balance.'; // Set error message text
                choose_withdrawal_method[i].style.display = 'none'; // Hide withdrawal method
            } else {
                amount_error_msg[i].style.display = 'none'; // Hide error message
                choose_withdrawal_method[i].style.display = 'flex'; // Show withdrawal method
            }
        } 
        // Check for USD currency
        else if (mobile_currency.value === 'USD' || wide_currency.value === 'USD') {
            if (amountNumber > parseFloat(mobile_balance) || amountNumber > parseFloat(wide_balance)) {
                amount_error_msg[i].style.display = 'flex'; // Show error message
                amount_error_msg[i].textContent = 'Insufficient balance.'; // Set error message text
                choose_withdrawal_method[i].style.display = 'none'; // Hide withdrawal method
            } else {
                amount_error_msg[i].style.display = 'none'; // Hide error message
                choose_withdrawal_method[i].style.display = 'flex'; // Show withdrawal method
            }
        }
    }

    for (let i = 0; i < withdrawAmount.length; i++) {
        withdrawAmount[i].addEventListener('input', function() {
            toggle(i); // Pass the index to the toggle function

            mobile_funded_amount.innerHTML = withdrawAmount[i].value;
            wide_funded_amount.innerHTML = withdrawAmount[i].value;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let account_number_val = document.getElementsByClassName('account_number_val');
    let bank_name_val = document.getElementsByClassName('bank_name_val');
    let account_holder_name = document.getElementsByClassName('account_holder_name');
    let transaction_summary_container = document.getElementsByClassName('transaction_summary_container');


    function toggle(i)  {
        // Check if the values are not empty
        if (account_number_val[i].value.trim() !== '' && bank_name_val[i].value.trim() !== '') {
            // Prepare the URL with query parameters
            const url = `/api/auth/verify-bank?accountNumber=${encodeURIComponent(account_number_val[i].value)}&bankName=${encodeURIComponent(bank_name_val[i].value)}`;

            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Set the inner HTML for the specific account holder name element
                account_holder_name[i].innerHTML = data.accountHolderName || 'Account holder not found';

                if(account_holder_name[i].innerHTML !== 'Account holder not found')  {
                    transaction_summary_container[i].style.display = 'flex';
                } else  {
                    transaction_summary_container[i].style.display = 'none';
                }
            })
            .catch(error => console.error('Error:', error));
        }
    }

    for (let i = 0; i < account_number_val.length; i++) {
        account_number_val[i].addEventListener('input',  () =>  {
            toggle(i);
        })
    };

    for (let i = 0; i < bank_name_val.length; i++) {
        bank_name_val[i].addEventListener('change',  () =>  {
            toggle(i);
        })
    }
});




