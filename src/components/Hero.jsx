import React from "react"
import { NavLink } from "react-router-dom"
import { RiShareForward2Fill } from "react-icons/ri"
import { BsFileEarmarkTextFill } from "react-icons/bs"

import heroImg from "../assets/julhas-hero.png"

const Hero = () => {
  return (
    <div className="section-container pt-16 bg-gray-100 dark:bg-darkPrimary">
      <div className="inner-container lg:grid lg:grid-cols-2">
        {/* Left content */}
        <div className="flex flex-col items-start gap-2 md:gap-4 justify-center py-5 md:py-7">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-gradientFirst to-gradientSecond bg-clip-text text-transparent text-nowrap">
              Md Julhas
            </span>
          </h1>
          <h2 className="text-3xl md:text-4xl xl:text-5xl  font-extrabold">
            Web Application Developer
          </h2>
          <p className="text-base md:text-lg text-gray-500">
            I build modern, scalable, and user-focused web applications. With
            several years of experience in web application development, I create
            efficient software solutions that streamline business operations and
            simplify everyday tasks.
          </p>

          {/* CTA section*/}
          <div className="flex gap-3 justify-center flex-wrap md:pb-5 mt-5">
            <NavLink
              to="/contact"
              className="px-5 py-3 bg-gradient-to-br from-gradientFirst to-gradientSecond rounded-full text-gray-100 font-bold hover:brightness-90 transition-all duration-300 flex items-center justify-center gap-1.5"
            >
              <RiShareForward2Fill />
              Get In Touch
            </NavLink>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-br from-gray-900 to-gray-400 text-gray-200 rounded-full font-bold flex items-center justify-center gap-1.5 transition-all duration-300 hover:brightness-90"
            >
              <BsFileEarmarkTextFill />
              View Resume
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className=" flex items-center lg:justify-end">
          <img
            src={heroImg}
            alt="md julhas web application developer"
            className="h-[400px] xl:h-[450px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
