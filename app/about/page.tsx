import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";
import { PageCTA } from "@/components/PageCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import data from "@/data/pages-main.json";

const page = data.about;

export const metadata: Metadata = {
  title: `${page.title} — Bal Dental Centre`,
  description: page.subheading,
};

export default function AboutPage() {
  const [intro, explore, contact] = page.sections;
  return (
    <PageShell>
      <PageHero
        eyebrow="ABOUT US"
        title={page.title}
        subtitle={page.subheading}
        image={page.hero}
        crumbs={[{ label: "About Us" }]}
      />

      {/* Intro */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <h2 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-[#000033] leading-[1.1]">
            {intro.heading}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-[#334155]">
            {intro.body}
          </p>
          {intro.cta ? (
            <div className="mt-7">
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

      {/* Explore About Us — grid of sub-page cards */}
      <section className="relative bg-gradient-to-b from-[#fff8ee] via-[#f7f5ea] to-[#fff8ee] py-16 sm:py-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[#a2844e]/15 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1240px] px-6">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              <span className="h-px w-8 bg-[#a2844e]" /> EXPLORE
              <span className="h-px w-8 bg-[#a2844e]" />
            </span>
            <h2 className="mt-3 text-[26px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-[#000033] leading-[1.1]">
              {explore.heading}
            </h2>
            {"subheading" in explore && explore.subheading ? (
              <p className="mt-3 text-[14px] text-[#334155]">{explore.subheading}</p>
            ) : null}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {(explore.bullets as { label: string; description: string; href: string }[])?.map(
              (b) => (
                <Link
                  key={b.label}
                  href={b.href}
                  className="group block rounded-2xl bg-white p-6 ring-1 ring-[#e0dccf] shadow-card hover:-translate-y-1 hover:shadow-lift transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-[16px] font-bold text-[#000033]">
                      {b.label}
                    </h3>
                    <ArrowRightIcon className="h-4 w-4 text-[#a2844e] group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="mt-2 h-[2px] w-10 bg-[#a2844e] rounded-full" />
                  <p className="mt-3 text-[13px] text-[#334155] leading-relaxed">
                    {b.description}
                  </p>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <PageCTA heading={contact.heading} body={contact.body} />
    </PageShell>
  );
}
