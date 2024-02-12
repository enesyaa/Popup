const btns = document.querySelectorAll(".btn");
const popup = document.querySelector(".popup");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.toggle("show");
  });
});
