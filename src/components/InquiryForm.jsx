import React, { useState } from "react";
import { siteConfig } from "../config/siteConfig";
import { sendInquiryEmail, formatEmailJsError, isEmailJsConfigured, getEmailJsConfigError } from "../utils/emailjs";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
  pincode: "",
  propertyType: "",
  message: "",
};

const InquiryForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  React.useEffect(() => {
    if (!isEmailJsConfigured()) {
      setStatus({
        type: "error",
        message: getEmailJsConfigError(),
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address";
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!phoneDigits) {
      nextErrors.phone = "Phone number is required";
    } else if (phoneDigits.length !== 10) {
      nextErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.address.trim()) nextErrors.address = "Address is required";

    if (!formData.pincode.trim()) {
      nextErrors.pincode = "Pin code is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      nextErrors.pincode = "Enter a valid 6-digit pin code";
    }

    if (!formData.propertyType) {
      nextErrors.propertyType = "Please select a property type";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validate()) return;

    setLoading(true);

    try {
      await sendInquiryEmail(formData);

      setFormData(initialForm);
      setStatus({
        type: "success",
        message:
          "Thank you! Your inquiry has been sent to our team. We will contact you within 24 hours.",
      });
    } catch (err) {
      console.error("Inquiry submission failed:", err);
      setStatus({
        type: "error",
        message: formatEmailJsError(err),
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) =>
    `input-field ${errors[field] ? "!border-red-400 !ring-red-100" : ""}`;

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {status && (
        <div
          className={`p-4 rounded-lg text-sm ${
            status.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {status.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-solar-800 mb-1.5 text-sm font-medium">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputClass("name")}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-solar-800 mb-1.5 text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass("email")}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-solar-800 mb-1.5 text-sm font-medium">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass("phone")}
            placeholder="10-digit mobile number"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="address" className="block text-solar-800 mb-1.5 text-sm font-medium">
          Installation Address <span className="text-red-500">*</span>
        </label>
        <input
          id="address"
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={inputClass("address")}
          placeholder="Full installation address"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mt-1">{errors.address}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="pincode" className="block text-solar-800 mb-1.5 text-sm font-medium">
            Pin Code <span className="text-red-500">*</span>
          </label>
          <input
            id="pincode"
            type="text"
            name="pincode"
            inputMode="numeric"
            maxLength={6}
            value={formData.pincode}
            onChange={handleChange}
            className={inputClass("pincode")}
            placeholder="395004"
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="propertyType"
            className="block text-solar-800 mb-1.5 text-sm font-medium"
          >
            Property Type <span className="text-red-500">*</span>
          </label>
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className={inputClass("propertyType")}
          >
            <option value="">Select property type</option>
            {siteConfig.propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.propertyType && (
            <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-solar-800 mb-1.5 text-sm font-medium">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={inputClass("message")}
          placeholder="Tell us more about your solar needs..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Inquiry"
        )}
      </button>
    </form>
  );
};

export default InquiryForm;
