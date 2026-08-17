export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="text-xs font-semibold tracking-[0.35em] text-teal">{eyebrow.toUpperCase()}</p>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cloud sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-balance text-base text-mist">{description}</p>}
    </div>
  );
}
