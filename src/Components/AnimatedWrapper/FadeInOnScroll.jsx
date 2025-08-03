// components/FadeInOnScroll.js
import { motion } from "framer-motion";

const FadeInOnScroll = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export default FadeInOnScroll;
