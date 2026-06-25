"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { CONTACT } from "./navData";

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "How do I find the best place to get dental work done?",
    a: "Time for a checkup and cleaning? Need a tooth repaired or replaced? Want your smile to look fantastic at an upcoming special event? If so, you'll find everything you need right here at the Bal Dental Centre. We're able to perform just about any treatment you can imagine in-house, making it easier than ever to get the healthy, beautiful smile you deserve.",
  },
  {
    q: "How can I make a same-day appointment with a dentist?",
    a: "Yes, call us at 416-267-6789 and we will do our very best to fit you in for an emergency or same-day appointment.",
  },
  {
    q: "What do you do if you can't afford a dentist?",
    a: "We offer flexible financing options and direct billing to most insurance providers. We will work with you to find a solution.",
  },
  {
    q: "What level of education is required to be a dentist?",
    a: "Dentists in Canada complete an undergraduate degree followed by 4 years of dental school to earn a DDS or DMD degree, along with provincial licensing.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <section className="relative bg-gradient-to-b from-white via-[#fff8ee] to-white pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-[#a2844e]/[0.08] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-1/3 -right-20 h-72 w-72 rounded-full bg-[#000033]/[0.04] blur-3xl"
      />
      {/* Giant decorative question mark watermarks */}
      <div
        aria-hidden
        className="absolute -top-10 right-4 lg:right-20 text-[280px] lg:text-[380px] font-extrabold text-[#a2844e]/[0.06] leading-none select-none hidden md:block"
      >
        ?
      </div>
      <div
        aria-hidden
        className="absolute -bottom-10 -left-4 text-[260px] lg:text-[360px] font-extrabold text-[#000033]/[0.05] leading-none select-none rotate-12 hidden md:block"
      >
        ?
      </div>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#a2844e 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              <span className="h-px w-8 bg-[#a2844e]" /> FAQ
              <span className="h-px w-8 bg-[#a2844e]" />
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight text-[#000033] leading-[1.05]">
              Frequently Asked Questions, Answered!
            </h2>
            <p className="mt-4 text-[14px] text-[#334155] max-w-2xl mx-auto leading-relaxed">
              Still have a few questions on your mind? Let us help you find the
              answers! With lunchtime, evening, and weekend hours, you&apos;re more
              than welcome to give our team a call at your convenience so we can
              assist you.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <div className="divide-y divide-[#e0dccf] rounded-2xl bg-white ring-1 ring-[#e0dccf] shadow-card">
            {FAQS.map((f, idx) => {
              const isOpen = !!open[idx];
              return (
                <div key={f.q} className="group">
                  <button
                    type="button"
                    onClick={() => setOpen((o) => ({ ...o, [idx]: !o[idx] }))}
                    className="w-full flex items-center justify-between gap-4 text-left py-5 px-6 hover:bg-[#fff8ee] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] sm:text-[15px] font-bold text-[#000033]">
                      {f.q}
                    </span>
                    <span
                      className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-[#a2844e] text-white"
                          : "bg-[#000033] text-white group-hover:bg-[#a2844e]"
                      }`}
                    >
                      {isOpen ? (
                        <MinusIcon className="h-4 w-4" />
                      ) : (
                        <PlusIcon className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0">
                      <p className="px-6 pb-5 text-[13.5px] text-[#334155] leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-white ring-1 ring-[#e0dccf] px-6 py-4 shadow-card">
            <span className="text-[13px] text-[#000033] font-medium">
              Still have questions? Our team is happy to help.
            </span>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex h-10 items-center justify-center rounded-full bg-[#a2844e] px-5 text-[12px] font-semibold text-white hover:bg-[#8a6e3d] shadow-gold"
            >
              Call {CONTACT.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
