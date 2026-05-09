import React from "react";
import service from "../assets/service.jpg";

import Bennersec from "../components/BennerSec";
import AboutSec from "../components/AboutSec";
import FAQ from "./FAQ";
const About = () => {
  return (
    <>
      <div>
        <Bennersec title="About Us" subtitle="About" bgImage={service} />
        <AboutSec />
      </div>
      <FAQ />
    </>
  );
};

export default About;
