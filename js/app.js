const navMenu = document.querySelector("#navMenu");
const menu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
});
