const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, delectus!";
let index = 1;
let speed = 300 / speedEl.value;

const writeText = () => {
  textEl.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }
  setTimeout(writeText, speed);
};
speedEl.addEventListener("input", (e) => {
  speed = 300 / e.target.value;
});
writeText();
