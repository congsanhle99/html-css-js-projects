const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = ["Message One", "Message Two", "Message Three", "Message Four"];
const types = ["info", "success", "error"];

const createNotify = (message = null, type = null) => {
  const notify = document.createElement("div");
  notify.classList.add("toast");
  notify.classList.add(type ? type : getRandomType());
  toasts.appendChild(notify);

  notify.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notify);

  setTimeout(() => {
    notify.remove();
  }, 3 * 1000);
};

const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const getRandomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};

button.addEventListener("click", () => createNotify());
