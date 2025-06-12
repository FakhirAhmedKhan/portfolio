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

// Typed.js for navText (Home/About)
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

// Typed.js for Projects nav
// const proText = document.getElementById("proText");
// if (proText) {
//     new Typed(proText, {
//         strings: ["Projects"],
//         typeSpeed: 88,
//         backSpeed: 50,
//         backDelay: 10000,
//         loop: true,
//         showCursor: false,
//     });
// }

// // Typed.js for Contact nav
// const conText = document.getElementById("conText");
// if (conText) {
//     new Typed(conText, {
//         strings: ["Contact"],
//         typeSpeed: 88,
//         backSpeed: 50,
//         backDelay: 1000,
//         loop: true,
//         showCursor: false,
//     });
// }

// // Typed.js for Blogs nav
// const blogText = document.getElementById("Blog");
// if (blogText) {
//     new Typed(blogText, {
//         strings: ["My Blogs"],
//         typeSpeed: 88,
//         backSpeed: 50,
//         backDelay: 10000,
//         loop: true,
//         showCursor: false,
//     });
// }

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

// Redirect function
function redirectToGoogleForm() {
    window.location.href = "https://forms.gle/tozKdRWW2cbHqBZj8";
}