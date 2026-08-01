import React, { useEffect, useState } from "react";
import { siteConfig } from "../config/siteConfig";

const SPLASH_KEY = "pandav_solar_splash_seen";
const SPLASH_MS = 3000;
const FADE_MS = 400;

const SplashScreen = ({ onDone }) => {
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const fadeTimer = setTimeout(() => setFading(true), SPLASH_MS - FADE_MS);
    const doneTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(SPLASH_KEY, "1");
      } catch {
        /* ignore */
      }
      document.body.style.overflow = prevOverflow;
      onDone?.();
    }, SPLASH_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [onDone]);

  return (
    <div
      className={`splash-screen ${fading ? "splash-screen--out" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Pandav Solar"
    >
      <img
        src={siteConfig.images.logo}
        alt={siteConfig.companyName}
        className="splash-logo"
      />
    </div>
  );
};

export const shouldShowSplash = () => {
  try {
    return sessionStorage.getItem(SPLASH_KEY) !== "1";
  } catch {
    return true;
  }
};

export default SplashScreen;
