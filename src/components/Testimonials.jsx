import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const Testimonials = () => {
  return (
    <section className="relative section-block overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-8 sm:mb-10">
          <span className="section-badge">Customer Reviews</span>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-base md:text-lg text-solar-700 max-w-xl mx-auto">
            Real feedback from homeowners and businesses across Surat.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {siteConfig.testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120} variant="up">
              <article className="relative h-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 lg:p-7 shadow-[0_8px_30px_rgb(0_0_0_/_0.05)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgb(5_150_105_/_0.12)] hover:border-solar-green/30 transition-all duration-300">
                <FaQuoteLeft className="text-solar-green/25 text-3xl mb-3" />
                <div className="flex gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar key={j} size={15} />
                  ))}
                </div>
                <p className="text-solar-800 text-sm sm:text-base leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-solar-green to-solar-green-dark text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <p className="font-bold text-solar-900 text-sm sm:text-base">{t.name}</p>
                    <p className="text-xs sm:text-sm text-solar-700">{t.location}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
