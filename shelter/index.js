console.log(`Самооценка: `);

const pets = [
  {
    name: "Jennifer",
    img: "./assets/img/pets/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "./assets/img/pets/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "./assets/img/pets/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "./assets/img/pets/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "./assets/img/pets/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "./assets/img/pets/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "./assets/img/pets/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "./assets/img/pets/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];  

(function () {
  console.log("working");
  const sliderHolder = document.querySelector(".slider-holder");

  /*----------------------- Burger menu -----------------------*/
  let mobileHamburger = document.querySelector('.mobile-hamburger');

  mobileHamburger.addEventListener("click", (e) => {
    let target = e.target;
    let responsiveMenu = document.querySelector(".hamburger-menu");

    if (target.closest('.mobile-hamburger') || target.closest('.hamburger-menu')) {
      mobileHamburger.classList.toggle('active');
      responsiveMenu.classList.toggle('active');
      document.querySelector('body').classList.toggle('scroll-lock');
    }
  })

  /*----------------------- Popup -----------------------*/
  sliderHolder.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.tagName !== 'A') return
    console.log(e.target.dataset)
    const petIndex = Number(e.target.dataset.petindex)

    const newPopupContainer = document.createElement('div')
    newPopupContainer.classList.add('popup')
    newPopupContainer.innerHTML = `
    <div class="popup-inner">

        <img src="${pets[petIndex].img}" alt="${pets[petIndex].name}" />
        <h3>${pets[petIndex].name}</h3>
    
    </div>`;

    document.body.appendChild(newPopupContainer)

    newPopupContainer.addEventListener('click', function(e){
        e.target.remove()
    })

    document.querySelector('.popup-inner').addEventListener('click', function(e){
        e.stopPropagation();
    })

})
  /* ----------------------- Carousel ----------------------- */
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
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

  if (sliderHolder === null) {
    return;

  } else {
    setSlider();
  }

  for (let i = 0; i < 5; i++) {
    const random = getRandomInt(0, 7);
    const newSlide = document.createElement("div");
    newSlide.classList.add("col-33");
    newSlide.innerHTML = `<div class="our-friends-item">
        <img src="${pets[random].img}" alt="${pets[random].name}" />
        <h3>${pets[random].name}</h3>
        <a href="" class="secondary-btn" data-petIndex="${random}">Learn more</a>
      </div>`;
    sliderHolder.appendChild(newSlide);
  }

  window.addEventListener("resize", function () {
    setSlider();
  });

  function slide(directon) {
    const sliderHolder = document.querySelector(".slider-holder");
    sliderHolder.style.left =
      directon === "left"
        ? initialLeft + initialLeft + "%"
        : initialLeft - initialLeft + "%";
    sliderHolder.style.transition = "left 0.5s ease-out";

    const newSlide = document.createElement("div");
    newSlide.classList.add("col-33");
    const random = getRandomInt(0, 7);
    newSlide.innerHTML = `<div class="our-friends-item">
          <img src="${pets[random].img}" alt="${pets[random].name}" />
          <h3>${pets[random].name}</h3>
          <a href="" class="secondary-btn" data-petIndex="${random}>Learn more</a>
        </div>`;

    const timeOut = setTimeout(function () {
      if (directon === "left") {
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

})();
