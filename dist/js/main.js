// Select DOM items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//select initial state of menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("open");
    menuNav.classList.add("open");
    menuBranding.classList.add("open");
    navItems.forEach(item => item.classList.add("open"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("open");
    menuNav.classList.remove("open");
    menuBranding.classList.remove("open");
    navItems.forEach(item => item.classList.remove("open"));
    showMenu = false;
  }
}
