const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let curActive = 1;

next.addEventListener("click", () => {
  curActive++;
  if (curActive > circles.length) {
    curActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  curActive--;
  if (curActive < 1) {
    curActive = 1;
  }
  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < curActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (curActive === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
