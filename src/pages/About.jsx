import React, { useEffect } from "react"
import { FaCode, FaServer, FaTools, FaUserFriends } from "react-icons/fa"
import { Helmet } from "react-helmet-async"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"
import { RiShareForward2Fill } from "react-icons/ri"
import { BsFileEarmarkTextFill } from "react-icons/bs"

const skills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Redux",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    "Ant Design",
    "Responsive Design",
    "Responsive UI",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST API",
    "MongoDB",
    "MVC Architecture",
    "JWT",
    "Mongoose",
    "Bcrypt.js",
    "Nodemailer",
    "Multer",
    "Morgarn",
    "Rate Limiting",
  ],
  Tools: [
    "Linux",
    "CLI",
    "Git & GitHub",
    "Postman",
    "MongoDB Compass",
    "Chrome DevTools",
    "Figma",
    "NPM",
  ],
  Soft: [
    "Learning Mindset",
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Empathy",
    "Attention to Detail",
    "Emotional Intelligence",
  ],
}

const SkillBlock = ({ title, items, Icon }) => (
  <div className="bg-white dark:bg-darkSecondary rounded-md p-6 shadow-sm hover:shadow-lg transition-all duration-300">
    <h3 className="text-lg font-semibold mb-4 flex items-center gap-4">
      <Icon className="text-2xl" /> {title}
    </h3>
    <div className="flex flex-wrap gap-2.5">
      {items.map((skill) => (
        <span
          key={skill}
          className="bg-gray-100 dark:bg-gray-950 text-sm px-4 py-2 font-medium rounded-md"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
)

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-darkPrimary">
      <Helmet>
        <title>About Me | Md Julhas</title>
        <meta
          name="description"
          content="Explore Md Julhas's journey as a skilled Web Application Developer specializing in JavaScript, React.js, Node.js, and MongoDB. Discover how he builds modern, user-friendly web solutions for businesses."
        />
        <meta
          name="keywords"
          content="Md Julhas, Web Developer, Software Engineer, MERN Stack, React.js, Node.js, MongoDB, JavaScript Developer, Full Stack Developer, Responsive Web Development, Frontend Developer, Backend Developer, UI/UX"
        />
      </Helmet>

      <Navbar />
      <div className="flex-grow pt-16 section-container">
        <div className="inner-container">
          {/* Profile section - About me */}
          <div className="mt-10 bg-white dark:bg-darkSecondary p-6 rounded-md shadow-sm">
            <h1 className="text-3xl font-extrabold">About Me</h1>

            <div className="text-gray-500 dark:text-gray-400 mt-5 text-base md:text-xl">
              <p>
                Hi, I'm <b>Md Julhas,</b> a Web Application Developer with
                several years of experience in{" "}
                <b>JavaScript, React.js, Redux, Node.js,</b> and <b>MongoDB</b>.
                I deliver both <b>frontend</b> and <b>backend</b> solutions,
                focusing on creating modern, clean, and responsive web
                applications that are user-friendly.
              </p>
              <p className="mt-3">
                I'm ready to help make your business operations easier through
                powerful web applications.
              </p>
            </div>
          </div>

          {/* Skills section */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              My Technologies & Core Strengths
            </h2>
            <p className="py-3 text-gray-400 dark:text-gray-500">
              A comprehensive overview of my frontend, backend, tools, and soft
              skills that empower modern web development.
            </p>

            <div className="grid lg:grid-cols-2 gap-8 mt-5">
              <SkillBlock
                title="Frontend Development"
                items={skills.Frontend}
                Icon={FaCode}
              />
              <SkillBlock
                title="Backend Development"
                items={skills.Backend}
                Icon={FaServer}
              />
              <SkillBlock
                title="Developer Tools"
                items={skills.Tools}
                Icon={FaTools}
              />
              <SkillBlock
                title="Soft Skills"
                items={skills.Soft}
                Icon={FaUserFriends}
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-5 mt-20">
            <h3 className="text-2xl font-extrabold">Let’s Work Together</h3>
            <p className="max-w-xl mx-auto text-gray-500">
              I'm always open to exciting projects, freelance opportunities, or
              team collaborations. Let's bring your ideas to life with clean,
              modern web development.
            </p>

            <div className="flex gap-3 justify-center flex-wrap pb-14 mt-5">
              <NavLink
                to="/contact"
                className="px-5 py-3 bg-gradient-to-br from-gradientFirst to-gradientSecond rounded-full text-gray-200 font-bold hover:brightness-90 transition-all duration-300 flex items-center justify-center gap-1.5"
              >
                <RiShareForward2Fill />
                Get In Touch
              </NavLink>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-gradient-to-br from-gray-900 to-gray-400 text-gray-200 rounded-full font-bold flex items-center justify-center gap-1.5 transition-all duration-300 hover:brightness-90"
              >
                <BsFileEarmarkTextFill />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
