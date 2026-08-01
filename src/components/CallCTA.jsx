import { NavLink } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { siteConfig, getTelUrl } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

export default function CallCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgb(5_150_105_/_0.35),_transparent_55%)] pointer-events-none" />
      <div className="relative container-main py-10 sm:py-12 md:py-14">
        <ScrollReveal className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-solar-green-light text-sm font-bold uppercase tracking-widest">
              Have Questions?
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Talk to a Solar Expert — {siteConfig.phoneDisplay}
            </h2>
            <p className="mt-3 text-slate-300 text-base md:text-lg leading-relaxed">
              Free site visit guidance for homes, shops & factories across Surat and Gujarat.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-end shrink-0">
            <a
              href={getTelUrl()}
              className="btn-primary justify-center text-sm sm:text-base !px-7 !py-3.5"
              aria-label={`Call ${siteConfig.phoneDisplay}`}
            >
              <MdCall className="text-lg" />
              Call Now
            </a>
            <NavLink
              to="/inquiry"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold border-2 border-white/80 text-white hover:bg-white/10 transition text-sm sm:text-base"
            >
              Free Site Visit
            </NavLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
