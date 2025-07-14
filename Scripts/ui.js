export const container = document.querySelector("main.container");
export const body = document.querySelector("body");

export function setupBlurEffect() {
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

  window.addEventListener("keydown", () => {
    if (container.classList.contains("blurred")) {
      container.classList.remove("blurred");
    }
  });
}
