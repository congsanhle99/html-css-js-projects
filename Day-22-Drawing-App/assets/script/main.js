const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const increaseBtn = document.getElementById("increase");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

let size = 10;
let color = "black";
let x;
let y;

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2, true);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

decreaseBtn.addEventListener("click", () => {
  size -= 2;
  if (size < 1) {
    size = 1;
  }
  sizeEl.innerHTML = size;
});

increaseBtn.addEventListener("click", () => {
  size += 2;
  if (size > 40) {
    size = 40;
  }
  sizeEl.innerHTML = size;
});

clearEl.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
