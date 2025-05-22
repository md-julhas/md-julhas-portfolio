import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"

import ScrollTop from "../components/ScrollTop"
import { useStateContext } from "../contexts/ContextProvider"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { projects } from "../constants/data"

const Projects = () => {
  const { themeMode } = useStateContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Projects | Md Julhas</title>
        <meta
          name="description"
          content="Explore a collection of real-world projects built with React, Tailwind css, Node.js, MongoDB, and Express. Demonstrating frontend and fullstack development skills websites."
        />
        <meta
          name="keywords"
          content="Md Julhas, Software Engineer, MERN stack projects, portfolio website, tailwind css website, fullstack project, frontend project, JavaScript, MongoDB, Express, Node.js, Web development portfolio"
        />
      </Helmet>

      <Navbar />
      <div className="section-container flex-grow pt-16 bg-gray-100 dark:bg-darkPrimary">
        <div className="inner-container">
          <h2 className="text-3xl md:text-4xl font-extrabold mt-10 mb-4">
            Explore My Projects
          </h2>
          <p className="text-gray-400">
            Dive into a collection of projects I've crafted using modern web
            technologies. From frontend interfaces to full-stack solutions,
            projects reflects my skills and passion for clean, functional
            design.
          </p>

          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-14">
            {projects.map((project, index) => (
              <Link
                to={`/project/${project.title}`}
                state={project}
                key={index}
                className="bg-white dark:bg-darkSecondary shadow-sm hover:scale- transition-all duration-300 p-5 rounded-md hover:shadow-lg group"
              >
                <div key={project.id} className="">
                  <img
                    src={
                      themeMode === "light" ? project.imgLight : project.imgDark
                    }
                    alt={project.title}
                    className="rounded-md h-60 md:h-40 w-full object-cover"
                  />
                  <h2 className="font-bold text-xl pt-5 my-3 group-hover:text-themeColor line-clamp-2 transition-all duration-300">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default Projects
