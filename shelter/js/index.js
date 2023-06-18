import { homeScripts } from "./home.js";
import { petsScripts } from './pets.js';
import pets from "./pets-data.js";

/*----------------------- Burger menu -----------------------*/
const mobileHamburger = document.querySelector(".mobile-hamburger");
const responsiveMenu = document.querySelector(".menu");
const bodyOverlay = document.querySelector('.body-overlay');
const sliderHolder = document.querySelector(".slider-holder");

mobileHamburger.addEventListener("click", handleResponsiveMenu);
responsiveMenu.addEventListener("click", handleResponsiveMenu);
bodyOverlay.addEventListener("click", handleResponsiveMenu);


function handleResponsiveMenu(e) {
  let targetElem = e.target;

  if (document.querySelector('.popup-holder')) {
    close(e, targetElem);// must always be "body-overlay" here
  };

  if (targetElem.closest('.mobile-hamburger')) {
    mobileHamburger.classList.toggle("active");
    responsiveMenu.classList.toggle("active");
    toggleOverlay();

  } else if (targetElem.closest('.menu-item') || targetElem.closest('.body-overlay')) {
    if (mobileHamburger.classList.contains('active')) {
      mobileHamburger.classList.remove("active");
      responsiveMenu.classList.remove("active");
      document.querySelector("body").classList.remove("scroll-lock");
      bodyOverlay.classList.remove('active');
    }
  }
}
/*----------------------- Burger menu end-----------------------*/

/*----------------------- Popup -----------------------*/
document.addEventListener("click", e => {
  let petName = e.target.dataset.petname;
  if (petName) {
    open(e, petName);
  }
});

let newPopupContainer;  

function open(e, petName) {
  e.preventDefault();
  
  const currentPet = pets.find(pet => pet.name === petName);

  newPopupContainer = document.createElement("div");
  newPopupContainer.classList.add("popup-holder");
  newPopupContainer.innerHTML = `
          <div class="popup-close">
            <button class="circle-btn popup-close-btn">
              <img src="../assets/icons/arrows_and__other_button_components/cross.svg" class="close-cross" alt="close-cross">
            </button>
          </div>
          <div class="popup">
            <img src="${currentPet.imgModal}" class="popup-image" alt="${currentPet.name}">
            <div class="pet-info">
                <h3 class="pet-name">${currentPet.name}</h3>
                <h4 class="pet-breed">${currentPet.breed}</h4>
                <p class="pet-description">
                  ${currentPet.description}
                </p>
                <ul class="pet-stats">
                  <li class="pet-stat"><span class="stat-caption">Age: </span>${currentPet.age}</li>
                  <li class="pet-stat"><span class="stat-caption">Inoculations: </span>${currentPet.inoculations}</li>
                  <li class="pet-stat"><span class="stat-caption">Diseases: </span>${currentPet.diseases}</li>
                  <li class="pet-stat"><span class="stat-caption">Parasites: </span>${currentPet.parasites}</li>
                </ul>
            </div>
          </div>`;
  document.body.appendChild(newPopupContainer);
  toggleOverlay();

  document.querySelector('.popup-holder').addEventListener('click', e => close(e));

  document.querySelector('.popup').addEventListener('click', e => {
    e.stopPropagation();
  });
 
}

function close(e, targetElem) {
  if (e.target.closest('.popup-holder') || targetElem) {
    newPopupContainer.remove();
    toggleOverlay();
  }
}
/*----------------------Popup end----------------------*/

function toggleOverlay() {
  document.querySelector("body").classList.toggle("scroll-lock");
  bodyOverlay.classList.toggle('active');
}


switch (document.body.className) {
  case 'home-page':
    homeScripts();
    break;

  case 'pets-page':
    petsScripts();
    break;
}