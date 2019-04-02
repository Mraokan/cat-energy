var header = document.querySelector(".header");
var toggle = header.querySelector(".header__toggle");
var navigation = header.querySelector(".header__navigation");

header.classList.remove("header--no-js");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();

  navigation.classList.toggle("display-flex");
  toggle.classList.toggle("header__toggle--opened");
});
