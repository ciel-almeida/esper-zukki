const navContainer = document.querySelector(".nav");
const hamburger = document.querySelector(".nav__hamburger");
// const links = document.querySelectorAll(".main-nav__list-item");

hamburger.addEventListener("click", () => {
  navContainer.classList.toggle("clicked");
  // links.forEach((link) => {
  //   link.classList.toggle("fade");
  // });
});
