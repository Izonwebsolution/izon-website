"use client";

import { motion } from "motion/react";
import { whyCards } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { ShieldCheck, Zap, Headset, BadgeCheck, Wallet, TrendingUp } from "lucide-react";

const icons = [ShieldCheck, Zap, Headset, BadgeCheck, Wallet, TrendingUp];

export default function WhyIzon() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading eyebrow="Why Izon" title="Why Choose IZON?" align="center" />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyCards.map((card, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-white/8 bg-panel/50 p-6 transition-colors hover:border-coral/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                <Icon size={18} className="text-coral" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-cloud">{card.title}</h3>
              <p className="mt-2 text-sm text-mist">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
