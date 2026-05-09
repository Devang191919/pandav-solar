// src/components/Footer.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../assets/footer-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white  pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between max-md:flex-col gap-10 pb-3 border-b border-gray-700">
          {/* Left - Logo and tagline */}
          <div className="space-y-8 max-w-1/3 max-md:space-y-5">
            <img src={footerLogo} alt="" className="ml-10 w-30 max-md:ml-0" />
            <p className="text-sm text-gray-400 max-lg:max-w-[300px] text-start">
              We power your world with clean and efficient solar solutions.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="space-y-2 max-w-1/3">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-base text-gray-400 text-center max-md:text-start">
              <li>
                <NavLink to="/" className="hover:text-white transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="hover:text-white transition">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white transition">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-2 max-w-64 text-start max-md:text-start">
            <h3 className="text-xl font-semibold mb-2 text-start max-md:text-start">
              Contact Us
            </h3>
            <div className="text-gray-400 text-base  space-y-3">
              <div>
                <a
                  href="tel:+917069216551"
                  className="hover:text-white transition-colors duration-300"
                >
                  📞 +91 70692 16551
                </a>
              </div>

              <div>
                <a
                  href="mailto:tusharpandav.mtfi@gmail.com"
                  className="hover:text-white transition-colors duration-300"
                >
                  ✉️ tusharpandav.mtfi@gmail.com
                </a>
              </div>
              <div>
                <a
                  href="https://www.google.com/maps/place/MARUTI+CLINIC+%26+CHILD+CARE/@21.2250872,72.8089473,20.71z/data=!4m9!1m2!2m1!1sshops+1+first+floor+nakshatra+palace+near+kantheriya+hanumanji+mandir+singanpore+gam+katargam+surat!3m5!1s0x3be04f6b697a1a81:0x6781bdbb2cc4e514!8m2!3d21.2251811!4d72.8091256!16s%2Fg%2F11rzgnbglw?entry=ttu&g_ep=EgoyMDI1MDkyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  📍 shop 1 ff, nakshatra palace near kantheriya hanumanji
                  mandir singanpore gam katargam, surat - 395004
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Pandav Solar. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
