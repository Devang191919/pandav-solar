import React from "react";
import solarBg from "../assets/solar-bg.jpg";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Servicessec from "../components/ServiceSec";
import AboutSec from "../components/AboutSec";
import ContactSec from "../components/ContactSec";
import FAQ from "./FAQ";
import AnimatedHeading from "../components/AnimatedHeading";

const Home = () => {
  return (
    <div>
      <div
        className="h-screen w-full bg-cover bg-center flex items-center justify-start"
        style={{ backgroundImage: `url(${solarBg})` }}
      >
        <div className="max-w-[1920px] w-full px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="py-6 max-w-[850PX] text-start">
            <h1 className="text-blue-500 text-7xl font-bold mb-4 leading-tight space-x-2 max-lg:text-5xl max-lg:leading-snug">
              <AnimatedHeading text="WELCOME TO PANDAV SOLAR" />
            </h1>
          </div>

          <div className=" max-w-4xl text-start">
            <p className="text-black font-semibold text-2xl mb-8 leading-[1.7] max-lg:text-lg ">
              Harness the Power of the Sun with Our Cutting-Edge Solar Solutions
              Tailored for Your Home and Business Needs.
            </p>

            <div className="flex space-x-13 font-medium max-lg:flex-col max-lg:space-x-0 max-lg:space-y-8">
              <NavLink to="/about">
                <button className="group bg-blue-500 text-white px-12 text-xl py-4 rounded hover:bg-blue-600 transition flex items-center gap-2 max-lg:text-base">
                  About Us
                  <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </NavLink>

              <NavLink to="/services">
                <button className="group bg-black text-white px-12 text-xl py-4 rounded  transition flex items-center gap-2 max-lg:text-base">
                  Our Services
                  <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8  text-center">
        <h2 className="text-5xl font-bold">Our Services</h2>
        <Servicessec />
      </div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 md:pt-8  text-center">
        <h2 className="text-5xl font-bold">About </h2>
        <AboutSec />
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8  text-center">
        <FAQ />
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 md:py-8 py-4 text-center">
        <h2 className="text-5xl mb-10 font-bold">Contact </h2>
        <ContactSec />
      </div>
    </div>
  );
};

export default Home;
