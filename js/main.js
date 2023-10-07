const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const navBar = document.querySelector("#navbar");

openMenu.addEventListener("click", () => {
  navBar.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navBar.classList.add("closing");
  setTimeout(() => {
    navBar.classList.remove("active");
    navBar.classList.remove("closing");
  }, 400);
});
