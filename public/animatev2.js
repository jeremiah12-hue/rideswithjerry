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


