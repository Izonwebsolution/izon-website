"use client";

import { motion } from "motion/react";
import { techGroups } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Technologies() {
  return (
    <section id="technologies" className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Technology"
        title="The Technology Behind the Experience"
        description="A modern, dependable stack chosen for performance, maintainability and long-term flexibility."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl border border-white/8 bg-panel/50 p-6"
          >
            <h3 className="text-xs font-semibold tracking-[0.3em] text-teal">
              {group.category.toUpperCase()}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-cloud"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
