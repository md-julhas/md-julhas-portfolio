import { BiCodeBlock } from "react-icons/bi"
import { FaPhoneAlt } from "react-icons/fa"

import reactjs from "../assets/reactjs.png"
import tailwindcss from "../assets/tailwindcss.png"
import nextjs from "../assets/nextjs.png"
import redux from "../assets/redux.png"
import nodejs from "../assets/nodejs.png"
import expressjs from "../assets/expressjs.png"
import mongodb from "../assets/mongodb.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import npm from "../assets/npm.png"
import git from "../assets/git.png"
import cli from "../assets/cli.png"
import linux from "../assets/linux.png"
import figma from "../assets/figma.png"
import hero from "../assets/julhas-hero.png"

import howModernTech from "../assets/how-modern-tech.png"

import spicymeal from "../assets/spicymeal.png"
import spicymealDark from "../assets/spicymeal-dark.png"
import spicymealAdmin from "../assets/spicymeal-admin.png"
import spicymealAdminDark from "../assets/spicymeal-admin-dark.png"
import JMDashboard from "../assets/jm-dashboard.png"
import JMDashboardDark from "../assets/jm-dashboard-dark.png"
import mainul from "../assets/mainul.png"
import mainulDark from "../assets/mainul-dark.png"

import { PiDevicesDuotone, PiLayoutBold } from "react-icons/pi"
import { TbLogs, TbMessageSearch } from "react-icons/tb"
import { TfiFacebook } from "react-icons/tfi"
import { IoLogoTwitter } from "react-icons/io"
import { RiLinkedinBoxFill } from "react-icons/ri"
import { FaLocationDot, FaSquareInstagram } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import { GrHome } from "react-icons/gr"
import { LuMessageSquareText } from "react-icons/lu"
import { HiOutlineInformationCircle } from "react-icons/hi"
import { VscTools } from "react-icons/vsc"
import { GoProjectSymlink } from "react-icons/go"

export const navLinks = [
  {
    id: "home",
    name: "home",
    path: "/",
    icon: <GrHome />,
  },
  {
    id: "services",
    name: "services",
    path: "/services",
    icon: <VscTools />,
  },
  {
    id: "projects",
    name: "projects",
    path: "/projects",
    icon: <GoProjectSymlink />,
  },
  {
    id: "blogs",
    name: "blogs",
    path: "/blogs",
    icon: <TbLogs />,
  },
  {
    id: "about",
    name: "about",
    path: "/about",
    icon: <HiOutlineInformationCircle />,
  },
  {
    id: "contact",
    name: "contact",
    path: "/contact",
    icon: <LuMessageSquareText />,
  },
]
export const socialLinks = [
  {
    id: "1",
    name: "Facebook",
    url: "https://www.facebook.com/JulhasFacebookAccount/",
    icon: <TfiFacebook />,
  },
  {
    id: "2",
    name: "Twitter",
    url: "https://www.facebook.com/JulhasFacebookAccount/",
    icon: <IoLogoTwitter />,
  },
  {
    id: "3",
    name: "LinkedIn",
    url: "https://www.facebook.com/JulhasFacebookAccount/",
    icon: <RiLinkedinBoxFill />,
  },
  {
    id: "4",
    name: "Instagram",
    url: "https://www.facebook.com/JulhasFacebookAccount/",
    icon: <FaSquareInstagram />,
  },
]

export const contactInfo = [
  {
    id: "1",
    name: "address",
    icon: <FaLocationDot />,
    value: "Barisal 8700, Bangladesh",
  },
  {
    id: "2",
    name: "e-mail",
    icon: <IoMail />,
    value: "julhas.mail.info@gmail.com",
  },
  {
    id: "3",
    name: "phone",
    icon: <FaPhoneAlt />,
    value: "+8801727512042",
  },
]

export const featuredServices = [
  {
    id: "1",
    icon: <PiLayoutBold />,
    title: "UI/UX Development",
    description: "Create websites from Figma and PSD designs.",
  },
  {
    id: "2",
    icon: <PiDevicesDuotone />,
    title: "Responsive Design",
    description: "Ensure websites work seamlessly on all devices.",
  },
  {
    id: "3",
    icon: <TbMessageSearch />,
    title: "SEO-Friendly Design",
    description: "Optimize websites for better search engine visibility.",
  },
  {
    id: "4",
    icon: <BiCodeBlock />,
    title: "Modular Architecture",
    description: "Facilitates easy modifications and scaling.",
  },
]

