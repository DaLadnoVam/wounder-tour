// kebab
const kebabEl = document.getElementById("kebab");
const kebabMenu = document.querySelector(".header__list");

kebabEl.addEventListener("click", function () {
  kebabMenu.classList.toggle("show-kebab");
});

// burger
const burgerEl = document.querySelector("#burger");
const burgerMenu = document.querySelector(".header__nav");

burgerEl.addEventListener("click", function () {
  burgerEl.classList.toggle("active");
  burgerMenu.classList.toggle("show-nav");
});

// tabs
const buttons = document.querySelectorAll(".tablinks");
const contents = document.querySelectorAll(".tabcontent");
const contentsArr = Array.from(contents);

const clickBtn = function (e) {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.currentTarget.classList.add("active");

  contents.forEach((content) => {
    content.classList.remove("active");
    document
      .getElementById(e.currentTarget.dataset.value)
      .classList.add("active");
  });
};

buttons.forEach((btn) => {
  btn.addEventListener("click", clickBtn);
});

// const buttons = document.querySelectorAll(".tablinks");
// const contents = document.querySelectorAll(".tabcontent");
// const contentsArr = Array.from(contents);

// const clickBtn = function (e) {
//   buttons.forEach((btn) => {
//     btn.classList.remove("active");
//   });
//   e.currentTarget.classList.add("active");

//   contents.forEach((cont) => {
//     cont.classList.remove("active");
//   });
// document
//   .getElementById(e.currentTarget.dataset.value)
//   .classList.add("active");
// };

// buttons.forEach((btn) => {
//   btn.addEventListener("click", clickBtn);
// });
