import React, { useEffect, useState } from "react";

const AnimatedHeading = ({ text, className = "" }) => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (visibleLetters < text.length) {
      const timeout = setTimeout(() => setVisibleLetters(visibleLetters + 1), 50);
      return () => clearTimeout(timeout);
    }
  }, [visibleLetters, text.length]);

  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-400 ease-out ${
            index < visibleLetters
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedHeading;
