import { NavLink } from "react-router-dom";
import { getTelUrl } from "../config/siteConfig";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-solar-green to-solar-green-dark">
      <div className="container-main py-10 md:py-12 text-center text-white">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-snug">
          Ready to Go Solar? Get a Free Quote Today
        </h2>
        <p className="mt-2 text-sm md:text-base text-green-100 max-w-lg mx-auto">
          Call us now or fill the inquiry form — we respond within 24 hours.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href={getTelUrl()}
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto min-w-[160px] px-6 py-3 rounded-xl font-semibold bg-white text-solar-green-dark hover:bg-green-50 transition shadow-sm"
          >
            📞 Call Now
          </a>
          <NavLink
            to="/inquiry"
            className="btn-light w-full sm:w-auto min-w-[160px]"
          >
            Fill Inquiry Form
          </NavLink>
        </div>
      </div>
    </section>
  );
}
