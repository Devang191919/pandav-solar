import React from "react";
import { NavLink } from "react-router-dom";

const BannerSec = ({ title, subtitle, bgImage }) => {
  return (
    <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden bg-slate-100">
      <img src={bgImage} alt={title} className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/70 flex items-center">
        <div className="container-main">
          <p className="text-sm text-solar-green font-medium">
            <NavLink to="/" className="hover:underline">Home</NavLink>
            <span className="mx-2 text-slate-400">/</span>
            {subtitle}
          </p>
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-solar-900 mt-1">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default BannerSec;
