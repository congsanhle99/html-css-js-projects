const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timeClicked = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else if (new Date().getTime() - clickTime < 8000) {
    createHeart(e);
    clickTime = 0;
  } else {
    clickTime = new Date().getTime();
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  //toạ độ nơi mình thoa tác
  const x = e.clientX;
  const y = e.clientY;

  // từ viền trên/trái tới phần tử thao tác
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.left = `${xInside}px`;
  heart.style.top = `${yInside}px`;

  loveMe.appendChild(heart);

  times.innerHTML = ++timeClicked;

  setTimeout(() => heart.remove(), 2000);
};
