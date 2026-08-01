import React from "react";
import {
  FaAward,
  FaHeadset,
  FaLeaf,
  FaShieldAlt,
  FaTools,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const icons = [FaTools, FaShieldAlt, FaHeadset, FaAward, FaLeaf, FaMapMarkerAlt];

const WhyChooseUs = () => {
  return (
    <section className="relative section-block overflow-hidden border-y border-emerald-100/80">
      {/* Atmosphere — soft green wash + light grid, not flat white */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/90 via-white to-slate-50 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(5 150 105 / 0.12) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-solar-green/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 -left-20 w-80 h-80 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />

      <div className="relative container-main">
        <ScrollReveal className="text-center mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-solar-900">
            Why Families &amp; Businesses Choose{" "}
            <span className="text-solar-green">Pandav Solar</span>
          </h2>
          <p className="mt-4 text-base md:text-lg xl:text-xl text-solar-700 leading-relaxed">
            Quality installations, honest guidance, and local Surat support that stays
            with you long after your system goes live.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {siteConfig.whyChooseUs.map((item, index) => {
            const Icon = icons[index % icons.length];
            const num = String(index + 1).padStart(2, "0");

            return (
              <ScrollReveal key={item.title} delay={index * 90} variant="up">
                <article className="why-card group h-full relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 backdrop-blur-sm p-5 sm:p-6 lg:p-7 shadow-[0_4px_20px_rgb(0_0_0_/_0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-solar-green/40 hover:shadow-[0_18px_40px_rgb(5_150_105_/_0.14)]">
                  {/* Top accent line on hover */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-solar-green to-solar-green-light scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />

                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-solar-green/15 to-emerald-100 flex items-center justify-center border border-solar-green/15 group-hover:from-solar-green group-hover:to-solar-green-dark group-hover:border-transparent transition-all duration-300">
                        <Icon className="text-2xl text-solar-green group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-100 group-hover:text-solar-green/20 tabular-nums leading-none transition-colors duration-300 select-none">
                      {num}
                    </span>
                  </div>

                  <h3 className="font-bold text-solar-900 text-lg sm:text-xl tracking-tight group-hover:text-solar-green-dark transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="mt-2.5 mb-3 h-0.5 w-10 rounded-full bg-solar-green/40 group-hover:w-16 transition-all duration-300" />
                  <p className="text-solar-700 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal className="mt-8 sm:mt-10 text-center" delay={200}>
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm sm:text-base text-solar-700 bg-white/80 border border-slate-200 rounded-full px-4 sm:px-6 py-2.5 shadow-sm">
            <span className="font-semibold text-solar-green-dark">
              {siteConfig.stats.customers}+ projects
            </span>
            <span className="text-slate-300">·</span>
            <span className="font-semibold text-solar-green-dark">
              {siteConfig.stats.years}+ years
            </span>
            <span className="text-slate-300">·</span>
            <span>Serving Surat &amp; Gujarat</span>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhyChooseUs;
