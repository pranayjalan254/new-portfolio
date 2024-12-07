import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingNavProps {
  isMenuOpen: boolean;
}

const FloatingNav: React.FC<FloatingNavProps> = ({ isMenuOpen }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 md:hidden"
        >
          <div className="absolute inset-0 bg-black/95">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {[
                "About",
                "Timeline",
                "Skills",
                "Projects",
                "Blog",
                "Contact",
              ].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-2xl hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;
