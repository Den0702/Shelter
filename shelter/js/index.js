import { homeScripts } from "./home.js";
import { petsScripts } from './pets.js';

/*----------------------- Burger menu -----------------------*/
let mobileHamburger = document.querySelector(".mobile-hamburger");
let responsiveMenu = document.querySelector(".hamburger-menu");
let bodyOverlay = document.querySelector('.body-overlay');

const handleResponsiveMenu = (e) => {
  let target = e.target;

  if (target.closest(".mobile-hamburger") || target.closest('.hamburger-menu') || target.closest('.body-overlay')) {
    mobileHamburger.classList.toggle("active");
    responsiveMenu.classList.toggle("active");
    document.querySelector("body").classList.toggle("scroll-lock");     
    bodyOverlay.classList.toggle('active');
  } 
}

mobileHamburger.addEventListener("click", handleResponsiveMenu);
responsiveMenu.addEventListener("click", handleResponsiveMenu);
bodyOverlay.addEventListener("click", handleResponsiveMenu);

switch(document.body.className) {
  case 'home-page': 
    homeScripts();
    break;

  case 'pets-page':
    petsScripts();
    break;
}