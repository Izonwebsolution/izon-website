"use client";

import { motion } from "motion/react";

const approach = [
  { title: "Design", body: "Think clearly." },
  { title: "Develop", body: "Build intelligently." },
  { title: "Deliver", body: "Launch professionally." }
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-28">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-balance font-display text-3xl font-semibold tracking-tight text-cloud sm:text-4xl"
      >
        We turn ideas into digital experiences.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-6 max-w-2xl text-balance text-base text-mist"
      >
        IZON is a digital development studio focused on designing and developing modern websites, applications
        and digital experiences for businesses and entrepreneurs.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {approach.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-t border-white/10 pt-4"
          >
            <h3 className="font-display text-sm font-semibold tracking-[0.3em] text-teal">
              {item.title.toUpperCase()}
            </h3>
            <p className="mt-2 text-lg text-cloud">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
