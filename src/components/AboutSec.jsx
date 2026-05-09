import React from "react";

import about from "../assets/about-man.jpeg";

const AboutSec = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 font-medium leading-relaxed">
            PANDAV SOLAR is a trusted renewable energy company dedicated to
            delivering affordable and sustainable solar energy solutions. With
            years of expertise, we specialize in turnkey solar projects,
            liasoning services, rooftop installations, and solar water pumps.
          </p>
          <p className="text-gray-700 mt-4 font-medium leading-relaxed">
            Our team is committed to empowering industries, businesses, and
            households with eco-friendly energy solutions that reduce carbon
            footprint and ensure long-term cost savings.
          </p>
        </div>
        <div>
          <img
            src={about}
            alt="About HM Solar"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To accelerate the adoption of renewable energy in India by
              providing innovative, reliable, and cost-effective solar solutions
              for residential, commercial, and industrial customers.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-green-600 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become a leading solar energy company recognized for driving
              sustainable growth, reducing dependency on fossil fuels, and
              contributing to a greener planet for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Expertise</h4>
            <p className="text-gray-600 text-sm">
              Years of hands-on experience in designing and executing solar
              projects across industries.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Quality</h4>
            <p className="text-gray-600 text-sm">
              High-quality materials and latest technology to ensure durability
              and efficiency.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2">Support</h4>
            <p className="text-gray-600 text-sm">
              End-to-end assistance from consultation to post-installation
              maintenance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSec;
