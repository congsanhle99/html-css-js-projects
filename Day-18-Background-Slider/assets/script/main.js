const body = document.body;
const sliders = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;
const setBgToBody = () => {
  body.style.backgroundImage = sliders[activeSlide].style.backgroundImage;
};
setBgToBody();

const setActiveSlide = () => {
  sliders.forEach((slide) => {
    slide.classList.remove("active");
  });
  sliders[activeSlide].classList.add("active");
};

rightBtn.addEventListener("click", () => {
  activeSlide++;
  if (activeSlide > sliders.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = sliders.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});
