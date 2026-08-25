import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

type PageProps = {
  params: {
    slug: string;
  };
};

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-midnight text-cloud">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-36 sm:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-izon-grid opacity-50" />

        <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 bg-glow-dusk" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/#work"
            className="mb-10 inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-cloud"
          >
            <ArrowLeft size={16} />
            BACK TO WORK
          </Link>

          <p className="text-xs font-semibold tracking-[0.35em] text-teal">
            SELECTED PROJECT
          </p>

          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight sm:text-6xl lg:text-8xl">
            {project.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 px-4 py-2 text-xs text-mist"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-panel/40 shadow-glass">
          <Image
            src={project.image}
            alt={`${project.name} website`}
            width={1920}
            height={1080}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-3">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-teal">
              OVERVIEW
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold">
              {project.overview}
            </h2>
          </div>

          <div className="space-y-10 lg:col-span-2">
            <div>
              <h3 className="font-display text-xl font-semibold">
                The Challenge
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-mist">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-semibold">
                Our Solution
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-mist">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-[0.3em] text-teal">
                PROJECT GALLERY
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                A closer look.
              </h2>
            </div>

            <div className="space-y-10">
              {project.gallery.map((image, index) => (
                <div
                  key={image}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-panel/40"
                >
                  <Image
                    src={image}
                    alt={`${project.name} screenshot ${index + 1}`}
                    width={1920}
                    height={1080}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LIVE WEBSITE */}
      {project.url && (
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-panel/40 p-10 text-center sm:p-16">
            <p className="text-xs font-semibold tracking-[0.3em] text-teal">
              LIVE PROJECT
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              See {project.name} live.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-mist">
              Explore the finished website and see the project in its live
              environment.
            </p>

            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cloud px-7 py-4 text-sm font-semibold text-midnight transition-transform hover:scale-105"
            >
              VISIT LIVE WEBSITE
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      )}

      {/* BACK */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cloud transition-colors hover:text-teal"
          >
            <ArrowLeft size={16} />
            BACK TO SELECTED WORK
          </Link>
        </div>
      </section>
    </main>
  );
}