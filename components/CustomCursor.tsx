"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 30, stiffness: 400 });
  const springY = useSpring(y, { damping: 30, stiffness: 400 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReduced) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-active");

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 6);
      y.set(e.clientY - 6);
      const target = e.target as HTMLElement;
      const explore = target.closest("[data-cursor-explore]");
      const hoverable = target.closest("a, button");
      setLabel(explore ? "EXPLORE ↗" : hoverable ? "hover" : null);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center"
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: label === "EXPLORE ↗" ? 90 : label === "hover" ? 26 : 12,
          height: label === "EXPLORE ↗" ? 34 : label === "hover" ? 26 : 12
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center rounded-full border border-teal/60 bg-teal/10 backdrop-blur-sm"
      >
        {label === "EXPLORE ↗" && (
          <span className="text-[10px] font-semibold tracking-wider text-teal">EXPLORE ↗</span>
        )}
      </motion.div>
    </motion.div>
  );
}
