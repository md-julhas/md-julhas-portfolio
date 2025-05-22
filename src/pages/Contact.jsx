import React, { useEffect, useRef, useState } from "react"
import Navbar from "../components/Navbar"
import ScrollTop from "../components/ScrollTop"
import Footer from "../components/Footer"
import emailjs from "@emailjs/browser"
import { contactInfo } from "../constants/data"
import { Helmet } from "react-helmet-async"

const Contact = () => {
  const inputStyles =
    "border dark:border-gray-600 p-2 rounded-sm outline-none focus:border-themeColor dark:bg-darkSecondary"
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        "service_3ax98kc", // serviceID emailjs
        "template_ipt87q9", // templateID emailjs
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        "MhvRYF1BphblkFo4F" // Public Key emailjs
      )

      setLoading(false)
      alert("Your message has been sent!")
      setForm({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.error("Email send error:", error)
      setLoading(false)
      alert("Failed to send email. Please try again later.")
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact | Md Julhas</title>
        <meta
          name="description"
          content="Feel Free to Reach Out with Any Questions About Web. Whether you're looking to build a new website, improve your existiong paltform, or bring a unique project to life, I'm here to help Md Julhas"
        />
        <meta
          name="keywords"
          content="Md Julhas, Web Developer, Contact With Developer, Find Developer, Software Engineer, MERN Stack, React.js, Node.js, Figma to HTML, MongoDB, JavaScript Developer, Frontend Developer, Backend Developer, UI/UX"
        />
      </Helmet>
      <Navbar />
      <div className="section-container pt-16 flex-grow bg-gray-100 dark:bg-darkPrimary">
        <div className="inner-container">
          <div className="mt-10">
            <h1 className="text-3xl md:text-4xl font-extrabold">Let's talk</h1>
            <p className="text-gray-400 py-5">
              Whether you're looking to build a new website, improve your
              existiong paltform, or bring a unique project to life, I'm here to
              help.
            </p>
          </div>

          {/* Address informaction */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
            {contactInfo.map((item) => (
              <div
                key={item.id}
                className="p-10 rounded-md shadow-sm hover:shadow-lg bg-white dark:bg-darkSecondary flex flex-col items-center justify-center gap-2 text-center group transition-all duration-300"
              >
                <div className="text-3xl text-themeColor mb-3 bg-themeColor/20 p-5 rounded-full">
                  {item.icon}
                </div>
                <b className="group-hover:text-themeColor transition-all duration-300 capitalize">
                  {item.name}
                </b>
                <p className="text-gray-400 text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center bg-white dark:bg-darkSecondary p-10 my-10 rounded-md shadow-sm hover:shadow-lg transition-all duration-300">
            <div>
              <span className="text-themeColor font-bold">Let's Connect</span>
              <h2 className="font-bold text-3xl pb-3 pt-2">
                Feel Free to Reach Out with Any Questions
              </h2>
              <p className="text-gray-400">
                Simplifying daily workflows through web applications. Let’s
                collaborate to build something valuable together.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <label className="flex flex-col">
                <b className="text-gray-500 dark:text-gray-400">Full Name</b>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className={inputStyles}
                />
              </label>
              <label className="flex flex-col">
                <b className="text-gray-500 dark:text-gray-400">Email</b>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter email address (e.g., 123@example.com)"
                  className={inputStyles}
                />
              </label>
              <label className="flex flex-col">
                <b className="text-gray-500 dark:text-gray-400">Message</b>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Enter your message (e.g., Hi, I'm interested in your services...)"
                  className={inputStyles}
                />
              </label>
              <button
                className="w-full px-5 py-3 bg-gradient-to-br from-gradientFirst to-gradientSecond rounded-full font-bold text-gray-200 hover:brightness-90 transition-all duration-300"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ScrollTop />
      <Footer />
    </div>
  )
}

export default Contact
