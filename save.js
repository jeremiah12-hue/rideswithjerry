const saveBtns = document.querySelectorAll('.save-btn');


saveBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
  });
});
