const data = {
    case01: {
        title: "Galeries Website",
        tech: "Frontend",
        preview_image: "assets/Icon.png",
        link: ["https://randomwinter89.github.io/GalerieWebsite/"],
        skills: ["HTML5", "React", "Tailwind"],
        tags: ["HTML5", "React", "Tailwind"],
        preview_description: "From design into a website",
        description: "I choice a web design from figma and convert into a website. Where I learn structure the user flow and use tailwind css to replicate for efficient flow. What I encounter while code the visual design",
        role: "Solo Frontend Developer",
        duration: "1 weeks",
        content: [
            {
                header: "Convert design into a website",
                problem: "The main problem is process the design intention and journey flow. As certain component does not have interaction provide, we must pinpoint logical direction for improvement and flexible with their design. Especially component share similar design",
                process: "To easier analyze and code their design from figma, we destructure the frame in smaller component that is repetitive or similar visual. Through that process, we reduce the time of redundant code on same component and easier on update at once",
                solution: "Instead of separate file for CSS, I import tailwind plugin to code quicker and easier tracking. Since I can code the element design and put them under component file, I don't have to worry of searching them. Another benefit was responsive design can applied straightaway on the element instead of manually code each class name which could be hazard as the development progress (Larger can harder track the CSS code).",
                image: "assets/P1.PNG"
            },
            {
                header: "Routing a Website flow",
                problem: "The second problem is figuring out the website pages and the possible connection with one another. As we would also faced another challenge, where singular page can provide different information with same layout.",
                process: "I begin analyze and list-down the website page to pinpoint the route, with the design of what and where a button would lead me toward. Then start coding the design and use reusable component to safe time",
                solution: "React router has a feature, that I can solve the same visual with different info. Through provide an ID at the router path when user interact different artist. The useLocation from router feature can extract the ID and to get the information we want from the database. Solving us the problem without need react context to record the id",
                image: "assets/P2.PNG"
            },
        ],
        result: "The journey of convert a figma design into a code-based website was a great experience for me. As I gain the skill of destructure the website and pinpoint which component is reusable or whether the a page layout can share different information. On the other hand, I improve tailwind skill further to cooperate with reusable component and get more used with it. Generally, I learned a tons of new skill and further improve fundamental skills"
    },
    case02: {
        title: "Custom Recipe Blog",
        tech: "Frontend",
        preview_image: "assets/RecipeBlog_Preview.png",
        link: ["https://randomwinter89.github.io/customize_recipe_page/"],
        skills: ["React", "Typescript", "CSS3"],
        tags: ["React", "Typescript", "CSS3", "Redux", "React Router"],
        preview_description: "Bootcamp Assignment on React, combine with Frontend Mentor Challenge",
        description: "I challenged myself to improve a bootcamp assignment by converting JavaScript into TypeScript with strict rules. I avoided Bootstrap and styled everything manually. For the UI, I used Frontend Mentor as a reference and added my own design elements.",
        role: "Solo Frontend Developer",
        duration: "1 Week",
        content: [
            {
                header: "Strict TypeScript Rules",
                problem: "TypeScript required strict type definitions for event handlers and Redux, making even simple tasks more complex. Every function, state, and prop needed an assigned type before being used. This slowed down development, especially with event handlers like onChange and onClick, which required specific types to function properly.",
                process: "Initially, I defined types manually for each function, but this quickly became repetitive. Repeatedly specifying types for similar variables cluttered the code, reducing readability and making debugging more difficult.",
                solution: "To improve efficiency, I created a separate file for type definitions and imported them where needed. This reduced redundancy, kept the code clean, and made debugging easier.",
                image: "assets/RecipePage_Customize.PNG"
            },
            {
                header: "Event Bubbling in Dynamic Form",
                problem: `When users clicked the "Add Field" button, it sometimes triggered events in parent components. This unintended behavior caused form actions to run when they weren't supposed to.`,
                process: "I considered using a button type to prevent unintended form submissions, but I also wanted a more flexible approach that could be useful in other cases where event bubbling caused unexpected issues.",
                solution: "I used e.stopPropagation() to stop the event from bubbling up the component tree. This ensured that only the intended event fired, preventing accidental interactions with parent components.",
                image: "assets/RecipePage_Customize2.PNG"
            },
            {
                header: "Managing Form State Efficiently",
                problem: `Using separate useState hooks for each form field made debugging difficult. Keeping track of multiple state variables and ensuring correct updates was time-consuming and error-prone.`,
                process: "At first, I managed each form input with an individual state, but this approach required multiple onChange handlers, making the code repetitive and harder to maintain.",
                solution: "I combined all fields into a single state object and updated values dynamically using key names. This reduced unnecessary useState calls and made managing the form much simpler.",
                image: "assets/RecipePage_Customize3.PNG"
            },
            {
                header: "Handling Undefined Values in TypeScript",
                problem: `TypeScript required every variable to have a defined type, leading to errors when values were missing or undefined. Without proper handling, the app could break when dealing with optional data.`,
                process: "Initially, I manually assigned types to every variable, ensuring explicit type safety. However, this process became increasingly time-consuming and tedious, especially as the codebase grew. Constantly specifying types for similar variables not only slowed down development but also made the setup process feel repetitive and inefficient.",
                solution: "I assigned default values like null to variables that could be undefined. This prevented TypeScript errors and ensured the app remained stable, even when some data was missing.",
                image: "assets/RecipePage_Customize4.PNG"
            },
            {
                header: "Improving User Experience for Recipe Previews",
                problem: `Users had to navigate back and forth to preview different recipes, which disrupted the experience. A smoother way to switch between recipes was needed.`,
                process: "Instead of creating separate pages for each recipe, I looked for a way to display previews dynamically without reloading the page.",
                solution: "I passed a function as a prop to the modal component, allowing it to control its own state. This made it possible to preview recipes without leaving the page, improving usability.",
                image: "assets/RecipePage_Customize5.PNG"
            }
        ],
        result: "This project significantly enhanced my proficiency in TypeScript, React, and Redux. By structuring types effectively, I improved my ability to write cleaner, more efficient, and maintainable code. Additionally, I refined my state management skills and gained a deeper understanding of event handling in React. Working without UI libraries strengthened my CSS expertise, allowing me to style components from scratch with greater confidence. Overall, this experience provided valuable insights into scalable frontend development, equipping me to tackle more complex projects."
    },
    case03: {
        title: "Minimum Kanban",
        tech: "Frontend",
        preview_image: "assets/KanbanMinimalist01.PNG",
        link: ["https://randomwinter89.github.io/Minimalist_Kanban/"],
        skills: ["React", "JavaScript", "Tailwindcss"],
        tags: ["React", "React Router Dom", "LocalStorage", "JavaScript", "Tailwindcss"],
        preview_description: "Mini-project 03, understand 3 basis hook and how kanban was implemented",
        description: "Moving toward React, I begun learning the 3 hook used upon industry and standard web dev. Applied this concept into kanban by outside resources.",
        role: "Solo Frontend Developer",
        duration: "1 ~ 2 Days",
        content: [
            {
                header: "Destructure the component and integrate cards into columns",
                process: "I explored how others implemented card integration and learned about structuring components efficiently. In React, I discovered three essential hooks that helped achieve a proper and dynamic web layout.",
                solution: "I applied these hooks to manage state and reactivity effectively. Additionally, I refactored a large, monolithic script into smaller, readable files, improving maintainability and reusability.",
                image: "assets/KanbanMinimalist02.PNG"
            }
        ],
        result: "By using React hooks and breaking down components, I created a cleaner, more modular structure. This approach not only improved the website’s performance and scalability but also provided a strong foundation for further enhancements."
    
    },
    case04: {
        title: "Responsive Layout",
        tech: "Frontend",
        preview_image: "assets/LoginIcon.png",
        link: ["https://randomwinter89.github.io/SigmaSchool_Fundamental_Frontend/"],
        skills: ["HTML5", "JavaScript", "CSS3"],
        tags: ["HTML5", "JavaScript", "CSS3"],
        preview_description: "Mini-project 01, handling different viewport size",
        description: "Building a responsive layout ensures a consistent design across all screen sizes. Initially, elements would break, making navigation difficult. This case explores the challenge and the solution using media queries for a flexible layout.",
        role: "Solo Frontend Developer",
        duration: "1 ~ 2 Days",
        content: [
            {
                header: "Building a Responsive Layout",
                problem: "Creating a layout that worked across different screen sizes was a challenge. Without a proper approach, elements would break on smaller or larger screens, making the design inconsistent and difficult to navigate.",
                process: `At first, I manually adjusted sizes for each screen width, but this approach was inefficient and required too many overrides. It became clear that I needed a flexible, scalable way to handle responsiveness.`,
                solution: "I used media queries to adjust styles dynamically based on screen size. This allowed the layout to scale naturally without breaking the design, ensuring a smooth user experience across different devices.",
                image: "assets/FakeLogin01.PNG"
            }
        ],
        result: "Through this process, I learned that manually adjusting styles for different screen sizes is inefficient and unsustainable. Instead, leveraging media queries provided a structured and scalable approach to responsiveness. By implementing these techniques, I was able to create a layout that adapts smoothly to various screen sizes, improving both usability and accessibility. This experience reinforced the importance of flexible design principles in front-end development."
    },
    case05: {
        title: "DOM Manipulation",
        tech: "Frontend",
        preview_image: "assets/BSIcon.png",
        link: ["https://randomwinter89.github.io/SigmaSchool_Fundamental_Frontend/"],
        skills: ["HTML5", "JavaScript", "CSS3"],
        tags: ["HTML5", "JavaScript", "CSS3"],
        preview_description: "Mini-project 02, understanding HTML modification through Javascript DOM manipulation",
        description: "Static websites work for basic pages, but for real interactivity, dynamic content updates are essential. Manually modifying HTML isn't scalable, so I explored a more efficient approach using JavaScript.",
        role: "Solo Frontend Developer",
        duration: "1 ~ 2 Days",
        content: [
            {
                header: "Modifying HTML Based on User Interaction",
                problem: "To make the website interactive, I needed a way to update content dynamically. However, directly modifying the HTML file wasn't scalable, especially for dynamic data or user-driven changes.",
                process: "Initially, I tried modifying static HTML manually, but this approach was impractical for real-world applications. I explored JavaScript's DOM manipulation methods to change the content dynamically.",
                solution: "I used JavaScript to find elements through getElementById and querySelector, allowing me to insert, edit, and remove content dynamically. This made updating the UI seamless without requiring a page refresh.",
                image: "assets/BusStop01.PNG"
            }
        ],
        result: "Using JavaScript to manipulate the DOM allowed me to update content dynamically, creating a smoother and more responsive user experience. This approach not only improves interactivity but also builds a strong foundation for working with modern frameworks like React."
    },
}

