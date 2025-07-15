import { handleLogin, handleRegister } from "./auth.js";
import { lockIconEffect, setupBlurEffect } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  const showRegisterForm = document.getElementById("show-register-form");
  const showLoginForm = document.getElementById("show-login-form");

  showLoginForm.addEventListener("click", handleLogin);
  showRegisterForm.addEventListener("click", handleRegister);

  setupBlurEffect();
  lockIconEffect();
});
