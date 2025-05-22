import React, { useEffect } from "react"
import { RiShareForward2Fill } from "react-icons/ri"
import { Helmet } from "react-helmet-async"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const services = [
  {
    title: "Frontend Development",
    description:
      "Craft responsive, high-performance UIs using React, Tailwind, and modern frontend tools.",
  },
  {
    title: "Backend Development",
    description:
      "Build scalable APIs and services with Node.js, Express, MongoDB, and secure auth flows.",
  },
  {
    title: "Full-Stack Applications",
    description:
      "End-to-end web app development with MERN stack – from interface to database.",
  },
  {
    title: "UI/UX Implementation",
    description:
      "Convert designs (Figma/PSD) into pixel-perfect, interactive frontend experiences.",
  },
  {
    title: "Bug Fixing & Optimization",
    description:
      "Fix layout or logic issues, clean up code, and enhance speed & SEO performance.",
  },
  {
    title: "API Integration",
    description:
      "Connect apps to third-party or internal APIs using REST, Postman, and secure data flows.",
  },
]

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-darkPrimary">
      <Helmet>
        <title>Services | Md Julhas</title>
        <meta
          name="description"
          content="Discover Md Julhas’s expertise in frontend, backend, and full-stack development. From crafting responsive UIs with React and Tailwind to building secure APIs with Node.js and MongoDB, he delivers fast, scalable, and user-friendly web applications."
        />
        <meta
          name="keywords"
          content="Md Julhas, Software Engineer, React Developer, Node.js Developer, MERN Stack, Full Stack Developer, Responsive UI, Tailwind CSS, Express.js, MongoDB, REST API, Figma to React, Web App Optimization, Bug Fixing, SEO Performance, API Integration, UI/UX Developer, Web Application Development"
        />
      </Helmet>

      <Navbar />
      <div className="flex-grow pt-16 section-container">
        <div className="text-center inner-container">
          <h2 className="text-3xl md:text-4xl font-extrabold mt-10 mb-4">
            What I Offer
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            From crafting smooth frontends to building secure backends — I help
            businesses turn their ideas into reality.
          </p>

          {/* My services */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-8 py-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-darkSecondary rounded-md shadow-sm hover:shadow-lg p-6 transition-all duration-300"
              >
                <div className="flex item-center justify-center text-4xl py-5">
                  <RiShareForward2Fill />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-themeColor transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Services
