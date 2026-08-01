import React from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import ContactLink from "./ContactLink";

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-solar-700 border-t border-slate-200 pb-8 lg:pb-8">
      <div className="container-main pt-8 sm:pt-12 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-slate-200">
          <div className="col-span-2 md:col-span-1">
            <img
              src={siteConfig.images.logo}
              alt={siteConfig.companyName}
              className="brand-logo brand-logo--footer"
            />
            <p className="text-sm mt-2 leading-relaxed">
              Trusted solar installation & EPC services in Surat and across Gujarat.
            </p>
            <div className="flex items-center gap-2 mt-4">
              {siteConfig.social?.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-solar-700 hover:text-solar-green hover:border-solar-green/40 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
              )}
              {siteConfig.social?.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-solar-700 hover:text-solar-green hover:border-solar-green/40 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-solar-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/about", label: "About" },
                { to: "/inquiry", label: "Get a Quote" },
                { to: "/faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} className="hover:text-solar-green transition">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-solar-900 mb-3">Services & Info</h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.slice(0, 4).map((s) => (
                <li key={s.title}>
                  <NavLink to="/services" className="hover:text-solar-green transition">
                    {s.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/warranty" className="hover:text-solar-green transition">
                  Warranty
                </NavLink>
              </li>
              <li>
                <NavLink to="/subsidy" className="hover:text-solar-green transition">
                  Subsidy Help
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h3 className="font-semibold text-solar-900 mb-3">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <ContactLink type="phone" className="block hover:text-solar-green">
                📞 {siteConfig.phoneDisplay}
              </ContactLink>
              <ContactLink type="email" className="block hover:text-solar-green break-all">
                ✉️ {siteConfig.email}
              </ContactLink>
              <ContactLink
                type="whatsapp"
                message="Hello Pandav Solar!"
                className="flex items-center gap-1 hover:text-green-600"
              >
                <FaWhatsapp className="text-green-600" /> WhatsApp
              </ContactLink>
              <p className="text-xs leading-relaxed pt-1">📍 {siteConfig.address}</p>
              <p className="text-xs text-solar-700">{siteConfig.hours}</p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-solar-700 pt-6">
          © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
