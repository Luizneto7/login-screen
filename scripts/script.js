const container = document.querySelector("main.container");
const body = document.querySelector("body");
const form = document.querySelector("main.container form");

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && container.classList.contains("blurred")) {
      container.classList.remove("blurred");
    }
  });

  container.addEventListener("click", (event) => {
    event.stopPropagation();

    if (!container.classList.contains("blurred")) {
      container.classList.add("blurred");
    }
  });

  body.addEventListener("click", () => {
    if (container.classList.contains("blurred")) {
      container.classList.remove("blurred");
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});
