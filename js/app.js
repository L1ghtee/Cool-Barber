// menu
const navMenu = document.querySelector("#navMenu");
const menu = document.querySelector(".nav-menu");
const body = document.querySelector("body");

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
});

// close menu on click menu item
const navlinks = document.querySelector(".nav-menu").children

for(const navlink of navlinks){
    navlink.addEventListener('click', function(event){
        navMenu.classList.remove("active");
        menu.classList.remove("active");
        body.classList.remove("overflow-hidden");
    })
}

//slider
let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-track");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const items = document.querySelectorAll(".slider-item");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = "${itemWidth}px";
});

btnPrev.addEventListener("click", () => {
  const itemsLeft =
    itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
  position -=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});
btnNext.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position +=
    itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = "translateX(${position}px)";
};

const checkBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};
