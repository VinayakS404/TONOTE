const usernameInpElement = document.querySelector(".js-username-inp");
const passwordInpElement = document.querySelector(".js-password-inp");
const eyeIconElement = document.querySelector(".js-eye-icon");
const loginBtnElement = document.querySelector(".js-login-btn");
const signUpStatusElement = document.querySelector(".js-sign-up-status");

import { userData } from "./usernameNPassword.js";

eyeIconElement.addEventListener("click", () => {
  if (passwordInpElement.type === "password") {
    passwordInpElement.setAttribute("type", "text");
    eyeIconElement.src = "/img/hidden.png";
  } else if (passwordInpElement.type === "text") {
    passwordInpElement.setAttribute("type", "password");
    eyeIconElement.src = "/img/eye-icon.png";
  }
});

loginBtnElement.addEventListener("click", () => {
  let currentUsername = usernameInpElement.value;
  let currentPassword = passwordInpElement.value;

  if (!currentUsername && !currentPassword) {
    signUpStatusElement.innerHTML = "Please fill in all required fields.";
    return;
  }
  if (!currentPassword) {
    signUpStatusElement.innerHTML = "Please enter a password.";
    return;
  }
  if (!currentUsername) {
    signUpStatusElement.innerHTML = "Please enter a username.";
    return;
  }
  let userExist = false;

  for (let i = 0; i < userData.length; i++) {
    if (
      userData[i].username === currentUsername &&
      userData[i].password === currentPassword
    ) {
      window.location.href = "home-page-todo.html";
      console.log("hi");
    } else {
      signUpStatusElement.innerHTML = "Incorrect username or password";
    }
  }
});
