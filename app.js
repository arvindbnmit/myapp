const btn = document.querySelector("button");
const para = document.querySelector(".show");
btn.addEventListener("click", () => {
  para.classList.toggle("hide");
});
