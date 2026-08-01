import { NavLink } from "react-router-dom";
import { MdCall } from "react-icons/md";
import { siteConfig, getTelUrl } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-r from-solar-green-dark via-solar-green to-emerald-600 opacity-95" />
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative container-main py-10 sm:py-12 md:py-16 text-center text-white">
        <ScrollReveal variant="scale">
          <p className="text-sm font-semibold uppercase tracking-widest text-green-100/90 mb-3">
            Start saving this month
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight max-w-3xl mx-auto">
            Ready to Go Solar? Get a Free Quote Today
          </h2>
          <p className="mt-4 text-base md:text-lg text-green-50/95 max-w-xl mx-auto leading-relaxed">
            Free site visit in Surat & Gujarat — call now or send an inquiry. We reply within 24 hours.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:gap-4 sm:justify-center sm:items-center">
            <a
              href={getTelUrl()}
              className="inline-flex items-center justify-center gap-2 min-h-[3rem] px-5 sm:px-7 py-3 rounded-xl font-semibold bg-white text-solar-green-dark hover:bg-green-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-md text-sm sm:text-base"
            >
              <MdCall className="text-lg" />
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">Call {siteConfig.phoneDisplay}</span>
            </a>
            <NavLink
              to="/inquiry"
              className="inline-flex items-center justify-center min-h-[3rem] px-5 sm:px-7 py-3 rounded-xl font-semibold border-2 border-white text-white hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
            >
              <span className="sm:hidden">Free Quote</span>
              <span className="hidden sm:inline">Get Free Site Visit</span>
            </NavLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
