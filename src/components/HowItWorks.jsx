import React from "react";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const HowItWorks = () => {
  return (
    <section className="section-block bg-slate-50">
      <div className="container-main">
        <ScrollReveal className="text-center mb-6 sm:mb-10">
          <span className="section-badge">Simple Process</span>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
            How It Works — 4 Easy Steps
          </h2>
          <p className="mt-3 text-base md:text-lg xl:text-xl text-solar-700 max-w-lg mx-auto leading-relaxed">
            From first call to saving on your bill — we handle everything for you.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {siteConfig.processSteps.map((item, i) => (
            <ScrollReveal key={item.step} delay={i * 110} variant="up">
              <div className="card p-4 sm:p-5 relative h-full">
                <span className="text-3xl font-bold text-solar-green/20">{item.step}</span>
                <h3 className="font-bold text-solar-900 mt-2 text-lg">{item.title}</h3>
                <p className="text-sm md:text-base text-solar-700 mt-2 leading-relaxed">{item.desc}</p>
                {i < siteConfig.processSteps.length - 1 && (
                  <span className="hidden lg:block absolute top-1/2 -right-3 text-solar-green text-xl">
                    →
                  </span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
