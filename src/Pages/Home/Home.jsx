import { motion } from "framer-motion";
import About from "../../Components/Aboutme/About";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Services from "../../Components/Services/Services";
import Work from "../../Components/Work/Work";
import "./Home.css";

function Home() {
  const bubbleEffect = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: {
      duration: 0.6,
      ease: "easeOut",
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  };

  return (
    <div>
      <motion.div
        initial={bubbleEffect.initial}
        whileInView={bubbleEffect.whileInView}
        transition={bubbleEffect.transition}
        viewport={bubbleEffect.viewport}
      >
        <Header />
      </motion.div>

      <motion.div
        initial={bubbleEffect.initial}
        whileInView={bubbleEffect.whileInView}
        transition={bubbleEffect.transition}
        viewport={bubbleEffect.viewport}
      >
        <About />
      </motion.div>

      <motion.div
        initial={bubbleEffect.initial}
        whileInView={bubbleEffect.whileInView}
        transition={bubbleEffect.transition}
        viewport={bubbleEffect.viewport}
      >
        <Services />
      </motion.div>

      <motion.div
        initial={bubbleEffect.initial}
        whileInView={bubbleEffect.whileInView}
        transition={bubbleEffect.transition}
        viewport={bubbleEffect.viewport}
      >
        <Work />
      </motion.div>

      <motion.div
        initial={bubbleEffect.initial}
        whileInView={bubbleEffect.whileInView}
        transition={bubbleEffect.transition}
        viewport={bubbleEffect.viewport}
      >
        <Contact />
      </motion.div>

      <motion.div
        initial={bubbleEffect.initial}
        whileInView={bubbleEffect.whileInView}
        transition={bubbleEffect.transition}
        viewport={bubbleEffect.viewport}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default Home;
