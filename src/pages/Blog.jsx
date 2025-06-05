import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import ScrollTop from "../components/ScrollTop"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet-async"
import { FiArrowLeft } from "react-icons/fi"
import { HiArrowNarrowLeft } from "react-icons/hi"

const Blog = () => {
  const location = useLocation()
  const blog = location.state

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{blog.title} | Md Julhas</title>
        <meta name="description" content={blog.title} />
        <meta name="keywords" content={blog.tags} />
      </Helmet>
      <Navbar />

      <div className="section-container flex-grow pt-16 bg-gray-100 dark:bg-darkPrimary">
        <div className="inner-container pt-10">
          <Link
            to="/blogs"
            className="flex items-center gap-2 text-themeColor hover:underline w-fit"
          >
            <FiArrowLeft /> Back to Blogs
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold py-5">{blog.title}</h1>
          <div className="flex flex-col md:flex-row gap-2 md:gap-5 text-gray-400 pb-5">
            <span>By {blog.author}</span>
            {blog.date && <span>Date : {blog.date}</span>}
          </div>

          {/* Blog image */}
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] lg:h-[600px] xl:h-[800px] object-cover rounded-md mb-12"
          />

          {/* Blog body */}
          {blog.body.map((section, i) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={i} className="mb-5">
                    {section.desc}
                  </p>
                )
              case "section":
                return (
                  <div key={i}>
                    <h2 className="text-2xl font-semibold mt-10 mb-2 text-primary dark:text-primaryLight">
                      {section.title}
                    </h2>
                    <p>{section.desc}</p>
                  </div>
                )
              case "conclusion":
                return (
                  <p
                    key={i}
                    className="text-lg font-medium mt-8 border-t dark:border-gray-700 pt-4"
                  >
                    {section.desc}
                  </p>
                )
              default:
                return null
            }
          })}

          {/* Back to blogs */}
          <div className="text-center my-10 ">
            <Link
              to="/blogs"
              className="px-5 py-3 bg-gradient-to-br from-gradientFirst to-gradientSecond rounded-full text-gray-100 font-bold hover:brightness-90 transition-all duration-300 inline-flex items-center justify-center gap-1.5"
            >
              <HiArrowNarrowLeft /> View All Blogs
            </Link>
          </div>
        </div>
      </div>
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default Blog
