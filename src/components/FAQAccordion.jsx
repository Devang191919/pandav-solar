import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQAccordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 last:border-0 py-4">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-solar-900 text-sm md:text-base">{question}</span>
        <span className="shrink-0 w-7 h-7 rounded-full bg-green-50 text-solar-green flex items-center justify-center">
          {isOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 mt-3" : "max-h-0"}`}>
        <p className="text-solar-700 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FAQAccordion;
