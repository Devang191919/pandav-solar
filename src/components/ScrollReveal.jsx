import React, { useEffect, useRef, useState } from "react";

/**
 * Fade/slide-in when element enters the viewport (Meghji-style scroll motion).
 */
const ScrollReveal = ({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  variant = "up",
  once = true,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${visible ? "reveal--in" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
