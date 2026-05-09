import React from "react";
import { NavLink } from "react-router-dom";
import { IoIosMailUnread } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-black shadow-md">
      <div className="max-w-[1800px] items-center h-15 max-lg:hidden mx-auto">
        <ul className="flex justify-between items-center max-lg:flex-col max-lg:items-start h-full px-4 sm:px-6 lg:px-8 max-lg:py-4  ">
          <li className="text-white text-md items-center">
            <a
              href="mailto:tusharpandav.mtfi@gmail.com"
              className="flex items-center gap-2"
            >
              <IoIosMailUnread className="max-lg:text-2xl" />
              tusharpandav.mtfi@gmail.com
            </a>
          </li>
          <li className="text-white text-md">
            <a href="tel:+917069216551" className={"flex items-center gap-2"}>
              <MdCall className="max-lg:text-2xl" /> +91 70692 16551
            </a>
          </li>
          <li className="text-white text-md">
            <p className={"flex items-center gap-2"}>
              <FiClock className="max-lg:text-2xl" /> Mon - Sat 09AM - 7PM,
              Sunday - 9AM - 1PM
            </p>
          </li>
          <ul className="text-white text-lg flex items-center gap-8 pr-4 max-lg:text-xl max:lg:mt-4">
            <li className="text-white text-lg flex items-center gap-8 pr-4 max-lg:text-xl max:lg:mt-4">
              <a
                href="https://www.instagram.com/pandav_solar?igsh=bGo0YW16MXdsc21x"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/pandavsolar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/917069216551"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition-colors duration-300"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
