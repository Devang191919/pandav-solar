import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { siteConfig } from "../config/siteConfig";

const sections = [
  {
    id: 1,
    title: "Liaisoning Work & Services",
    desc: "Complete government liaisoning and approval support for new solar connections.",
    bullets: [
      "New registration & connection applications",
      "Government authority approvals",
      "Documentation & compliance support",
    ],
    img: siteConfig.images.instalation,
  },
  {
    id: 2,
    title: "EPC Solar Rooftop Systems",
    desc: "Turnkey grid-connected rooftop solutions from survey to commissioning.",
    bullets: [
      "Industrial & manufacturing units",
      "Commercial buildings",
      "Residential homes",
      "Hotels, clinics & hospitals",
    ],
    img: siteConfig.images.rooftop,
  },
  {
    id: 3,
    title: "Solar Water Heater System",
    desc: "Customized solar water heating for every scale of property.",
    bullets: [
      "Residential & commercial areas",
      "Educational hostels",
      "Hospitals & clinics",
      "Hotels & restaurants",
    ],
    img: siteConfig.images.waterHeater,
  },
];

export default function ServiceSec() {
  return (
    <div className="space-y-10">
      {sections.map((s, idx) => (
        <div key={s.id} className="card overflow-hidden grid md:grid-cols-2">
          <div className={`overflow-hidden ${idx % 2 === 1 ? "md:order-2" : ""}`}>
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-56 md:h-full min-h-[220px] object-cover"
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-solar-900">{s.title}</h3>
            <p className="mt-2 text-solar-700 text-sm leading-relaxed">{s.desc}</p>
            <ul className="mt-4 space-y-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-solar-700">
                  <FaArrowRightLong className="text-solar-green mt-1 shrink-0 text-xs" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
