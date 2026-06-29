"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { CONTACT } from "./navData";

type Faq = { q: string; a: string };

const FAQS: Faq[] = [
  {
    q: "Are you accepting new patients?",
    a: "Yes! Bal Dental Centre warmly welcomes new patients of all ages — from toddlers to seniors. New patients booking a first exam, X-ray, and cleaning also receive a complimentary $50 gift card. Call 416-267-6789 or book online to get started.",
  },
  {
    q: "Do you accept the Canadian Dental Care Plan (CDCP)?",
    a: "Yes, we are proud CDCP-approved providers and welcome patients enrolled in the Canadian Dental Care Plan. We also accept IFHP (refugee), NIHB, and direct billing to most major insurance providers — making care accessible for the whole community.",
  },
  {
    q: "Can I book a same-day or emergency appointment?",
    a: "Absolutely. Toothache, broken tooth, swelling, or knocked-out tooth — call us at 416-267-6789 and we will do our best to see you the same day. We reserve daily emergency slots and are open 7 days a week including evenings and weekends.",
  },
  {
    q: "What are your hours and do you open on weekends?",
    a: "We are open 7 days a week to fit busy schedules. Monday to Friday 9 a.m.–7 p.m., Saturday 9 a.m.–6 p.m., and Sunday 10 a.m.–5 p.m. — evenings and weekends always welcome.",
  },
  {
    q: "Do you offer direct insurance billing?",
    a: "Yes. We submit claims electronically and directly to your insurance provider so you only pay any remaining balance — no paperwork hassle on your end. Bring your insurance card to your visit and our front-desk team will handle the rest.",
  },
  {
    q: "What payment and financing options are available?",
    a: "We offer flexible monthly payment plans with $0 down options on treatments like Invisalign and implants. We accept cash, debit, all major credit cards, and partner with third-party financing so cost never stands between you and the smile you deserve.",
  },
  {
    q: "Do you treat children and the whole family?",
    a: "Yes — we are a family-friendly practice and love seeing kids. Our caring team makes children feel safe and at ease, and our flexible hours make it easy for parents to book the whole family on the same day.",
  },
  {
    q: "Where are you located and is parking available?",
    a: "We are at 4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2 — easy to reach from Eglinton East, Kennedy, and the surrounding Scarborough neighbourhoods. Free patient parking is available right on-site.",
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
