const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

const updateLS = () => {
  const todoEl = document.querySelectorAll("li");
  const todos = [];
  todoEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (todo) => {
  let todoText = inputEl.value;
  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoElement = document.createElement("li");
    if (todo && todo.completed) {
      todoElement.classList.add("completed");
    }
    todoElement.innerText = todoText;

    todoElement.addEventListener("click", () => {
      todoElement.classList.toggle("completed");
      updateLS();
    });

    todoElement.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoElement.remove();
      updateLS();
    });

    todosUL.appendChild(todoElement);
    inputEl.value = "";
    updateLS();
  }
};

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});
