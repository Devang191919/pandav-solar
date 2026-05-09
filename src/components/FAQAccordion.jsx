// components/FAQAccordion.jsx
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQAccordion = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 py-5 text-start">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <span
          className={`text-xl font-semibold transition-colors duration-300 `}
        >
          {question}
        </span>
        <span className="ml-4 text-blue-600">
          {isOpen ? <FaChevronUp size={22} /> : <FaChevronDown size={22} />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-200 ease-in-out ${
          isOpen ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-lg leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FAQAccordion;
