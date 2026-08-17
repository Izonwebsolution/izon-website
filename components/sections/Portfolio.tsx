"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Portfolio() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title="Turning ideas into digital experiences."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project, i) => (
          <motion.a
            key={project.slug}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-explore
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group block overflow-hidden rounded-2xl border border-white/8 bg-panel/50"
          >
            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-dusk/25 via-ink to-teal/10">
              <div className="glass w-3/4 rounded-lg p-3 shadow-glass transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex gap-1.5 pb-2">
                  <span className="h-2 w-2 rounded-full bg-coral/70" />
                  <span className="h-2 w-2 rounded-full bg-gold/70" />
                  <span className="h-2 w-2 rounded-full bg-teal/70" />
                </div>
                <div className="h-2 w-2/3 rounded-full bg-white/15" />
                <div className="mt-2 h-16 rounded-md bg-white/5" />
              </div>
              <div className="glass absolute bottom-4 right-4 w-16 rounded-md p-1.5 shadow-glass">
                <div className="h-2 w-1/2 rounded-full bg-white/15" />
                <div className="mt-1.5 h-8 rounded bg-white/5" />
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium tracking-widest text-teal">
                  {project.category.toUpperCase()}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-mist transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cloud"
                />
              </div>
              <h3 className="mt-2 font-display text-2xl font-semibold text-cloud">{project.name}</h3>
              <p className="mt-2 text-sm text-mist">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-mist">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-cloud">
                VIEW PROJECT <ArrowUpRight size={14} />
              </span>
            </div>
          </motion.a>
        ))}

        <div className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-8 text-center">
          <p className="font-display text-lg text-mist">More projects coming soon</p>
          <p className="mt-2 text-sm text-mist/70">
            New case studies are added here as projects launch.
          </p>
        </div>
      </div>
    </section>
  );
}
