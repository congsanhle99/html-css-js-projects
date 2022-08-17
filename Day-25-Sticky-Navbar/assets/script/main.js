const nav = document.querySelector(".nav");

const fixNax = () => {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};

window.addEventListener("scroll", fixNax);
