"use client";

import { motion } from "motion/react";
import { Search, BarChart3, LineChart, Megaphone, LayoutTemplate } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { icon: Search, title: "SEO", body: "Technical and on-page SEO foundations." },
  { icon: BarChart3, title: "Google Search Console", body: "Search performance and indexing setup." },
  { icon: LineChart, title: "Google Analytics", body: "Website analytics and visitor insights." },
  { icon: Megaphone, title: "Google Ads", body: "Paid advertising setup and campaign management." },
  { icon: LayoutTemplate, title: "Landing Pages", body: "High-quality pages designed around campaigns and conversions." }
];

export default function GrowthSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Growth"
        title="Build It. Optimize It. Grow It."
        description="We don't promise guaranteed rankings, leads or ad performance — no honest agency can. We build the right foundations and keep improving from there."
      />

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="rounded-2xl border border-white/8 bg-panel/50 p-6"
          >
            <item.icon size={20} className="text-teal" />
            <h3 className="mt-4 font-display text-base font-semibold text-cloud">{item.title}</h3>
            <p className="mt-2 text-sm text-mist">{item.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
