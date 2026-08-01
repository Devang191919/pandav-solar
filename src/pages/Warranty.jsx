import React from "react";
import { NavLink } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { siteConfig } from "../config/siteConfig";
import BannerSec from "../components/BennerSec";
import CTABanner from "../components/CTABanner";
import PageMeta from "../components/PageMeta";
import ScrollReveal from "../components/ScrollReveal";

const Warranty = () => {
  return (
    <div>
      <PageMeta pageKey="warranty" />
      <BannerSec title="Warranty & Support" subtitle="Warranty" bgImage={siteConfig.images.service} />
      <section className="section-block bg-white">
        <div className="container-main max-w-3xl">
          <ScrollReveal className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-solar-900 tracking-tight">
              Protection You Can Count On
            </h2>
            <p className="mt-3 text-solar-700 text-base md:text-lg leading-relaxed">
              Pandav Solar installs quality systems and stands behind the work with clear warranty guidance and local Surat support.
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {siteConfig.warrantyHighlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="card p-5 sm:p-6 flex gap-3 sm:gap-4">
                  <FaCheckCircle className="text-solar-green text-xl shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-solar-900 text-lg">{item.title}</h3>
                    <p className="mt-1.5 text-solar-700 text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <NavLink to="/inquiry" className="btn-primary">
              Ask About Warranty <FaArrowRightLong className="text-xs" />
            </NavLink>
          </ScrollReveal>
        </div>
      </section>
      <CTABanner />
    </div>
  );
};

export default Warranty;
