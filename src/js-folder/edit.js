const errorImg = document.querySelector(".error-img");
const innerDiv = document.querySelector(".edit-div");
import { todoStore } from "./todoStore.js";

export function triggerEditpage(idd) {
  idd = Number(idd);
  console.log(idd);
  errorImg.remove();
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
        <textarea class="textarea-inp" placeholder=""></textarea>
      </div>
      <div class="footer-div">
        <button class="save-btn">Save changes</button>
        <button class=" delete-btn">delete</button>
      </div>
    </div>
  `;

  const headingInp = document.querySelector(".header-inp");
  const dateInp = document.querySelector(".date-inp");
  const textAreaInp = document.querySelector(".textarea-inp");

  let selectedTodo;
  todoStore.forEach((singleTodo) => {
    if (singleTodo.id === idd) {
      selectedTodo = singleTodo;
    }
  });
  if (selectedTodo) {
    headingInp.value = selectedTodo.heading;
    dateInp.value = selectedTodo.date;
    textAreaInp.value = selectedTodo.desc;
  }
}
