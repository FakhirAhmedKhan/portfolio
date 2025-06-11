const Blogs = [
    {
        title: "🧑‍💻 What is Web Development?",
        description: ` <p>
                    <strong>Have you ever wondered how websites are made?</strong><br>
                    Every button you click, every page you visit, and every cool animation you see on the web is part of web development.
                    Web development is the process of creating websites or web applications that run in your browser. It involves both design and coding to make websites functional and user-friendly.<br><br>
                    </p>
                `,
    },
    {
        title: "📱 Why Frontend Development Matters",
        description: `<p>
         Imagine visiting a website that looks broken or is hard to use. You’d probably leave right away.<br><br>
         That’s why frontend developers are so important they make sure the website is attractive, easy to use, and works smoothly on all screen sizes.
        </p> `
    },
    {
        title: "💻 Web Development?",
        description: ` 
                    1. <strong>Frontend Development</strong><br>
                    This is what users see and interact with—the layout, colors, buttons, images, etc.<br><br>

                    2. <strong>Backend Development</strong><br>
                    This is what happens behind the scenes—the server, database, and logic that power the website.<br><br>

                     3. <strong>Full-Stack Development</strong><br>
                    A full-stack developer works on both the frontend and backend.`,
    },

    {
        title: "🎨 What is a Frontend Developer?",
        description: `<p>
        A frontend developer is someone who builds the visual part of a website—the part users see and use.<br><br>
        Here are some things a frontend developer does:<br><br>
        • Create web pages using HTML<br>
        • Style pages with CSS<br>
        • Add interactivity using JavaScript<br>
        • Make websites look good on all devices (responsive design)<br>
        • Use tools like React, Bootstrap, or Tailwind CSS
        </p>`,
    },
];

let blogsHTML = "";

Blogs.forEach((blog) => {
    blogsHTML += `
    <article class="project-card">
      <h2>${blog.title}</h2>
      <p>${blog.description}</p>
    </article>
  `;
});

document.querySelector(".projects-container").innerHTML = blogsHTML;
