import React from "react";
import { NavLink } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import ServiceCards from "../components/ServiceCards";
import HowItWorks from "../components/HowItWorks";
import AboutSec from "../components/AboutSec";
import ProjectGallery from "../components/ProjectGallery";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import ContactSec from "../components/ContactSec";
import FAQ from "./FAQ";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrustBar overlap />

      <section className="section-block bg-white">
        <div className="container-main">
          <div className="text-center mb-8">
            <span className="section-badge">Our Services</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-solar-900">
              Solar Solutions for Every Need
            </h2>
            <p className="mt-2 text-solar-700 text-sm md:text-base">
              Home, shop, factory or hotel — we install and maintain it all.
            </p>
          </div>
          <ServiceCards />
          <div className="text-center mt-6">
            <NavLink to="/services" className="btn-secondary text-sm">
              View All Services →
            </NavLink>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="section-block bg-slate-50">
        <div className="container-main">
          <div className="text-center mb-8">
            <span className="section-badge">About Us</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-solar-900">
              Your Local Solar Expert in Surat
            </h2>
          </div>
          <AboutSec showWhyChooseUs={false} />
          <div className="text-center mt-6">
            <NavLink to="/about" className="text-solar-green font-semibold text-sm hover:underline">
              Read more about us →
            </NavLink>
          </div>
        </div>
      </section>

      <ProjectGallery limit={4} />
      <Testimonials />

      <section className="section-block bg-slate-50 border-t border-slate-200">
        <FAQ embedded />
      </section>

      <CTABanner />

      <section className="section-block bg-white" id="contact">
        <div className="container-main">
          <div className="text-center mb-6">
            <span className="section-badge">Contact</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-bold text-solar-900">
              Get Your Free Solar Assessment
            </h2>
            <p className="mt-2 text-solar-700 text-sm md:text-base">
              Call, WhatsApp, or send a message — we reply within 24 hours.
            </p>
          </div>
          <ContactSec />
        </div>
      </section>
    </div>
  );
};

export default Home;
