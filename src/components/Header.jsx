import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { siteConfig, getTelUrl } from "../config/siteConfig";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/faq", label: "FAQ" },
];

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = (e) => {
    e.preventDefault();
    setIsOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] bg-white/95 backdrop-blur-md border-b transition-[box-shadow,border-color] duration-300 ${
          scrolled
            ? "shadow-md border-slate-200"
            : "shadow-sm border-slate-100"
        }`}
      >
        <div className="container-main">
          <div className="flex justify-between items-center h-[4.25rem] sm:h-[4.75rem] lg:h-[5.25rem] gap-2">
            <NavLink
              to="/"
              end
              onClick={goHome}
              className="flex items-center min-w-0 shrink"
              aria-label={`${siteConfig.companyName} — Home`}
            >
              <img
                src={siteConfig.images.logo}
                alt={siteConfig.companyName}
                className="brand-logo"
              />
            </NavLink>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 text-solar-green font-semibold text-[16px]"
                      : "px-3 py-2 text-solar-700 hover:text-solar-green text-[16px] font-medium transition"
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
          <div className="lg:hidden border-t bg-white shadow-lg px-4 py-3 space-y-1 max-h-[calc(100dvh-4.25rem)] overflow-y-auto">
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
            <div className="grid grid-cols-2 gap-2 pt-2 pb-1 md:hidden">
              <a href={getTelUrl()} className="btn-call justify-center text-sm !py-2.5">
                <MdCall /> Call
              </a>
              <NavLink
                to="/inquiry"
                onClick={() => setIsOpen(false)}
                className="btn-primary justify-center text-sm !py-2.5"
              >
                Free Quote
              </NavLink>
            </div>
          </div>
        )}
      </header>
      {/* Offset so page content is not under the fixed header */}
      <div
        className="shrink-0 h-[calc(4.25rem+env(safe-area-inset-top))] sm:h-[calc(4.75rem+env(safe-area-inset-top))] lg:h-[calc(5.25rem+env(safe-area-inset-top))]"
        aria-hidden="true"
      />
    </>
  );
};

export default Header;
