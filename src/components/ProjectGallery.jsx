import React from "react";
import { siteConfig } from "../config/siteConfig";

const ProjectGallery = ({ showHeader = true, limit }) => {
  const projects = limit ? siteConfig.projects.slice(0, limit) : siteConfig.projects;

  return (
    <section className="section-block bg-white">
      <div className="container-main">
        {showHeader && (
          <div className="text-center mb-10">
            <span className="section-badge">Our Work</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-solar-900">
              Recent Solar Installations
            </h2>
            <p className="mt-2 text-solar-700 text-sm">
              Successfully completed projects across Surat & Gujarat
            </p>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <article key={`${project.location}-${index}`} className="card overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-solar-900 text-sm">{project.title}</h3>
                <p className="text-xs text-solar-700 mt-1">📍 {project.location}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
