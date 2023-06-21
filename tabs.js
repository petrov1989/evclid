const tabs = document.querySelector(".working__tabs-wrapper");
const tabButton = document.querySelectorAll(".working__item");
const contents = document.querySelectorAll(".content");


tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
      btn.classList.remove("working__item_active");
    });

    e.target.classList.add("active");
    e.target.classList.add("working__item_active");


    contents.forEach(content => {
      content.classList.remove("active");
      content.classList.remove("working__item_active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
    element.classList.add("working__item_active");
  }
}
