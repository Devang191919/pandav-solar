import React from "react";
import { siteConfig } from "../config/siteConfig";

const HowItWorks = () => {
  return (
    <section className="section-block bg-slate-50">
      <div className="container-main">
        <div className="text-center mb-10">
          <span className="section-badge">Simple Process</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-solar-900">
            How It Works — 4 Easy Steps
          </h2>
          <p className="mt-2 text-solar-700 max-w-lg mx-auto">
            From first call to saving on your bill — we handle everything for you.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.processSteps.map((item, i) => (
            <div key={item.step} className="card p-5 relative">
              <span className="text-3xl font-bold text-solar-green/20">{item.step}</span>
              <h3 className="font-bold text-solar-900 mt-2">{item.title}</h3>
              <p className="text-sm text-solar-700 mt-2 leading-relaxed">{item.desc}</p>
              {i < siteConfig.processSteps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 text-solar-green text-xl">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
