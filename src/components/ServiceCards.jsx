import React from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const ServiceCards = ({ limit }) => {
  const list = limit ? siteConfig.services.slice(0, limit) : siteConfig.services;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {list.map((service, i) => (
        <ScrollReveal key={service.title} delay={i * 90} variant="up">
          <NavLink
            to={service.link}
            className="group block h-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-[0_4px_20px_rgb(0_0_0_/_0.04)] hover:border-solar-green/35 hover:shadow-[0_20px_44px_rgb(5_150_105_/_0.14)] hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="aspect-[16/10] overflow-hidden relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-3 left-3 text-xs font-bold uppercase tracking-wider text-white/95 bg-solar-green/90 px-2.5 py-1 rounded-md">
                Service
              </span>
            </div>
            <div className="p-5 sm:p-6">
              <h3 className="font-bold text-lg sm:text-xl text-solar-900 group-hover:text-solar-green transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-solar-700 text-sm sm:text-base mt-2 leading-relaxed">
                {service.desc}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-solar-green font-semibold text-sm group-hover:gap-2 transition-all">
                Learn more <span aria-hidden>→</span>
              </span>
            </div>
          </NavLink>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ServiceCards;
