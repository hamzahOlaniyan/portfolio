'use client'
import { motion } from "framer-motion";

const Hamburger = ({ isOpen, toggle, }: { isOpen: boolean; toggle: () => void }) => {
  return (
    <button onClick={toggle} className="md:hidden w-6 h-6 flex items-center justify-center absolute top-4 right-4 z-50">
      {/* Top Line */}
      <motion.span
        className="absolute w-6 h-0.5 bg-black"
        initial={false}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : -8,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Middle Line */}
      <motion.span
        className="absolute w-6 h-0.5 bg-black"
        initial={false}
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Bottom Line */}
      <motion.span
        className="absolute w-6 h-0.5 bg-black"
        initial={false}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : 8,
        }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default Hamburger;
