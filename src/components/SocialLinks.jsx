import React from "react"
import { socialLinks } from "../constants/data"
import { Tooltip } from "@mui/material"

const SocialLinks = ({ bgColor, color }) => {
  return (
    <div className="flex gap-2">
      {socialLinks.map((item) => (
        <Tooltip key={item.id} title={item.name} arrow>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-1.5"
            style={{
              backgroundColor: bgColor ? bgColor : "#4B5563",
              color: color ? color : "#BABDB6",
            }}
          >
            {item.icon}
          </a>
        </Tooltip>
      ))}
    </div>
  )
}

export default SocialLinks
