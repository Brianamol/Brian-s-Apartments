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
