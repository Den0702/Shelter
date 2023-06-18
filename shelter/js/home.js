import pets from "./pets-data.js";

export const homeScripts = () => {

  function generateIndex(increment) {
    let firstPetIndex = +document.querySelectorAll(".our-friends-item .secondary-btn")[0].dataset.petindex;
    let lastPetIndex = +document.querySelectorAll( ".our-friends-item .secondary-btn")
    [document.querySelectorAll(".our-friends-item .secondary-btn").length - 1].dataset.petindex;

    if (increment) {
      if (lastPetIndex === 7) {
        return 0;
      }
      return lastPetIndex + 1;

    } else if (!increment) {
      if (firstPetIndex === 0) {
        return 7;
      }
      return firstPetIndex - 1;
    }

  }

  console.log("working");
  const sliderHolder = document.querySelector(".slider-holder");

  /* ----------------------- Carousel ----------------------- */
  let initialLeft;
  setSlider();

  function setSlider() {
    if (window.innerWidth >= 1200) {
      initialLeft = -33.33;
      sliderHolder.style.left = initialLeft + "%";
    }

    if (window.innerWidth < 1200 && window.innerWidth > 768) {
      initialLeft = -50;
      sliderHolder.style.left = initialLeft + "%";
    }

    if (window.innerWidth <= 768) {
      initialLeft = -100;
      sliderHolder.style.left = initialLeft + "%";
    }
  }

  for (let i = 0; i < 5; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("col-33");
    newSlide.innerHTML = `<div class="our-friends-item">
        <img src="${pets[i].img}" alt="${pets[i].name}" />
        <h3>${pets[i].name}</h3>
        <a href="" class="secondary-btn" data-petIndex="${i}" data-petName="${pets[i].name}">Learn more</a>
      </div>`;
    sliderHolder.appendChild(newSlide);
  }

  window.addEventListener("resize", () => {
    setSlider();
  });

  function slide(direction) {

    sliderHolder.style.left =
      direction === "left"
        ? initialLeft + initialLeft + "%"
        : initialLeft - initialLeft + "%";

    sliderHolder.style.transition = "left .3s ease-out";

    const newSlide = document.createElement("div");
    newSlide.classList.add("col-33");
    const i = generateIndex(direction === "left");

    newSlide.innerHTML = `<div class="our-friends-item">
        <img src="${pets[i].img}" alt="${pets[i].name}" />
        <h3>${pets[i].name}</h3>
        <a href="#" class="secondary-btn" data-petIndex="${i}" data-petName="${i}">Learn more</a>
      </div>`;

    const timeOut = setTimeout(() => {
      if (direction === "left") {
        sliderHolder.append(newSlide);
        sliderHolder.firstElementChild.remove();
      } else {
        sliderHolder.prepend(newSlide);
        sliderHolder.lastElementChild.remove();
      }

      sliderHolder.style.left = initialLeft + "%";
      sliderHolder.style.transition = "none";
      clearTimeout(timeOut);
    }, 300);
  }

  document
    .querySelector(".slider-btn.left")
    .addEventListener("click", () => slide("left"));

  document
    .querySelector(".slider-btn.right")
    .addEventListener("click", () => slide("right"));

  /* ---------------- Carousel end ---------------- */

  
};