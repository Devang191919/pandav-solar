import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { siteConfig } from "../config/siteConfig";
import BannerSec from "../components/BennerSec";
import AboutSec from "../components/AboutSec";
import TrustBar from "../components/TrustBar";
import FAQ from "./FAQ";

const About = () => {
  return (
    <div>
      <BannerSec title="About Us" subtitle="About" bgImage={siteConfig.images.service} />
      <div className="container-main py-8 sm:py-12">
        <AboutSec />
      </div>
      <TrustBar />
      <FAQ embedded />
      <div className="text-center pb-14">
        <NavLink to="/inquiry" className="btn-primary">
          Request Free Site Visit <FaArrowRightLong className="text-xs" />
        </NavLink>
      </div>
    </div>
  );
};

export default About;
