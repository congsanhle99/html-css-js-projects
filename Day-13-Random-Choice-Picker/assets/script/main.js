const tagsEl = document.getElementById("tags");
const textareaEl = document.getElementById("textarea");
textareaEl.focus();

const createTags = (input) => {
  // remove empty string
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  // add span tag and class tag in id tags
  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
};

const highlightTag = (tag) => {
  tag.classList.add("highlight");
};

const unHighlightTag = (tag) => {
  tag.classList.remove("highlight");
};

const pickRandomTag = () => {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
};

const randomSelect = () => {
  const times = 30;
  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  // pick highLight
  setTimeout(() => {
    clearInterval(interval);
    // pickRandomTag stop
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
};

textareaEl.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});
