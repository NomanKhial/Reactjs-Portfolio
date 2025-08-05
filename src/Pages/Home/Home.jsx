import { useInView } from "react-intersection-observer";
import { lazy, Suspense } from "react";
import  "./Home.css";
const Header = lazy(() => import("../../Components/Header/Header"));
const About = lazy(() => import("../../Components/Aboutme/About"));
const Services = lazy(() => import("../../Components/Services/Services"));
const Work = lazy(() => import("../../Components/Work/Work"));
const Contact = lazy(() => import("../../Components/Contact/Contact"));
const Footer = lazy(() => import("../../Components/Footer/Footer"));

function LazySection({ Component }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      {inView && (
        <Suspense fallback={<div>Loading section...</div>}>
          <Component />
        </Suspense>
      )}
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Header should load immediately */}
      <Suspense fallback={<div>Loading header...</div>}>
        <Header />
      </Suspense>

      {/* Lazy load sections on scroll */}
      <LazySection Component={About} />
      <LazySection Component={Services} />
      <LazySection Component={Work} />
      <LazySection Component={Contact} />
      <LazySection Component={Footer} />
    </>
  );
}

export default Home;
