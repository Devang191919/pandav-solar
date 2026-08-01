import { NavLink } from "react-router-dom";
import { getTelUrl } from "../config/siteConfig";
import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-solar-green to-solar-green-dark overflow-hidden">
      <div className="container-main py-8 sm:py-10 md:py-12 text-center text-white">
        <ScrollReveal variant="scale">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-snug tracking-tight">
            Ready to Go Solar? Get a Free Quote Today
          </h2>
          <p className="mt-3 text-base md:text-lg text-green-100 max-w-lg mx-auto leading-relaxed">
            Call us now or fill the inquiry form — we respond within 24 hours.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:flex sm:flex-row sm:gap-3 sm:justify-center sm:items-center">
            <a
              href={getTelUrl()}
              className="inline-flex items-center justify-center gap-2 min-h-[2.75rem] px-4 sm:px-6 py-3 rounded-xl font-semibold bg-white text-solar-green-dark hover:bg-green-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-sm text-sm sm:text-base sm:min-w-[160px]"
            >
              <span className="sm:hidden">Call</span>
              <span className="hidden sm:inline">📞 Call Now</span>
            </a>
            <NavLink
              to="/inquiry"
              className="btn-light justify-center text-sm sm:text-base sm:min-w-[160px]"
            >
              <span className="sm:hidden">Inquiry</span>
              <span className="hidden sm:inline">Fill Inquiry Form</span>
            </NavLink>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
