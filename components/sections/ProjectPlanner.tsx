"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getWhatsAppUrl } from "@/lib/config";

const needs = [
  "Business Website",
  "E-Commerce Website",
  "Web Application",
  "Mobile App",
  "Website Redesign",
  "SEO",
  "Google Ads",
  "Maintenance",
  "Other"
];

const budgets = ["Let's discuss", "\u20b910K\u2013\u20b925K", "\u20b925K\u2013\u20b950K", "\u20b950K\u2013\u20b91L+", "Custom project"];
const timelines = ["ASAP", "1\u20132 weeks", "2\u20134 weeks", "1\u20132 months", "Flexible"];

function Chip({
  label,
  active,
  onClick
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        active
          ? "border-teal bg-teal/10 text-teal"
          : "border-white/10 text-mist hover:border-white/25 hover:text-cloud"
      }`}
    >
      {label}
    </button>
  );
}

export default function ProjectPlanner() {
  const [need, setNeed] = useState<string | null>(null);
  const [business, setBusiness] = useState("");
  const [budget, setBudget] = useState<string | null>(null);
  const [timeline, setTimeline] = useState<string | null>(null);
  const [details, setDetails] = useState("");
  const [sent, setSent] = useState(false);

  function buildMessage() {
    const lines = [
      "Hello IZON, I would like to discuss a project.",
      need ? `Project type: ${need}` : null,
      business ? `Business: ${business}` : null,
      budget ? `Budget: ${budget}` : null,
      timeline ? `Timeline: ${timeline}` : null,
      details ? `Details: ${details}` : null
    ].filter(Boolean);
    return lines.join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
    window.open(getWhatsAppUrl(buildMessage()), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="planner" className="border-y border-white/5 bg-ink/40 py-28">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="Project Planner" title="Let's Build Something Great" align="center" />

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass mt-14 rounded-2xl p-6 sm:p-10"
        >
          <fieldset>
            <legend className="text-sm font-semibold text-cloud">What do you need?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {needs.map((n) => (
                <Chip key={n} label={n} active={need === n} onClick={() => setNeed(n)} />
              ))}
            </div>
          </fieldset>

          <div className="mt-8">
            <label htmlFor="business" className="text-sm font-semibold text-cloud">
              What is your business?
            </label>
            <input
              id="business"
              type="text"
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              placeholder="e.g. a local bakery, a consulting firm..."
              className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cloud placeholder:text-mist/50 focus:border-teal/50"
            />
          </div>

          <fieldset className="mt-8">
            <legend className="text-sm font-semibold text-cloud">Approximate budget</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {budgets.map((b) => (
                <Chip key={b} label={b} active={budget === b} onClick={() => setBudget(b)} />
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="text-sm font-semibold text-cloud">Timeline</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {timelines.map((t) => (
                <Chip key={t} label={t} active={timeline === t} onClick={() => setTimeline(t)} />
              ))}
            </div>
          </fieldset>

          <div className="mt-8">
            <label htmlFor="details" className="text-sm font-semibold text-cloud">
              Tell us about your project
            </label>
            <textarea
              id="details"
              rows={4}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              placeholder="What are you trying to build?"
              className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-cloud placeholder:text-mist/50 focus:border-teal/50"
            />
          </div>

          <button
            type="submit"
            className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-cloud py-4 text-sm font-semibold text-midnight transition-transform hover:scale-[1.02] sm:w-auto sm:px-8"
          >
            SEND PROJECT REQUEST
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>

          {sent && (
            <p role="status" className="mt-4 text-sm text-teal">
              Opening WhatsApp with your project details — send the message to reach us directly.
            </p>
          )}
          <p className="mt-3 text-xs text-mist/70">
            This opens a pre-filled WhatsApp message. Prefer email? Reach us at izon.websolutions@gmail.com.
          </p>
        </motion.form>
      </div>
    </section>
  );
}
