import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { FaSolarPanel, FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { siteConfig, getTelUrl } from "../config/siteConfig";
import ContactLink from "./ContactLink";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100 pt-[env(safe-area-inset-top)]">
      <div className="container-main">
        <div className="flex justify-between items-center h-14 sm:h-16 gap-2">
          <NavLink
            to="/"
            className="flex items-center gap-2.5 min-w-0 shrink"
            onClick={() => setIsOpen(false)}
          >
            <img
              src={siteConfig.images.logo}
              alt={siteConfig.companyName}
              className="brand-logo"
            />
            <span className="hidden sm:block text-[18px] leading-tight text-solar-green font-semibold  tracking-wide">
              Pandav Solar
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 text-solar-green font-semibold text-sm"
                    : "px-3 py-2 text-solar-700 hover:text-solar-green text-sm font-medium transition"
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <a href={getTelUrl()} className="btn-call !py-2 !px-3 text-sm">
              <MdCall />
              Call
            </a>
            <NavLink to="/inquiry" className="btn-primary !py-2 !px-4 text-sm">
              Free Quote
            </NavLink>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="lg:hidden p-2.5 -mr-1 text-solar-800 rounded-lg hover:bg-slate-50 active:bg-slate-100"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden border-t bg-white px-4 py-4 space-y-1 shadow-lg max-h-[calc(100dvh-3.5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block py-3 px-3 text-solar-green font-semibold bg-green-50 rounded-lg"
                  : "block py-3 px-3 text-solar-700 hover:bg-slate-50 rounded-lg"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a href={getTelUrl()} className="btn-call w-full mt-2">
            <MdCall /> Call {siteConfig.phoneDisplay}
          </a>
          <ContactLink
            type="whatsapp"
            message="Hi Pandav Solar!"
            className="btn-whatsapp w-full mt-2"
          >
            <FaWhatsapp /> WhatsApp
          </ContactLink>
          <NavLink to="/inquiry" onClick={() => setIsOpen(false)} className="btn-primary w-full mt-2">
            Get Free Quote
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
