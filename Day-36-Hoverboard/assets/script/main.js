const container = document.getElementById("container");
const colors = ["#9734ff", "#22ff77", "#001eef", "#d62d20", "#0bd3d3", "#f890e7"];
const SIZE = 900;

const randomColor = (e) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  e.style.background = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (e) => {
  e.style.background = "#1d1d1d";
  e.style.boxShadow = "0 0 2px #000";
};

for (let i = 0; i < SIZE; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => randomColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}
