export const container = document.querySelector("main.container");
export const lockIcon = document.querySelector(".input-box i");
export const body = document.querySelector("body");

export function setupBlurEffect() {
  container.addEventListener("click", (event) => {
    event.stopPropagation();

    if (!container.classList.contains("blurred")) {
      container.classList.add("blurred");
    }
  });

  body.addEventListener("click", (event) => {
    if (container.classList.contains("blurred")) {
      event.stopPropagation();

      container.classList.remove("blurred");
    }
  });
}
