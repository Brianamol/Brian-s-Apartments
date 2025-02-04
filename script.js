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

// Get the search button and input fields
const searchButton = document.getElementById("searchButton");
const locationSelect = document.getElementById("Location");
const apartmentSelect = document.getElementById("size");

// Add event listener to the search button
searchButton.addEventListener("click", () => {
  // Get the selected values
  const selectedLocation = locationSelect.value;
  const selectedApartment = apartmentSelect.value;

  // Debugging: Log the selected values
  console.log("Selected Location:", selectedLocation);
  console.log("Selected Apartment:", selectedApartment);

  // Redirect based on the selected location and apartment type
  if (
    selectedLocation === "Location" ||
    selectedApartment === "select apartment"
  ) {
    alert("Please select a valid location and apartment type.");
    return; // Stop execution if inputs are invalid
  }

  // Map locations to their corresponding HTML pages
  const locationToPage = {
    Nairobi: "city-apartments.html",
    Mombasa: "beachfront-apartments.html",
    Nanyuki: "mountain-cabins.html",
    Nyali: "luxury-villas.html",
    Naivasha: "city-apartments.html", // Add more mappings as needed
    Nakuru: "city-apartments.html",
    Kisumu: "city-apartments.html",
    Malindi: "beachfront-apartments.html",
  };

  // Redirect to the appropriate page
  const redirectPage = locationToPage[selectedLocation];
  if (redirectPage) {
    window.location.href = redirectPage;
  } else {
    alert("Invalid location selected.");
  }
});

console.log("Selected Location:", selectedLocation);
console.log("Selected Apartment:", selectedApartment);

// Function to animate numbers
function animateNumbers() {
  const numbers = document.querySelectorAll(".info-item h3");
  const finalValues = [24, 1000, 1000000]; // Final values for the numbers
  const duration = 2000; // Animation duration in milliseconds
  const interval = 50; // Interval for updating the numbers

  numbers.forEach((number, index) => {
    let startValue = 0;
    const endValue = finalValues[index];
    const increment = Math.ceil(endValue / (duration / interval));

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= endValue) {
        clearInterval(timer);
        startValue = endValue; // Ensure the final value is exact
      }
      number.textContent = startValue.toLocaleString(); // Format numbers with commas
    }, interval);
  });
}

// Trigger animation when the section is in view
const distinctionSection = document.querySelector(".distinction");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateNumbers();
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
});

observer.observe(distinctionSection);

// Newsletter form validation
const newsletterForm = document.querySelector(".newsletter-section");
const emailInput = newsletterForm.querySelector('input[type="email"]');

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  if (!email || !validateEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you for subscribing!");
  emailInput.value = ""; // Clear the input
});

// Helper function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
