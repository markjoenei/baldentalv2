import Image from "next/image";
import { ArrowRightIcon } from "./Icons";
import { Reveal } from "./Reveal";

const BULLETS = [
  {
    title: "Direct Insurance Billing",
    body: "We handle the paperwork — most insurance plans accepted.",
  },
  {
    title: "Flexible Financing Plans",
    body: "$0 down options so you can start treatment now and pay over time.",
  },
  {
    title: "Transparent Upfront Pricing",
    body: "No surprises — we walk you through every cost before treatment begins.",
  },
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="m5 12 5 5 9-10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Budget() {
  return (
    <section className="relative bg-navy-animated text-white py-16 sm:py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#a2844e]/15 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#a2844e]/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="reveal-left relative">
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#a2844e]/25 rounded-[50%/40%]" aria-hidden />
            <div
              className="relative aspect-[5/4] w-full overflow-hidden shadow-2xl ring-1 ring-white/15"
              style={{ borderRadius: "50% / 22%" }}
            >
              <Image
                src="/baldental/affordable-dentistry.jpg"
                alt="Bal Dental Centre reception desk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="reveal-right">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#d8c79a]">
              <span className="h-px w-8 bg-[#d8c79a]" /> AFFORDABLE CARE
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[36px] md:text-[42px] font-extrabold tracking-tight text-white leading-[1.1]">
              Committed to Affordable Dentistry in Scarborough
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-white/85">
              Our Dentists in Scarborough, located near Eglinton East, work hard
              to ensure your visits with us are productive, comfortable, and
              stress free. We never want concerns about cost to stand between
              you and your smile.
            </p>

            <ul className="mt-6 space-y-4">
              {BULLETS.map((b) => (
                <li key={b.title} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#a2844e] text-white shadow-gold">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="text-[14px] font-bold text-white">
                      {b.title}
                    </div>
                    <p className="text-[13px] text-white/80 mt-0.5">{b.body}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/services/"
                className="btn-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#a2844e] px-7 text-[13px] font-semibold text-white shadow-gold hover:bg-[#8a6e3d] transition-colors"
              >
                Explore Financial Options
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href="/cdcp-dentist/"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 px-6 text-[13px] font-semibold text-white hover:bg-white hover:text-[#000033] transition-colors"
              >
                CDCP Accepted
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
