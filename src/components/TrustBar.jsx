import React, { useEffect, useRef, useState } from "react";
import { FaAward, FaSolarPanel, FaUsers, FaHardHat } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";

const useCountUp = (end, duration = 1800, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let frame;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(step);
      else setCount(end);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);

  return count;
};

const statItems = [
  { icon: FaHardHat, key: "customers", suffix: "+", label: "Projects Completed" },
  { icon: FaAward, key: "years", suffix: "+", label: "Years Experience" },
  { icon: FaSolarPanel, key: "mw", suffix: "+ MW", label: "Solar Installed" },
  { icon: FaUsers, key: "workforce", suffix: "+", label: "Expert Team" },
];

const StatItem = ({ item, animate }) => {
  const value = siteConfig.stats[item.key];
  const count = useCountUp(value, 1800, animate);
  const ItemIcon = item.icon;

  return (
    <div className="flex flex-col items-center text-center px-2 sm:px-3 md:px-6 py-2">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-3 sm:mb-4">
        <ItemIcon className="text-solar-green-light text-xl sm:text-2xl" />
      </div>
      <p className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tabular-nums leading-none tracking-tight">
        {count}
        <span className="text-solar-green-light">{item.suffix}</span>
      </p>
      <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm font-medium text-slate-300">
        {item.label}
      </p>
    </div>
  );
};

const TrustBar = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative z-10 -mt-6 sm:-mt-8 md:-mt-10 pb-2">
      <div className="container-main">
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-700/80 shadow-[0_20px_50px_rgb(0_0_0_/_0.25)] px-3 py-6 sm:px-6 sm:py-9 md:px-8 md:py-11 reveal reveal--up ${
            animate ? "reveal--in" : ""
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-solar-green/20 via-transparent to-emerald-500/10 pointer-events-none" />
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-8 md:gap-y-0 md:divide-x md:divide-white/10">
            {statItems.map((item) => (
              <StatItem key={item.label} item={item} animate={animate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
