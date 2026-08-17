"use client";

import { motion } from "motion/react";
import { processSteps } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Process() {
  return (
    <section id="process" className="border-y border-white/5 bg-ink/40 py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="How We Work" title="From Idea to Launch" align="center" />

        <div className="relative mt-16">
          <div className="absolute left-5 top-2 h-[calc(100%-1rem)] w-px bg-white/10" />
          <div className="flex flex-col gap-10">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
                className="relative flex items-start gap-5 pl-14"
              >
                <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-teal/40 bg-midnight text-xs font-semibold text-teal">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-cloud">{step.title}</h3>
                  <p className="mt-1 text-sm text-mist">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
