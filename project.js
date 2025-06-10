const projects = [
    {
        title: "📝 Circumference Finder",
        link: "https://pi-program.vercel.app/",
        pra: "The Circumference Finder is a straightforward tool that calculates the circumference of a circle based on user input. By entering the radius or diameter, users receive instant results using the formula:",
    },
    {
        title: "🧾 Unit Converter",
        link: "https://temperature-converter-by-using-html-css-and-jave-script.vercel.app/",
        pra: `"This Unit Converter offers quick and accurate conversions between commonly used units: 
         <ul>
            <span><strong>Temperature:</strong> Convert between Celsius (°C) and Fahrenheit (°F).</span>
            <span><strong>Speed:</strong> Switch between Kilometers per hour (KPH), Miles per hour (MPH),
            Meters per second (MPS), and Knots (KN).</span>
        </ul>`,
    },
    {
        title: "⛅ Weather App",
        link: "https://weather-app-cyan-one-55.vercel.app/",
        pra: "The Weather App provides real-time weather updates for any global location. Featuring a user-friendly interface, it displays current temperature, humidity, wind speed, and overall weather conditions, helping users plan their day effectively.",
    },
    {
        title: "🔢 Calculator App",
        link: "https://calculator-alpha-one-55.vercel.app/",
        pra: "This Calculator App enables users to perform basic arithmetic operations such as addition subtraction, multiplication, and division. Its intuitive design and responsive buttons make calculations quick and easy for everyday use.",
    },
    {
        title: "🎞️ Netflix Clone",
        link: "https://netflix-clone-jade-beta.vercel.app/",
        pra: "The Netflix Clone replicates the core features of the popular streaming platform, offering easy navigation, real-time updates, and interactive tools. Built with a clean design and efficient performance, it provides a reliable alternative with familiar functionality.",
    },
    {
        title: "▶️ YouTube Clone",
        link: "https://youtube-git-main-fakhir-ahmed-khans-projects.vercel.app/",
        pra: "This YouTube Clone is a fully responsive web application that replicates the core features of the popular video-sharing platform. Users can browse, search, and watch videos seamlessly. Builtwith modern web technologies like React, JavaScript, and CSS, it demonstrates handling video data, user interaction, and dynamic content loading.",
    },
    {
        title: "🗣️ Text-to-Speech App",
        link: "https://text-to-speech-ruby-phi.vercel.app",
        pra: "This Text-to-Speech app converts written text into natural-sounding audio instantly. Supporting multiple languages and voices, it allows users to listen to any text on the go. Whether improving accessibility or creating audio content, this app provides a fast and reliable solution.",
    },
    {
        title: "🎮 Rock, Paper, Scissors Game",
        link: "https://rock-three-umber.vercel.app/",
        pra: "The classic Rock, Paper, Scissors game allows players to challenge friends or test their luck against the computer. With instant feedback on choices, it's a fun and engaging way to practice quick decision-making.",
    },
    {
        title: "🐍 Python Basic Programs",
        link: "https://github.com/FakhirAhmedKhan/Python_Basic_Program-",
        pra: "A collection of beginner-level Python programs designed to build a strong foundation in  programming concepts like variables, loops, functions, and conditionals.",
    },
    {
        title: "🐍 Basic Python Programs Part 2",
        link: "https://github.com/FakhirAhmedKhan/Basic_Python_Program_Part_2",
        pra: "The second part of the beginner-level Python series focuses on more practice with functions,loops, user input, and basic problem-solving techniques.",
    },
    {
        title: "🐍 Grading System in Python",
        link: "https://github.com/FakhirAhmedKhan/Grading_System_in_python",
        pra: "A simple Python program that calculates student grades based on their marks. It uses conditional statements to assign grades like A, B, C, D, or F, helping users understand basic if-else logic and input handling.",
    },
    {
        title: "🛒 Amazon Clone",
        link: "https://github.com/FakhirAhmedKhan/retry-amazon-clone",
        pra: "Amazon Clone is a simple web app made with JavaScript. It lets users view products, add them to a cart, and see the total. It’s a good project to practice basic JavaScript and web skills.",
    },
    {
        title: "🐍 Game in Python",
        link: "https://github.com/FakhirAhmedKhan/word-guessing-game-in-py",
        pra: "Word Guessing Game in Python is a fun terminal game where players guess letters to find the hidden word.",
    },
    {
        title: "🐍 HTML/CSS Quiz in Python",
        link: "https://github.com/FakhirAhmedKhan/HTML-or-CSS-Quiz-by-using-python",
        pra: "HTML/CSS Quiz in Python is a simple quiz app that tests knowledge of HTML and CSS. It’s built using Python and runs in the terminal, asking multiple-choice questions and showing the final score at the end.",
    },
    {
        title: "⚛️ /First React/",
        link: "https://github.com/FakhirAhmedKhan/First-React-Code/tree/main/First%20React",
        pra: "To set up React for the first time, install Node.js and npm. Then, open a terminal and run npx create-react-app my-app to create a new React project. Go into the project folder using cd my-app and start the app with npm start. This will open your React app in the browser, ready for development.",
    },
    {
        title: "⚛️ Calculator-in-React",
        link: "https://calculator-in-react-ten.vercel.app/",
        pra: "Calculator-in-React is a simple app built with React that performs basic math operations. It uses components and state to update results instantly. Great for beginners learning React.",
    },
    {
        title: "🔳 QR Code Generator",
        link: "https://qr-generator-lilac-beta.vercel.app/",
        pra: "QR Code Generator is a simple tool or app that creates QR codes from text, URLs, or other data. Users enter information, and the app generates a scannable QR code image instantly.",
    },
    {
        title: "📝 Task_Tracker",
        link: "https://to-do-list-neon-six.vercel.app/",
        pra: "About ToDo App ToDo App is a simple and easy- to - use task manager that helps you organize your daily tasks.You can add, edit, and delete tasks, mark them as complete, and stay on top of your goals.Whether it’s for school, work, or personal use, ToDo App keeps you focused and productive",

    },
];

let projectHTML = "";

projects.forEach((project) => {
    projectHTML += `
    <article class="project-card">
      <h2>${project.title}</h2>
      <a href="${project.link}" target="_blank">View Project</a>
      <p>${project.pra}</p>
    </article>
  `;
});

document.querySelector(".projects-container").innerHTML = projectHTML;
