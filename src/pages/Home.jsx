import React from "react";
import { NavLink } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import TrustBar from "../components/TrustBar";
import ServiceCards from "../components/ServiceCards";
import WhyChooseUs from "../components/WhyChooseUs";
import HowItWorks from "../components/HowItWorks";
import AboutSec from "../components/AboutSec";
import ProjectGallery from "../components/ProjectGallery";
import CallCTA from "../components/CallCTA";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import ContactSec from "../components/ContactSec";
import FAQ from "./FAQ";
import ScrollReveal from "../components/ScrollReveal";
import PageMeta from "../components/PageMeta";

const Home = () => {
  return (
    <div>
      <PageMeta pageKey="home" />
      <HeroSection />
      <TrustBar />

      <section className="section-block bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-6 sm:mb-8">
            <span className="section-badge">Our Services</span>
            <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
              Solar Solutions for Every Need
            </h2>
            <p className="mt-3 text-solar-700 text-base md:text-lg xl:text-xl max-w-2xl mx-auto leading-relaxed">
              Home, shop, factory or hotel — we install and maintain it all.
            </p>
          </ScrollReveal>
          <ServiceCards />
          <ScrollReveal className="text-center mt-6" delay={200}>
            <NavLink to="/services" className="btn-secondary text-sm">
              View All Services →
            </NavLink>
          </ScrollReveal>
        </div>
      </section>

      <WhyChooseUs />
      <HowItWorks />

      <section className="section-block bg-slate-50">
        <div className="container-main">
          <ScrollReveal className="text-center mb-6 sm:mb-8">
            <span className="section-badge">About Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
              Your Local Solar Expert in Surat
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <AboutSec showWhyChooseUs={false} />
          </ScrollReveal>
          <ScrollReveal className="text-center mt-6" delay={180}>
            <NavLink to="/about" className="text-solar-green font-semibold text-sm hover:underline">
              Read more about us →
            </NavLink>
          </ScrollReveal>
        </div>
      </section>

      <div>
        <ProjectGallery limit={4} />
        <ScrollReveal className="text-center pb-8 sm:pb-10 -mt-2">
          <NavLink to="/projects" className="btn-secondary text-sm">
            View All Projects →
          </NavLink>
        </ScrollReveal>
      </div>

      <CallCTA />
      <Testimonials />

      <section className="section-block bg-slate-50 border-t border-slate-200">
        <div className="container-main">
          <ScrollReveal>
            <FAQ embedded />
          </ScrollReveal>
        </div>
      </section>

      <CTABanner />

      <section className="section-block bg-white scroll-mt-20" id="contact">
        <div className="container-main">
          <ScrollReveal className="text-center mb-6">
            <span className="section-badge">Contact</span>
            <h2 className="mt-3 text-3xl md:text-4xl xl:text-5xl font-bold text-solar-900 tracking-tight">
              Get Your Free Solar Assessment
            </h2>
            <p className="mt-3 text-solar-700 text-base md:text-lg xl:text-xl max-w-2xl mx-auto leading-relaxed">
              Call, WhatsApp, or send a message — we reply within 24 hours.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <ContactSec />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
