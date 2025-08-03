import { useEffect, useState } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.scrollY > 300); 
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleScroll}
      className={`top-btn ${scrollPosition ? "show" : ""}`}
    >
      top
    </button>
  );
}

export default ScrollToTop;
