import Image from "next/image";

type RichSectionProps = {
  heading?: string;
  eyebrow?: string;
  body?: string | string[];
  bullets?: string[];
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right" | "none";
  background?: "white" | "cream" | "navy";
  cta?: { label: string; href: string; variant?: "gold" | "navy" | "outline" }[];
};

export function RichSection({
  heading,
  eyebrow,
  body,
  bullets,
  image,
  imageAlt,
  imagePosition = "right",
  background = "white",
  cta,
}: RichSectionProps) {
  const bgClass =
    background === "cream"
      ? "bg-gradient-to-b from-white via-[#fff8ee] to-white text-[#000033]"
      : background === "navy"
        ? "bg-navy-animated text-white"
        : "bg-white text-[#000033]";

  const isDark = background === "navy";
  const eyebrowColor = isDark ? "text-[#d8c79a]" : "text-[#a2844e]";
  const headingColor = isDark ? "text-white" : "text-[#000033]";
  const bodyColor = isDark ? "text-white/85" : "text-[#334155]";
  const bulletDot = isDark ? "bg-[#d8c79a]" : "bg-[#a2844e]";

  const bodyArr = body
    ? Array.isArray(body)
      ? body
      : [body]
    : [];

  const TextBlock = () => (
    <div>
      {eyebrow ? (
        <span
          className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] ${eyebrowColor}`}
        >
          <span className={`h-px w-8 ${isDark ? "bg-[#d8c79a]" : "bg-[#a2844e]"}`} />
          {eyebrow}
        </span>
      ) : null}
      {heading ? (
        <h2
          className={`mt-3 text-[26px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight leading-[1.1] ${headingColor}`}
        >
          {heading}
        </h2>
      ) : null}
      {bodyArr.map((p, i) => (
        <p key={i} className={`mt-4 text-[14px] leading-relaxed ${bodyColor}`}>
          {p}
        </p>
      ))}
      {bullets?.length ? (
        <ul className={`mt-5 space-y-2.5 text-[14px] ${bodyColor}`}>
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${bulletDot}`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {cta?.length ? (
        <div className="mt-7 flex flex-wrap gap-3">
          {cta.map((c) => {
            const cls =
              c.variant === "navy"
                ? "bg-[#000033] text-white hover:bg-[#a2844e]"
                : c.variant === "outline"
                  ? isDark
                    ? "bg-white/10 ring-1 ring-white/30 text-white hover:bg-white hover:text-[#000033]"
                    : "bg-white ring-1 ring-[#000033]/15 text-[#000033] hover:bg-[#000033] hover:text-white"
                  : "bg-[#a2844e] text-white hover:bg-[#8a6e3d] shadow-gold";
            return (
              <a
                key={c.label}
                href={c.href}
                className={`btn-shimmer inline-flex h-11 items-center justify-center rounded-full px-6 text-[13px] font-semibold transition-colors ${cls}`}
              >
                {c.label}
              </a>
            );
          })}
        </div>
      ) : null}
    </div>
  );

  const ImageBlock = image ? (
    <div
      className="relative aspect-[5/4] w-full overflow-hidden shadow-xl ring-1 ring-[#e0dccf]"
      style={{ borderRadius: "50% / 22%" }}
    >
      <Image
        src={image}
        alt={imageAlt ?? heading ?? "Bal Dental Centre"}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  ) : null;

  return (
    <section className={`relative py-16 sm:py-20 ${bgClass}`}>
      <div className="mx-auto max-w-[1440px] px-6">
        {image && imagePosition !== "none" ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {imagePosition === "left" ? (
              <>
                {ImageBlock}
                <TextBlock />
              </>
            ) : (
              <>
                <TextBlock />
                {ImageBlock}
              </>
            )}
          </div>
        ) : (
          <div className="max-w-[920px] mx-auto">
            <TextBlock />
          </div>
        )}
      </div>
    </section>
  );
}
