import Image from "next/image";
import { ArrowRightIcon, PhoneIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { CONTACT } from "./navData";

const FEATURE_OFFERS = [
  {
    badge: "Most Popular",
    image: "/baldental/flipbox-dental-implants-front.jpg",
    alt: "Dental implants close-up",
    small: "Starting at",
    price: "$3,999",
    title: "Dental Implants",
    description:
      "Permanent, natural-feeling teeth replacements — all-inclusive package with consult, implant, and crown.",
    href: "/services/dental-implants/",
  },
  {
    badge: "Limited Time",
    image: "/baldental/flipbox-invisalign-front.jpg",
    alt: "Invisalign clear aligner",
    small: "For only",
    price: "$3,999",
    title: "Invisalign Clear Aligners",
    description:
      "Straighten your smile with virtually invisible aligners. Monthly financial payments available — call us for a consultation!",
    href: "/services/invisalign/",
  },
];

const TRUST_POINTS = [
  "Open 7 Days a Week",
  "Same-Day Wisdom Teeth Extractions",
  "Direct Insurance Billing",
  "Payment Plans Available",
  "CDCP Patients Welcome",
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
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

export function Promotions() {
  return (
    <section className="relative bg-navy-animated text-white pt-20 pb-24 sm:pt-24 sm:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="mx-auto max-w-[1440px] px-6 relative">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#d8c79a]">
              <span className="h-px w-8 bg-[#d8c79a]" /> LIMITED-TIME OFFERS
              <span className="h-px w-8 bg-[#d8c79a]" />
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[40px] md:text-[48px] font-extrabold tracking-tight leading-[1.05]">
              Special Dental Promotions
            </h2>
            <p className="mt-4 text-[14px] text-white/80 max-w-xl mx-auto">
              Save on the treatments you need most — exclusive offers from your
              Scarborough dentist.
            </p>
          </div>
        </Reveal>

        {/* HERO OFFER — Free $50 Gift Card */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#a2844e] via-[#b6985d] to-[#8a6e3d] shadow-2xl ring-1 ring-white/20">
            <div
              aria-hidden
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#fff 1.2px, transparent 1.2px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" aria-hidden />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#000033]/20 blur-2xl" aria-hidden />

            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-10 items-center p-7 sm:p-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  New Patient Special
                </span>
                <h3 className="mt-4 text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.0] text-white drop-shadow-md">
                  FREE{" "}
                  <span className="text-white">$50 Gift Card</span>
                </h3>
                <p className="mt-3 text-[14px] sm:text-[15px] text-white/95 max-w-xl leading-relaxed">
                  Get a complimentary <span className="font-semibold">$50 gift card</span>{" "}
                  with your{" "}
                  <span className="font-semibold">
                    New Patient Exam, X-Ray &amp; Teeth Cleaning
                  </span>
                  . Plus child-friendly dentistry with weekend and late-evening
                  appointments.
                </p>

                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-white/95">
                  {TRUST_POINTS.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
                        <CheckIcon className="h-3 w-3 text-white" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={CONTACT.bookUrl}
                    className="btn-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#000033] px-7 text-[13px] font-bold text-white hover:bg-black shadow-lg transition-colors"
                  >
                    Claim Your Gift Card
                    <ArrowRightIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={CONTACT.phoneHref}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/15 backdrop-blur ring-1 ring-white/40 px-6 text-[13px] font-semibold text-white hover:bg-white hover:text-[#000033] transition-colors"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              {/* Gift card mock */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-3xl bg-white/30 blur-lg" />
                  <div className="relative w-[280px] sm:w-[320px] rounded-2xl bg-gradient-to-br from-[#fff8ee] to-[#f5ead3] p-5 shadow-2xl ring-1 ring-black/10 text-[#000033] rotate-[-3deg]">
                    <div className="flex items-center justify-between">
                      <Image
                        src="/baldental/logo-main.png"
                        alt="Bal Dental Centre"
                        width={80}
                        height={42}
                        className="object-contain"
                      />
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[#a2844e]">
                        Gift Card
                      </span>
                    </div>
                    <div className="mt-4 text-center">
                      <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#a2844e]">
                        Value
                      </div>
                      <div className="mt-1 text-[64px] font-extrabold text-[#000033] leading-none">
                        $50
                      </div>
                      <div className="mt-2 text-[10px] uppercase tracking-widest text-[#334155]">
                        Compliments of Bal Dental Centre
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-[9px] text-[#334155]">
                      <span className="font-mono">
                        •••• •••• •••• 2026
                      </span>
                      <span>NEW PATIENT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* TWO OFFER CARDS */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FEATURE_OFFERS.map((card, i) => (
            <Reveal key={card.title} delay={i * 120}>
              <article className="group relative flex flex-col h-full rounded-2xl bg-white overflow-hidden shadow-card hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center gap-1 rounded-full bg-[#000033] px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
                  {card.badge}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 flex-1">
                  <div className="relative h-64 sm:h-full bg-[#f5ead3] order-first">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7 flex flex-col">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#334155]">
                        {card.small}
                      </div>
                      <div className="mt-1 text-[40px] sm:text-[44px] font-extrabold text-[#a2844e] leading-none">
                        {card.price}
                      </div>
                    </div>
                    <h3 className="mt-4 text-[20px] font-bold text-[#000033]">
                      {card.title}
                    </h3>
                    <div className="mt-2 h-[2px] w-10 bg-[#a2844e] rounded-full" />
                    <p className="mt-4 text-[13px] leading-relaxed text-[#334155] flex-1">
                      {card.description}
                    </p>
                    <div className="mt-6">
                      <a
                        href={card.href}
                        className="btn-shimmer inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#a2844e] px-6 text-[12px] font-semibold text-white shadow-gold hover:bg-[#8a6e3d] transition-colors"
                      >
                        Learn More
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* REFUGEE / IFHP BANNER */}
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-2xl bg-white text-[#000033] shadow-card ring-1 ring-[#e0dccf]">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-center p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#a2844e] text-white shadow-gold">
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
                    <path
                      d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M9 11.5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2.5L11 15"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a2844e]">
                    Inclusive Care
                  </div>
                  <h3 className="mt-1 text-[18px] sm:text-[20px] font-extrabold uppercase">
                    Refugee Patients Welcome
                  </h3>
                  <p className="mt-1 text-[13px] text-[#334155]">
                    We accept <span className="font-bold text-[#000033]">IFHP Insurance</span>{" "}
                    — quality dental care for refugees and protected persons in
                    Scarborough.
                  </p>
                </div>
              </div>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#000033] px-6 text-[12px] font-semibold text-white hover:bg-[#a2844e] transition-colors shrink-0 w-full md:w-auto"
              >
                <PhoneIcon className="h-4 w-4" />
                Call {CONTACT.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
