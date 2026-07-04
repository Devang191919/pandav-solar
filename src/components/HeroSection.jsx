import React from "react";
import { NavLink } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { siteConfig, getTelUrl, getWhatsAppUrl } from "../config/siteConfig";

const highlights = [
  "Free site visit",
  "Subsidy help",
  `${siteConfig.stats.years}+ years experience`,
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <img
        src={siteConfig.images.hero}
        alt="Solar panels installation in Surat"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark gradient overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-slate-900/25" />

      <div className="relative container-main py-12 sm:py-16 md:py-24 lg:py-28">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-solar-green/90">
            Trusted Solar Company in Surat
          </span>

          <h1 className="mt-3 sm:mt-4 text-[1.65rem] leading-tight sm:text-4xl lg:text-5xl font-bold text-white">
            Switch to Solar &{" "}
            <span className="text-solar-green-light">Save on Electricity Bills</span>
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-xl">
            {siteConfig.tagline}
          </p>

          {/* CTA buttons */}
          <div className="mt-5 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-2.5 sm:gap-3">
            <a href={getTelUrl()} className="btn-call btn-mobile-full text-sm sm:text-base">
              <MdCall className="text-lg shrink-0" />
              <span className="truncate">Call {siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppUrl("Hi Pandav Solar, I want a free solar quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp btn-mobile-full text-sm sm:text-base"
            >
              <FaWhatsapp className="text-lg shrink-0" />
              WhatsApp Us
            </a>
            <NavLink to="/inquiry" className="btn-primary btn-mobile-full text-sm sm:text-base">
              Get Free Site Visit →
            </NavLink>
          </div>

          {/* Highlights */}
          <div className="mt-5 sm:mt-7 flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-6">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm text-slate-100"
              >
                <FaCheckCircle className="text-solar-green-light" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
