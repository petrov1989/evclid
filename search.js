let searchBtn = document.querySelector('.search');
let searchBtnActive = document.querySelector('.search-container');
let searchClosed = document.querySelector('.search-container__btn-closed');


searchBtn.addEventListener('click',function() {
  searchBtnActive.classList.add("search-container_active");
  }
);

searchClosed.addEventListener('click',function() {
  searchBtnActive.classList.remove("search-container_active");
  }
);
