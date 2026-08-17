"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function Hero() {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotX = useSpring(useTransform(mvY, [-0.5, 0.5], [6, -6]), { stiffness: 80, damping: 20 });
  const rotY = useSpring(useTransform(mvX, [-0.5, 0.5], [-6, 6]), { stiffness: 80, damping: 20 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isDesktop) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20 sm:pt-40"
    >
      <div className="bg-izon-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="bg-glow-dusk pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-xs font-semibold tracking-[0.35em] text-teal"
          >
            DESIGN &bull; DEVELOP &bull; DELIVER
          </motion.p>

          <h1 className="font-display text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-cloud sm:text-6xl lg:text-7xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="block font-script italic text-mist"
            >
              Your Vision.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="block"
            >
              Our Code.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="block bg-gradient-to-r from-teal via-cloud to-coral bg-clip-text text-transparent"
            >
              Your Success.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 max-w-lg text-balance text-lg text-mist"
          >
            We design and develop modern digital experiences that help businesses build, grow and succeed online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#planner"
              className="group flex items-center gap-2 rounded-full bg-cloud px-7 py-4 text-sm font-semibold text-midnight transition-transform hover:scale-105"
            >
              START A PROJECT
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-cloud transition-colors hover:border-teal/50"
            >
              EXPLORE OUR WORK
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <div onMouseMove={onMouseMove} className="relative mx-auto w-full max-w-md [perspective:1200px]">
          <motion.div
            style={{ rotateX: rotX, rotateY: rotY }}
            className="glass relative rounded-2xl p-3 shadow-glow"
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              <div className="ml-3 flex-1 rounded-full bg-white/5 px-3 py-1 text-[10px] text-mist">
                izon.dev/dashboard
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 p-3">
              <div className="col-span-2 h-24 rounded-lg bg-gradient-to-br from-dusk/40 to-transparent" />
              <div className="h-24 rounded-lg bg-gradient-to-br from-teal/30 to-transparent" />
              <div className="col-span-3 h-3 w-2/3 rounded-full bg-white/10" />
              <div className="col-span-3 h-3 w-1/2 rounded-full bg-white/5" />
              <div className="h-16 rounded-lg bg-white/5" />
              <div className="h-16 rounded-lg bg-white/5" />
              <div className="h-16 rounded-lg bg-gradient-to-br from-coral/30 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -left-8 top-10 hidden rounded-xl px-4 py-3 text-xs sm:block"
          >
            <p className="font-semibold text-teal">Deployed</p>
            <p className="text-mist">Vercel &bull; production</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-6 -right-6 hidden rounded-xl px-4 py-3 text-xs sm:block"
          >
            <p className="font-semibold text-coral">Responsive</p>
            <p className="text-mist">320px &rarr; 4K</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
