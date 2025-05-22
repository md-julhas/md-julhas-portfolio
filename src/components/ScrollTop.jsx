import React from "react"
import { useStateContext } from "../contexts/ContextProvider"
import { Tooltip } from "@mui/material"
import { IoIosArrowUp } from "react-icons/io"

const ScrollTop = () => {
  const { isScrollTop } = useStateContext()
  return (
    <>
      {isScrollTop && (
        <Tooltip title="Go to Top" arrow>
          <button
            type="button"
            className="fixed flex justify-center items-center p-1 right-5 bottom-5 rounded-sm bg-themeColor hover:brightness-75"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <IoIosArrowUp className={`text-gray-200`} />
          </button>
        </Tooltip>
      )}
    </>
  )
}

export default ScrollTop
