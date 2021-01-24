let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.onclick = function () {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
};
