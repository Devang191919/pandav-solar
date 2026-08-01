import React from "react";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const ProjectGallery = ({ showHeader = true, limit }) => {
  const projects = limit ? siteConfig.projects.slice(0, limit) : siteConfig.projects;

  return (
    <section className="section-block bg-slate-50 border-y border-slate-200/80">
      <div className="container-main">
        {showHeader && (
          <ScrollReveal className="text-center mb-8 sm:mb-10">
            <span className="section-badge">Our Work</span>
            <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
              Recent Solar Installations
            </h2>
            <p className="mt-3 text-solar-700 text-base md:text-lg max-w-xl mx-auto">
              Successfully completed projects across Surat & Gujarat
            </p>
          </ScrollReveal>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={`${project.location}-${index}`} delay={index * 80} variant="scale">
              <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_20px_rgb(0_0_0_/_0.04)] hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgb(5_150_105_/_0.12)] hover:border-solar-green/30 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-70" />
                  {project.capacity && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-solar-green text-white text-xs font-bold shadow-md">
                      {project.capacity}
                    </span>
                  )}
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-bold text-solar-900 text-sm sm:text-base">{project.title}</h3>
                  {project.type && (
                    <p className="text-xs font-semibold text-solar-green mt-1.5">{project.type}</p>
                  )}
                  <p className="text-xs sm:text-sm text-solar-700 mt-1 leading-snug">
                    📍 {project.location}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
