import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";
import BannerSec from "../components/BennerSec";
import FAQAccordion from "../components/FAQAccordion";
import PageMeta from "../components/PageMeta";

const faqData = [
  {
    question: "What services does Pandav Solar provide?",
    answer:
      "We install solar rooftop systems, handle government liaisoning & net-meter work, and provide solar water heaters for homes, shops, and industries.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most installations take 3 to 7 days depending on system size. We keep you updated at every step.",
  },
  {
    question: "Is government subsidy available?",
    answer:
      "Yes! We help you understand and apply for all eligible solar subsidies in Gujarat. Visit our Subsidy Help page for more details.",
  },
  {
    question: "Do you offer maintenance?",
    answer:
      "Yes — we offer cleaning, monitoring, and repair services to keep your system running efficiently.",
  },
  {
    question: "What warranty do you provide?",
    answer:
      "Solar panels come with up to 25-year performance warranty. We use trusted brands only. See our Warranty page for support details.",
  },
];

const FAQ = ({ embedded = false }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const list = (
    <div className="card p-4 md:p-5 max-w-3xl mx-auto">
      {faqData.map((item, index) => (
        <FAQAccordion
          key={item.question}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );

  if (embedded) {
    return (
      <>
        <div className="text-center mb-6">
          <span className="section-badge">FAQ</span>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
            Common Questions
          </h2>
        </div>
        {list}
      </>
    );
  }

  return (
    <div>
      <PageMeta pageKey="faq" />
      <BannerSec title="FAQ" subtitle="FAQ" bgImage={siteConfig.images.service} />
      <div className="container-main section-block">
        <p className="text-center text-solar-700 mb-6 text-sm">
          Answers to questions our customers ask most often. Also see{" "}
          <NavLink to="/subsidy" className="text-solar-green font-medium hover:underline">
            Subsidy Help
          </NavLink>{" "}
          and{" "}
          <NavLink to="/warranty" className="text-solar-green font-medium hover:underline">
            Warranty
          </NavLink>
          .
        </p>
        {list}
      </div>
    </div>
  );
};

export default FAQ;
