"use client";

import { motion } from "motion/react";

const pillars = [
  { title: "Design", body: "Understand the idea. Create the visual experience." },
  { title: "Develop", body: "Turn the design into a functional digital product." },
  { title: "Deliver", body: "Test, optimize and launch." }
];

const pipeline = ["Idea", "Design", "Code", "Test", "Launch"];

export default function Pipeline() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-ink/40 py-28">
      <div className="bg-glow-teal pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-display text-2xl font-semibold text-cloud">{p.title}</h3>
              <p className="mt-2 text-sm text-mist">{p.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative mt-20 flex flex-wrap items-center justify-between gap-6">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-white/10 sm:block" />
          {pipeline.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="relative z-10 flex flex-col items-center gap-2"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-teal/40 bg-midnight text-xs font-semibold text-teal">
                0{i + 1}
              </span>
              <span className="text-xs font-medium tracking-wide text-mist">{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
