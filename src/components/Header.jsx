import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import Navbar from "./Navbar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Container */}
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex justify-between py-5 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <NavLink
              to="/"
              className="text-4xl max-lg:text-2xl font-bold text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              PANDAV SOLAR
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline text-lg"
                  : "text-gray-700 hover:text-blue-500 text-lg"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline text-lg"
                  : "text-gray-700 hover:text-blue-500 text-lg"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline text-lg"
                  : "text-gray-700 hover:text-blue-500 text-lg"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 underline text-lg"
                  : "text-gray-700 hover:text-blue-500 text-lg"
              }
            >
              Contact
            </NavLink>

            {/* Request a Quote Button (Desktop) */}
          </div>
          <div className="max-md:hidden ">
            <NavLink
              to="/inquiry"
              className={({ isActive }) =>
                isActive
                  ? "ml-4 px-4 py-2 bg-blue-600 text-white rounded flex items-center gap-2 "
                  : "ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex items-center gap-2 group"
              }
            >
              Request a Inquiry
              <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-700 focus:outline-none "
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden text-center px-4 pt-2 pb-3 space-y-2 bg-white shadow-md">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-500 underline text-lg"
                : "block text-gray-700 hover:text-blue-500 text-lg"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-500 underline text-lg"
                : "block text-gray-700 hover:text-blue-500 text-lg"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-500 underline text-lg"
                : "block text-gray-700 hover:text-blue-500 text-lg"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block text-blue-500 underline text-lg"
                : "block text-gray-700 hover:text-blue-500 text-lg"
            }
          >
            Contact
          </NavLink>

          {/* Request a Quote Button (Mobile) */}
          <NavLink
            to="/inquiry"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block w-full text-center px-4 py-2 bg-blue-600 text-white rounded flex justify-center items-center gap-2"
                : "block w-full text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition flex justify-center items-center gap-2 group"
            }
          >
            Request a Inquiry
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
          </NavLink>
        </div>
      )}
      <Navbar />
    </nav>
  );
};

export default Header;
