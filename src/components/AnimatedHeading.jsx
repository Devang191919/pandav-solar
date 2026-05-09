import React, { useEffect, useState } from "react";

const AnimatedHeading = ({ text }) => {
  const [visibleLetters, setVisibleLetters] = useState(0);

  useEffect(() => {
    if (visibleLetters < text.length) {
      const timeout = setTimeout(() => {
        setVisibleLetters(visibleLetters + 1);
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [visibleLetters, text.length]);

  return (
    <div className="text-blue-500 text-7xl font-bold mb-4 leading-tight max-lg:text-5xl max-lg:leading-snug flex flex-wrap">
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out transform ${
            index < visibleLetters
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedHeading;
