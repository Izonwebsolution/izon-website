import { trustPoints } from "@/lib/data";
import { Check } from "lucide-react";

export default function TrustStrip() {
  return (
    <section className="border-y border-white/5 bg-ink/60 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6">
        {trustPoints.map((point) => (
          <div key={point} className="flex items-center gap-2 text-xs font-medium tracking-wide text-mist">
            <Check size={14} className="text-teal" />
            {point.toUpperCase()}
          </div>
        ))}
      </div>
    </section>
  );
}
