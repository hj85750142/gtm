const dialog = document.querySelector(".hotline-dialog");
const openButtons = document.querySelectorAll(".open-hotline");
const closeButtons = dialog.querySelectorAll(".dialog-close, .dialog-confirm");

openButtons.forEach((button) => {
  button.addEventListener("click", () => dialog.showModal());
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => dialog.close());
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
