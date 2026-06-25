import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import data from "@/data/pages-main.json";
import { CONTACT } from "@/components/navData";

const page = data["book-appointment"];

export const metadata: Metadata = {
  title: `${page.title} — Bal Dental Centre`,
  description: page.subheading,
};

export default function BookAppointmentPage() {
  const [intro, formSec, callSec] = page.sections;
  const SERVICES_FOR_FORM = [
    "New Patient Exam & Cleaning",
    "Emergency / Same-Day Visit",
    "Cosmetic Consultation",
    "Dental Implants",
    "Invisalign",
    "Teeth Whitening",
    "Other / Not Sure",
  ];

  return (
    <PageShell>
      <PageHero
        eyebrow="BOOK ONLINE"
        title={page.title}
        subtitle={page.subheading}
        image={page.hero}
        crumbs={[{ label: "Book Appointment" }]}
      />

      {/* Intro */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[920px] px-6 text-center">
          <h2 className="text-[24px] sm:text-[32px] font-extrabold text-[#000033]">
            {intro.heading}
          </h2>
          <p className="mt-4 text-[14px] text-[#334155] leading-relaxed">
            {intro.body}
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="bg-gradient-to-b from-[#fff8ee] via-[#f7f5ea] to-[#fff8ee] py-16">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 items-start">
            <div className="rounded-2xl bg-white ring-1 ring-[#e0dccf] shadow-card p-7 sm:p-9">
              <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
                {formSec.subheading}
              </span>
              <h2 className="mt-2 text-[24px] sm:text-[30px] font-extrabold text-[#000033]">
                {formSec.heading}
              </h2>
              <p className="mt-3 text-[13px] text-[#334155]">
                {formSec.body}
              </p>

              <form
                action={CONTACT.emailHref}
                method="post"
                className="mt-7 space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#000033]">
                      First Name *
                    </span>
                    <input
                      name="firstName"
                      type="text"
                      required
                      className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#000033]">
                      Last Name *
                    </span>
                    <input
                      name="lastName"
                      type="text"
                      required
                      className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                    />
                  </label>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#000033]">
                      Phone *
                    </span>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#000033]">
                      Email *
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-[12px] font-semibold text-[#000033]">
                    Service Needed
                  </span>
                  <select
                    name="service"
                    className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                  >
                    {SERVICES_FOR_FORM.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#000033]">
                      Preferred Date
                    </span>
                    <input
                      name="date"
                      type="date"
                      className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-[12px] font-semibold text-[#000033]">
                      Preferred Time
                    </span>
                    <select
                      name="time"
                      className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                    >
                      <option>Morning (9am – 12pm)</option>
                      <option>Afternoon (12pm – 5pm)</option>
                      <option>Evening (5pm – 7pm)</option>
                      <option>Weekend</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="text-[12px] font-semibold text-[#000033]">
                    Notes (Optional)
                  </span>
                  <textarea
                    name="notes"
                    rows={3}
                    className="mt-1 w-full px-3 py-2 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                  />
                </label>

                <button
                  type="submit"
                  className="btn-shimmer inline-flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#a2844e] px-7 text-[13px] font-semibold text-white shadow-gold hover:bg-[#8a6e3d]"
                >
                  Request Appointment
                  <ArrowRightIcon className="h-4 w-4" />
                </button>

                <p className="text-[11px] text-[#334155]">
                  Our team confirms within 2 business hours.
                </p>
              </form>
            </div>

            <aside className="space-y-5">
              {formSec.form?.sellingPoints?.length ? (
                <div className="rounded-2xl bg-[#000033] text-white p-6 ring-1 ring-white/10 shadow-lift">
                  <span className="text-[11px] font-bold tracking-[0.22em] text-[#d8c79a]">
                    WHY BOOK HERE
                  </span>
                  <ul className="mt-4 space-y-3 text-[13px] text-white/90">
                    {formSec.form.sellingPoints.map((s) => (
                      <li key={s} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#a2844e] text-white">
                          <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden>
                            <path
                              d="m5 12 5 5 9-10"
                              stroke="currentColor"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {formSec.sidebarAward ? (
                <div className="rounded-2xl bg-white p-5 ring-1 ring-[#e0dccf] shadow-card">
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl">
                    <Image
                      src={formSec.sidebarAward.image}
                      alt={formSec.sidebarAward.imageAlt ?? ""}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-[#a2844e]">
                    {formSec.sidebarAward.badge}
                  </div>
                  <p className="mt-1 text-[12.5px] text-[#000033] font-semibold">
                    {formSec.sidebarAward.badgeDetail}
                  </p>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </section>

      {/* Prefer to call */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="rounded-3xl bg-gradient-to-br from-[#bf9c5d] to-[#8a6e3d] text-white p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-center">
              <div>
                <span className="text-[11px] font-bold tracking-[0.22em] text-white/90">
                  PREFER TO CALL
                </span>
                <h2 className="serif mt-2 text-[28px] sm:text-[36px] font-semibold leading-tight">
                  {callSec.heading}
                </h2>
                <p className="mt-3 text-[13px] text-white/90 max-w-xl">
                  {callSec.body}
                </p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-5 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-7 text-[14px] font-bold text-white hover:bg-[#000033] shadow-lg"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {callSec.phone}
                </a>
              </div>

              <div className="rounded-2xl bg-white/10 backdrop-blur ring-1 ring-white/30 p-5 text-[12px]">
                <div className="flex items-center gap-2 text-white/90 mb-3">
                  <ClockIcon className="h-4 w-4" /> <span className="font-bold">OFFICE HOURS</span>
                </div>
                {(callSec.hours as { day: string; time: string }[])?.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between border-b border-white/15 last:border-0 py-1.5"
                  >
                    <span className="text-white/80">{h.day}</span>
                    <span className="font-semibold text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {callSec.locationNote ? (
              <div className="mt-6 pt-5 border-t border-white/20 flex items-start gap-2 text-[12px] text-white/80">
                <MapPinIcon className="h-4 w-4 mt-0.5 shrink-0 text-[#d8c79a]" />
                {callSec.locationNote}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
