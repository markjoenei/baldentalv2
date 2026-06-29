import { ArrowRightIcon, PhoneIcon } from "./Icons";
import { MapleLeafIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { CONTACT } from "./navData";

const HIGHLIGHTS = [
  {
    title: "CDCP Approved Provider",
    body: "Bal Dental Centre is officially registered with the Canadian Dental Care Plan — billing is submitted directly to Sun Life.",
  },
  {
    title: "Who Qualifies",
    body: "Canadian residents with a family income under $90,000 who don't have other dental insurance — including seniors, children, and adults.",
  },
  {
    title: "What's Covered",
    body: "Cleanings, exams, X-rays, fillings, extractions, root canals, dentures and more — most preventive and restorative care is covered.",
  },
  {
    title: "We Handle the Paperwork",
    body: "Bring your CDCP member card and we'll take care of submission, co-pays, and follow-up so you can focus on your smile.",
  },
];

export function CdcpInfo() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fff8ee] to-white py-16 sm:py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-[#a2844e]/[0.10] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-1/3 -right-32 h-72 w-72 rounded-full bg-[#D80621]/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-[#a2844e]/30 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#000033]">
              <MapleLeafIcon className="h-4 w-4 text-[#D80621]" aria-hidden />
              Canadian Dental Care Plan
            </span>
            <h2 className="mt-4 text-[28px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight text-[#000033] leading-[1.05]">
              Proudly Accepting the{" "}
              <span className="text-[#a2844e]">CDCP</span> in Scarborough
            </h2>
            <p className="mt-4 text-[14px] sm:text-[15px] text-[#334155] leading-relaxed">
              The Canadian Dental Care Plan helps families, seniors, and
              children access affordable dental care. Bal Dental Centre is
              proud to be a CDCP provider — we also accept IFHP and NIHB
              coverage so everyone in our Scarborough community can get the
              care they deserve.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal key={h.title} delay={i * 100}>
              <div className="h-full flex items-start gap-4 rounded-2xl bg-white ring-1 ring-[#e0dccf] shadow-card p-5 sm:p-6 hover:shadow-lift hover:-translate-y-0.5 transition-all">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff8ee] ring-1 ring-[#a2844e]/30 text-[#a2844e]">
                  <MapleLeafIcon className="h-5 w-5 text-[#D80621]" aria-hidden />
                </span>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#000033]">
                    {h.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#334155]">
                    {h.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-[#000033] text-white p-7 sm:p-10 shadow-2xl">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#fff 1.2px, transparent 1.2px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div
              className="absolute -top-20 -right-16 h-56 w-56 rounded-full bg-[#a2844e]/20 blur-3xl"
              aria-hidden
            />
            <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center">
              <div>
                <h3 className="text-[20px] sm:text-[24px] font-extrabold leading-tight">
                  Not sure if you qualify for CDCP?
                </h3>
                <p className="mt-2 text-[13.5px] sm:text-[14px] text-white/85 max-w-2xl">
                  Our front-desk team can confirm your eligibility in minutes
                  and help you book your first covered visit. Walk-ins and
                  same-day appointments welcome.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href="/cdcp-dentist/"
                  className="btn-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#a2844e] px-6 text-[13px] font-semibold text-white hover:bg-[#8a6e3d] shadow-gold transition-colors"
                >
                  Learn About CDCP
                  <ArrowRightIcon className="h-4 w-4" />
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 px-6 text-[13px] font-semibold text-white hover:bg-white hover:text-[#000033] transition-colors"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
