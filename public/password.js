document.addEventListener("DOMContentLoaded", function() {
    let PassToggle = document.getElementById('PassToggle');
    let widePassToggle = document.getElementById('widePassToggle');

    let submit = document.getElementById('submit');
    let wideSubmit = document.getElementById('wideSubmit');

    function checkPasswordMatch() {
        let mobile_psw_confirm = document.getElementById('mobile_psw_confirm').value;
        let mobile_psw = document.getElementById('mobile_psw').value;

        if (mobile_psw_confirm === mobile_psw) {
            PassToggle.innerHTML = "Passwords match!";
            PassToggle.style.color = "green";
            submit.disabled = false;
        } else {
            PassToggle.innerHTML = "Passwords do not match!";
            PassToggle.style.color = "red";
            submit.disabled = true;
        }
    }

    document.getElementById('mobile_psw_confirm').addEventListener("input", function() {
        PassToggle.innerHTML = ""; // Clear message on input
        checkPasswordMatch();
    });

    function widecheckPasswordMatch() {
        let wide_psw_confirm = document.getElementById('wide_psw_confirm').value;
        let wide_psw = document.getElementById('wide_psw').value;

        if (wide_psw_confirm === wide_psw) {
            widePassToggle.innerHTML = "Passwords match!";
            widePassToggle.style.color = "green";
            wideSubmit.disabled = false;
        } else {
            widePassToggle.innerHTML = "Passwords do not match!";
            widePassToggle.style.color = "red";
            wideSubmit.disabled = true;
        }
    }

    document.getElementById('wide_psw_confirm').addEventListener("input", function() {
        widePassToggle.innerHTML = ""; // Clear message on input
        widecheckPasswordMatch();
    });
});


let check = document.getElementById('check');
let check_txt = document.getElementById('check_txt');

let wide_check = document.getElementById('wide_check');
let wide_check_txt = document.getElementById('wide_check_txt');

check.addEventListener('click', () =>  {
    if(check_txt.style.display != 'block')  {
        check_txt.style.display = 'block';
        check_txt.style.color = 'green'
    } else  {
        check_txt.style.display = 'none'
    }
})


wide_check.addEventListener('click', () =>  {
    if(wide_check_txt.style.display != 'block')  {
        wide_check_txt.style.display = 'block';
        wide_check_txt.style.color = 'green'
    } else  {
        wide_check_txt.style.display = 'none'
    }
})


const saveBtns = document.querySelectorAll('.save-btn');


saveBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
  });
});
