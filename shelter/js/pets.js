import pets from './pets-data.js'; 

export const petsScripts = () => {

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
}