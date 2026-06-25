import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";
import { PageCTA } from "@/components/PageCTA";
import { PageFAQ } from "@/components/PageFAQ";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import data from "@/data/pages-main.json";

const page = data["cdcp-dentist"];

export const metadata: Metadata = {
  title: `${page.title} — Bal Dental Centre`,
  description: page.subheading,
};

export default function CDCPPage() {
  const [intro, facts, tiers, qualify, covered, faq] = page.sections;

  return (
    <PageShell>
      <PageHero
        eyebrow="ACCEPTED HERE"
        title={page.title}
        subtitle={page.subheading}
        image={page.hero}
        crumbs={[{ label: "CDCP" }]}
      />

      {/* Intro */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[920px] px-6 text-center">
          <h2 className="text-[24px] sm:text-[32px] font-extrabold text-[#000033]">
            {intro.heading}
          </h2>
          <p className="mt-4 text-[14px] text-[#334155] leading-relaxed">
            {intro.body}
          </p>
          {intro.cta ? (
            <div className="mt-6">
              <Link
                href={intro.cta.href}
                className="btn-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#a2844e] px-7 text-[13px] font-semibold text-white shadow-gold hover:bg-[#8a6e3d]"
              >
                {intro.cta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      {/* Facts */}
      <section className="bg-gradient-to-b from-white via-[#fff8ee] to-white py-16">
        <div className="mx-auto max-w-[1240px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              KEY FACTS
            </span>
            <h2 className="mt-2 text-[24px] sm:text-[32px] font-extrabold text-[#000033] leading-tight">
              {facts.heading}
            </h2>
            <ul className="mt-5 space-y-2.5 text-[14px] text-[#334155]">
              {(facts.bullets as string[])?.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a2844e]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
          {facts.image ? (
            <div
              className="relative aspect-[5/4] w-full overflow-hidden shadow-xl ring-1 ring-[#e0dccf]"
              style={{ borderRadius: "50% / 22%" }}
            >
              <Image
                src={facts.image}
                alt={facts.heading}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ) : null}
        </div>
      </section>

      {/* Co-payment tiers */}
      <section className="bg-navy-animated text-white py-16 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#d8c79a]">
              YOUR SHARE OF THE COST
            </span>
            <h2 className="mt-2 text-[24px] sm:text-[32px] md:text-[38px] font-extrabold leading-tight">
              {tiers.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(tiers.copaymentTiers as { income: string; copay: string; description?: string }[])?.map(
              (t) => (
                <div
                  key={t.income}
                  className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-6 text-center"
                >
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#d8c79a]">
                    Family Net Income
                  </div>
                  <div className="mt-2 text-[16px] font-semibold text-white">
                    {t.income}
                  </div>
                  <div className="mt-6 text-[58px] font-extrabold text-[#d8c79a] leading-none">
                    {t.copay}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-widest text-white/70">
                    Co-payment
                  </div>
                  {t.description ? (
                    <p className="mt-4 text-[12.5px] text-white/75">{t.description}</p>
                  ) : null}
                </div>
              ),
            )}
          </div>
          {tiers.cta ? (
            <div className="mt-10 text-center">
              <a
                href={tiers.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 px-6 text-[13px] font-semibold text-white hover:bg-white hover:text-[#000033]"
              >
                {tiers.cta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          ) : null}
        </div>
      </section>

      {/* Qualify */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[920px] px-6">
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
            {qualify.subheading}
          </span>
          <h2 className="mt-2 text-[24px] sm:text-[32px] md:text-[38px] font-extrabold text-[#000033] leading-tight">
            {qualify.heading}
          </h2>
          <p className="mt-4 text-[14px] text-[#334155] leading-relaxed">
            {qualify.body}
          </p>
          <ul className="mt-5 space-y-2.5 text-[14px] text-[#334155]">
            {(qualify.bullets as string[])?.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a2844e]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {qualify.body2 ? (
            <p className="mt-5 text-[14px] text-[#334155] leading-relaxed">
              {qualify.body2}
            </p>
          ) : null}
          {qualify.cta ? (
            <div className="mt-6">
              <a
                href={qualify.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#a2844e] px-7 text-[13px] font-semibold text-white shadow-gold hover:bg-[#8a6e3d]"
              >
                {qualify.cta.label}
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          ) : null}
        </div>
      </section>

      {/* Covered services */}
      <section className="bg-gradient-to-b from-[#fff8ee] via-[#f7f5ea] to-[#fff8ee] py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              {covered.subheading}
            </span>
            <h2 className="mt-2 text-[24px] sm:text-[32px] font-extrabold text-[#000033]">
              {covered.heading}
            </h2>
            <p className="mt-3 text-[13px] text-[#334155] max-w-2xl mx-auto">
              {covered.body}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(covered.coveredServices as ({ category: string; examples: string } | string)[])?.map(
              (s) => {
                const category = typeof s === "string" ? s : s.category;
                const examples = typeof s === "string" ? null : s.examples;
                return (
                  <div
                    key={category}
                    className="rounded-xl bg-white ring-1 ring-[#e0dccf] shadow-card p-4 flex items-start gap-2.5"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a2844e] text-white">
                      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden>
                        <path
                          d="m5 12 5 5 9-10"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <div className="text-[13.5px] text-[#000033] font-semibold">
                        {category}
                      </div>
                      {examples ? (
                        <p className="mt-0.5 text-[12px] text-[#334155] leading-relaxed">
                          {examples}
                        </p>
                      ) : null}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      <PageFAQ
        faqs={faq.faqs as { q: string; a: string }[]}
        heading={faq.heading}
        eyebrow={faq.subheading ?? "FAQ"}
      />

      <PageCTA />
    </PageShell>
  );
}
