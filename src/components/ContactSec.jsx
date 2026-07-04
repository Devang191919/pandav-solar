import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";
import ContactLink from "./ContactLink";
import { sendContactEmail } from "../utils/emailjs";

const ContactSec = ({ showMap = true }) => {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields.");
      return;
    }
    setLoading(true);
    try {
      await sendContactEmail(form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError("Could not send. Please call or WhatsApp us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card overflow-hidden">
      <div className="grid lg:grid-cols-2 lg:items-stretch">
        {/* Left — contact actions */}
        <div className="p-4 sm:p-5 md:p-6 bg-green-50 border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-col">
          <h3 className="text-base font-bold text-solar-900">Talk to Us Directly</h3>
          <p className="text-xs text-solar-700 mt-1 mb-4">
            Fastest way to get a free solar assessment
          </p>

          <div className="space-y-2.5">
            <a href={`tel:${siteConfig.phone}`} className="btn-call w-full !py-2.5 text-sm">
              <FaPhoneAlt /> Call {siteConfig.phoneDisplay}
            </a>
            <ContactLink
              type="whatsapp"
              message="Hello Pandav Solar!"
              className="btn-whatsapp w-full !py-2.5 text-sm"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </ContactLink>
          </div>

          <div className="mt-4 pt-4 border-t border-green-100 space-y-3 flex-1">
            <ContactLink
              type="email"
              className="flex items-center gap-2.5 text-sm text-solar-700 hover:text-solar-green break-all"
            >
              <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 border border-slate-200">
                <FaEnvelope className="text-solar-green text-xs" />
              </span>
              {siteConfig.email}
            </ContactLink>
            <ContactLink
              type="address"
              className="flex items-start gap-2.5 text-sm text-solar-700 hover:text-solar-green"
            >
              <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 border border-slate-200 mt-0.5">
                <FaMapMarkerAlt className="text-solar-green text-xs" />
              </span>
              <span className="leading-snug">{siteConfig.address}</span>
            </ContactLink>
            <div className="flex items-center gap-2.5 text-sm text-solar-700">
              <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 border border-slate-200">
                <FaClock className="text-solar-green text-xs" />
              </span>
              {siteConfig.hours}
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="p-4 sm:p-5 md:p-6 flex flex-col">
          <h3 className="text-base font-bold text-solar-900">Or Send a Message</h3>
          <p className="text-xs text-solar-700 mt-1 mb-4">We reply within 24 hours.</p>

          {submitted && (
            <div className="bg-green-50 text-green-800 p-3 rounded-lg text-sm mb-3 border border-green-200">
              ✓ Message sent! We will contact you soon.
            </div>
          )}
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm mb-3">{error}</div>
          )}

          <form onSubmit={handleFormSubmit} className="space-y-3 flex-1 flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={form.name}
              onChange={handleChange}
              required
              className="input-field !py-2.5"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={handleChange}
              required
              className="input-field !py-2.5"
            />
            <textarea
              name="message"
              placeholder="How can we help you? *"
              rows={3}
              value={form.message}
              onChange={handleChange}
              required
              className="input-field resize-none !py-2.5 flex-1 min-h-[88px]"
            />
            <button type="submit" disabled={loading} className="btn-primary w-full !py-2.5 mt-auto">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {showMap && (
        <iframe
          title="Pandav Solar location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0!2d72.8091256!3d21.2251811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6b697a1a81%3A0x6781bdbb2cc4e514!2sSinganpor!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="200"
          className="border-t border-slate-200 block w-full h-[200px] sm:h-[240px] md:h-[280px]"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default ContactSec;
