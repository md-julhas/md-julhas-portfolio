import React from "react"

const Button = ({
  gradientStart = "#FF3155",
  gradientEnd = "#BA0727",
  backgroundColor,
  text,
  onClick = () => {},
  fontSize = "20px",
  textColor = "#E5E7EB",
  textBold = false,
  btnType = "button",
}) => {
  return (
    <button
      className="capitalize px-5 py-2 rounded-sm transition-all duration-300 ease-in-out"
      style={{
        color: textColor,
        fontSize: fontSize,
        fontWeight: textBold ? "bold" : "normal",
        background: backgroundColor
          ? backgroundColor
          : `linear-gradient(-180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
      }}
      onMouseEnter={(e) => {
        e.target.style.filter = "brightness(85%)"
      }}
      onMouseLeave={(e) => {
        e.target.style.filter = "brightness(100%)"
      }}
      onClick={onClick}
      type={btnType}
    >
      {text}
    </button>
  )
}

export default Button
