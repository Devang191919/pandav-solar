import React from "react";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

const ProjectGallery = ({ showHeader = true, limit }) => {
  const projects = limit ? siteConfig.projects.slice(0, limit) : siteConfig.projects;

  return (
    <section className="section-block bg-white">
      <div className="container-main">
        {showHeader && (
          <ScrollReveal className="text-center mb-6 sm:mb-10">
            <span className="section-badge">Our Work</span>
            <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
              Recent Solar Installations
            </h2>
            <p className="mt-3 text-solar-700 text-base md:text-lg">
              Successfully completed projects across Surat & Gujarat
            </p>
          </ScrollReveal>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {projects.map((project, index) => (
            <ScrollReveal key={`${project.location}-${index}`} delay={index * 80} variant="scale">
              <article className="card overflow-hidden group h-full">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {project.capacity && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-solar-green text-white text-xs font-semibold shadow-sm">
                      {project.capacity}
                    </span>
                  )}
                </div>
                <div className="p-3.5 sm:p-4">
                  <h3 className="font-semibold text-solar-900 text-sm sm:text-base">{project.title}</h3>
                  {project.type && (
                    <p className="text-xs text-solar-green font-medium mt-1">{project.type}</p>
                  )}
                  <p className="text-xs text-solar-700 mt-1 leading-snug">📍 {project.location}</p>
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
