"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          animate={{
            width: scrolled ? "min(920px, 94%)" : "100%",
            paddingTop: scrolled ? 10 : 18,
            paddingBottom: scrolled ? 10 : 18,
          }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
          }}
          className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 transition-colors sm:px-7 ${
            scrolled ? "glass shadow-glass" : "bg-transparent"
          }`}
        >
          {/* LOGO */}
          <a
            href="#home"
            className="relative block h-10 w-[90px] shrink-0"
            aria-label="IZON Home"
          >
            <Image
              src="/logo/izon-logo.png"
              alt="IZON"
              fill
              priority
              sizes="90px"
              className="object-contain"
            />
          </a>

          {/* DESKTOP NAVIGATION */}
          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative text-sm text-mist transition-colors hover:text-cloud"
                >
                  {link.label}

                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-teal transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* START PROJECT */}
            <a
              href="#planner"
              className="hidden items-center gap-1 rounded-full bg-cloud px-5 py-2 text-xs font-semibold tracking-wide text-midnight transition-transform hover:scale-105 sm:flex"
            >
              START A PROJECT
              <ArrowUpRight size={14} />
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="rounded-full border border-white/10 p-2 text-cloud lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              type="button"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col bg-midnight px-6 py-6"
          >
            {/* MOBILE HEADER */}
            <div className="flex items-center justify-between">
              <a
                href="#home"
                onClick={() => setOpen(false)}
                className="relative block h-10 w-[90px]"
                aria-label="IZON Home"
              >
                <Image
                  src="/logo/izon-logo.png"
                  alt="IZON"
                  fill
                  sizes="90px"
                  className="object-contain"
                />
              </a>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/10 p-2 text-cloud"
                aria-label="Close menu"
                type="button"
              >
                <X size={20} />
              </button>
            </div>

            {/* MOBILE LINKS */}
            <nav className="mt-16 flex flex-1 flex-col justify-center gap-2">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{
                    opacity: 0,
                    x: -16,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.05 * i,
                  }}
                  className="border-b border-white/5 py-4 font-display text-3xl text-cloud"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* MOBILE START PROJECT BUTTON */}
            <div className="flex flex-col gap-3 pb-4">
              <a
                href="#planner"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-cloud py-4 text-sm font-semibold text-midnight"
              >
                START A PROJECT
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}