export const myTechnicalSkills = [
  {
    id: "1",
    img: [html, css],
    title: "HTML & CSS",
    description:
      "The foundational languages used to structure and style web pages.",
  },

  {
    id: "2",
    img: tailwindcss,
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework for building sleek, fast websites.",
  },
  {
    id: "vanilla-js",
    img: js,
    title: "Vanilla JavaScript",
    description:
      "A programming language used for building software applications.",
  },
  {
    id: "reactjs",
    img: reactjs,
    title: "React.js",
    description:
      "A JavaScript library for building interactive UIs with reusable components.",
  },
  {
    id: "redux",
    img: redux,
    title: "Redux",
    description:
      "A state management tool that stores and controls app state in one global place.",
  },
  {
    id: "3",
    img: nextjs,
    title: "Next.js",
    description:
      "A React framework for building fast, SEO-friendly, and full-stack web applications.",
  },
  {
    id: "4",
    img: nodejs,
    title: "Node.js",
    description:
      "A JavaScript runtime used to build fast, scalable server-side applications.",
  },
  {
    id: "5",
    img: expressjs,
    title: "Express.js",
    description:
      "A minimal and flexible Node.js framework for building web and API servers.",
  },
  {
    id: "6",
    img: mongodb,
    title: "MongoDB",
    description:
      "A NoSQL database that stores data in flexible, JSON-like documents",
  },
  {
    id: "npm",
    img: { npm, git },
    title: "NPM, Git & Github",
    description:
      "Manage dependencies, version control, and collaboration in software development.",
  },
  {
    id: "linux",
    img: { cli, linux },
    title: "Command Line & Linux",
    description:
      "Essential tools for navigating and managing systems efficiently in a terminal-based environment.",
  },
  {
    id: "figma",
    img: figma,
    title: "Figma",
    description:
      "A collaborative design tool for creating interfaces and prototypes in real-time.",
  },
]

