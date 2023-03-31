// Add event listener to the window object
window.addEventListener("load", function() {
    // Get the preloader element
    var preloader = document.getElementById("preloader");
    // Hide the preloader once the page has loaded
    preloader.style.display = "none";
    // Add the loaded class to the body element
    document.body.classList.add("loaded");
  });
  