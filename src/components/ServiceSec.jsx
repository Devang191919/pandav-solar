import React from "react";
import instalation from "../assets/instalation.jpg";
import rooftop from "../assets/ROOFTOP.jpg";
import heeter from "../assets/WATER-HEETER.jpg";
import { FaArrowRightLong } from "react-icons/fa6";

const sections = [
  {
    id: 1,
    title: "Liasioning work & services",
    text: (
      <div className="text-start leading-7">
        PANDAV SOLAR proposed a various kind of liasoning work with services are
        as follows:
        <ul className="mt-5 text-start list-none list-inside space-y-2">
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Making an application for new registration/connection</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Approval process with government authorities</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Documentation and compliance support</span>
          </li>
        </ul>
      </div>
    ),
    img: instalation,
  },
  {
    id: 2,
    title: "EPC work of Solar Rooftop Systems",
    text: (
      <div className="text-start leading-7">
        PANDAV SOLAR offers turnkey solutions for grid-connected solar rooftop
        systems including site survey, planning, supply and commissioning.
        <ul className="mt-5 text-start list-none list-inside space-y-2">
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Manufacturing and Industrial unit</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Commercial structures or buildings</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Domestic and residential building</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Hotel & restaurants</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Clinics & hospitals</span>
          </li>
        </ul>
      </div>
    ),
    img: rooftop,
  },
  {
    id: 3,
    title: "Solar water heater system",
    text: (
      <div className="text-start leading-7">
        We are providing a customized based solution in the province of solar
        water heater project.
        <ul className="mt-5 text-start list-none list-inside space-y-2">
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Residential areas</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Commercial and industrial areas</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Educational hostels</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Clinic and hospitals</span>
          </li>
          <li className="flex items-center gap-2">
            <FaArrowRightLong />
            <span> Hotel and restaurant etc.</span>
          </li>
        </ul>
      </div>
    ),
    img: heeter,
  },
];

export default function Servicessec() {
  return (
    <div>
      {/* Header */}
      <section className="text-center max-w-4xl mx-auto px-6 py-10">
        <p className="text-green-600 font-semibold">
          SPECIALISE IN THE ENERGY SERVICE
        </p>
        <h2 className="text-3xl font-bold mt-2">Sustainable Energy Services</h2>
      </section>

      {/* Services */}
      {sections.map((s, idx) => (
        <div
          key={s.id}
          className={`w-full ${
            idx === 1 ? "bg-gray-100" : "bg-white"
          } py-10 md:py-16`}
        >
          <div className="max-w-[1600px] mx-auto px-6">
            <div
              className={`flex flex-col md:flex-row lg:mx-20 ${
                idx === 1 ? "md:flex-row-reverse" : ""
              } lg:gap-30 gap-20 items-center`}
            >
              {/* Image */}
              <div className="rounded-xl overflow-hidden shadow  md:w-1/2">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold">{s.title}</h3>
                <div className="mt-4  text-gray-700">{s.text}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
