import React, { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { useStateContext } from "./contexts/ContextProvider"
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"
import Blogs from "./pages/Blogs"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"

const App = () => {
  const { setIsScrollTop, themeMode } = useStateContext()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrollTop(true)
      } else {
        setIsScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [themeMode])

  return (
    <BrowserRouter>
      <div
      // className={`${themeMode === "dark" ? "dark" : "light"}`}
      >
        <div className="text-gray-700 dark:text-gray-400">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
