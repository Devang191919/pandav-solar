import React from "react";
import { NavLink } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import BannerSec from "../components/BennerSec";
import InquiryForm from "../components/InquiryForm";
import ContactLink from "../components/ContactLink";

const Inquiry = () => {
  return (
    <div>
      <BannerSec title="Get a Free Quote" subtitle="Inquiry" bgImage={siteConfig.images.service} />

      <div className="container-main section-block">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <aside className="space-y-4 order-1 lg:order-2">
            <div className="card p-4 sm:p-5 bg-green-50">
              <h3 className="font-bold text-solar-900 mb-3">Prefer to Talk?</h3>
              <div className="space-y-2">
                <ContactLink type="phone" className="btn-call w-full text-sm">
                  <FaPhoneAlt /> {siteConfig.phoneDisplay}
                </ContactLink>
                <ContactLink
                  type="whatsapp"
                  message="Hi, I want a solar quote."
                  className="btn-whatsapp w-full text-sm"
                >
                  <FaWhatsapp /> WhatsApp Us
                </ContactLink>
                <ContactLink
                  type="email"
                  className="flex items-center gap-2 text-sm text-solar-700 break-all"
                >
                  <FaEnvelope className="text-solar-green shrink-0" />
                  {siteConfig.email}
                </ContactLink>
              </div>
            </div>
            <div className="card p-4 sm:p-5 text-sm text-solar-700">
              <p className="font-semibold text-solar-900">Office Hours</p>
              <p className="mt-1">{siteConfig.hours}</p>
              <NavLink to="/contact" className="text-solar-green font-medium mt-3 inline-block hover:underline">
                View on map →
              </NavLink>
            </div>
          </aside>

          <div className="lg:col-span-2 order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl font-bold text-solar-900">Solar Inquiry Form</h2>
            <p className="text-solar-700 text-sm mt-2 mb-4 sm:mb-6">
              Fill this form — we receive it on email & WhatsApp and respond within 24 hours.
            </p>
            <div className="card p-4 sm:p-6 md:p-8">
              <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquiry;
