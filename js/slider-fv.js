const swiper1 = new Swiper(".fv-swiper", {
  // Optional parameters
  wrapperClass: "fv-swiper-wrapper",
  slideClass: "fv-swiper-slide",
  direction: "vertical",
  loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: 5000,
  },
  navigation: false,
  scrollbar: false,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
