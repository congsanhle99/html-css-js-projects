const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ce6ca284d7fd7d7192fe0b150e978a7&page=1";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=7ce6ca284d7fd7d7192fe0b150e978a7&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
};

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  // ngăn việc default submit của form
  e.preventDefault();
  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});

const showMovies = (movies) => {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img
          src="${IMG_PATH + poster_path}"
        />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByVote(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          ${overview} 
        </div>
    `;
    main.appendChild(movieEl);
  });
};

const getClassByVote = (vote) => {
  if (vote > 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else return "red";
};
