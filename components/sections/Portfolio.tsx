"use client";

import { motion } from "motion/react";
import Image from "next/image";
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
            href={`/projects/${project.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-explore
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group block overflow-hidden rounded-2xl border border-white/8 bg-panel/50"
          >
            <div className="relative h-64 overflow-hidden bg-ink">
  <Image
    src={project.image}
    alt={`${project.name} website preview`}
    fill
    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
    sizes="(max-width: 1024px) 100vw, 50vw"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent opacity-60" />
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
