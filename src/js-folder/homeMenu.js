const menuBtnElement = document.querySelector(".js-settings-icon");
const menuElement = document.querySelector(".js-menu-active-div");
const closeElement = document.querySelector(".js-menu-close-icon-img");

let menuActive = false;

menuBtnElement.addEventListener("click", () => {
  if (menuActive) {
    menuElement.classList.remove("menu-active-div-active");
  } else {
    menuElement.classList.add("menu-active-div-active");
    console.log("HI");
  }
  menuActive = !menuActive;
});
closeElement.addEventListener("click", () => {
  if (menuActive) {
    menuElement.classList.remove("menu-active-div-active");
  } else {
    menuElement.classList.add("menu-active-div-active");
    console.log("HI");
  }
  menuActive = !menuActive;
});
