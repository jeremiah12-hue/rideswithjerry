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

