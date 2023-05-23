import pets from "./pets-data.js";

export const homeScripts = () => {

  function generateIndex(increment) {
    let firstPetIndex = +document.querySelectorAll(".our-friends-item .secondary-btn")[0].dataset.petindex;
    let lastPetIndex = +document.querySelectorAll(
      ".our-friends-item .secondary-btn"
    )[document.querySelectorAll(".our-friends-item .secondary-btn").length - 1].dataset.petindex;

    if (increment) {
      if (lastPetIndex >= 7) {
        return 0;
      }
      return lastPetIndex + 1;
    }

    if (!increment) {
      if (firstPetIndex <= 0) {
        return 7;
      }
      return firstPetIndex - 1;
    }
  }

  console.log("working");
  const sliderHolder = document.querySelector(".slider-holder");

  /* ----------------------- Carousel ----------------------- */
  let initialLeft = -33.33;

  function setSlider() {
    if (window.innerWidth >= 1200) {
      initialLeft = -33.33;
      sliderHolder.style.left = initialLeft + "%";
    }

    if (window.innerWidth < 1200 && window.innerWidth >= 768) {
      initialLeft = -50;
      sliderHolder.style.left = initialLeft + "%";
    }

    if (window.innerWidth < 768) {
      initialLeft = -100;
      sliderHolder.style.left = initialLeft + "%";
    }
  }

  setSlider();
  
  for (let i = 0; i < 5; i++) {
    const newSlide = document.createElement("div");
    newSlide.classList.add("col-33");
    newSlide.innerHTML = `<div class="our-friends-item">
        <img src="${pets[i].img}" alt="${pets[i].name}" />
        <h3>${pets[i].name}</h3>
        <a href="" class="secondary-btn" data-petIndex="${i}">Learn more</a>
      </div>`;
    sliderHolder.appendChild(newSlide);
  }

  window.addEventListener("resize", function () {
    setSlider();
  });

  function slide(direction) {
    const sliderHolder = document.querySelector(".slider-holder");
    sliderHolder.style.left =
      direction === "left"
        ? initialLeft + initialLeft + "%"
        : initialLeft - initialLeft + "%";
    sliderHolder.style.transition = "left 0.5s ease-out";

    const newSlide = document.createElement("div");
    newSlide.classList.add("col-33");
    const random = generateIndex(direction === "left");

    newSlide.innerHTML = `<div class="our-friends-item">
        <img src="${pets[random].img}" alt="${pets[random].name}" />
        <h3>${pets[random].name}</h3>
        <a href="#" class="secondary-btn" data-petIndex="${random}">Learn more</a>
      </div>`;

    const timeOut = setTimeout(function () {
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
    }, 500);
  }

  document
    .querySelector(".slider-btn.left")
    .addEventListener("click", () => slide("left"));

  document
    .querySelector(".slider-btn.right")
    .addEventListener("click", () => slide("right"));

  /*----------------------- Popup -----------------------*/
  sliderHolder.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.tagName !== "A") return;
    console.log(e.target.dataset);
    const petIndex = Number(e.target.dataset.petindex);

    const newPopupContainer = document.createElement("div");
    newPopupContainer.classList.add("popup");
    newPopupContainer.innerHTML = `
      <div class="popup-inner">
        <img src="${pets[petIndex].img}" alt="${pets[petIndex].name}" />
        <h3>${pets[petIndex].name}</h3>
      </div>`;

    document.body.appendChild(newPopupContainer);

    newPopupContainer.addEventListener("click", function (e) {
      e.target.remove();
    });

    document
      .querySelector(".popup-inner")
      .addEventListener("click", function (e) {
        e.stopPropagation();
      });
  });

};