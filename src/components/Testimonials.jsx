import React from "react";
import { FaStar } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";

const Testimonials = () => {
  return (
    <section className="section-block bg-white">
      <div className="container-main">
        <div className="text-center mb-8">
          <span className="section-badge">Customer Reviews</span>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold text-solar-900">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {siteConfig.testimonials.map((t) => (
            <div key={t.name} className="card p-5">
              <div className="flex gap-1 text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="text-solar-700 text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-3 pt-3 border-t border-slate-100">
                <p className="font-semibold text-solar-900 text-sm">{t.name}</p>
                <p className="text-xs text-solar-700">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
