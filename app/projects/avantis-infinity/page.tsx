    "use client";

    import Image from "next/image";
    import Link from "next/link";
    import { motion } from "motion/react";
    import { ArrowLeft, ArrowUpRight } from "lucide-react";

    const gallery = [
    {
        src: "/projects/avantis/avantis-1.png",
        alt: "Avantis Infinity website homepage",
    },
    {
        src: "/projects/avantis/avantis-2.png",
        alt: "Avantis Infinity website preview",
    },
    {
        src: "/projects/avantis/avantis-3.png",
        alt: "Avantis Infinity website section",
    },
    ];

    export default function AvantisInfinityPage() {
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

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-xs font-semibold tracking-[0.35em] text-teal">
                SELECTED PROJECT
                </p>

                <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-tight sm:text-6xl lg:text-8xl">
                Avantis Infinity
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
                A modern business website designed to establish a professional
                online presence and communicate the Avantis Infinity brand.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <span
                    key={tech}
                    className="rounded-full border border-white/10 px-4 py-2 text-xs text-mist"
                    >
                    {tech}
                    </span>
                ))}
                </div>
            </motion.div>
            </div>
        </section>

        {/* MAIN PROJECT IMAGE */}
        <section className="px-6 pb-24">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-panel/40 shadow-glass"
            >
            <Image
                src="/projects/avantis/avantis-1.png"
                alt="Avantis Infinity website"
                width={1920}
                height={1080}
                priority
                className="h-auto w-full object-cover"
            />
            </motion.div>
        </section>

        {/* PROJECT DETAILS */}
        <section className="px-6 py-24">
            <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-3">
            <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-teal">
                OVERVIEW
                </p>

                <h2 className="mt-4 font-display text-3xl font-semibold">
                Building a stronger digital presence.
                </h2>
            </div>

            <div className="space-y-10 lg:col-span-2">
                <div>
                <h3 className="font-display text-xl font-semibold">
                    The Challenge
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-mist">
                    Avantis Infinity needed a professional web presence that could
                    clearly communicate the business and establish credibility with
                    new visitors.
                </p>
                </div>

                <div>
                <h3 className="font-display text-xl font-semibold">
                    Our Solution
                </h3>

                <p className="mt-3 max-w-3xl leading-7 text-mist">
                    We created a clean, responsive website with structured content,
                    clear navigation and a consistent visual identity designed to
                    work across desktop, tablet and mobile devices.
                </p>
                </div>
            </div>
            </div>
        </section>

        {/* GALLERY */}
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
                {gallery.map((image, index) => (
                <motion.div
                    key={image.src}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    }}
                    className="overflow-hidden rounded-3xl border border-white/10 bg-panel/40"
                >
                    <Image
                    src={image.src}
                    alt={image.alt}
                    width={1920}
                    height={1080}
                    className="h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    />
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* LIVE WEBSITE */}
        <section className="px-6 py-24">
            <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-panel/40 p-10 text-center sm:p-16">
            <p className="text-xs font-semibold tracking-[0.3em] text-teal">
                LIVE PROJECT
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                See Avantis Infinity live.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-mist">
                Explore the finished website and see the project in its live
                environment.
            </p>

            <a
                href="https://avantis-infinity-mushroom.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cloud px-7 py-4 text-sm font-semibold text-midnight transition-transform hover:scale-105"
            >
                VISIT LIVE WEBSITE
                <ArrowUpRight size={17} />
            </a>
            </div>
        </section>

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