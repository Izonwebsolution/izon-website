"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform
} from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);

  const rotX = useSpring(
    useTransform(mvY, [-0.5, 0.5], [5, -5]),
    { stiffness: 80, damping: 20 }
  );

  const rotY = useSpring(
    useTransform(mvX, [-0.5, 0.5], [-5, 5]),
    { stiffness: 80, damping: 20 }
  );

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    );
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
      {/* Background */}
      <div className="bg-izon-grid pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="bg-glow-dusk pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2" />

      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-teal/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_1fr] lg:gap-12">

        {/* LEFT SIDE */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-mist backdrop-blur"
          >
            <Sparkles size={14} className="text-teal" />
            We Build Digital Experiences
          </motion.div>

          <h1 className="max-w-3xl font-display text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-cloud sm:text-6xl lg:text-7xl">

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="block"
            >
              We build stunning
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="block"
            >
              <span className="bg-gradient-to-r from-teal via-cloud to-coral bg-clip-text text-transparent">
                websites & apps
              </span>{" "}
              that
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="block"
            >
              drive real results.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 max-w-xl text-balance text-lg leading-8 text-mist"
          >
            IZON is a digital solutions agency helping businesses build
            modern, responsive and high-performance websites and web
            applications that grow with their goals.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#planner"
              className="group flex items-center gap-2 rounded-full bg-cloud px-7 py-4 text-sm font-semibold text-midnight transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              START A PROJECT

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#work"
              className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-cloud backdrop-blur transition-all duration-300 hover:border-teal/50 hover:bg-white/10"
            >
              VIEW OUR WORK

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* TRUST POINTS */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-mist"
          >
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Custom Design
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Mobile Responsive
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              SEO Ready
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Fast Performance
            </span>
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div
          onMouseMove={onMouseMove}
          className="relative mx-auto w-full max-w-2xl [perspective:1200px]"
        >
          <motion.div
            style={{
              rotateX: rotX,
              rotateY: rotY
            }}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut"
            }}
            className="relative"
          >
            {/* MAIN BROWSER CARD */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#10141c] p-2 shadow-2xl">

              {/* Browser Header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-3 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-coral/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-teal/80" />

                <div className="ml-3 flex-1 rounded-full bg-white/5 px-4 py-1.5 text-[10px] text-mist">
                  avantis-infinity-mushroom.vercel.app
                </div>
              </div>

              {/* Website Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
                <Image
                  src="/projects/avantis/avantis-1.png"
                  alt="Avantis Infinity website preview"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* PERFORMANCE CARD */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="glass absolute -bottom-7 -left-5 hidden rounded-2xl px-4 py-3 shadow-glass sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal/15">
                  <Zap size={17} className="text-teal" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-cloud">
                    High Performance
                  </p>
                  <p className="mt-0.5 text-[10px] text-mist">
                    Fast & responsive
                  </p>
                </div>
              </div>
            </motion.div>

            {/* DESIGN CARD */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="glass absolute -right-5 top-10 hidden rounded-2xl px-4 py-3 shadow-glass sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-coral/15">
                  <Sparkles size={17} className="text-coral" />
                </div>

                <div>
                  <p className="text-xs font-semibold text-cloud">
                    Modern Design
                  </p>
                  <p className="mt-0.5 text-[10px] text-mist">
                    Built for your brand
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* BACKGROUND GLOW */}
          <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-teal/10 blur-[100px]" />
        </div>
      </div>
    </section>
  );
}