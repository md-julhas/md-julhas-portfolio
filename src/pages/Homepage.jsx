import React, { useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Helmet } from "react-helmet-async"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {
  featuredServices,
  myTechnicalSkills,
  projects,
} from "../constants/data"
import { useStateContext } from "../contexts/ContextProvider"
import ScrollTop from "../components/ScrollTop"
import Hero from "../components/Hero"

const Homepage = () => {
  const { themeMode } = useStateContext()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>Md Julhas</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Md Julhas, a passionate Web Application Developer experienced in building modern, scalable, and user-friendly web applications using JavaScript, React.js, Node.js, MongoDB, and the MERN stack."
        />
        <meta
          name="keywords"
          content="Md Julhas, Web Developer, Web Development Portfolio, MERN Stack Developer, JavaScript Developer, React.js, Node.js, MongoDB, Full Stack Developer, Frontend Developer, Backend Developer, Responsive Web Design, Website, Software Engineer, Modern Web Apps, Next.js, Tailwind CSS, Redux Developer"
        />
      </Helmet>
      <Navbar />
      <Hero />

      <div className="section-container bg-gray-100 dark:bg-darkPrimary py-14">
        <div className="inner-container">
          {/* Featured Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {featuredServices.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-md bg-white dark:bg-darkSecondary shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center gap-2 text-center group"
              >
                <div className="text-5xl text-themeColor mb-3">{item.icon}</div>
                <b className="group-hover:text-themeColor transition-all duration-300">
                  {item.title}
                </b>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* My technical Skills */}
          <div className="mt-20 bg--100">
            <h2 className="text-2xl md:text-3xl font-extrabold border-l-[6px] border-l-themeColor pl-5">
              My Technical Skills
            </h2>
            <p className="py-3 text-gray-400 dark:text-gray-500">
              I have several years of experience in JavaScript, React.js, Redux,
              Node.js, and MongoDB. Below is a quick overview of my main
              technical skill sets and technologies I use. Want to find out more
              about my experience? Check out my online resume and project {""}
              <NavLink to={"/about"} className="underline text-themeColor">
                click here
              </NavLink>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 pt-5">
              {myTechnicalSkills.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-2 rounded-md p-5 bg-white dark:bg-darkSecondary items-center justify-center text-center group shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex gap-1">
                    {typeof item.img === "object" ? (
                      Object.values(item.img).map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={item.title}
                          className="h-8"
                        />
                      ))
                    ) : (
                      <img src={item.img} alt={item.title} className="h-8" />
                    )}
                  </div>
                  <b className="group-hover:text-themeColor transition-all duration-300">
                    {item.title}
                  </b>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-extrabold border-l-[6px] border-l-themeColor pl-5">
              Featured Projects
            </h2>
            <p className="py-3 text-gray-400 dark:text-gray-500">
              Take a look at some of my highlighted projects that reflect my
              skills, creativity, and development experience.
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {projects.slice(0, 6).map((project, index) => (
                <Link
                  to={`/project/${project.title}`}
                  state={project}
                  key={index}
                  className="bg-white dark:bg-darkSecondary shadow-sm hover:scale- transition-all duration-300 p-5 rounded-md hover:shadow-lg group"
                >
                  <div key={project.id} className="">
                    <img
                      src={
                        themeMode === "light"
                          ? project.imgLight
                          : project.imgDark
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

            <NavLink
              to={"/projects"}
              className="px-5 py-3 bg-gradient-to-br from-gradientFirst to-gradientSecond rounded-full text-gray-200 font-bold hover:brightness-90 transition-all duration-300 flex items-center justify-center gap-1.5 w-fit mt-10 mx-auto"
            >
              View All Projects
              <HiArrowNarrowRight />
            </NavLink>
          </div>
        </div>
      </div>

      <ScrollTop />
      <Footer />
    </div>
  )
}

export default Homepage
