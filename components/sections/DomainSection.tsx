"use client";

import { motion } from "motion/react";
import { Globe, ShieldCheck, Server, RefreshCw } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  { icon: Globe, title: "Domain Selection", body: "Help choosing and connecting the right domain for your brand." },
  { icon: ShieldCheck, title: "DNS & SSL", body: "Correct DNS configuration and secure HTTPS setup." },
  { icon: Server, title: "Hosting & Deployment", body: "Reliable deployment setup, ready for production traffic." },
  { icon: RefreshCw, title: "Migration", body: "Move an existing website over without losing what already works." }
];

export default function DomainSection() {
  return (
    <section className="border-y border-white/5 bg-ink/40 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Infrastructure"
          title="From Domain to Deployment"
          description="You keep ownership of your domain and accounts — we handle the technical setup and connection so everything works correctly from day one."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/8 bg-panel/50 p-6"
            >
              <item.icon size={20} className="text-dusk" />
              <h3 className="mt-4 font-display text-base font-semibold text-cloud">{item.title}</h3>
              <p className="mt-2 text-sm text-mist">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
