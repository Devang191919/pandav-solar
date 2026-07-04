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
  {
    icon: FaHardHat,
    key: "customers",
    suffix: "+",
    label: "Projects Done",
  },
  {
    icon: FaAward,
    key: "years",
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: FaSolarPanel,
    key: "mw",
    suffix: "+ MW",
    label: "Solar Installed",
  },
  {
    icon: FaUsers,
    key: "workforce",
    suffix: "+",
    label: "Expert Team",
  },
];

const StatItem = ({ item, animate }) => {
  const value = siteConfig.stats[item.key];
  const count = useCountUp(value, 1800, animate);
  const ItemIcon = item.icon;

  return (
    <div className="flex flex-col items-center text-center px-2 md:px-6">
      <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-3">
        <ItemIcon className="text-solar-green text-xl" />
      </div>
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-solar-900 tabular-nums leading-none">
        {count}
        <span className="text-solar-green">{item.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-medium text-solar-700">{item.label}</p>
    </div>
  );
};

const TrustBar = ({ overlap = false }) => {
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
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={
        overlap
          ? "relative z-10 -mt-6 sm:-mt-10 md:-mt-14 pb-2"
          : "bg-slate-50 py-8 sm:py-10 md:py-12"
      }
    >
      <div className="container-main">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0_0_0_0.08)] px-4 py-6 sm:px-5 sm:py-8 md:px-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 sm:gap-y-8 md:gap-y-0 md:divide-x md:divide-slate-200">
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
