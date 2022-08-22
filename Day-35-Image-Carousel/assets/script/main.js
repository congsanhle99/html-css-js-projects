const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let index = 0;

const run = () => {
  index++;
  changeImg();
};

const changeImg = () => {
  if (index > img.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = img.length - 1;
  }
  imgs.style.transform = `translateX(${-index * 333}px)`;
};

let interval = setInterval(run, 2000);

// btn click
// trước hết clear Interval nếu k sẽ bị giật khi click
const clearInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

rightBtn.addEventListener("click", () => {
  index++;
  changeImg();
  clearInterval();
});

leftBtn.addEventListener("click", () => {
  index--;
  changeImg();
  clearInterval();
});
