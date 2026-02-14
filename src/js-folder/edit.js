const errorImg = document.querySelector(".error-img");
const innerDiv = document.querySelector(".edit-div");
import { todoStore } from "./todoStore.js";
import { renderTodoList } from "./homeMenu.js";

export function triggerEditpage(idd) {
  idd = Number(idd);

  if (errorImg) {
    errorImg.remove();
  }

  innerDiv.innerHTML = `
    <div class="inner-div">
      <div class="header-div">
        <input type="text" class="header-inp" />
        <input type="date" class="date-inp" />
        <div class="color-div02">
          <div class="change-color-div"></div>
        </div>
      </div>
      <div class="middle-div">
        <textarea class="textarea-inp" placeholder="Describe your task here..."></textarea>
      </div>
      <div class="footer-div">
        <button class=" delete-btn">delete</button>
        <button class="save-btn">Save changes</button>
      </div>
    </div>
  `;

  const headingInp = document.querySelector(".header-inp");
  const dateInp = document.querySelector(".date-inp");
  const textAreaInp = document.querySelector(".textarea-inp");

  const selectedTodo = todoStore.find((todo) => todo.id === idd);

  if (!selectedTodo) {
    return;
  }

  headingInp.value = selectedTodo.heading;
  dateInp.value = selectedTodo.date;
  textAreaInp.value = selectedTodo.desc;

  if (selectedTodo.checked) {
    headingInp.classList.add("heading-home-active");
  }

  const SaveBtn = document.querySelector(".save-btn");
  const deleteBtn = document.querySelector(".delete-btn");

  SaveBtn.addEventListener("click", () => {
    selectedTodo.heading = headingInp.value;
    selectedTodo.desc = textAreaInp.value;
    selectedTodo.date = dateInp.value;

    renderTodoList();
    localStorage.setItem("todoStore", JSON.stringify(todoStore));
    window.location.reload();
  });

  deleteBtn.addEventListener("click", () => {
    const index = todoStore.findIndex((item) => item.id === idd);

    if (index !== -1) {
      todoStore.splice(index, 1);
    }
    renderTodoList();
    localStorage.setItem("todoStore", JSON.stringify(todoStore));
    window.location.reload();
  });
}

export function addNewTodo() {
  const newTodo = {
    id: Date.now(),
    date: new Date().toISOString().split("T")[0],
    heading: "New Task",
    desc: "Describe your task here...",
    checked: false,
  };
  todoStore.push(newTodo);
  localStorage.setItem("todoStore", JSON.stringify(todoStore));
  return newTodo;
}
