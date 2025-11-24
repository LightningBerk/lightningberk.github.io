// Get the button
const mybutton = document.getElementById("btn-back-to-top");

// Show/hide button based on scroll position
const scrollFunction = () => {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  
  if (scrollTop > 1000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};

// Add scroll event listener with passive flag for better performance
window.addEventListener("scroll", scrollFunction, { passive: true });

// Scroll to top with smooth behavior
const backToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// Add click event listener
mybutton.addEventListener("click", backToTop);