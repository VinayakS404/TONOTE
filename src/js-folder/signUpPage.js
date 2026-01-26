import { userData } from "./usernameNPassword.js";

const usernameInpElement = document.querySelector(".js-username-inp");
const passwordInpElement = document.querySelector(".js-password-inp");
const eyeIconElement = document.querySelector(".js-eye-icon");
const confirmPasswordInpElement = document.querySelector(
  ".js-confirm-password-inp",
);
const confirmEyeIconElement = document.querySelector(".js-confirm-eye-icon");
const signBtnElement = document.querySelector(".js-sign-btn");
const signUpStatusElement = document.querySelector(".js-sign-up-status");

let timeoutKey1;
let timeoutKey2;

eyeIconElement.addEventListener("click", () => {
  if (passwordInpElement.type === "password") {
    passwordInpElement.setAttribute("type", "text");
    eyeIconElement.src = "./img/hidden.png";
  } else if (passwordInpElement.type === "text") {
    passwordInpElement.setAttribute("type", "password");
    eyeIconElement.src = "./img/eye-icon.png";
  }
});

confirmEyeIconElement.addEventListener("click", () => {
  if (confirmPasswordInpElement.type === "password") {
    confirmPasswordInpElement.setAttribute("type", "text");
    confirmEyeIconElement.src = "./img/hidden.png";
  } else if (confirmPasswordInpElement.type === "text") {
    confirmPasswordInpElement.setAttribute("type", "password");
    confirmEyeIconElement.src = "./img/eye-icon.png";
  }
});

signBtnElement.addEventListener("click", () => {
  let currentUsername = usernameInpElement.value;
  let currentPassword = passwordInpElement.value;
  let confirmPassword = confirmPasswordInpElement.value;

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
  if (currentPassword && !confirmPassword) {
    signUpStatusElement.innerHTML = "Please confirm your password.";
    return;
  }
  if (currentPassword !== confirmPassword) {
    signUpStatusElement.innerHTML = "Passwords do not match.";
    return;
  }
  let userExist = false;

  signUpStatusElement.innerHTML = "";

  for (let i = 0; i < userData.length; i++) {
    if (
      (currentUsername === userData[i].username &&
        currentPassword === userData[i].password) ||
      currentUsername === userData[i].username
    ) {
      if (timeoutKey2) {
        clearTimeout(timeoutKey2);
      }

      signUpStatusElement.innerHTML = "This username is already taken.";
      timeoutKey2 = setTimeout(() => {
        signUpStatusElement.innerHTML = "";
      }, 3000);
      userExist = true;
      return;
    }
  }

  if (!userExist) {
    usernameInpElement.value = "";
    passwordInpElement.value = "";
    confirmPasswordInpElement.value = "";
    userData.push({
      username: currentUsername,
      password: currentPassword,
    });
    //return;
  }

  console.log(userData);
  window.location.href = "./home-page-todo.html";
});
