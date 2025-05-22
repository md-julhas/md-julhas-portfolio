import { createContext, useContext, useState } from "react"

const StateContext = createContext()

export const ContextProvider = ({ children }) => {
  const [isScrollTop, setIsScrollTop] = useState(false)
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode")
      ? localStorage.getItem("themeMode")
      : "light"
  )
  const [isSmallScreenSidebar, setIsSmallScreenSidebar] = useState(false)

  return (
    <StateContext.Provider
      value={{
        isScrollTop,
        setIsScrollTop,
        themeMode,
        setThemeMode,
        isSmallScreenSidebar,
        setIsSmallScreenSidebar,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
