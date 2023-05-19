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

const btnPrev = document.querySelector('.pagination-link.prev');
const btnNext = document.querySelector('.pagination-link.next');
const btnFirst = document.querySelector('.pagination-link.first');
const btnLast = document.querySelector('.pagination-link.last');
const btnCurrent = document.querySelector('.pagination-link.current');

function generatePets(count, limit) {
  let randomPetsArr = [];

  for (let i = 0; i < limit; i++) {
    let arrRandomNums = [];
    while (arrRandomNums.length < count) {
      let r = Math.floor(Math.random() * count);
      if (arrRandomNums.indexOf(r) === -1) {
        arrRandomNums.push(r);
        randomPetsArr.push(pets[r]);
      }
    }
  }

  let currentPage = 1;

  function renderPets(page) {
    document.querySelector(".pets .row").innerHTML = "";
    for (let i = 0 + count * (page - 1); i < count * page; i++) {
      console.log(i);
      const newColumn = document.createElement("div");
      newColumn.classList.add("col-25");
      newColumn.innerHTML = `
          <div class="our-friends-item">
            <img src="${randomPetsArr[i].img}" alt="${randomPetsArr[i].name}" />
            <h3>${randomPetsArr[i].name}</h3>
            <a href="" class="secondary-btn">Learn more</a>
          </div>
      `;

      document.querySelector(".pets .row").appendChild(newColumn);
    }

    btnCurrent.querySelector('span').innerHTML = page;

    if (currentPage === limit) {
      btnNext.classList.add('disabled-btn');
      btnLast.classList.add('disabled-btn');

    } else if (btnNext.classList.contains('disabled-btn')) {
      btnNext.classList.remove('disabled-btn');
      btnLast.classList.remove('disabled-btn');
    }

    if (currentPage === 1) {
      btnFirst.classList.add('disabled-btn');
      btnPrev.classList.add('disabled-btn');

    } else if (btnPrev.classList.contains('disabled-btn')) {
      btnFirst.classList.remove('disabled-btn');
      btnPrev.classList.remove('disabled-btn');
    }

  }

  renderPets(1);
  
  btnNext.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("currentPage: " + currentPage);
  
    if (currentPage >= limit) {
      renderPets(currentPage);
    } else {
      currentPage += 1;
      renderPets(currentPage);
    }
  });
  
  btnPrev.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (currentPage <= 1) return;
  
    currentPage -= 1;
    renderPets(currentPage);
  });
  
  btnFirst.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (currentPage === 1) return;
  
    currentPage = 1;
    renderPets(currentPage);
  });
  
  btnLast.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (currentPage === limit) return;
  
    currentPage = limit;
    renderPets(currentPage);
  });
}

function setPagination() {
  console.log("working");
  if (window.innerWidth >= 1200) {
    generatePets(8, 6);
  } else if (window.innerWidth >= 768) {
    generatePets(6, 8);
  } else if (window.innerWidth >= 576) {
    generatePets(4, 12);
  } else {
    generatePets(3, 16);
  }
}

setPagination();

let timeId;

window.addEventListener("resize", () => {
  clearTimeout(timeId);

  timeId = setTimeout(setPagination, 250);
});
