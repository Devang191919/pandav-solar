import React from "react";
import { FaCheck } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import OwnerImage from "../assets/Owner.jpeg";

const highlights = [
  "Free site visit & roof assessment",
  "Subsidy paperwork & net-meter support",
  "Residential, commercial & industrial projects",
  "Quality panels with long-term service",
];

const AboutSec = ({ showWhyChooseUs = true }) => {
  const { stats } = siteConfig;

  return (
    <div>
      <div className="card overflow-hidden">
        <div className="grid md:grid-cols-2 md:items-stretch">
          <div className="order-2 md:order-1 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-solar-900 tracking-tight">
              Who We Are
            </h2>

            <p className="mt-4 sm:mt-5 text-solar-700 text-base sm:text-lg leading-relaxed">
              {siteConfig.companyName} helps homes and businesses in Surat switch to solar
              with affordable, reliable installations. We handle everything — site survey,
              design, installation, net-meter & subsidy support.
            </p>
            <p className="mt-3 sm:mt-4 text-solar-700 text-base sm:text-lg leading-relaxed">
              Based in Katargam, we serve customers across Surat and Gujarat with honest
              guidance and on-time project delivery. No confusing jargon — just clear
              answers and the right system for your roof and budget.
            </p>
            <p className="mt-3 sm:mt-4 text-solar-700 text-base sm:text-lg leading-relaxed">
              Our goal is simple: reduce your electricity bill and give you clean energy
              that lasts for 25+ years.
            </p>

            <ul className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 sm:gap-3 text-solar-800 text-base sm:text-lg"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-solar-green/15 text-solar-green-dark">
                    <FaCheck className="text-[10px]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3 border-t border-slate-200 pt-5 sm:pt-6">
              {[
                { value: `${stats.years}+`, label: "Years" },
                { value: `${stats.customers}+`, label: "Clients" },
                { value: `${stats.mw}+ MW`, label: "Installed" },
              ].map((item) => (
                <div key={item.label} className="text-center sm:text-left">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-solar-green-dark">
                    {item.value}
                  </p>
                  <p className="text-[11px] sm:text-xs md:text-sm text-solar-700 mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Founder image — square on mobile (no face crop), fill column on desktop */}
          <div className="order-1 md:order-2 relative bg-slate-100 aspect-[4/3] sm:aspect-square md:aspect-auto md:min-h-[420px] lg:min-h-0">
            <img
              src={OwnerImage}
              alt={`${siteConfig.ownerName}, ${siteConfig.ownerTitle}`}
              className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 via-slate-900/45 to-transparent px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6">
              <p className="text-base sm:text-lg md:text-xl font-bold text-white">
                {siteConfig.ownerName}
              </p>
              <p className="text-sm text-slate-200 mt-0.5">{siteConfig.ownerTitle}</p>
            </div>
          </div>
        </div>
      </div>

      {showWhyChooseUs && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {siteConfig.whyChooseUs.slice(0, 4).map((item) => (
            <div key={item.title} className="card p-4">
              <h4 className="font-semibold text-solar-900 text-sm">{item.title}</h4>
              <p className="text-solar-700 text-xs mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutSec;
