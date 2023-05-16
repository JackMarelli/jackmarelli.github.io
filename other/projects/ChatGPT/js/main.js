const _app = {}

_app.openMenuIcon = document.querySelector("#openMenuIcon");
_app.loseMenuIcon = document.querySelector("#closeMenuIcon");

_app.openMenuIcon.addEventListener("click", openMenu);
_app.closeMenuIcon.addEventListener("click", closeMenu);

// Function to open the full-screen menu
function openMenu() {
  var menu = document.querySelector("#fullScreenMenu");
  menu.classList.add("open");
}

// Function to close the full-screen menu
function closeMenu() {
  var menu = document.querySelector("#fullScreenMenu");
  menu.classList.remove("open");
}