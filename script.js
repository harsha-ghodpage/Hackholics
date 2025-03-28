// script.js
document.addEventListener("DOMContentLoaded", function() {
  // Handle login button click
  document.getElementById("login-btn").addEventListener("click", function() {
      alert("Redirecting to Login Page...");
      window.location.href = "login.html";
  });

  // Handle review submission
  const reviewForm = document.getElementById("review-form");
  if (reviewForm) {
      reviewForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const reviewText = document.getElementById("review-text").value;
          if (reviewText.trim() !== "") {
              const reviewContainer = document.getElementById("reviews-list");
              const newReview = document.createElement("p");
              newReview.textContent = reviewText;
              reviewContainer.appendChild(newReview);
              document.getElementById("review-text").value = "";
          }
      });
  }

  // Handle contact form submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
      contactForm.addEventListener("submit", function(event) {
          event.preventDefault();
          alert("Thank you for contacting us! We will get back to you soon.");
          contactForm.reset();
      });
  }
});