const title_tagline = document.getElementById("display__title-tagline");
const title_description = document.getElementById("display__description");
const title_tag = document.getElementById("display__tag");
const container = document.querySelector(".display__container");

const return_button = document.getElementById("display__title-button");

let isPreview = false;

function Display_PortfolioList() {
    const displayPortfolio = document.getElementById("display__portfolio");
    displayPortfolio.innerHTML = '';

    const keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++){
        const article = document.createElement("article");

        let tagString = ``;
        const tagArray = data[keys[i]].skills;
        for (var k = 0; k < tagArray.length; k++) {
            tagString += `<span class="tag-box">${tagArray[k]}</span>\n`;
        }

        article.innerHTML = `
            <img src="${data[keys[i]].preview_image}" class="article__preview" ></img>

            <div class="article__content" onclick="Display_CaseStudy(${i})">
                <div class="article__title">
                    <h1>0${parseInt(i) + 1}</h1>
                    <div class="article__title-name">
                        <h3>${data[keys[i]].tech}</h3>
                        <h2>${data[keys[i]].title}</h2>
                    </div>
                </div>
                <p class="article__desc" id="article__desc">
                    ${data[keys[i]].preview_description}
                </p>
                <div class="article__tag">
                    ${tagString}
                </div>
            </div>
        `;

        displayPortfolio.appendChild(article);
    }
}

