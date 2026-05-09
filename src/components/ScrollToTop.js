import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // jab bhi path change ho, page top pe chala jaye
  }, [pathname]);

  return null;
}
