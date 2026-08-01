import React from "react";
import { FaAward, FaHeadset, FaLeaf, FaShieldAlt, FaTools, FaMapMarkerAlt } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const icons = [FaTools, FaShieldAlt, FaHeadset, FaAward, FaLeaf, FaMapMarkerAlt];

const WhyChooseUs = () => {
  return (
    <section className="section-block bg-white border-y border-slate-200">
      <div className="container-main">
        <ScrollReveal className="text-center mb-6 sm:mb-8">
          <span className="section-badge">Why Choose Us</span>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight text-solar-900">
            Building a Sustainable Future Together
          </h2>
          <p className="mt-3 text-base md:text-lg xl:text-xl text-solar-700 max-w-2xl mx-auto leading-relaxed">
            Quality installations, honest service, and support that stays with you long after your system is live.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {siteConfig.whyChooseUs.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <ScrollReveal key={item.title} delay={index * 80} variant="up">
                <div className="card p-5 sm:p-6 h-full">
                  <div className="w-11 h-11 rounded-xl bg-solar-green/10 flex items-center justify-center mb-4">
                    <Icon className="text-solar-green text-lg" />
                  </div>
                  <h3 className="font-semibold text-solar-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-solar-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