function return_PortfolioList() {
    title_description.classList.remove("hide");
    title_tag.classList.add("hide");

    isPreview = false;

    document.getElementById("display__portfolio").classList.remove("hide");
    document.getElementById("CaseStudy").classList.add("hide");
    return_button.classList.add("hide");
    container.classList.remove("preview");

    title_tagline.innerHTML = `UPDATED DESIGN`;
}

function GenerateStructure(list) {
    let container = ``;
    for (var k = 0; k < list.length; k++) {
        const format = `
            <div class="case-study">
                <div class="case-study_content">
                    <h2>Problem ${k + 1}: ${list[k].header}</h2>
                    <p>${list[k].problem}</p>
                    <h3>Process:</h3>
                    <p>${list[k].process}</p>
                    <h3>Solution:</h3>
                    <p>${list[k].solution}</p>
                </div>

                <img src="${list[k].image}" class="img"></div>
            </div>\n
        `
        container += format;
    }

    return container;
}

function Display_CaseStudy(selectedCase) {
    isPreview = true;

    title_description.classList.add("hide");
    title_tag.classList.remove("hide");
    return_button.classList.remove("hide");
    container.classList.add("preview");

    document.getElementById("display__portfolio").classList.add("hide");
    document.getElementById("CaseStudy").classList.remove("hide");
    
    const portfolio_case = document.getElementById("CaseStudy");
    portfolio_case.innerHTML = '';

    const keys = Object.keys(data);
    const collection = data[keys[selectedCase]];
    let content = GenerateStructure(collection.content);

    let tags = ``;
    for (let j = 0; j < collection.tags.length; j++){
        tags += `<span class="tag-box">${collection.tags[j]}</span>`;
    }

    title_tagline.innerHTML = `${collection.title}`;
    title_tag.innerHTML = tags;

    let links = ``;
    for (let l = 0; l < collection.link.length; l++){
        links += `Target ${l + 1} Link: <a href=${collection.link[l]} target="_blank">${collection.link[l]}</a>\n`;
    }
    
    const caseStudy = `
        <p>${collection.description}</p>
        <div class="linker">${links}<div>

        ${content}

        <div class="case-study">
            <div class="case-study_content">
                <h2>Result</h2>
                <p>${collection.result}</p>
            </div>
        </div>
    `;

    portfolio_case.innerHTML = caseStudy;
}

