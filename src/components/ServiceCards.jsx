import React from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const ServiceCards = ({ limit }) => {
  const list = limit ? siteConfig.services.slice(0, limit) : siteConfig.services;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {list.map((service, i) => (
        <ScrollReveal key={service.title} delay={i * 90} variant="up">
          <NavLink
            to={service.link}
            className="card overflow-hidden group block hover:border-solar-green/30 h-full"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="p-4 sm:p-5">
              <h3 className="font-bold text-lg sm:text-xl text-solar-900 group-hover:text-solar-green transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-solar-700 text-sm sm:text-base mt-2 leading-relaxed">{service.desc}</p>
              <span className="inline-block mt-3 text-solar-green font-semibold text-sm transition-transform duration-300 group-hover:translate-x-1">
                Learn more →
              </span>
            </div>
          </NavLink>
        </ScrollReveal>
      ))}
    </div>
  );
};

export default ServiceCards;
