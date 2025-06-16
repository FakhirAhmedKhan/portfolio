document.addEventListener('DOMContentLoaded', () => {
    // Typed.js for main intro
    const element = document.getElementById('element');
    if (element) {
        new Typed(element, {
            strings: ['Web Designer', 'Web Developer'],
            typeSpeed: 80,
            backDelay: 1000,
            backSpeed: 50,
            loop: true,
        });
    }

    // Typed.js for navText
    const navText = document.getElementById('navText');
    if (navText) {
        new Typed(navText, {
            strings: ['Portfolio'],
            typeSpeed: 150,
            loop: false,
            showCursor: false,
        });
    }

    // Hamburger menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Feedback form handler
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            alert('Thank you for your feedback!');
            form.reset();
        });
    }

    // Login/Signup logic (only if forms exist)
    const loginForm = document.querySelector('.form.login');
    const signupForm = document.querySelector('.form.signup');
    const skipBtn = document.getElementById('skipBtn');

    if (signupForm) {
        signupForm.addEventListener('submit', e => {
            e.preventDefault();
            const username = signupForm.querySelector('input[type="text"]').value;
            const password = signupForm.querySelector('input[type="password"]').value;
            // WARNING: Never store real passwords in localStorage in production!
            const user = { username, password };
            localStorage.setItem('user', JSON.stringify(user));
            alert('Signup successful! Please login.');
            const loginTab = document.getElementById('loginTab');
            if (loginTab) loginTab.checked = true;
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', e => {
            e.preventDefault();
            const username = loginForm.querySelector('input[type="text"]').value;
            const password = loginForm.querySelector('input[type="password"]').value;
            const savedUser = JSON.parse(localStorage.getItem('user'));
            if (!savedUser) {
                alert('No account found. Please sign up first.');
                return;
            }
            if (username === savedUser.username && password === savedUser.password) {
                alert('Login successful!');
                window.location.href = 'home.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            window.location.href = 'home.html';
        });
    }
});

// Redirect function for contact form
function redirectToGoogleForm() {
    window.location.href = 'https://forms.gle/tozKdRWW2cbHqBZj8';
}

// Custom cursor and party popper effect
(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-effect';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = (mouseX - 16) + 'px';
        cursor.style.top = (mouseY - 16) + 'px';
        activatePopper();
    });

    const colors = ['#ffd700', '#ff69b4', '#00e1ff', '#ffb300', '#70ff91', '#fff'];
    const createParticle = (x, y) => {
        const p = document.createElement('div');
        p.className = 'popper-particle';
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.background = colors[(Math.random() * colors.length) | 0];
        p.style.transform = `scale(${0.7 + Math.random() * 0.7})`;
        document.body.appendChild(p);
        const angle = Math.random() * 2 * Math.PI;
        const dist = 60 + Math.random() * 40;
        const dx = Math.cos(angle) * dist, dy = Math.sin(angle) * dist;
        p.animate([
            { transform: p.style.transform, opacity: 1 },
            { transform: `translate(${dx}px,${dy}px) scale(0.2)`, opacity: 0 }
        ], {
            duration: 700 + Math.random() * 300,
            easing: 'cubic-bezier(0.4,2,0.6,1)'
        });
        setTimeout(() => p.remove(), 800);
    };

    let popperActive = false;
    let hideTimeout;
    const activatePopper = () => {
        popperActive = true;
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            popperActive = false;
        }, 700);
    };

    setInterval(() => {
        if (!popperActive) return;
        for (let i = 0; i < 2; i++) createParticle(mouseX, mouseY);
    }, 60);
})();