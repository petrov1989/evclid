const accordionBtns = document.querySelectorAll(".faq__btn");

accordionBtns.forEach((accordionBtns) => {
  accordionBtns.addEventListener("click", event => {

    accordionBtns.classList.toggle("active");
    accordionBtns.classList.toggle('open');

    const accordionContent = accordionBtns.nextElementSibling;
    if(accordionBtns.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";

    }
    else {
      accordionContent.style.maxHeight = 0;
    }
  });
});

