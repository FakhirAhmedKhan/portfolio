const projects = [
    {
        title: "📝 Circum Finder",
        link: "https://pi-program.vercel.app/",
        pra: "The Circumference Finder is a straightforward tool that calculates the circumference of a circle based on user input. By entering the radius or diameter.",
    },
    {
        title: "🧾 Unit Converter",
        link: "https://temperature-converter-by-using-html-css-and-jave-script.vercel.app/",
        pra: "Temperature: Convert between Celsius (°C) and Fahrenheit (°F). Speed: Switch between Kilometers per hour, Miles per hour, Meters per second, and Knots.",
    },
    {
        title: "⛅ Weather App",
        link: "https://weather-app-cyan-one-55.vercel.app/",
        pra: "The Weather App provides weather updates for any global location. It displays temperature, humidity, wind speed, and overall weather conditions.",
    },
    {
        title: "🎞️ Netflix Clone",
        link: "https://netflix-clone-jade-beta.vercel.app/",
        pra: "The Netflix Clone replicates the core features of the popular streaming platform, offering easy navigation, real-time updates, and interactive tools. Built with a clean design and efficient performance.",
    },
    {
        title: "▶️ YouTube Clone",
        link: "https://youtube-git-main-fakhir-ahmed-khans-projects.vercel.app/",
        pra: "This YouTube Clone is a responsive web page that replicates the core features. Built with modern web technologies like HTML5, JavaScript, and CSS, it demonstrates handling video data and user interaction.",
    },
    {
        title: "🗣️ Text-to-Speech App",
        link: "https://text-to-speech-ruby-phi.vercel.app",
        pra: "This app converts written text into natural-sounding audio instantly. Supporting multiple languages and voices, it allows users to listen to any text on the go. Whether improving accessibility or creating audio content.",
    },
    {
        title: "🛒 Amazon Clone",
        link: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
        pra: "Amazon Clone is a simple web made with JavaScript. It lets users view products, add them to a cart, and see the total. It's a good project to practice basic JavaScript and web skills.",
    },
    {
        title: "🔢 Calculator App",
        link: "https://calculator-alpha-one-55.vercel.app/",
        pra: "This Calculator App enables users to perform basic arithmetic operations such as addition, subtraction, and multiplication. It's easy to enter numbers and view results instantly.",
    },
    {
        title: "📝 Task_Tracker",
        link: "https://to-do-list-neon-six.vercel.app/",
        pra: "ToDo App is a simple and easy-to-use task manager that helps you organize your daily tasks. You can add and delete tasks. Whether it’s for school, work, or personal use, it keeps you focused.",
    },
    {
        title: "🐍 Python Basic Programs",
        link: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
        pra: "A collection of beginner-level Python programs designed to build a foundation in programming concepts like variables, loops, functions, and conditionals.",
    },
    {
        title: "🐍 Basic Python Programs Part 2",
        link: "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
        pra: "The second part of the beginner-level Python series focuses on more practice with functions, loops, user input, and basic problem-solving techniques.",
    },
    {
        title: "🐍 Grading System in Python",
        link: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
        pra: "A simple Python program that calculates student grades based on their marks. It uses if/else statements to assign grades, helping users check their grades.",
    },
    {
        title: "🐍 Game in Python",
        link: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
        pra: "Word Guessing Game in Python is a fun terminal game where players guess letters to find the hidden word.",
    },
    {
        title: "🐍 Quiz in Python",
        link: "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
        pra: "A simple quiz app that tests knowledge of HTML, CSS, and JS. It runs in the terminal and shows the final score.",
    },
    {
        title: "🔳 QR Code Generator",
        link: "https://qr-generator-lilac-beta.vercel.app/",
        pra: "A simple tool that creates QR codes from data. Users enter data, and the app generates a scannable QR code.",
    },
    {
        title: "🎮 Rock, Paper, Scissors Game",
        link: "https://rock-three-umber.vercel.app/",
        pra: "The classic game allows players to test their luck against the computer. With instant results on choices, it's fun.",
    },
    {
        title: "⚛️ /First React/",
        link: "https://github.com/FakhirAhmedKhan/First-React-Code/tree/main/First%20React",
        pra: "To set up React, install Node.js with npm. Then run npx create-react-app my-app in the terminal. Go to the folder with cd my-app and start the app using npm start. Your React app will open in the browser.",
    },
    {
        title: "⚛️ Calculator-in-React",
        link: "https://calculator-in-react-ten.vercel.app/",
        pra: "Calculator-in-React is a simple app built with React that performs basic math operations. It uses components and state to update results instantly. Great for beginners learning React.",
    },
];

let projectHTML = "";

projects.forEach((project) => {
    projectHTML += `
    <article class="project-card" loading="lazy">
      <h2>${project.title}</h2>
      <a href="${project.link}" target="_blank" ">View Project</a>
      <p>${project.pra}</p>
    </article>
  `;
});

document.querySelector(".projects-container").innerHTML = projectHTML;
