import React from "react";
import {
  siteConfig,
  getTelUrl,
  getMailtoUrl,
  getWhatsAppUrl,
} from "../config/siteConfig";

const ContactLink = ({
  type,
  message = "",
  subject = "",
  body = "",
  className = "",
  children,
  showDefault = true,
}) => {
  const defaults = {
    phone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    whatsapp: "WhatsApp",
    address: siteConfig.address,
  };

  const hrefMap = {
    phone: getTelUrl(),
    email: getMailtoUrl(subject, body),
    whatsapp: getWhatsAppUrl(message),
    address: siteConfig.mapsUrl,
  };

  const isExternal = type === "whatsapp" || type === "address";

  return (
    <a
      href={hrefMap[type]}
      className={className}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children ?? (showDefault ? defaults[type] : null)}
    </a>
  );
};

export default ContactLink;
