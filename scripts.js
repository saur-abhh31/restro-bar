// Example: Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Get the elements
const hamburgerIcon = document.getElementById("hamburger-icon");
const overlayMenu = document.getElementById("overlay-menu");

// Toggle the overlay menu when the hamburger icon is clicked
hamburgerIcon.addEventListener("click", () => {
  // Toggle the "show" class on overlay to trigger transition
  overlayMenu.classList.toggle("show");
  hamburgerIcon.classList.toggle("active"); // Toggle the active class to change to cross
});

// Close the overlay when clicking anywhere inside the overlay
overlayMenu.addEventListener("click", () => {
  overlayMenu.classList.remove("show");
  hamburgerIcon.classList.remove("active"); // Reset to hamburger icon
});

// Add a class when scrolling down to show shadow on navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("header");
    if (window.scrollY > 0) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  
