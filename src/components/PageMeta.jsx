import { useEffect } from "react";
import { siteConfig } from "../config/siteConfig";

/**
 * Sets document title + meta description per route (SPA SEO helper).
 */
const PageMeta = ({ pageKey }) => {
  useEffect(() => {
    const meta = siteConfig.pageMeta?.[pageKey];
    if (!meta) return;

    document.title = meta.title;

    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement("meta");
      descTag.setAttribute("name", "description");
      document.head.appendChild(descTag);
    }
    descTag.setAttribute("content", meta.description);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", meta.title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", meta.description);
  }, [pageKey]);

  return null;
};

export default PageMeta;
