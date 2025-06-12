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
        </p> `,
    },
    {
        title: "💻 Web Development?",
        description: `<p>(Frontend Development) This is what users see and interact with the layout, colors, buttons, images, etc.(Backend Development) This is what happens behind the scenes the server, database, and logic that power the website. (Full-Stack Development) A full stack developer works on both thefrontend and backend.</p>`,
    },

    {
        title: "🎨 What is a Frontend Developer?",
        description: `<p>
        A frontend developer is someone who builds the visual part of a website—the part users see and use.<br>
        • Create web pages using HTML<br>
        • Style pages with CSS<br>
        • Add interactivity using JavaScript<br>
        • Make websites look good on all devices (responsive design)<br>
        • Use tools like React, Bootstrap, or Tailwind CSS
        </p>`,
    },
    {
        title: "🌐 HTML Tags for Beginners",
        description: `<p>Discover the top 5 HTML tags every beginner should learn. These tags are the building blocks of any web page and help you create a well structured layout. In this blog, you'll learn how to use:<br>
        &lt;html&gt; – wraps the entire HTML document<br>
        &lt;head&gt; – holds meta info, title, and links to CSS<br>
        &lt;body&gt; – contains the content shown on the page<br>
        &lt;h1&gt; – defines the main heading<br>
        &lt;p&gt; – adds paragraphs of text<br><br>
        Perfect for anyone starting their web dev journey!</p>`,
    },
    {
        title: "🎨 Flexbox vs Grid: What’s Best for Your Layout?",
        description: `<p>Flexbox and Grid are two powerful CSS layout systems, but they work in different ways. Flexbox is great for one-dimensional layouts—either rows or columns—while Grid is perfect for two-dimensional layouts with rows and columns. This blog helps beginners understand the difference, shows when to use each, and makes it easier to choose the right tool for your next web project.</p>
        <p>Perfect for anyone starting their web styling journey!</p>`,
    },
];

let blogsHTML = "";

Blogs.forEach((blog) => {
    blogsHTML += `
    <article class="project-card">
      <h2>${blog.title}</h2>
      ${blog.description}
    </article>
  `;
});

document.querySelector(".projects-container").innerHTML = blogsHTML;
