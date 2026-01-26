import { userData } from "./usernameNPassword.js";

const passwordInpElement = document.querySelector(".js-password-inp");
const eyeIconElement = document.querySelector(".js-eye-icon");
const confirmPasswordInpElement = document.querySelector(
  ".js-confirm-password-inp",
);
const confirmEyeIconElement = document.querySelector(".js-confirm-eye-icon");
const signBtnElement = document.querySelector(".js-sign-btn");
const usernameInpElement = document.querySelector(".js-username-inp");
const signUpStatusElement = document.querySelector(".js-sign-up-status");

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
  if (currentUsername && currentPassword) {
    let a = true;

    for (let i = 0; i < userData.length; i++) {
      if (
        currentUsername === userData[i].username &&
        currentPassword === userData[i].password
      ) {
        a = false;
      }
    }

    if (a) {
      userData.push({
        username: usernameInpElement.value,
        password: passwordInpElement.value,
      });
      usernameInpElement.value = "";
      passwordInpElement.value = "";
    }
  } else {
    if (currentUsername) {
      signUpStatusElement.innerHTML = "Enter Password";
      setInterval(() => {
        signUpStatusElement.innerHTML = "";
      }, 3000);
    } else if (currentPassword) {
      signUpStatusElement.innerHTML = "Enter Username";
      setInterval(() => {
        signUpStatusElement.innerHTML = "";
      }, 3000);
    } else {
      signUpStatusElement.innerHTML = "Enter Username and Password";
      setInterval(() => {
        signUpStatusElement.innerHTML = "";
      }, 3000);
    }
  }
});
