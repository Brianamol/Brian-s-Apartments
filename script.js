document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector("nav ul");

  // Toggle menu when button is clicked
  menuBtn.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent click from bubbling up
    navMenu.classList.toggle("show"); // Toggle visibility
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!menuBtn.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("show");
    }
  });
});
