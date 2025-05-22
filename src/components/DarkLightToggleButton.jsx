import React from "react"
import { useStateContext } from "../contexts/ContextProvider"
import { WiMoonAltThirdQuarter } from "react-icons/wi"
import { IoSunny } from "react-icons/io5"

const DarkLightToggleButton = () => {
  const { themeMode, setThemeMode } = useStateContext()
  return (
    <button
      className="hidden md:block text-themeColor p-2 border border-themeColor hover:bg-themeColor hover:text-gray-100 rounded-full transition-all duration-300"
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
  )
}

export default DarkLightToggleButton
