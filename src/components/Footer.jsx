import React from "react"

import Logo from "../assets/julhas-logo.png"
import { contactInfo, navLinks } from "../constants/data"
import { Link } from "react-router-dom"
import { IoIosLocate, IoIosMail, IoIosPhoneLandscape } from "react-icons/io"
import { FaLocationDot, FaPhoneFlip } from "react-icons/fa6"
import { CiPhone } from "react-icons/ci"
import { FaPhone, FaPhoneAlt } from "react-icons/fa"
import { IoMail } from "react-icons/io5"
import SocialLinks from "./SocialLinks"

const Footer = () => {
  return (
    <div className="section-container bg-gray-800 dark:bg-darkSecondary text-gray-200">
      <div className="inner-container ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:justify-items-center py-14 border-b border-gray-700">
          {/* Developer branding */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <img
                src={Logo}
                alt="Julhas logo"
                className="h-8 min-w-8 rounded-full"
              />
              <h2 className="text-2xl font-bold">Md Julhas</h2>
            </div>
            <h2 className="text-xl text-gray-500 font-light">
              Building technology that makes your work simpler
            </h2>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-5 font-bold">Quick Links</h3>
            <div className="flex flex-col gap-2 capitalize text-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.path}
                  className="hover-underline-color-effect w-fit"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 font-bold">Contact</h3>

            <div className="flex flex-col gap-3 mb-5">
              {contactInfo.map((item) => (
                <div key={item.id} className="flex items-center gap-2 text-sm">
                  <span className="border border-gray-500 p-2 rounded-full">
                    {item.icon}
                  </span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
            <SocialLinks />
          </div>
        </div>

        {/* Footer with Copyright, Terms, Privacy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm py-7">
          <div>
            COPYRIGHT © {new Date().getFullYear()} <b>Md Julhas</b> 2025 | All
            Rights Reserved
          </div>
          <div className="flex gap-5 justify-start md:justify-end">
            <div>
              <Link to={""} className="py-1 hover-underline-color-effect">
                Terms & Condition
              </Link>
            </div>
            <div>
              <Link to={""} className="py-1 hover-underline-color-effect">
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link to={""} className="py-1 hover-underline-color-effect">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
