import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon } from "@/components/Icons";
import { PageCTA } from "@/components/PageCTA";
import { PageFAQ } from "@/components/PageFAQ";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import { getService, getServiceSlugs } from "@/lib/services";

export function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service Not Found — Bal Dental Centre" };
  return {
    title: `${s.title} — Bal Dental Centre`,
    description: s.subheading,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const supportingImage = service.images?.[0];
  const secondImage = service.images?.[1];

  return (
    <PageShell>
      <PageHero
        eyebrow="OUR SERVICES"
        title={service.title}
        subtitle={service.subheading}
        image={service.hero}
        crumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Intro section */}
      {service.sections[0] ? (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-[1240px] px-6 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              {service.sections[0].heading ? (
                <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-extrabold text-[#000033] leading-tight">
                  {service.sections[0].heading}
                </h2>
              ) : null}
              {service.sections[0].paragraphs?.map((p, i) => (
                <p key={i} className="mt-4 text-[14px] leading-relaxed text-[#334155]">
                  {p}
                </p>
              ))}
              {service.sections[0].bullets?.length ? (
                <ul className="mt-5 space-y-2.5 text-[14px] text-[#334155]">
                  {service.sections[0].bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a2844e]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {supportingImage ? (
              <div
                className="relative aspect-[5/4] w-full overflow-hidden shadow-xl ring-1 ring-[#e0dccf]"
                style={{ borderRadius: "50% / 22%" }}
              >
                <Image
                  src={supportingImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Benefits / h3s grid (services-c) */}
      {service.benefits?.length ? (
        <section className="bg-gradient-to-b from-[#fff8ee] via-[#f7f5ea] to-[#fff8ee] py-16">
          <div className="mx-auto max-w-[1240px] px-6">
            <div className="text-center mb-10">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
                WHY PATIENTS LOVE IT
              </span>
              <h2 className="mt-2 text-[24px] sm:text-[32px] font-extrabold text-[#000033]">
                Key Benefits
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.benefits.map((b, i) => (
                <div
                  key={b}
                  className="rounded-2xl bg-white ring-1 ring-[#e0dccf] shadow-card p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#a2844e] text-white font-extrabold text-[12px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[15px] font-bold text-[#000033]">{b}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Middle sections (1+) */}
      {service.sections.slice(1).map((sec, idx) => {
        if (!sec.heading && !sec.paragraphs?.length && !sec.bullets?.length) return null;
        const useImage = idx === 0 && secondImage;
        const reversed = idx % 2 === 0;
        return (
          <section
            key={idx}
            className={
              idx % 2 === 0
                ? "bg-white py-14"
                : "bg-gradient-to-b from-[#fff8ee] via-[#f7f5ea] to-[#fff8ee] py-14"
            }
          >
            <div
              className={`mx-auto max-w-[1240px] px-6 ${
                useImage ? "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center" : ""
              }`}
            >
              {useImage && !reversed ? (
                <div
                  className="relative aspect-[5/4] w-full overflow-hidden shadow-xl ring-1 ring-[#e0dccf]"
                  style={{ borderRadius: "50% / 22%" }}
                >
                  <Image
                    src={secondImage}
                    alt={sec.heading || service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
              <div className={useImage ? "" : "max-w-[920px] mx-auto"}>
                {sec.heading ? (
                  <h2 className="text-[24px] sm:text-[30px] md:text-[34px] font-extrabold text-[#000033] leading-tight">
                    {sec.heading}
                  </h2>
                ) : null}
                {sec.paragraphs?.map((p, i) => (
                  <p
                    key={i}
                    className="mt-4 text-[14px] leading-relaxed text-[#334155]"
                  >
                    {p}
                  </p>
                ))}
                {sec.bullets?.length ? (
                  <ul className="mt-5 space-y-2.5 text-[14px] text-[#334155]">
                    {sec.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a2844e]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
              {useImage && reversed ? (
                <div
                  className="relative aspect-[5/4] w-full overflow-hidden shadow-xl ring-1 ring-[#e0dccf]"
                  style={{ borderRadius: "50% / 22%" }}
                >
                  <Image
                    src={secondImage}
                    alt={sec.heading || service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      {/* Pricing */}
      {service.pricing?.length ? (
        <section className="bg-navy-animated text-white py-14 overflow-hidden relative">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative mx-auto max-w-[1100px] px-6">
            <div className="text-center mb-8">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#d8c79a]">
                INVESTMENT
              </span>
              <h2 className="mt-2 text-[24px] sm:text-[30px] font-extrabold">
                Pricing &amp; Cost
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {service.pricing.slice(0, 3).map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/5 backdrop-blur ring-1 ring-white/10 p-5 text-[13px] text-white/90 leading-relaxed"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <PageFAQ faqs={service.faqs} heading={`Questions About ${service.title}`} />

      {/* Related services */}
      {service.relatedServices?.length ? (
        <section className="bg-white py-14">
          <div className="mx-auto max-w-[1100px] px-6">
            <h3 className="text-[18px] font-bold text-[#000033] mb-4">
              Related services
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.relatedServices.map((r) => (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#fff8ee] ring-1 ring-[#e0dccf] px-4 py-2 text-[13px] font-semibold text-[#000033] hover:bg-[#a2844e] hover:text-white transition-colors"
                >
                  {r.name}
                  <ArrowRightIcon className="h-3 w-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <PageCTA
        heading={`Ready for ${service.title}?`}
        body="Book your visit online or call our Scarborough office — same-day appointments often available."
      />
    </PageShell>
  );
}
