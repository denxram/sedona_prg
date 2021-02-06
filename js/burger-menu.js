const navMain = document.querySelector('.main-nav');
const logo = document.querySelector('.main-nav__logo-image');

navMain.classList.remove('main-nav--nojs');

document.querySelector('.main-nav__toggle').addEventListener('click', function () {
  navMain.classList.toggle('main-nav--opened');
  logo.classList.toggle('main-nav__logo-image--active');
});



