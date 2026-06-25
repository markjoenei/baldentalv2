"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon, ChevronDownIcon } from "./Icons";
import { Reveal } from "./Reveal";

const ITEMS = [
  {
    num: "01",
    title: "We Do It All",
    body:
      "Time for a checkup and cleaning? Need a tooth repaired or replaced? Want your smile to look fantastic at an upcoming special event? If so, you'll find everything you need right here at the Bal Dental Centre. We're able to perform just about any treatment you can imagine in-house, making it easier than ever to get the healthy, beautiful smile you deserve.",
  },
  {
    num: "02",
    title: "Highly Trained Team",
    body:
      "Our dentists and hygienists undergo continuous education to bring you the latest techniques and technology in modern dentistry.",
  },
  {
    num: "03",
    title: "IV Sedation Dentistry Available",
    body:
      "Anxious about dental visits? Our IV sedation option lets you sleep comfortably through complex procedures, waking up to a beautiful smile.",
  },
  {
    num: "04",
    title: "State-Of-The-Art Dental Office",
    body:
      "We invest in the best equipment — digital X-rays, intraoral cameras, and comfortable treatment chairs — for precise, efficient care.",
  },
  {
    num: "05",
    title: "Flexible Appointments",
    body:
      "Open 7 days a week including evenings and weekends. We work around your schedule so you never have to miss care.",
  },
  {
    num: "06",
    title: "Dental Emergencies Welcome",
    body:
      "Tooth pain or injury? We accept same-day emergency appointments. Call us and we'll see you as soon as possible.",
  },
];

export function Welcome() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Parallax dental office background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/baldental/office-tour-poster.png)" }}
      />
      {/* Cream overlay so content stays legible */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[#fdfcf6]/95 via-[#f7f5ea]/92 to-[#fdfcf6]/95"
      />
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e0dccf] to-transparent"
      />
      <div
        aria-hidden
        className="absolute top-10 -left-32 h-72 w-72 rounded-full bg-[#a2844e]/[0.12] blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-10 -right-32 h-80 w-80 rounded-full bg-[#000033]/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-10 lg:gap-16 items-start">
          <Reveal className="reveal-left">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              <span className="h-px w-8 bg-[#a2844e]" /> WHY PATIENTS CHOOSE US
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[36px] md:text-[40px] font-extrabold tracking-tight text-[#000033] leading-[1.1]">
              Why Choose Bal Dental Centre as Your{" "}
              <span className="text-[#a2844e]">Trusted Dentist</span> in Scarborough?
            </h2>

            <div className="mt-8 space-y-3">
              {ITEMS.map((it, idx) => {
                const isOpen = open === idx;
                return (
                  <div
                    key={it.num}
                    className={`rounded-2xl border transition-all ${
                      isOpen
                        ? "border-[#a2844e]/30 bg-[#fff8ee] shadow-card"
                        : "border-[#e0dccf] bg-white hover:border-[#a2844e]/30"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : idx)}
                      className="w-full flex items-center gap-4 text-left px-5 py-4"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-extrabold transition-colors ${
                          isOpen
                            ? "bg-[#a2844e] text-white"
                            : "bg-[#f5ead3] text-[#a2844e]"
                        }`}
                      >
                        {it.num}
                      </span>
                      <span className="flex-1 text-[15px] font-bold text-[#000033]">
                        {it.title}
                      </span>
                      <ChevronDownIcon
                        className={`h-4 w-4 text-[#a2844e] transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out overflow-hidden ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="min-h-0">
                        <p className="px-5 pb-4 pl-[76px] text-[13.5px] text-[#334155] leading-relaxed">
                          {it.body}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal className="reveal-right relative">
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#a2844e]/15 rounded-[50%/40%]" aria-hidden />

            <div
              className="relative aspect-[4/5] w-full overflow-hidden shadow-xl ring-1 ring-[#e0dccf]"
              style={{ borderRadius: "50% / 22%" }}
            >
              <Image
                src="/baldental/why-choose-feature.jpg"
                alt="Dentist and assistant treating a patient at Bal Dental Centre"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>

            {/* Floating award badge — outside the clipped image so it isn't cut by the squircle border-radius */}
            <div className="absolute top-6 right-2 sm:-right-4 lg:-right-6 z-20 rotate-[6deg] drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:rotate-0 hover:scale-105">
              <Image
                src="/baldental/award-badge.png"
                alt="Readers' Choice Winner 2013–17"
                width={130}
                height={108}
                className="object-contain"
              />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { v: "1,000+", l: "Happy Patients" },
                { v: "7", l: "Days a Week" },
                { v: "18", l: "Services" },
              ].map((s) => (
                <div key={s.l} className="text-center bg-[#fff8ee] rounded-xl p-3 ring-1 ring-[#e0dccf]">
                  <div className="text-[22px] font-extrabold text-[#000033]">
                    {s.v}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[#334155] font-semibold">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/about/"
              className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#000033] px-6 text-[13px] font-semibold text-white hover:bg-[#a2844e] transition-colors w-full"
            >
              Learn More About Us
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
