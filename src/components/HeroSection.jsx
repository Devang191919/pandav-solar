import React, { useEffect, useState } from "react";
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

const SLIDE_MS = 4500;

const HeroSection = () => {
  const slides = siteConfig.heroSlides?.length
    ? siteConfig.heroSlides
    : [
        {
          image: siteConfig.images.hero,
          badge: "Trusted Solar Company in Surat",
          title: "Switch to Solar &",
          highlight: "Save on Electricity Bills",
          text: siteConfig.tagline,
        },
      ];

  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const total = slides.length;

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (total <= 1 || reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, SLIDE_MS);
    return () => clearInterval(id);
  }, [total, reduceMotion]);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden min-h-[72svh] sm:min-h-[70vh] md:min-h-[78vh] lg:min-h-[88vh] flex flex-col justify-center">
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={`${s.image}-${i}`}
            className={`hero-slide-layer ${i === index ? "hero-slide-layer--active" : ""}`}
            aria-hidden={i !== index}
          >
            <img
              src={s.image}
              alt=""
              className={`hero-slide-img ${i === index && !reduceMotion ? "hero-kenburns" : ""}`}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80 md:bg-gradient-to-r md:from-slate-900/88 md:via-slate-900/55 md:to-slate-900/40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-[2] h-28 bg-gradient-to-t from-slate-900/90 to-transparent pointer-events-none" />

      <div className="relative z-[3] w-full container-main py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl text-left" key={index}>
          <span className="hero-slide-in inline-block px-3.5 py-1.5 rounded-full text-sm sm:text-base font-semibold text-white bg-solar-green/90">
            {slide.badge}
          </span>

          <h1
            className="hero-slide-in mt-4 sm:mt-5 text-[1.85rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white tracking-tight"
            style={{ animationDelay: "0.1s" }}
          >
            {slide.title}{" "}
            <span className="text-solar-green-light">{slide.highlight}</span>
          </h1>

          <p
            className="hero-slide-in mt-4 sm:mt-5 text-base sm:text-lg md:text-xl xl:text-2xl text-slate-200 leading-relaxed max-w-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            {slide.text}
          </p>

          <div
            className="hero-slide-in mt-6 sm:mt-8 flex flex-col gap-2.5 md:flex-row md:flex-wrap md:items-center md:gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <NavLink
              to="/inquiry"
              className="btn-primary w-full md:w-auto text-sm sm:text-base lg:text-lg justify-center md:px-8 md:py-3.5"
            >
              Get Free Site Visit →
            </NavLink>

            <div className="grid grid-cols-2 gap-2.5 md:contents">
              <a
                href={getTelUrl()}
                className="btn-call text-sm sm:text-base justify-center md:justify-start md:px-5"
                aria-label={`Call ${siteConfig.phoneDisplay}`}
              >
                <MdCall className="text-lg shrink-0" />
                <span className="md:hidden">Call</span>
                <span className="hidden md:inline">Call {siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={getWhatsAppUrl("Hi Pandav Solar, I want a free solar quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm sm:text-base justify-center md:justify-start md:px-5"
              >
                <FaWhatsapp className="text-lg shrink-0" />
                <span className="md:hidden">WhatsApp</span>
                <span className="hidden md:inline">WhatsApp Us</span>
              </a>
            </div>
          </div>

          <div
            className="hero-slide-in mt-5 sm:mt-7 flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-7"
            style={{ animationDelay: "0.4s" }}
          >
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm sm:text-base md:text-lg text-slate-100"
              >
                <FaCheckCircle className="text-solar-green-light shrink-0 text-sm md:text-base" />
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
