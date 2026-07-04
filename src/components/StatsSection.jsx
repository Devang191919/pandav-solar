import React, { useEffect, useRef, useState } from "react";
import { FaUsers, FaSolarPanel, FaAward, FaBolt } from "react-icons/fa";
import { siteConfig } from "../config/siteConfig";

const useCountUp = (end, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    let frame;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * end));
      if (p < 1) frame = requestAnimationFrame(step);
      else setCount(end);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);

  return count;
};

const statMeta = [
  { key: "years", suffix: "+", label: "Years Experience", icon: FaAward },
  { key: "workforce", suffix: "+", label: "Expert Team", icon: FaUsers },
  { key: "customers", suffix: "+", label: "Happy Clients", icon: FaBolt },
  { key: "mw", suffix: "+", label: "MW Installed", icon: FaSolarPanel },
];

const StatCard = ({ value, suffix, label, icon, animate }) => {
  const count = useCountUp(value, 2000, animate);
  const StatIcon = icon;

  return (
    <div className="dashboard-card p-6 text-center group hover:border-solar-amber/40">
      <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-solar-amber/10 flex items-center justify-center group-hover:bg-solar-amber/20 transition">
        <StatIcon className="text-solar-amber-dark text-xl" />
      </div>
      <p className="text-3xl md:text-4xl font-bold text-solar-900">
        {count}
        <span className="text-solar-amber-dark">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-solar-700 font-medium">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const stats = siteConfig.stats;

  return (
    <section ref={ref} className="py-14 md:py-16 bg-solar-cream border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {statMeta.map(({ key, suffix, label, icon }) => (
            <StatCard
              key={key}
              value={stats[key]}
              suffix={suffix}
              label={label}
              icon={icon}
              animate={animate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
