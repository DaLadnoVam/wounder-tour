const swiper2 = new Swiper(".gallery__swiper", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: false,
  scrolldar: false,
  navigation: false,

  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 5,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1023: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  },
});
