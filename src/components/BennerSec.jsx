// src/components/HeroSection.jsx
import React from "react";

const Bennersec = ({ title, subtitle, bgImage }) => {
  return (
    <div className="w-full h-96 max-md:h-66 relative overflow-hidden">
      <img src={bgImage} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="mt-2 text-lg">
            <span className="text-yellow-400">Home</span>{" "}
            &nbsp;&rsaquo;&rsaquo;&nbsp; {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bennersec;
