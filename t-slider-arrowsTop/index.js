const sliderContainer = document.querySelector(".slider-container");
const prevButton = document.querySelector(".prev-slide");
const nextButton = document.querySelector(".next-slide");
const slides = document.getElementsByClassName("news-card");
let slidesCount = 0;
for (let i = 0; i < slides.length; i++) {
  slidesCount += 1;
}


let slideWidth = 100;
let slideIndex = 0;
function showSlide(index) {
  if (window.matchMedia("(max-width: 680px)").matches) {
    if (index < 0) {
      index = slidesCount;
    } else if (index >= slidesCount) {
      index = 0;
    }
    slideWidth = 48;
    slideIndex = index;
    sliderContainer.style.transform = `translateX(-${slideWidth * index}%)`;
  } else {
    if (index < 0) {
      index = sliderContainer.children.length - 1;
    } else if (index >= sliderContainer.children.length) {
      index = 0;
    }
    slideWidth = 100;
    slideIndex = index;
    sliderContainer.style.transform = `translateX(-${slideWidth * index}%)`;
  }
}

prevButton.addEventListener("click", () => {
  showSlide(slideIndex - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(slideIndex + 1);
});
