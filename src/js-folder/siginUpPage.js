const passwordInpElement = document.querySelector(".js-password-inp");
const eyeIconElement = document.querySelector(".js-eye-icon");
const confirmPasswordInpElement = document.querySelector(
  ".js-confirm-password-inp",
);
const confirmEyeIconElement = document.querySelector(".js-confirm-eye-icon");

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
