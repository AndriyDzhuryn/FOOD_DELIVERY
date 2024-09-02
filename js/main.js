'use strict';

const burgerMenu = document.querySelector('.burger-menu');
const modalMenu = document.querySelector('.modal-menu');
const closeModalMenu = document.querySelector('.btn-close-burger-menu');

burgerMenu.addEventListener('click', () => {
  modalMenu.classList.toggle('is-open');
});

closeModalMenu.addEventListener('click', () => {
  modalMenu.classList.remove('is-open');
});

console.log('!!!');
new Swiper('.swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  speed: 1000,
  mousewheel: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
