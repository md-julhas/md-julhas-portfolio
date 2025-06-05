import React from "react"
import { useStateContext } from "../contexts/ContextProvider"
import { AnimatePresence, motion } from "framer-motion"
import { navLinks } from "../constants/data"
import { NavLink } from "react-router-dom"
import julhasLogo from "../assets/julhas-logo.png"
import { IoCloseOutline, IoSunny } from "react-icons/io5"
import { WiMoonAltThirdQuarter } from "react-icons/wi"
import SocialLinks from "./SocialLinks"

const SmallScreenSidebar = () => {
  const {
    isSmallScreenSidebar,
    setIsSmallScreenSidebar,
    themeMode,
    setThemeMode,
  } = useStateContext()
  return (
    <>
      <AnimatePresence>
        {isSmallScreenSidebar && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-gray-800/65 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={() => setIsSmallScreenSidebar(false)}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed left-0 top-0 h-screen w-56 px-5 bg-gray-100 dark:bg-darkPrimary flex flex-col"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {/* Logo */}
              <div className="flex items-center justify-between gap-3 py-5 border-b dark:border-gray-700">
                <NavLink
                  to="/"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsSmallScreenSidebar(false)}
                >
                  <img
                    src={julhasLogo}
                    alt="Julhas logo"
                    className="h-8 min-w-8 rounded-full"
                  />
                  <h2 className="text-xl font-extrabold bg-gradient-to-br from-gradientFirst to-gradientSecond bg-clip-text text-transparent">
                    Md Julhas
                  </h2>
                </NavLink>

                <IoCloseOutline
                  className="text-xl hover:text-themeColor cursor-pointer"
                  onClick={() => setIsSmallScreenSidebar(false)}
                />
              </div>

              {/* Nav links */}
              <div>
                {navLinks.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 py-2.5 border-b dark:border-gray-700 text-sm font-semibold capitalize transition-all duration-300   $ ${
                        isActive
                          ? "text-themeColor"
                          : "text-gray-500 dark:text-gray-400 hover:text-themeColor dark:hover:text-themeColor"
                      }`
                    }
                    onClick={() => setIsSmallScreenSidebar(false)}
                  >
                    {link.icon}
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-5">
                <h3 className="font-semibold py-2">Social Links</h3>
                <SocialLinks
                  bgColor={themeMode === "light" ? "#D3D7CF" : "#121A2F"}
                  color={"#ff014f"}
                />
              </div>

              {/* Change theme mode */}
              <button
                className="text-gray-200 px-2 py-2 rounded-sm bg-gradient-to-br from-gradientFirst to-gradientSecond hover:brightness-90 transition-all duration-300 mt-10"
                onClick={() => {
                  const newTheme = themeMode === "light" ? "dark" : "light"
                  setThemeMode(newTheme)
                  localStorage.setItem("themeMode", newTheme)
                }}
              >
                <div className="flex items-center justify-center gap-1 sm:text-xs text-nowrap">
                  {themeMode === "light" ? (
                    <>
                      <span>Dark Mode</span>
                      <WiMoonAltThirdQuarter size={"20"} />
                    </>
                  ) : (
                    <>
                      <span>Light Mode</span>
                      <IoSunny size={"20"} />
                    </>
                  )}
                </div>
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default SmallScreenSidebar
