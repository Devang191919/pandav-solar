const SectionHeader = ({ badge, title, subtitle, align = "center" }) => {
  const alignClass =
    align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className={`mb-10 md:mb-12 ${alignClass}`}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-solar-900">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-base md:text-lg max-w-2xl leading-relaxed text-solar-700 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
