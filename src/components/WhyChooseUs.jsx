import React from "react";
import { FaAward, FaHeadset, FaLeaf, FaShieldAlt, FaTools } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import SectionHeader from "./SectionHeader";

const icons = [FaTools, FaShieldAlt, FaHeadset, FaAward, FaLeaf];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Building a Sustainable Future Together"
          subtitle="Quality installations, honest service, and support that stays with you long after your system is live."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.whyChooseUs.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={item.title} className="dashboard-card p-6 hover:border-solar-amber/40">
                <div className="w-11 h-11 rounded-lg bg-solar-amber/10 flex items-center justify-center mb-4">
                  <Icon className="text-solar-amber-dark text-lg" />
                </div>
                <h3 className="font-semibold text-solar-900 mb-2">{item.title}</h3>
                <p className="text-solar-700 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
