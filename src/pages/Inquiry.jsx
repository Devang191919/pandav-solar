import React, { useState } from "react";

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, address, pincode, message } = formData;

    const whatsappMessage = `New Inquiry Received 👇

🔹 Name: ${name}
📧 Email: ${email}
📞 Phone: ${phone}
🏠 Address: ${address}
📮 PinCode: ${pincode}
📝 Message: ${message}`;

    // Replace YOUR_NUMBER with your actual WhatsApp number (with country code, no +)
    const whatsappURL = `https://wa.me/91YOUR_NUMBER?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      pincode: "",
      message: "",
    });
  };

  return (
    <div className="flex justify-center items-center mt-5 bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full bg-white p-8 rounded shadow">
        <h2 className="text-3xl font-bold text-blue-600 mb-6">
          Request a PANDAV SOLAR Inquiry
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="+91 12345 67890"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Installation Address
            </label>
            <input
              type="text"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="123 Solar Street, India"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">PinCode</label>
            <input
              type="number"
              name="pincode"
              required
              value={formData.pincode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="146525"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
              placeholder="Tell us more about your solar needs..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default Inquiry;
