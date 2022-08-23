const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

const getData = async () => {
  const res = await fetch("https://randomuser.me/api/?results=25");

  const { results } = await res.json();
  // console.log(results);
  // console.log(data.results);

  //clear result
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");
    listItems.push(li);

    li.innerHTML = `
          <img src="${user.picture.large}" alt="${user.picture.large}" />
          <div class="user-info">
            <h4>${user.name.title}. ${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
          </div>
    `;
    result.appendChild(li);
  });
};

//filter data
filter.addEventListener("input", (e) => {
  filterData(e.target.value);
});

const filterData = (searchItem) => {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchItem.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
};

getData();
