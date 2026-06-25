import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";
import { PageCTA } from "@/components/PageCTA";
import { PageFAQ } from "@/components/PageFAQ";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import data from "@/data/pages-main.json";

const page = data["new-patients"];

export const metadata: Metadata = {
  title: `${page.title} — Bal Dental Centre`,
  description: page.subheading,
};

export default function NewPatientsPage() {
  const [intro, steps, save, insurance, faq, cta] = page.sections;

  return (
    <PageShell>
      <PageHero
        eyebrow="NEW PATIENTS"
        title={page.title}
        subtitle={page.subheading}
        image={page.hero}
        crumbs={[{ label: "New Patients" }]}
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

      {/* Steps */}
      <section className="bg-gradient-to-b from-[#fff8ee] via-[#f7f5ea] to-[#fff8ee] py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-center">
            {steps.image ? (
              <div
                className="relative aspect-[5/4] w-full overflow-hidden shadow-xl ring-1 ring-[#e0dccf]"
                style={{ borderRadius: "50% / 22%" }}
              >
                <Image
                  src={steps.image}
                  alt={steps.heading}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : null}
            <div>
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
                YOUR FIRST VISIT
              </span>
              <h2 className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-extrabold text-[#000033] leading-tight">
                {steps.heading}
              </h2>
              {steps.body ? (
                <p className="mt-4 text-[14px] text-[#334155]">{steps.body}</p>
              ) : null}
              <ol className="mt-7 space-y-5">
                {(steps.steps as { number: string; title: string; body: string }[])?.map(
                  (s) => (
                    <li key={s.number} className="flex gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#a2844e] text-white font-extrabold text-[14px] shadow-gold">
                        {s.number}
                      </span>
                      <div>
                        <h3 className="text-[15px] font-bold text-[#000033]">
                          {s.title}
                        </h3>
                        <p className="mt-1 text-[13px] text-[#334155]">
                          {s.body}
                        </p>
                      </div>
                    </li>
                  ),
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Save 15 minutes — online intake */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
                ONLINE INTAKE
              </span>
              <h2 className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-extrabold text-[#000033] leading-tight">
                {save.heading}
              </h2>
              {save.subheading ? (
                <p className="mt-3 text-[14px] font-semibold text-[#000033]">
                  {save.subheading}
                </p>
              ) : null}
              <p className="mt-4 text-[14px] text-[#334155]">{save.body}</p>
              <ul className="mt-5 space-y-2.5 text-[14px] text-[#334155]">
                {(save.bullets as string[])?.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a2844e]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {save.cta ? (
                <div className="mt-6">
                  <Link
                    href={save.cta.href}
                    className="btn-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#a2844e] px-7 text-[13px] font-semibold text-white shadow-gold hover:bg-[#8a6e3d]"
                  >
                    {save.cta.label}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              ) : null}
            </div>
            {save.image ? (
              <div
                className="relative aspect-[5/4] w-full overflow-hidden shadow-xl ring-1 ring-[#e0dccf]"
                style={{ borderRadius: "50% / 22%" }}
              >
                <Image
                  src={save.image}
                  alt={save.heading}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* Insurance & Financing */}
      <section className="bg-navy-animated text-white py-16 overflow-hidden relative">
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
              {insurance.subheading}
            </span>
            <h2 className="mt-2 text-[26px] sm:text-[34px] md:text-[40px] font-extrabold leading-tight">
              {insurance.heading}
            </h2>
            <p className="mt-4 text-[14px] text-white/85 max-w-2xl mx-auto">
              {insurance.body}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-6">
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-[#d8c79a]">
                Insurance Providers
              </h3>
              <p className="mt-1 text-[12px] text-white/70">
                Direct billing accepted with:
              </p>
              <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-[13px]">
                {(insurance.insuranceProviders as string[])?.map((p) => (
                  <div
                    key={p}
                    className="flex items-center gap-2 text-white/90"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a2844e]" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-6">
              <h3 className="text-[15px] font-bold uppercase tracking-wider text-[#d8c79a]">
                Financing Options
              </h3>
              <p className="mt-1 text-[12px] text-white/70">
                For uncovered costs:
              </p>
              <ul className="mt-4 space-y-4 text-[13px] text-white/90">
                {(insurance.financingOptions as ({ label: string; body: string } | string)[])?.map(
                  (o) => {
                    const label = typeof o === "string" ? o : o.label;
                    const body = typeof o === "string" ? null : o.body;
                    return (
                      <li key={label} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a2844e]" />
                        <div>
                          <div className="font-semibold text-white">{label}</div>
                          {body ? (
                            <p className="mt-0.5 text-white/80">{body}</p>
                          ) : null}
                        </div>
                      </li>
                    );
                  },
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PageFAQ
        faqs={faq.faqs ?? []}
        heading={faq.heading}
        eyebrow={faq.subheading ?? "FAQ"}
      />

      <PageCTA heading={cta.heading} body={cta.body} />
    </PageShell>
  );
}
