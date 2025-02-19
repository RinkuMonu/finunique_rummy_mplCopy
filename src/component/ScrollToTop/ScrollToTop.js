import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Jab bhi pathname change hoga, yeh trigger hoga

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Page smoothly top par scroll hoga
  }, [pathname]); // Jab bhi pathname change ho, scroll kare

  return null;
};

export default ScrollToTop;
