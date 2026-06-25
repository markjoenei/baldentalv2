"use client";

import { useState } from "react";
import { MinusIcon, PlusIcon } from "./Icons";

export function PageFAQ({
  faqs,
  heading = "Frequently Asked Questions",
  eyebrow = "FAQ",
}: {
  faqs: { q: string; a: string }[];
  heading?: string;
  eyebrow?: string;
}) {
  const [open, setOpen] = useState<Record<number, boolean>>({});
  if (!faqs?.length) return null;
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fff8ee] to-white py-16 sm:py-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/3 -left-20 h-72 w-72 rounded-full bg-[#a2844e]/[0.08] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-1/3 -right-20 h-72 w-72 rounded-full bg-[#000033]/[0.04] blur-3xl"
      />

      <div className="relative mx-auto max-w-[980px] px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
            <span className="h-px w-8 bg-[#a2844e]" /> {eyebrow}
            <span className="h-px w-8 bg-[#a2844e]" />
          </span>
          <h2 className="mt-3 text-[26px] sm:text-[34px] md:text-[40px] font-extrabold tracking-tight text-[#000033] leading-[1.1]">
            {heading}
          </h2>
        </div>

        <div className="mt-10 divide-y divide-[#e0dccf] rounded-2xl bg-white ring-1 ring-[#e0dccf] shadow-card">
          {faqs.map((f, idx) => {
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
                    {isOpen ? <MinusIcon className="h-4 w-4" /> : <PlusIcon className="h-4 w-4" />}
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
      </div>
    </section>
  );
}
