import React, { useEffect } from "react"
import { Link } from "react-router-dom"

import ScrollTop from "../components/ScrollTop"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { dummyBlogs } from "../constants/data"
import { Helmet } from "react-helmet-async"

const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blogs | Md Julhas</title>
        <meta
          name="description"
          content="Explore a collection of technology related blogs, how mordern technoglogy is important and it's becoming crutital part's of our life, making everyday's task easier."
        />
        <meta
          name="keywords"
          content="Md Julhas, Software Engineer, Technology bolgs, MERN stack projects, portfolio website, tailwind css website, fullstack project, frontend project, JavaScript, MongoDB, Express, Node.js, Web development portfolio"
        />
      </Helmet>
      <Navbar />
      <div className="section-container flex-grow pt-16 bg-gray-100 dark:bg-darkPrimary">
        <div className="inner-container">
          <h1 className="text-3xl md:text-4xl font-extrabold mt-10">
            Thoughtful Insights & Articles
          </h1>
          <p className="text-gray-400 pt-4">
            Discover industry insights, emerging tech trends, and practical
            knowledge that highlight how technology is transforming everyday
            life for the better.
          </p>

          {/* Blogs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            {dummyBlogs.map((blog, index) => (
              <Link
                to={`/blog/${index}`}
                state={blog}
                key={index}
                className="bg-white dark:bg-darkSecondary p-5 rounded-md shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="rounded-md h-60 md:h-40 w-full object-cover"
                />
                <div>
                  <h2 className="text-xl font-semibold my-3 line-clamp-2 group-hover:text-themeColor transition-all duration-300">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 pb-2">
                    By {blog.author}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {blog.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 font-bold dark:bg-gray-800 px-2 py-1 text-xs rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
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

export default Blogs
