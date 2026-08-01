import React from "react";
import {
  FaClipboardList,
  FaDraftingCompass,
  FaTools,
  FaBolt,
} from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const stepIcons = [FaClipboardList, FaDraftingCompass, FaTools, FaBolt];

const HowItWorks = () => {
  return (
    <section className="relative section-block overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgb(16_185_129_/_0.18),_transparent_55%)] pointer-events-none" />
      <div className="relative container-main">
        <ScrollReveal className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-sm font-semibold bg-solar-green/20 text-solar-green-light border border-solar-green/30">
            Simple Process
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight">
            How It Works — 4 Easy Steps
          </h2>
          <p className="mt-3 text-base md:text-lg xl:text-xl text-slate-300 max-w-xl mx-auto leading-relaxed">
            From first call to saving on your bill — we handle everything for you.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-solar-green/50 to-transparent" />

          {siteConfig.processSteps.map((item, i) => {
            const Icon = stepIcons[i % stepIcons.length];
            return (
              <ScrollReveal key={item.step} delay={i * 120} variant="up">
                <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-6 hover:bg-white/10 hover:border-solar-green/40 transition-all duration-300">
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-solar-green text-white flex items-center justify-center text-xl shadow-[0_8px_24px_rgb(5_150_105_/_0.45)] mb-5">
                    <Icon />
                  </div>
                  <p className="text-xs font-bold tracking-widest text-solar-green-light uppercase mb-2">
                    Step {item.step}
                  </p>
                  <h3 className="font-bold text-white text-lg sm:text-xl">{item.title}</h3>
                  <p className="text-sm md:text-base text-slate-300 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
