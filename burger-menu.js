let navbarBtn = document.querySelector('.navbar-btn');
let overlay = document.querySelector('.burger-menu');
let menuClosed = document.querySelector('.burger-menu__btn-closed');
let menuLinks = document.querySelectorAll('.burger-menu__item');
let page = document.querySelector('.page'); //body


navbarBtn.addEventListener('click', function() {
  overlay.classList.toggle("burger-menu_active");

  page.classList.add("stop-scroll");
})


menuClosed.addEventListener('click', function() {
  overlay.classList.toggle("burger-menu_active");
  page.classList.remove("stop-scroll");
})

menuLinks.forEach((el) => {
  el.addEventListener('click', function() {
    overlay.classList.remove("burger-menu_active");
    page.classList.remove("stop-scroll");
  })
})
