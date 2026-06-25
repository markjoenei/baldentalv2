"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  GoogleGIcon,
  StarIcon,
} from "./Icons";
import { Reveal } from "./Reveal";

const REVIEWS = [
  {
    name: "Priya Sharma",
    when: "2 weeks ago",
    text: "Best dental experience I've had. The team is professional, gentle, and explains every step. They even accept CDCP — made it so easy.",
    avatar:
      "https://ui-avatars.com/api/?name=Priya+Sharma&background=000033&color=fff&size=128",
  },
  {
    name: "Michael Chen",
    when: "1 month ago",
    text: "Had a dental emergency on a Sunday — they fit me in the same day. Honest pricing, great care. Highly recommend Bal Dental Centre.",
    avatar:
      "https://ui-avatars.com/api/?name=Michael+Chen&background=a2844e&color=fff&size=128",
  },
  {
    name: "Sarah Johnson",
    when: "3 weeks ago",
    text: "I'm usually anxious at the dentist but their IV sedation made my implant procedure painless. Friendly staff, modern office.",
    avatar:
      "https://ui-avatars.com/api/?name=Sarah+Johnson&background=14b8a6&color=fff&size=128",
  },
  {
    name: "Arjun Patel",
    when: "2 months ago",
    text: "Got my Invisalign here. Clear pricing, no surprises. Direct billing with my insurance — super convenient.",
    avatar:
      "https://ui-avatars.com/api/?name=Arjun+Patel&background=8b5cf6&color=fff&size=128",
  },
  {
    name: "Linda Wong",
    when: "1 week ago",
    text: "Took my whole family. Kid-friendly, multilingual staff (Cantonese and English). They make it easy to schedule everyone together.",
    avatar:
      "https://ui-avatars.com/api/?name=Linda+Wong&background=ef4444&color=fff&size=128",
  },
];

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M7.3 6C4.8 6 3 8 3 10.5c0 2.2 1.6 4 3.7 4 .4 0 .7-.05 1.1-.15-.5 2-1.9 3.4-3.7 4l1 1.6c3-1 5-3.8 5-7.4C10.1 8.8 8.9 6 7.3 6Zm10.6 0c-2.5 0-4.3 2-4.3 4.5 0 2.2 1.6 4 3.7 4 .4 0 .7-.05 1.1-.15-.5 2-1.9 3.4-3.7 4l1 1.6c3-1 5-3.8 5-7.4 0-3.7-1.2-6.5-2.8-6.5Z" />
    </svg>
  );
}

export function Reviews() {
  const [start, setStart] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setStart((s) => (s + 1) % REVIEWS.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused]);

  const visible = Array.from(
    { length: 3 },
    (_, i) => REVIEWS[(start + i) % REVIEWS.length],
  );

  return (
    <section
      className="relative bg-gradient-to-b from-[#fff8ee] via-[#f7f5ea] to-[#fff8ee] pt-16 pb-24 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative background */}
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[#e0dccf] to-transparent"
      />
      <div
        aria-hidden
        className="absolute top-1/4 -right-32 h-80 w-80 rounded-full bg-[#a2844e]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-[#000033]/[0.06] blur-3xl"
      />
      {/* Giant quote watermark */}
      <svg
        aria-hidden
        className="absolute top-8 right-6 lg:right-20 w-48 h-48 lg:w-72 lg:h-72 text-[#a2844e]/[0.07]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7.3 6C4.8 6 3 8 3 10.5c0 2.2 1.6 4 3.7 4 .4 0 .7-.05 1.1-.15-.5 2-1.9 3.4-3.7 4l1 1.6c3-1 5-3.8 5-7.4C10.1 8.8 8.9 6 7.3 6Zm10.6 0c-2.5 0-4.3 2-4.3 4.5 0 2.2 1.6 4 3.7 4 .4 0 .7-.05 1.1-.15-.5 2-1.9 3.4-3.7 4l1 1.6c3-1 5-3.8 5-7.4 0-3.7-1.2-6.5-2.8-6.5Z" />
      </svg>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#a2844e 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              <span className="h-px w-8 bg-[#a2844e]" /> PATIENT STORIES
              <span className="h-px w-8 bg-[#a2844e]" />
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[36px] md:text-[44px] font-extrabold tracking-tight text-[#000033] leading-[1.05]">
              How Was Your Experience?
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-stretch">
          <Reveal className="reveal-left">
            <div className="h-full bg-white rounded-2xl p-6 text-center shadow-card ring-1 ring-[#e0dccf] flex flex-col items-center justify-center">
              <div className="text-[18px] font-extrabold tracking-wider text-[#000033]">
                EXCELLENT
              </div>
              <div className="mt-2 flex items-center gap-0.5 text-[#a2844e]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <div className="mt-2 text-[12px] text-[#334155]">
                Based on <span className="font-bold text-[#000033]">1,000+</span>{" "}
                patient reviews
              </div>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f7f5ea]">
                <GoogleGIcon className="h-4 w-4" />
                <span className="text-[11px] font-semibold text-[#000033]">
                  Verified on Google
                </span>
              </div>
              <a
                href="https://chatrbee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#a2844e] px-5 text-[11px] font-semibold text-white hover:bg-[#8a6e3d] shadow-gold"
              >
                Write a Review
              </a>
            </div>
          </Reveal>

          <Reveal className="reveal-right relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {visible.map((r, i) => (
                <article
                  key={`${r.name}-${i}-${start}`}
                  className="relative bg-white rounded-2xl p-5 shadow-card ring-1 ring-[#e0dccf] hover:shadow-lift transition-shadow animate-in"
                >
                  <QuoteIcon className="absolute top-3 right-3 h-6 w-6 text-[#a2844e]/20" />
                  <div className="flex items-center gap-3">
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                    <div className="min-w-0">
                      <div className="text-[12.5px] font-bold text-[#000033] truncate">
                        {r.name}
                      </div>
                      <div className="text-[10px] text-[#334155]">{r.when}</div>
                    </div>
                    <GoogleGIcon className="ml-auto h-4 w-4 shrink-0" />
                  </div>
                  <div className="mt-3 flex items-center gap-0.5 text-[#a2844e]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <p className="mt-3 text-[12.5px] text-[#334155] leading-relaxed line-clamp-4">
                    “{r.text}”
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() =>
                  setStart((s) => (s - 1 + REVIEWS.length) % REVIEWS.length)
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-[#e0dccf] text-[#000033] hover:bg-[#000033] hover:text-white transition-colors"
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </button>
              <div className="flex gap-1.5">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to review ${i + 1}`}
                    onClick={() => setStart(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === start ? "w-6 bg-[#a2844e]" : "w-2 bg-[#000033]/20"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label="Next review"
                onClick={() => setStart((s) => (s + 1) % REVIEWS.length)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow ring-1 ring-[#e0dccf] text-[#000033] hover:bg-[#000033] hover:text-white transition-colors"
              >
                <ChevronRightIcon className="h-4 w-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
