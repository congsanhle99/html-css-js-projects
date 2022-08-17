const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const nameEl = document.getElementById("name");
const dateEl = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

const getData = () => {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1619443143266-6008deeee7c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXNpYW4lMjBnaXJsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />';

  title.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum eaque ea quam animi minus perspiciatis natus sunt doloremque modi.";
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  nameEl.innerHTML = "John Doe";
  dateEl.innerHTML = "Aug 17, 2022";

  animated_bgs.forEach((bg) => {
    bg.classList.remove("animated-bg");
  });

  animated_bg_texts.forEach((bg) => {
    bg.classList.remove("animated-bg-text");
  });
};

setTimeout(getData, 2500);
