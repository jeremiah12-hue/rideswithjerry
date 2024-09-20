let PassToggle = document.getElementById('PassToggle');
let widePassToggle = document.getElementById('widePassToggle');

let submit = document.getElementById('submit');
let wideSubmit = document.getElementById('wideSubmit');


function checkPasswordMatch() {

    let mobile_psw_confirm = document.getElementById('mobile_psw_confirm').value;
    let mobile_psw = document.getElementById('mobile_psw').value;

    if(mobile_psw_confirm != mobile_psw)  {
        PassToggle.innerHTML = "Passwords do not match!";
        PassToggle.style.color = "red";

        submit.disabled = true;
    } else  {
        PassToggle.innerHTML = "Passwords match!";
        PassToggle.style.color = "green";

        submit.disabled = false;
    }
}
document.getElementById('mobile_psw_confirm').addEventListener("input", checkPasswordMatch);



function widecheckPasswordMatch() {

    let wide_psw_confirm = document.getElementById('wide_psw_confirm').value;
    let wide_psw = document.getElementById('wide_psw').value;

    if(wide_psw_confirm != wide_psw)  {
        widePassToggle.innerHTML = "Passwords do not match!";
        widePassToggle.style.color = "red";

        wideSubmit.disabled = true;
    } else  {
        widePassToggle.innerHTML = "Passwords match!";
        widePassToggle.style.color = "green";

        wideSubmit.disabled = false;
    }
}
document.getElementById('wide_psw_confirm').addEventListener("input", widecheckPasswordMatch);