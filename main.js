// main.js - Cleaned and optimized

document.addEventListener('DOMContentLoaded', () => {
    // Typed.js for main intro
    const element = document.getElementById("element");
    if (element) {
        new Typed(element, {
            strings: ["Web Designer", "Web Developer"],
            typeSpeed: 80,
            backDelay: 1000,
            backSpeed: 50,
            loop: true,
        });
    }

    // Typed.js for navText
    const navText = document.getElementById("navText");
    if (navText) {
        new Typed(navText, {
            strings: ["Portfolio"],
            typeSpeed: 88,
            backSpeed: 50,
            backDelay: 1000,
            loop: true,
            showCursor: false,
        });
    }

    // Hamburger menu toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    if (navToggle && navLinks) {
        navToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Feedback form handler
    const form = document.getElementById("feedbackForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your feedback!");
            form.reset();
        });
    }
});

// Redirect function for contact form
function redirectToGoogleForm() {
    window.location.href = "https://forms.gle/tozKdRWW2cbHqBZj8";
}