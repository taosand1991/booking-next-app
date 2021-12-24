import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -200 },
};

function MotionFrame({ children }) {
  return (
    <motion.main
      style={{ height: "100%" }}
      key="route"
      initial={variants.hidden}
      animate={variants.enter}
      exit={variants.exit}
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  );
}

export default MotionFrame;
