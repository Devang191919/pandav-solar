import React from "react";
import { NavLink } from "react-router-dom";

const BannerSec = ({ title, subtitle, bgImage }) => {
  return (
    <div className="relative h-44 sm:h-52 md:h-60 lg:h-64 overflow-hidden bg-slate-800">
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-slate-900/45" />
      <div className="relative h-full flex items-center">
        <div className="container-main py-6">
          <p className="text-sm sm:text-base text-solar-green-light font-medium">
            <NavLink to="/" className="hover:underline text-white/90">
              Home
            </NavLink>
            <span className="mx-2 text-white/50">/</span>
            <span className="text-white/80">{subtitle}</span>
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-1.5 tracking-tight">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BannerSec;
