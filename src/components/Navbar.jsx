import React from "react"
import { NavLink } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import { RiMenu3Fill } from "react-icons/ri"

import julhasLogo from "../assets/julhas-logo.png"
import { navLinks } from "../constants/data"
import SmallScreenSidebar from "./SmallScreenSidebar"
import DarkLightToggleButton from "./DarkLightToggleButton"

const Navbar = () => {
  const { setIsSmallScreenSidebar } = useStateContext()

  return (
    <div className="section-container fixed bg-gray-100 z-30 border-b dark:border-gray-800 dark:bg-darkPrimary">
      <div className="inner-container h-16 flex justify-between items-center gap-5">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3">
          <NavLink to="/">
            <img
              src={julhasLogo}
              alt="Julhas logo"
              className="h-8 min-w-8 rounded-full"
            />
          </NavLink>
          <h2 className="hidden lg:block text-3xl font-extrabold bg-gradient-to-br from-gradientFirst to-gradientSecond bg-clip-text text-transparent">
            {/* Md Julhas */}
          </h2>
        </div>

        {/* Large screen nav menu */}
        <div className="ml-auto hidden md:flex items-center justify-center gap-5 capitalize text-xs md:text-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `py-1.5 nav-hover text-sm font-semibold text-gray-500 dark:text-gray-400 dark:hover:text-themeColor ${
                  isActive ? "active-link dark:text-themeColor" : ""
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Sidebar menu for small screen */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden relative text-2xl lg:text-xl hover:text-themeColor rounded-full transition-all duration-300"
            onClick={() => setIsSmallScreenSidebar(true)}
          >
            <RiMenu3Fill />
          </button>

          <SmallScreenSidebar />
          <DarkLightToggleButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar
