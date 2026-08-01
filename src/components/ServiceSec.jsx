import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { siteConfig } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

export default function ServiceSec() {
  return (
    <div className="space-y-10">
      {siteConfig.services.map((s, idx) => (
        <ScrollReveal key={s.title} delay={idx * 60} variant={idx % 2 === 0 ? "left" : "right"}>
          <div className="card overflow-hidden grid md:grid-cols-2 md:items-stretch">
            <div
              className={`relative overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[280px] ${
                idx % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <img
                src={s.image}
                alt={s.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="p-5 sm:p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-solar-900">{s.title}</h3>
              <p className="mt-2 text-solar-700 text-sm sm:text-base leading-relaxed">{s.desc}</p>
              {s.bullets?.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm sm:text-base text-solar-700">
                      <FaArrowRightLong className="text-solar-green mt-1 shrink-0 text-xs" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
