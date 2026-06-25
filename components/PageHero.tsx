import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
};

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  imageAlt,
  crumbs = [],
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy-animated text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#a2844e]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-32 h-80 w-80 rounded-full bg-[#a2844e]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 pt-14 pb-16 md:pt-20 md:pb-24">
        <div className={`grid items-center gap-10 lg:gap-16 ${image ? "lg:grid-cols-[1.1fr_1fr]" : "lg:grid-cols-1"}`}>
          <div>
            {crumbs.length ? (
              <nav aria-label="Breadcrumb" className="mb-5">
                <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-white/70">
                  <li>
                    <Link href="/" className="hover:text-[#d8c79a]">
                      Home
                    </Link>
                  </li>
                  {crumbs.map((c, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-white/40">/</span>
                      {c.href ? (
                        <Link
                          href={c.href}
                          className="hover:text-[#d8c79a]"
                        >
                          {c.label}
                        </Link>
                      ) : (
                        <span className="text-[#d8c79a]">{c.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            {eyebrow ? (
              <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#d8c79a]">
                <span className="h-px w-8 bg-[#d8c79a]" />
                {eyebrow}
              </span>
            ) : null}
            <h1 className="mt-3 text-[32px] sm:text-[42px] md:text-[48px] lg:text-[54px] font-extrabold tracking-tight leading-[1.05]">
              {title}
            </h1>
            {subtitle ? (
              <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-white/85 max-w-[640px]">
                {subtitle}
              </p>
            ) : null}
          </div>

          {image ? (
            <div className="relative aspect-[5/4] w-full overflow-hidden shadow-2xl ring-1 ring-white/15 bg-[#0a0a3d]"
              style={{ borderRadius: "50% / 22%" }}>
              <Image
                src={image}
                alt={imageAlt ?? title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
