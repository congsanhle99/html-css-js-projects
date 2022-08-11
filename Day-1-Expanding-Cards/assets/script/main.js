const panels = document.querySelectorAll(".panel");
panels.forEach((item) => {
  item.addEventListener("click", () => {
    for (let i = 0; i < panels.length; i++) {
      panels[i].classList.remove("active");
    }
    item.classList.add("active");
  });
});
