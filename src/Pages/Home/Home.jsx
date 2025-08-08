import { useInView } from "react-intersection-observer";
import { lazy, Suspense, useState, useEffect } from "react";
import "./Home.css";

// Lazy loader for below-the-fold sections
function LazySection({ importFunc }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    if (inView && !Component) {
      importFunc().then((module) => setComponent(() => module.default));
    }
  }, [inView, Component, importFunc]);

  return (
    <div ref={ref}>
      {Component && (
        <Suspense fallback={<div>Loading section...</div>}>
          <Component />
        </Suspense>
      )}
    </div>
  );
}

function Home() {
  const Header = lazy(() => import("../../Components/Header/Header"));

  return (
    <>
      {/* Header loads immediately */}
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      {/* Lazy load sections only when in view */}
      <LazySection importFunc={() => import("../../Components/Aboutme/About")} />
      <LazySection importFunc={() => import("../../Components/Services/Services")} />
      <LazySection importFunc={() => import("../../Components/Work/Work")} />
      <LazySection importFunc={() => import("../../Components/Contact/Contact")} />
      <LazySection importFunc={() => import("../../Components/Footer/Footer")} />
    </>
  );
}

export default Home;
