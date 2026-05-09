// pages/FAQ.jsx
import React, { useState } from "react";
import FAQAccordion from "../components/FAQAccordion";

const faqData = [
  {
    question: "What services does Pandav Solar provide?",
    answer:
      "We provide solar panel installation, maintenance, and consultation services for residential and commercial needs. Our solutions are customized to maximize efficiency and savings.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Installation typically takes 3 to 7 business days, depending on your property size and system requirements. Our expert team ensures seamless and timely completion.",
  },
  {
    question: "Is government subsidy available?",
    answer:
      "Yes, government subsidies and incentives are available for solar installations. We assist you in understanding and applying for all eligible benefits.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Absolutely! We provide comprehensive maintenance plans, including system monitoring, cleaning, and repairs to keep your solar setup running at peak performance.",
  },
  {
    question: "What is the warranty period for your solar panels?",
    answer:
      "Our solar panels come with a 25-year performance warranty, ensuring durability and long-term reliability for your energy needs.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 py-16">
      <h1 className="text-5xl leading-15.5 font-extrabold text-center text-blue-700 mb-10">
        Frequently Asked Questions
      </h1>

      <div className="bg-white shadow-lg rounded-xl p-8">
        {faqData.map((item, index) => (
          <FAQAccordion
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
