import { NavLink } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { siteConfig, getTelUrl } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

/** Mid-page call strip (Meghji-style) — Call + Inquiry only */
export default function CallCTA() {
  return (
    <section className="bg-slate-900 overflow-hidden">
      <div className="container-main py-8 sm:py-10 md:py-12">
        <ScrollReveal className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 text-center md:text-left">
          <div>
            <p className="text-solar-green-light text-sm font-semibold uppercase tracking-wide">
              Have Questions?
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Call Us {siteConfig.phoneDisplay}
            </h2>
            <p className="mt-2 text-slate-300 text-base md:text-lg max-w-xl leading-relaxed mx-auto md:mx-0">
              Our solar experts are ready to guide you with a free site visit and clear answers anytime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 sm:justify-center md:justify-end shrink-0">
            <a
              href={getTelUrl()}
              className="btn-primary justify-center text-sm sm:text-base"
              aria-label={`Call ${siteConfig.phoneDisplay}`}
            >
              <MdCall className="text-lg" />
              Call Now
            </a>
            <NavLink to="/inquiry" className="btn-light justify-center text-sm sm:text-base">
              Free Site Visit
            </NavLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