export const projects = [
  {
    title:
      "SpicyMeal – Full-Stack App for Food Delivery & Restaurant Management",
    imgDark: spicymealDark,
    imgLight: spicymeal,
    liveLink: "https://spicymeal.vercel.app/",
    gitHubLink: "https://github.com/md-julhas/spicy-meal",
    description:
      "SpicyMeal is a full-stack restaurant food delivery application that delivers a seamless food ordering experience. It offers features like food search, organized categories, cart management, table booking, order tracking, and a contact form for customers to send messages directly to the restaurant or support team.",
    metaDescription:
      "SpicyMeal is a full-stack restaurant food delivery app offering seamless food ordering with features like food search, categorized menus, cart management, table booking, order tracking, and direct customer messaging.",
    metaKeywords: [
      "food delivery app, restaurant app, online food ordering, md julhas, table booking, order tracking, customer messaging, restaurant support, food ordering system, full-stack restaurant app",
    ],
    technologies: [
      "tailwindcss CSS",
      "react.js",
      "axios",
      "react router",
      "node.js",
      "express.js",
      "mongodDB",
      "mongoose",
      "JWT",
      "git & gitHub",
    ],

    features: [
      {
        category: "🔧 Frontend",
        items: [
          "Display food items via API calls",
          "Food Search System",
          "Organized Food Categories",
          "Food ordering system (Add and view cart items, fill up delivery form and place orders)",
          "Table booking system",
          "Contact Us System",
          "View orders and status",
          "View user profile",
          "Customer Message Submission",
        ],
      },
      {
        category: "🔧 Backend",
        items: [
          "Provide food data via REST API",
          "Handle cart, orders, and store them in database",
          "Process and store table booking requests",
          "Store contact messages from users",
          "Authenticate users with JWT",
          "Hash and verify passwords securely",
          "Enhancing API security with route-specific rate limiting",
        ],
      },
      {
        category: "🧾 Authentication System",
        items: ["User registration", "Login system", "Logout system"],
      },
    ],

    challenges: [
      {
        title:
          "1.Stale Cart Data After Food Deletion (Data Inconsistency Issue)",
        description:
          "Initially, I designed the cart system to rely on the food items fetched during the initial API call. Each user's cart was stored in the database as an object (cartData) using food IDs as keys. The issue arose when an admin deleted a food item that a user had previously added to their cart. Since the cartData still contained the deleted food's ID, the frontend would throw an error when attempting to render the cart—because the item no longer existed in the newly fetched food list.",

        solution:
          "To resolve this, I separated the cart rendering process from the initial food fetch logic. Instead, I created a dedicated backend API that directly retrieves and validates the user's cart data. Fetched the user's cartData. Checked if each food ID in cartData still existed in the current food collection in the database. Removed any invalid or deleted food IDs from the cart. Sent back only the valid cart data in the response. This ensured that users would never encounter errors due to deleted food items in their cart, and the app could handle such cases gracefully.",
      },
      {
        title: "2.Incorrect Client IP Detection Behind Proxy",
        description:
          "Initially, I designed the cart system to rely on the food items fetched during the initial API call. Each user's cart was stored in the database as an object (cartData) using food IDs as keys. The issue arose when an admin deleted a food item that a user had previously added to their cart. Since the cartData still contained the deleted food's ID, the frontend would throw an error when attempting to render the cart—because the item no longer existed in the newly fetched food list.",

        solution:
          "To resolve this, I separated the cart rendering process from the initial food fetch logic. Instead, I created a dedicated backend API that directly retrieves and validates the user's cart data. Fetched the user's cartData. Checked if each food ID in cartData still existed in the current food collection in the database. Removed any invalid or deleted food IDs from the cart. Sent back only the valid cart data in the response. This ensured that users would never encounter errors due to deleted food items in their cart, and the app could handle such cases gracefully.",
      },
    ],
  },
  {
    title: "SpicyMeal – Restaurant Admin Panel (Full-Stack App)",
    imgDark: spicymealAdminDark,
    imgLight: spicymealAdmin,
    liveLink: "https://spicymealadmin.vercel.app/",
    gitHubLink: "https://github.com/md-julhas/spicy-meal/tree/main/admin",
    description:
      "This is the Admin Panel for the SpicyMeal full-stack restaurant web application. It provides backend management functionalities for food items, orders, table bookings, messages, and users. Built with Node.js, Express.js, and MongoDB, it serves as the core API and admin interface of the application.",
    metaDescription:
      "This is the Admin Panel for the SpicyMeal full-stack restaurant web application. It provides backend management functionalities for food items, orders, table bookings, messages, and users. Built with Node.js, Express.js, and MongoDB, it serves as the core API and admin interface of the application.",
    metaKeywords: [
      "restaurant admin panel, food delivery admin dashboard, full-stack restaurant app, Express.js admin panel, MongoDB food app, restaurant order management, food item management, table booking system, admin panel for food delivery,",
    ],
    technologies: [
      "tailwindcss CSS",
      "react.js",
      "axios",
      "react router",
      "node.js",
      "express.js",
      "mongodDB",
      "mongoose",
      "JWT",
      "git & gitHub",
    ],

    features: [
      {
        category: "🔧 Mange Messages",
        items: [
          "View messages submitted via the Contact Form",
          "Delete messages",
        ],
      },
      {
        category: "🔧 Manage Food Items",
        items: [
          "Upload new food items with relevant details",
          "Delete food items from the collection",
        ],
      },
      {
        category: "🔧 Manage Orders",
        items: [
          "View all food orders placed by users",
          "Change order status: pending, food processing, delivered",
          "Delete old or canceled orders",
        ],
      },
      {
        category: "🔧 Manage Table Bookings",
        items: [
          "View all table reservations submitted by users",
          "Approve, reject, or delete reservations as needed",
        ],
      },
      {
        category: "🔧 Manage Users",
        items: [
          "View a list of all registered users",
          "Access detailed information about individual users",
        ],
      },
      {
        category: "🔧 Access Control & Backend Features",
        items: [
          "Restricted login access for admin users only",
          "Complete backend functionality implemented using RESTful APIs",
          "Route-level API protection with rate limiting for enhanced security",
        ],
      },
    ],

    challenges: [
      {
        title: "1.Secure API Usage",
        description:
          "Preventing abuse of public endpoints and ensuring backend stability.",

        solution:
          "Integrated route-specific rate limiting and input validation using Express middleware (express-rate-limit).",
      },
      {
        title: "2.User-Friendly Admin Interface",
        description:
          "The admin panel must be responsive and intuitive to accommodate non-technical users.",

        solution:
          "Developed a modern UI using React and Tailwind CSS featuring clear layouts and controls for easy data management.",
      },
    ],
  },
  {
    title: "JM Dashboard – E-commerce & Business Analytics React Template",
    imgDark: JMDashboardDark,
    imgLight: JMDashboard,
    liveLink: "https://jmdashboard.vercel.app/",
    gitHubLink: "https://github.com/md-julhas/jm-dashboard",
    description:
      "JM Dashboard is a comprehensive React-based dashboard template designed for e-commerce and business analytics. It includes a wide variety of sections and features tailored for managing e-commerce platforms, viewing analytics, customer interactions, task management, and user profiles. Built with Vite and Tailwind CSS, this dashboard provides a fast, responsive, and customizable interface for managing and analyzing business data.",
    metaDescription:
      "JM Dashboard is a fast, responsive React admin template for e-commerce and business analytics, built with Vite and Tailwind CSS.",
    metaKeywords: [
      "e-commerce dashboard, business analytics template, admin panel, analytics dashboard, React e-commerce UI, React dashboard template, task management dashboard, customer management panel",
    ],
    technologies: [
      "HTML & CSS",
      "tailwindcss CSS",
      "react.js",
      "Material UI",
      "git & gitHub",
    ],

    features: [
      {
        category: "🔧 Highlights",
        items: [
          "Responsive Sidebar with Navigation",
          "Navbar with Settings, Dark Mode, Cart, Notifications, and Profile",
          "Fully Mobile Responsive Layout",
        ],
      },
      {
        category: "🔧 Theme Settings",
        items: [
          "Dark / Light Mode Toggle",
          "Customizable Theme Colors",
          "Preferences Stored in Local Storage",
        ],
      },
      {
        category: "🔧 Pages Features",
        items: [
          "Dashboards for eCommerce and Analytics",
          "Communication Tools: Chat & Email",
          "Task Management with Kanban Board",
          "Product Listing and Details View",
          "User Profile with Editable Info and Posts",
          "Auth Pages (Login, Register, Forgot Password, etc.)",
          "Error Handling Page",
        ],
      },
    ],

    challenges: [
      {
        title: "1.Responsive Design Across Devices",
        description:
          "Ensuring the sidebar, navbar, and all page components adapt smoothly to different screen sizes (mobile, tablet, desktop).",

        solution:
          "I utilized Tailwind CSS’s utility-first classes, responsive breakpoints, and robust layout techniques like Flexbox and Grid to ensure a fully responsive design optimized for all devices.",
      },
      {
        title: "2.Theme Customization & Persistence",
        description:
          "Allowing users to switch themes (dark/light) and customize colors, while saving preferences between sessions.",
        solution:
          "I implemented React state management for themes and stored preferences in Local Storage to ensure persistence on reload.",
      },
      {
        title: "3.Task Management Functionality",
        description:
          "Creating a flexible kanban board with task creation, editing, and deletion.",
        solution:
          "Implemented state-driven task management using React hooks, featuring clear UI components for each task state.",
      },
    ],
  },
  {
    title: "Mainul - Personal Portfolio",
    imgDark: mainulDark,
    imgLight: mainul,
    liveLink: "https://mohiuddinmainul.vercel.app/",
    gitHubLink: "https://github.com/md-julhas/mainul-portfolio",
    description:
      "This is a portfolio website to showcase data entry and lead generation expertise. It demonstrates the ability to provide accurate, efficient, and business-driven data solutions tailored to clients' specific needs.",
    metaDescription:
      "This is a portfolio website to showcase data entry and lead generation expertise. It demonstrates the ability to provide accurate, efficient, and business-driven data solutions tailored to clients' specific needs.",
    metaKeywords: [
      "data entry expert, lead generation specialist, accurate data solutions, efficient data management, business-driven data services, client-focused data entry, data processing portfolio, lead generation portfolio, professional data entry, data solutions for businesses",
    ],
    technologies: ["HTML & CSS", "tailwindcss CSS", "react.js", "git & gitHub"],

    features: [
      {
        category: "🔧 About & Services",
        items: [
          "Hero Introduction: Professional intro with name, title, and value-driven summary",
          "Services Section: Clear list of offered services like Data Entry, Web Research, etc.",
          "Hobbies & Interests: Personal insights to humanize the profile",
        ],
      },
      {
        category: "🔧 Portfolio & Contact",
        items: [
          "Portfolio Showcase",
          "Contact Page: Easy way for clients to reach out directly",
        ],
      },
      {
        category: "🔧 Design & Theme Settings",
        items: [
          "Responsive Design (mobile-first)",
          "Clean UI/UX",
          "Theme Options: Light Mode, Dark Mode, System Default, Theme Color Selection, Reset Theme Option",
        ],
      },
    ],
  },
]

