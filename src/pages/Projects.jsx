import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { siteConfig } from "../config/siteConfig";
import BannerSec from "../components/BennerSec";
import ProjectGallery from "../components/ProjectGallery";
import CTABanner from "../components/CTABanner";
import PageMeta from "../components/PageMeta";

const Projects = () => {
  return (
    <div>
      <PageMeta pageKey="projects" />
      <BannerSec
        title="Our Projects"
        subtitle="Projects"
        bgImage={siteConfig.images.instalation}
      />
      <div className="container-main pt-8 sm:pt-10">
        <p className="text-center text-solar-700 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-2">
          Residential, commercial, and industrial solar installations delivered across Surat and Gujarat.
        </p>
      </div>
      <ProjectGallery showHeader={false} />
      <div className="text-center pb-10">
        <NavLink to="/inquiry" className="btn-primary">
          Get a Free Quote <FaArrowRightLong className="text-xs" />
        </NavLink>
      </div>
      <CTABanner />
    </div>
  );
};

export default Projects;
