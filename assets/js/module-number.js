document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".module-number__list-arrow-wrapper button");
    const list = document.querySelector(".module-number__list");
    button.addEventListener("click", () => {
      list.classList.toggle("--list-opened");
      button.classList.toggle("--list-opened");
    });
  });