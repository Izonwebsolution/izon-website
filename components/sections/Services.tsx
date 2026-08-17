"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Services"
        title="What We Build"
        description="Digital solutions designed around your business, your customers and your goals."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const isActive = active === service.slug;
          return (
            <motion.div
              key={service.slug}
              data-cursor-explore
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              onClick={() => setActive(isActive ? null : service.slug)}
              onMouseEnter={() => setActive(service.slug)}
              onMouseLeave={() => setActive(null)}
              className="group cursor-pointer rounded-2xl border border-white/8 bg-panel/60 p-6 transition-colors hover:border-teal/40"
            >
              <span className="text-xs font-medium tracking-widest text-mist">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-cloud">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-mist">{service.description}</p>

              <motion.div
                initial={false}
                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 flex flex-wrap gap-2 border-t border-white/5 pt-4">
                  {service.steps.map((step, idx) => (
                    <span
                      key={step}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-teal"
                    >
                      0{idx + 1} {step}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
