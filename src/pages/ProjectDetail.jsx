import React, { useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi"
import { HiArrowNarrowLeft } from "react-icons/hi"
import { Helmet } from "react-helmet-async"

import { useStateContext } from "../contexts/ContextProvider"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollTop from "../components/ScrollTop"

const ProjectDetail = () => {
  const { themeMode } = useStateContext()
  const location = useLocation()
  const project = location.state

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Md Julhas | {project.title} </title>
        <meta name="description" content={project.metaDescription} />
        <meta name="keywords" content={project.metaKeywords} />
      </Helmet>

      <Navbar />

      <div className="section-container flex-grow pt-16 bg-gray-100 dark:bg-darkPrimary">
        <div className="inner-container">
          {/* Header Section */}
          <div className="mt-10">
            <Link
              to="/projects"
              className="flex items-center gap-2 text-themeColor hover:underline w-fit"
            >
              <FiArrowLeft /> Back to Projects
            </Link>

            <h1 className="text-3xl md:text-4xl font-extrabold py-8">
              {project.title}
            </h1>
            <p className="text-base md:text-xl">{project.description}</p>
          </div>

          {/* Image preview section */}
          <div className="mt-14 bg-white dark:bg-darkSecondary p-6 rounded-md shadow-sm">
            <img
              src={themeMode === "dark" ? project.imgDark : project.imgLight}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Action & tech stack */}
          <div className="grid md:grid-cols-2 gap-8 mt-14">
            <div className="bg-white dark:bg-darkSecondary p-6 rounded-md shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-themeColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                Project Links
              </h2>

              <div className="space-y-4">
                {project.liveLink && (
                  <div className="flex items-center gap-3">
                    <div className="bg-themeColor/10 p-2 rounded-lg">
                      <FiExternalLink className="text-themeColor" />
                    </div>
                    <div>
                      <p className="font-medium">Live Demo</p>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-300 hover:underline break-all"
                      >
                        {project.liveLink}
                      </a>
                    </div>
                  </div>
                )}
                {project.gitHubLink && (
                  <div className="flex items-center gap-3">
                    <div className="bg-themeColor/10 p-2 rounded-lg">
                      <FiGithub className="text-themeColor" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub Repository</p>
                      <a
                        href={project.gitHubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 dark:text-gray-300 hover:underline break-all"
                      >
                        {project.gitHubLink}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tech stack */}
            <div className="bg-white dark:bg-darkSecondary p-6 rounded-md shadow-sm">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-themeColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-950 px-4 py-2 rounded-md text-sm font-medium capitalize"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white dark:bg-darkSecondary p-6 rounded-md mt-14 shadow-sm">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-themeColor"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {project.features.map((featureGroup, index) => (
                <div key={index} className="space-y-4">
                  {project.features.length > 1 && (
                    <h3 className="font-semibold text-lg border-b border-gray-200 dark:border-gray-700 pb-2">
                      {featureGroup.category}
                    </h3>
                  )}
                  <ul className="space-y-3">
                    {featureGroup.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.challenges?.length > 0 && (
            <div className="bg-white dark:bg-darkSecondary p-6 rounded-md mt-14 shadow-sm">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-themeColor"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Challenges & Solutions
              </h2>

              {project.challenges.map((challenge, index) => (
                <div key={index} className="mt-7">
                  {challenge.title && (
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      {challenge.title}
                    </h3>
                  )}

                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {challenge.description}
                  </p>
                  <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
                    <p className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Solution
                    </p>
                    <p className="mt-1">{challenge.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Back to Projects */}
          <div className="text-center my-14 ">
            <Link
              to="/projects"
              className="px-5 py-3 bg-gradient-to-br from-gradientFirst to-gradientSecond rounded-full text-gray-100 font-bold hover:brightness-90 transition-all duration-300 inline-flex items-center justify-center gap-1.5"
            >
              <HiArrowNarrowLeft /> View All Projects
            </Link>
          </div>
        </div>
      </div>

      <ScrollTop />
      <Footer />
    </div>
  )
}

export default ProjectDetail
