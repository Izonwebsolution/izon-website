"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Respect reduced-motion users and slow first paint alike: the loader
    // never blocks longer than it takes the brand sequence to play once.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const timer = setTimeout(() => setLoading(false), prefersReduced ? 300 : 2100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <CustomCursor />
      <Navbar />
      <main className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        {children}
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
