let goTopBtn = document.querySelector(".back-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    goTopBtn.classList.add("back-top-show");
  } else if (window.scrollY < 500) {
    goTopBtn.classList.remove("back-top-show");
  }
});
goTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
