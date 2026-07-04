import React from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

const ServiceCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {siteConfig.services.map((service) => (
        <NavLink
          key={service.title}
          to={service.link}
          className="card overflow-hidden group block hover:border-solar-green/30 transition"
        >
          <div className="h-44 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-5">
            <h3 className="font-bold text-lg text-solar-900 group-hover:text-solar-green transition">
              {service.title}
            </h3>
            <p className="text-solar-700 text-sm mt-2 leading-relaxed">{service.desc}</p>
            <span className="inline-block mt-3 text-solar-green font-semibold text-sm">
              Learn more →
            </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default ServiceCards;
