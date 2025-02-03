// Get the menu button and navigation menu
const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");

// Toggle the menu when the button is clicked
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close the menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !event.target.closest("#menu-btn") &&
    !event.target.closest("#nav-menu")
  ) {
    navMenu.classList.remove("show");
  }
});
