let bodyElem = document.querySelector("body");
let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".header__icon");
let menuBtnIcon = document.querySelector(".header__icon i");
let menuFlag = false;

bodyElem.addEventListener("click", () => {
  if (menuFlag) {
    menu.style.left = "-256px";
    menuBtnIcon.classList = "fa_fa-bars";
    menuFlag = false;
  }
});

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (!menuFlag) {
    menu.style.left = "0";
    menuBtnIcon.classList = "fa_fa-times";
    menuFlag = true;
  }
});


menu.addEventListener("click", (e) => {
  e.stopPropagation();
});
