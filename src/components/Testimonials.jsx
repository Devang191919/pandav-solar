import React from "react";
import { FaStar } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const Testimonials = () => {
  return (
    <section className="section-block bg-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-6 sm:mb-8">
          <span className="section-badge">Customer Reviews</span>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
            What Our Customers Say
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {siteConfig.testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120} variant="up">
              <div className="card p-4 sm:p-5 h-full">
                <div className="flex gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} size={14} />
                  ))}
                </div>
                <p className="text-solar-700 text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <p className="font-semibold text-solar-900 text-sm">{t.name}</p>
                  <p className="text-xs text-solar-700">{t.location}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
