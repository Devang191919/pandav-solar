import React from "react";
import { siteConfig } from "../config/siteConfig";
import BannerSec from "../components/BennerSec";
import ServiceSec from "../components/ServiceSec";
import CTABanner from "../components/CTABanner";

export default function Services() {
  return (
    <div>
      <BannerSec title="Our Services" subtitle="Services" bgImage={siteConfig.images.service} />
      <div className="container-main section-block">
        <p className="text-center text-solar-700 mb-10 max-w-2xl mx-auto">
          Complete solar solutions — from government approvals to installation and
          maintenance. We serve homes, shops, factories, hotels & hospitals.
        </p>
        <ServiceSec />
      </div>
      <CTABanner />
    </div>
  );
}
