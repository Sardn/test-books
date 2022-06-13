

import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js';

new Swiper('.swiper', {
  sliderPerView: 1,// начинает с 1го фото
  loop: true,// автоперелистывание
  grabCursor: true,//добавляет руку как грабли
  effect: 'cube',//эффект куба
  cubeEffect: {
    shadow: false,//убирает тень
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

