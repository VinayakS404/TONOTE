const passwordInpElement = document.querySelector(".js-password-inp");
const eyeIconElement = document.querySelector(".js-eye-icon");

eyeIconElement.addEventListener("click", () => {
  if (passwordInpElement.type === "password") {
    passwordInpElement.setAttribute("type", "text");
    eyeIconElement.src = "/img/hidden.png";
  } else if (passwordInpElement.type === "text") {
    passwordInpElement.setAttribute("type", "password");
    eyeIconElement.src = "/img/eye-icon.png";
  }
});
