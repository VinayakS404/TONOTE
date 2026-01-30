import { todoStore } from "./todoStore.js";

const menuBtnElement = document.querySelector(".js-settings-icon");
const menuElement = document.querySelector(".js-menu-active-div");
const closeElement = document.querySelector(".js-menu-close-icon-img");

let menuActive = false;

menuBtnElement.addEventListener("click", () => {
  if (menuActive) {
    menuElement.classList.remove("menu-active-div-active");
  } else {
    menuElement.classList.add("menu-active-div-active");
    console.log("HI");
  }
  menuActive = !menuActive;
});
closeElement.addEventListener("click", () => {
  if (menuActive) {
    menuElement.classList.remove("menu-active-div-active");
  } else {
    menuElement.classList.add("menu-active-div-active");
    console.log("HI");
  }
  menuActive = !menuActive;
});

let todoHTML = "";

todoStore.forEach((singleTodo) => {
  todoHTML += `
  
 <div class='task-day-group-container'>
      <div class='task-day-single-with-date-div js-task-day-single-with-date-div'>
        <p class='task-container-date-p'>${singleTodo.date}</p>
        <div class='task-day-single-div'>
          <div class='task-day-single-head-div'>
            <div class='task-day-single-head-sub-div'>
              <input type='checkbox' />
              <p>${singleTodo.heading}</p>
            </div>
          </div>
          <div class='task-day-single-body-div'>
            <p class="task-day-single-body-discr-p">${singleTodo.desc}</p>
          </div>
        </div>
      </div>
    </div>
  `;
});

document.querySelector(".js-task-content-container").innerHTML = todoHTML;
const singleDivElement = document.querySelectorAll(
  ".js-task-day-single-with-date-div",
);

singleDivElement.forEach((singleTodoDiv) => {
  singleTodoDiv.addEventListener("click", () => {
    singleTodoDiv.classList.add("task-day-single-with-date-div-active");
    singleTodoDiv
      .querySelector(".task-day-single-head-div")
      .classList.add("task-day-single-head-div-active");
    singleTodoDiv
      .querySelector(".task-day-single-body-div")
      .classList.add("task-day-single-body-div-active");
    singleTodoDiv
      .querySelector(".task-day-single-body-discr-p")
      .classList.add("task-day-single-body-discr-p-active");

    singleTodoDiv
      .querySelector(".task-container-date-p")
      .classList.add("task-container-date-p-active");
  });
});
