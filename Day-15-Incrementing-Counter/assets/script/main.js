const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const temp = +counter.innerText;
    // divide to increment
    const increment = target / 200;
    if (temp < target) {
      counter.innerText = `${Math.ceil(temp + increment)}`;
      setTimeout(updateCounter, 2);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
