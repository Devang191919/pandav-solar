import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { getTelUrl, getWhatsAppUrl } from "../config/siteConfig";

const FloatingContactBar = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-2.5">
      <a
        href={getTelUrl()}
        aria-label="Call Pandav Solar"
        className="flex items-center justify-center rounded-2xl bg-white text-solar-amber-dark shadow-lg border border-slate-200 transition hover:scale-105 hover:border-solar-amber/40"
        style={{ width: "3.25rem", height: "3.25rem" }}
      >
        <MdCall className="text-xl" />
      </a>
      <a
        href={getWhatsAppUrl("Hello Pandav Solar, I would like to know more about your solar services.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg transition hover:scale-105"
        style={{ width: "3.25rem", height: "3.25rem" }}
      >
        <FaWhatsapp className="text-xl" />
      </a>
    </div>
  );
};

export default FloatingContactBar;
