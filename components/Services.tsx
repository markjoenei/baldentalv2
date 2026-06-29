"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRightIcon } from "./Icons";
import { Reveal } from "./Reveal";

type Service = {
  label: string;
  heading: string;
  body: string;
  image: string;
  alt: string;
  href: string;
};

const SERVICES: Service[] = [
  {
    label: "Preventive Dentistry",
    heading: "PREVENTIVE DENTISTRY KEEPS YOUR SMILE HEALTHY FOR LIFE",
    body: "Routine cleanings, exams, and protective treatments stop dental problems before they start. Regular preventive care saves you time, money, and discomfort down the road.",
    image: "/baldental/svc-preventive.jpg",
    alt: "Young patient with a bright, healthy smile from routine preventive dental care",
    href: "/services/preventive-dentistry/",
  },
  {
    label: "Dental Crowns & Bridges",
    heading: "DENTAL CROWNS & BRIDGES RESTORE TEETH & REGAIN CONFIDENCE",
    body: "Missing one or more teeth? Traditional dental crowns and bridges are a tried-and-true restorative dentistry solution. Crowns can reverse damage and decay by restoring the top of the tooth.",
    image: "/baldental/svc-crowns.png",
    alt: "Senior woman with grey hair smiling confidently after dental crowns and bridges",
    href: "/services/dental-crowns-bridges/",
  },
  {
    label: "Root Canals & Emergencies",
    heading: "GENTLE ROOT CANALS THAT SAVE YOUR NATURAL TOOTH",
    body: "Same-day root canals relieve severe pain and save your natural tooth using modern, gentle techniques. We also accept dental emergencies — call us first.",
    image: "/baldental/svc-rootcanal.jpg",
    alt: "Dentist providing gentle root canal treatment during an urgent dental visit",
    href: "/services/root-canal/",
  },
  {
    label: "Cosmetic Dentistry",
    heading: "COSMETIC DENTISTRY DESIGNED AROUND YOUR SMILE GOALS",
    body: "Smile makeovers, whitening, veneers, and bonding — designed around your face and goals. Walk out with the confident smile you've always wanted.",
    image: "/baldental/svc-cosmetic.webp",
    alt: "Confident patient with a radiant, bright smile after cosmetic dentistry",
    href: "/services/cosmetic-dentistry/",
  },
  {
    label: "Dental Implants",
    heading: "PERMANENT DENTAL IMPLANTS THAT LOOK & FEEL NATURAL",
    body: "Permanent, natural-feeling teeth replacements starting at $3,999 all-inclusive. Implants restore both function and confidence without compromise.",
    image: "/baldental/svc-implants-v2.png",
    alt: "Senior man with grey hair and beard smiling brightly with restored dental implants",
    href: "/services/dental-implants/",
  },
  {
    label: "Invisalign Clear Braces",
    heading: "INVISALIGN — STRAIGHTEN TEETH WITHOUT METAL WIRES",
    body: "Virtually invisible aligners that straighten teeth without metal wires or brackets. Comfortable, removable, and effective for most cases.",
    image: "/baldental/svc-invisalign-v2.jpg",
    alt: "Young Latina woman smiling confidently with straight teeth after Invisalign",
    href: "/services/invisalign/",
  },
];

export function Services() {
  const [active, setActive] = useState(1);
  const current = SERVICES[active];

  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      {/* Parallax dental office background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url(/baldental/affordable-dentistry.jpg)" }}
      />
      {/* Light cream overlay so content stays legible */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#f7f5ea]/92 to-white/95"
      />
      {/* Top + bottom curved white dividers */}
      <svg
        aria-hidden
        className="absolute top-0 left-0 right-0 w-full h-12 text-white"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C320,60 720,0 1080,30 C1280,42 1380,36 1440,28 L1440,0 Z"
          fill="currentColor"
        />
      </svg>
      <svg
        aria-hidden
        className="absolute bottom-0 left-0 right-0 w-full h-12 text-white rotate-180"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C320,60 720,0 1080,30 C1280,42 1380,36 1440,28 L1440,0 Z"
          fill="currentColor"
        />
      </svg>
      <div
        aria-hidden
        className="absolute top-1/4 -left-32 h-80 w-80 rounded-full bg-[#a2844e]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-[#000033]/[0.08] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              <span className="h-px w-8 bg-[#a2844e]" /> OUR SERVICES
              <span className="h-px w-8 bg-[#a2844e]" />
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight text-[#000033] leading-[1.05]">
              Featured Dental Services
            </h2>
            <p className="mt-4 text-[14px] text-[#334155] max-w-xl mx-auto">
              Click any service below to learn more about our personalized care.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 lg:gap-10 items-start">
          <Reveal className="reveal-left">
            <ul className="space-y-2">
              {SERVICES.map((s, i) => {
                const isActive = active === i;
                return (
                  <li key={s.label}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`w-full text-left rounded-2xl px-5 py-4 text-[14px] font-semibold transition-all flex items-center justify-between gap-3 ${
                        isActive
                          ? "bg-gradient-to-r from-[#f5ead3] to-[#fff8ee] text-[#000033] ring-1 ring-[#a2844e]/30 shadow-card"
                          : "bg-white text-[#000033] ring-1 ring-[#e0dccf] hover:-translate-y-0.5 hover:border-[#a2844e]/30 hover:shadow-sm"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-extrabold transition-colors ${
                            isActive
                              ? "bg-[#a2844e] text-white"
                              : "bg-[#f5ead3] text-[#a2844e]"
                          }`}
                        >
                          0{i + 1}
                        </span>
                        {s.label}
                      </span>
                      <ArrowRightIcon
                        className={`h-4 w-4 transition-all ${
                          isActive
                            ? "text-[#a2844e] translate-x-0.5"
                            : "text-[#000033]/30"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal className="reveal-right">
            <article
              key={current.label}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lift ring-1 ring-[#e0dccf] animate-in"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto md:min-h-[380px] bg-[#f5ead3]">
                  <Image
                    src={current.image}
                    alt={current.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.22em] text-[#a2844e]">
                    FEATURED SERVICE
                  </span>
                  <h3 className="mt-3 text-[18px] sm:text-[22px] font-extrabold uppercase text-[#000033] leading-tight">
                    {current.heading}
                  </h3>
                  <div className="mt-3 h-[2px] w-12 bg-[#a2844e] rounded-full" />
                  <p className="mt-4 text-[13.5px] leading-relaxed text-[#334155] flex-1">
                    {current.body}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={current.href}
                      className="btn-shimmer inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-[#a2844e] px-6 text-[12px] font-semibold text-white hover:bg-[#8a6e3d] shadow-gold transition-colors"
                    >
                      Learn More
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </a>
                    <a
                      href="/services/"
                      className="inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-white px-6 text-[12px] font-semibold text-[#000033] ring-1 ring-[#000033]/15 hover:bg-[#000033] hover:text-white transition-colors"
                    >
                      View All Services
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
