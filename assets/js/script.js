/*const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar')
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('change');
});*/

//Navigation2
/*const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector('nav');

hamburger.addEventListener("click", function(){
    this.classList.toggle("close");
    nav.classList.toggle("reveal");
});*/

//Navigation 3
/*const menuIcon = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
});*/

//navigation4
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

