"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const words = ["DESIGN", "DEVELOP", "DELIVER"];

export default function Loader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1 < words.length ? i + 1 : i));
    }, 480);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight"
      aria-hidden="true"
    >
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl font-semibold tracking-[0.3em] text-cloud sm:text-5xl"
      >
        IZON
      </motion.span>

      <div className="mt-6 h-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="block text-sm font-medium tracking-[0.4em] text-teal"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>

      <motion.div
        className="mt-10 h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-dusk via-teal to-coral"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
