import React from "react";
import { NavLink } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { getTelUrl, getWhatsAppUrl } from "../config/siteConfig";

const MobileActionBar = () => {
  return (
    <>
      {/* Desktop floating — positioned above page bottom */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-40 flex-col gap-2.5">
        <a
          href={getTelUrl()}
          aria-label="Call"
          className="w-12 h-12 rounded-full bg-solar-green text-white shadow-lg flex items-center justify-center hover:bg-solar-green-dark transition"
        >
          <MdCall className="text-lg" />
        </a>
        <a
          href={getWhatsAppUrl("Hello Pandav Solar!")}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:opacity-90 transition"
        >
          <FaWhatsapp className="text-lg" />
        </a>
      </div>

      {/* Mobile bottom bar */}
      <div className="mobile-bottom-bar lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] grid grid-cols-3">
        <a
          href={getTelUrl()}
          className="flex flex-col items-center justify-center min-h-[3.25rem] py-2 text-solar-green active:bg-green-50 transition"
        >
          <MdCall className="text-xl" />
          <span className="text-[11px] font-semibold mt-0.5">Call</span>
        </a>
        <a
          href={getWhatsAppUrl("Hi Pandav Solar, I need solar installation info.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[3.25rem] py-2 text-[#25D366] active:bg-green-50 transition border-x border-slate-100"
        >
          <FaWhatsapp className="text-xl" />
          <span className="text-[11px] font-semibold mt-0.5">WhatsApp</span>
        </a>
        <NavLink
          to="/inquiry"
          className="flex flex-col items-center justify-center min-h-[3.25rem] py-2 text-solar-green bg-green-50 active:bg-green-100 transition"
        >
          <span className="text-base leading-none">📋</span>
          <span className="text-[11px] font-semibold mt-0.5">Free Quote</span>
        </NavLink>
      </div>
    </>
  );
};

export default MobileActionBar;
