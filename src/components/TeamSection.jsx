import React from "react";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

const TeamSection = () => {
  return (
    <section className="section-block bg-white border-t border-slate-200">
      <div className="container-main">
        <ScrollReveal className="text-center mb-6 sm:mb-8">
          <span className="section-badge">Our Team</span>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
            People Behind Your Solar Project
          </h2>
          <p className="mt-3 text-base md:text-lg text-solar-700 max-w-2xl mx-auto leading-relaxed">
            Local Surat experts focused on quality installation and long-term support.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {siteConfig.team.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 100} variant="up">
              <div className="card overflow-hidden text-center h-full">
                <div className="aspect-square bg-slate-100 relative">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover object-[center_18%]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-solar-green/15 to-slate-100">
                      <span className="text-3xl font-bold text-solar-green-dark">
                        {initials(member.name)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-solar-900 text-lg">{member.name}</h3>
                  <p className="text-sm text-solar-green mt-1">{member.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
