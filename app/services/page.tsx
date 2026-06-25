import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";
import { PageCTA } from "@/components/PageCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import data from "@/data/pages-main.json";

const page = data.services;

export const metadata: Metadata = {
  title: `${page.title} — Bal Dental Centre`,
  description: page.subheading,
};

type Category = {
  number: string;
  label: string;
  description: string;
  services: { name: string; description: string; href: string; image: string }[];
};

export default function ServicesPage() {
  const [intro, browse, cta] = page.sections;
  return (
    <PageShell>
      <PageHero
        eyebrow="OUR SERVICES"
        title={page.title}
        subtitle={page.subheading}
        image={page.hero}
        crumbs={[{ label: "Our Services" }]}
      />

      <section className="bg-white py-14">
        <div className="mx-auto max-w-[920px] px-6 text-center">
          <h2 className="text-[24px] sm:text-[32px] font-extrabold text-[#000033]">
            {intro.heading}
          </h2>
          <p className="mt-4 text-[14px] text-[#334155] leading-relaxed">
            {intro.body}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#fff8ee] via-[#f7f5ea] to-[#fff8ee] py-16">
        <div className="mx-auto max-w-[1240px] px-6 space-y-14">
          {(browse.categories as Category[])?.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a2844e] text-white font-extrabold text-[14px] shadow-gold">
                    {cat.number}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
                      CATEGORY
                    </span>
                    <h2 className="text-[22px] sm:text-[28px] font-extrabold text-[#000033] leading-tight">
                      {cat.label}
                    </h2>
                  </div>
                </div>
                <p className="text-[13px] text-[#334155] max-w-sm">
                  {cat.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.services.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    className="group block rounded-2xl bg-white overflow-hidden ring-1 ring-[#e0dccf] shadow-card hover:-translate-y-1 hover:shadow-lift transition-all"
                  >
                    <div className="relative h-44 bg-[#f5ead3]">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between">
                        <h3 className="text-[15px] font-bold text-[#000033]">
                          {s.name}
                        </h3>
                        <ArrowRightIcon className="h-4 w-4 text-[#a2844e] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <div className="mt-2 h-[2px] w-10 bg-[#a2844e] rounded-full" />
                      <p className="mt-3 text-[12.5px] text-[#334155] leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <PageCTA heading={cta.heading ?? "Not sure which service you need?"} body={cta.body} />
    </PageShell>
  );
}