export const dummyBlogs = [
  {
    title: "Why Every Business Needs a Website in 2025",
    author: "Muhammad Zulhash",
    date: "12 May 2025",
    tags: [
      "business growth",
      "web development",
      "digital transformation",
      "website importance",
    ],
    image: JMDashboardDark,
    body: [
      {
        type: "paragraph",
        text: "In 2025, having a website is essential for businesses of all sizes. It’s the first step towards reaching customers, building credibility, and expanding your brand.",
      },
      {
        type: "paragraph",
        text: "So for the app In 2025, having a website is essential for businesses of all sizes. It’s the first step towards reaching customers, building credibility, and expanding your brand.",
      },
      {
        type: "section",
        title: "1. Build Credibility and Trust",
        desc: "A professionally designed website helps establish trust. Customers are more likely to trust a business with a robust online presence.",
      },
      {
        type: "section",
        title: "2. Boost Visibility and Reach",
        desc: "Search engine optimization (SEO) strategies can help your website show up in search results, attracting new customers.",
      },
      {
        type: "section",
        title: "3. Improve Customer Engagement",
        desc: "With interactive features like contact forms, blogs, and live chat, websites provide an excellent way to engage with potential customers.",
      },
      {
        type: "section",
        title: "4. Stay Competitive in the Digital Age",
        desc: "Without a website, your business risks being overlooked. Having a site ensures you stay competitive and relevant.",
      },
      {
        type: "paragraph",
        text: "A website is no longer a luxury but a necessity. It is the cornerstone of a strong digital presence and can significantly impact a business's growth and success.",
      },
      {
        type: "conclusion",
        text: "Investing in a website in 2025 is no longer optional—it's a must for any business aiming to thrive in the digital era.",
      },
    ],
  },
  {
    title: "How Web Apps Are Transforming Business Operations",
    author: "Muhammad Zulhash",
    tags: [
      "web apps",
      "business automation",
      "technology solutions",
      "digital transformation",
    ],
    image: hero,
    body: [
      {
        type: "paragraph",
        text: "Web apps are revolutionizing business operations by automating tasks, improving efficiency, and reducing costs. From CRM systems to project management tools, web apps provide seamless experiences for businesses.",
      },
      {
        type: "section",
        title: "1. Streamlining Operations",
        desc: "Web apps simplify complex processes, making it easier to manage tasks like inventory, sales tracking, and employee management, all from one platform.",
      },
      {
        type: "section",
        title: "2. Accessibility Anywhere",
        desc: "Unlike traditional software, web apps can be accessed from any device with an internet connection, allowing teams to work remotely and increase productivity.",
      },
      {
        type: "section",
        title: "3. Real-Time Collaboration",
        desc: "Web apps enable teams to collaborate in real-time, ensuring that information is shared instantly and that everyone is on the same page.",
      },
      {
        type: "section",
        title: "4. Scalability for Growth",
        desc: "As your business grows, web apps can scale to meet the increased demand, ensuring that operations remain smooth without costly upgrades.",
      },
      {
        type: "paragraph",
        text: "Web apps not only provide cost-effective solutions but also enhance operational efficiency, which is critical for businesses aiming to stay competitive in today’s fast-paced market.",
      },
      {
        type: "conclusion",
        text: "Adopting web apps for business operations is key to staying competitive in today’s fast-moving market. They provide flexibility, efficiency, and scalability.",
      },
    ],
  },
  {
    title: "The Role of Mobile-Friendly Websites in Business Success",
    author: "Muhammad Zulhash",
    tags: [
      "mobile-friendly",
      "responsive design",
      "business growth",
      "web design",
    ],
    image: howModernTech,
    body: [
      {
        type: "paragraph",
        text: "In 2025, more people access websites from mobile devices than from desktop computers. Mobile-friendly websites are essential for any business looking to stay relevant.",
      },
      {
        type: "section",
        title: "1. Improving User Experience",
        desc: "A mobile-friendly website provides users with a seamless experience across devices, enhancing their satisfaction and increasing the likelihood of conversion.",
      },
      {
        type: "section",
        title: "2. Boosting SEO Rankings",
        desc: "Search engines prioritize mobile-friendly websites in their rankings. A responsive design can help your website appear higher in search results.",
      },
      {
        type: "section",
        title: "3. Reaching a Larger Audience",
        desc: "By optimizing your website for mobile devices, you ensure that your business is accessible to a wider audience, including people on the go.",
      },
      {
        type: "section",
        title: "4. Higher Conversion Rates",
        desc: "Mobile-friendly sites tend to have higher conversion rates because they cater to users who prefer to browse and shop on their mobile devices.",
      },
      {
        type: "paragraph",
        text: "The rise of mobile internet usage means that businesses cannot afford to ignore mobile optimization. It's essential for retaining customers and improving business performance.",
      },
      {
        type: "conclusion",
        text: "A mobile-friendly website is no longer a luxury—it’s a necessity for business success in 2025.",
      },
    ],
  },
  {
    title:
      "How Artificial Intelligence Is Shaping the Future of Web Development",
    author: "Muhammad Zulhash",
    tags: ["AI", "web development", "future technology", "machine learning"],
    image: mainulDark,
    body: [
      {
        type: "paragraph",
        text: "Artificial intelligence (AI) is making significant strides in the field of web development, enhancing everything from design to user experience and automation.",
      },
      {
        type: "section",
        title: "1. AI-Powered Design Tools",
        desc: "AI-driven design tools like Figma’s auto-layout and AI-based color palettes are helping developers create user interfaces that adapt to users' preferences, improving both functionality and aesthetics.",
      },
      {
        type: "section",
        title: "2. Smarter User Experiences",
        desc: "AI can analyze user behavior and customize the user experience accordingly. This leads to more personalized websites and applications that are more likely to retain visitors.",
      },
      {
        type: "section",
        title: "3. Automating Testing and Debugging",
        desc: "AI is also helping automate testing and debugging, speeding up the development process and ensuring that websites are free of errors before launch.",
      },
      {
        type: "section",
        title: "4. Enhancing Security with AI",
        desc: "AI can improve web security by identifying potential vulnerabilities, detecting fraudulent activities, and predicting security threats before they happen.",
      },
      {
        type: "paragraph",
        text: "With AI becoming a more integral part of web development, the potential for faster, more responsive, and secure websites is growing rapidly, making it an essential tool for developers.",
      },
      {
        type: "conclusion",
        text: "AI is transforming web development, making it smarter, faster, and more secure. Embracing AI in your web development process can give your projects a competitive edge.",
      },
    ],
  },
  {
    title: "Why Investing in Web Security is Crucial for Your Business",
    author: "Muhammad Zulhash",
    tags: [
      "web security",
      "cybersecurity",
      "business safety",
      "data protection",
    ],
    image: mainul,
    body: [
      {
        type: "paragraph",
        text: "In today’s digital world, web security is more important than ever. Businesses of all sizes are targets for cyberattacks, and investing in robust security measures is essential to protect your assets and customer data.",
      },
      {
        type: "section",
        title: "1. Protect Customer Data",
        desc: "Your customers trust you with their personal information. A security breach can damage your reputation and result in the loss of valuable customer trust.",
      },
      {
        type: "section",
        title: "2. Avoid Costly Data Breaches",
        desc: "Data breaches can lead to financial loss, legal consequences, and damage to your brand. Investing in security measures can help prevent these costly incidents.",
      },
      {
        type: "section",
        title: "3. Strengthen Your Business Reputation",
        desc: "A secure website builds trust with your audience, improving your brand reputation. Customers are more likely to engage with a business they believe is trustworthy.",
      },
      {
        type: "section",
        title: "4. Stay Compliant with Regulations",
        desc: "Investing in web security ensures that your business stays compliant with regulations like GDPR and CCPA, protecting both your business and your customers.",
      },
      {
        type: "paragraph",
        text: "Cybersecurity should be a top priority for any business, as a data breach could lead to irreparable damage. Preventing such issues ensures both customer trust and business continuity.",
      },
      {
        type: "conclusion",
        text: "Web security is no longer optional—it’s a business necessity. Prioritize security to protect your customers, reputation, and bottom line.",
      },
    ],
  },
]
