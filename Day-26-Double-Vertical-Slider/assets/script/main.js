const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const sliderLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;
// mỗi slideLeft chiếm 100vh
// đẩy những thằng phía trên lên top = -300vh lấy thằng cuối cùng với ảnh đầu tiên
slideLeft.style.top = `-${(sliderLength - 1) * 100}vh`; // -300vh

const changeSlide = (dir) => {
  const sliderHeight = sliderContainer.clientHeight;
  if (dir === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > sliderLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (dir === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = sliderLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
  slideLeft.style.transform = `translateY( ${activeSlideIndex * sliderHeight}px)`;
};

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

// // auto change after 15s
// const autoChangeSlide = () => {
//   const sliderHeight = sliderContainer.clientHeight;
//   activeSlideIndex++;
//   if (activeSlideIndex > sliderLength - 1) {
//     activeSlideIndex = 0;
//   }
//   slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
//   slideLeft.style.transform = `translateY( ${activeSlideIndex * sliderHeight}px)`;
// };

// setInterval(autoChangeSlide, 10 * 1000);