let isPortfolio = true;
let isContact = false;

function Display_Porfolio() {
    if (isPortfolio)
        return;

    isPortfolio = true;
    isContact = false;

    container.classList.remove("no-overflow");
    document.querySelector(".display__title").classList.remove("hide");

    if (isPreview) {
        document.getElementById("CaseStudy").classList.remove("hide");
    } else {
        document.getElementById("display__portfolio").classList.remove("hide");
    }
    document.querySelector(".display__contact-container").classList.add("hide");

    document.getElementById("buttonPortfolio").classList.remove("unactive-tab");
    document.getElementById("buttonPortfolio").classList.add("active-tab");
    document.getElementById("buttonContact").classList.remove("active-tab");
    document.getElementById("buttonContact").classList.add("unactive-tab");
}

function Display_Contact() {
    if (isContact)
        return;

    isContact = true;
    isPortfolio = false;

    container.classList.add("no-overflow");
    document.querySelector(".display__title").classList.add("hide");

    if (isPreview) {
        document.getElementById("CaseStudy").classList.add("hide");
    } else {
        document.getElementById("display__portfolio").classList.add("hide");
    }
    document.querySelector(".display__contact-container").classList.remove("hide");
    
    document.getElementById("buttonPortfolio").classList.remove("active-tab");
    document.getElementById("buttonPortfolio").classList.add("unactive-tab");
    document.getElementById("buttonContact").classList.remove("unactive-tab");
    document.getElementById("buttonContact").classList.add("active-tab");
}

function ToggleTheme() {
    const body = document.body;
    if (body.getAttribute("data-theme") === "dark") {
      body.setAttribute("data-theme", "light");
    } else {
      body.setAttribute("data-theme", "dark");
    }
}

Display_PortfolioList();