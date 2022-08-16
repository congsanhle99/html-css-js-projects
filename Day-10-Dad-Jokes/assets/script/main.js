const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// using .then
// const generateJoke = () => {
//   const config = {
//     headers: {
//       // this key, what header we want
//       Accept: "application/json",
//     },
//   };
//   // when make request without header of application -> json give HTML(not we want)
//   fetch("https://icanhazdadjoke.com", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// };

// using async await
const generateJoke = async () => {
  const config = {
    headers: {
      // this key, what header we want
      Accept: "application/json",
    },
  };
  // when make request without header of application -> json give HTML(not we want)
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
};

generateJoke();
jokeBtn.addEventListener("click", generateJoke);
