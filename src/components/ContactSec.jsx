import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import newLogo from "../assets/new-logo.jpg";
import emailjs from "emailjs-com";

const ContactSec = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Replace these with your EmailJS keys
  const SERVICE_ID = "service_h4y1k8m";
  const TEMPLATE_ID = "template_c5ctbt6";
  const USER_ID = "saZNyF6d7aBQXU0TH";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All fields are required!");
      return;
    }

    // Send email using EmailJS
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, USER_ID)
      .then((response) => {
        // Add email to localStorage

        setSubmitted(true);
        setFadeOut(false);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setFadeOut(true), 3000);
        setTimeout(() => setSubmitted(false), 3500);
      })
      .catch((err) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS error:", err);
      });
  };

  return (
    <div>
      <div className="bg-cover bg-center flex items-center justify-center px-6 py-20 bg-gray-100">
        <div className="max-w-6xl w-full bg-white rounded-lg shadow-lg grid md:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="bg-[#111827] text-white p-10 rounded-l-lg">
            <img src={newLogo} alt="Logo" className="w-40 mb-5" />
            <p className="text-gray-300 mb-5">
              We'd love to hear from you! Whether you have questions about our
              services, need support, or just want to say hello, feel free to
              reach out.
            </p>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex items-center gap-3">
                <div className="bg-white text-black p-3 rounded-full">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div className="text-start">
                  <h4 className="text-lg font-semibold text-cyan-400">
                    Address
                  </h4>
                  <p className="text-sm text-gray-300">
                    123 Solar Street, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="bg-white text-black p-3 rounded-full">
                  <FaPhoneAlt size={16} />
                </div>
                <div className="text-start">
                  <h4 className="text-lg font-semibold text-cyan-400">Phone</h4>
                  <p className="text-sm text-gray-300">7069216551</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="bg-white text-black p-3 rounded-full">
                  <FaEnvelope size={16} />
                </div>
                <div className="text-start">
                  <h4 className="text-lg font-semibold text-cyan-400">Email</h4>
                  <p className="text-sm text-gray-300">
                    tusharpandav.mtfi@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Send Message
            </h3>

            {submitted && (
              <div
                className={`bg-green-100 text-green-800 p-3 rounded text-center mb-4 transition-opacity duration-1000 ${
                  fadeOut ? "opacity-0" : "opacity-100"
                }`}
              >
                Thank you for reaching out! We will get back to you soon.
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 focus:outline-none py-2"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 focus:outline-none py-2"
              />

              <textarea
                name="message"
                placeholder="Type your Message..."
                rows="4"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border-b border-gray-400 focus:outline-none py-2"
              />

              <button
                type="submit"
                className="w-full bg-cyan-500 text-white py-2 font-semibold rounded-md hover:bg-cyan-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSec;
