import { useEffect } from "react";
import { useNavigationType, useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // ممكن تشيلي الشرط لو عايزة دايمًا يروح فوق
    if (navigationType === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
