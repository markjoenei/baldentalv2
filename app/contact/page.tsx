import type { Metadata } from "next";
import Image from "next/image";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/Icons";
import { PageCTA } from "@/components/PageCTA";
import { PageHero } from "@/components/PageHero";
import { PageShell } from "@/components/PageShell";
import data from "@/data/pages-main.json";
import { CONTACT } from "@/components/navData";

const page = data.contact;

export const metadata: Metadata = {
  title: `${page.title} — Bal Dental Centre`,
  description: page.subheading,
};

const ICONS: Record<string, typeof PhoneIcon> = {
  "Call Us (Primary)": PhoneIcon,
  "Our Location": MapPinIcon,
  "Email (General Inquiries)": MailIcon,
};

export default function ContactPage() {
  const [intro, reach, form, hours, cta] = page.sections;

  return (
    <PageShell>
      <PageHero
        eyebrow="GET IN TOUCH"
        title={page.title}
        subtitle={page.subheading}
        image={page.hero}
        crumbs={[{ label: "Contact Us" }]}
      />

      {/* Intro */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <h2 className="text-[24px] sm:text-[30px] font-extrabold text-[#000033]">
            {intro.heading}
          </h2>
          <p className="mt-4 text-[14px] text-[#334155] leading-relaxed max-w-2xl mx-auto">
            {intro.body}
          </p>
        </div>
      </section>

      {/* 3 contact methods */}
      <section className="bg-gradient-to-b from-white via-[#fff8ee] to-white py-14">
        <div className="mx-auto max-w-[1240px] px-6">
          <div className="text-center mb-10">
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              REACH US YOUR WAY
            </span>
            <h2 className="mt-2 text-[24px] sm:text-[32px] font-extrabold text-[#000033]">
              {reach.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {(reach.contactMethods as { label: string; value: string; href: string }[])?.map(
              (m) => {
                const Icon = ICONS[m.label] ?? PhoneIcon;
                return (
                  <a
                    key={m.label}
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block rounded-2xl bg-white p-6 ring-1 ring-[#e0dccf] shadow-card hover:-translate-y-1 hover:shadow-lift transition-all text-center"
                  >
                    <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fff5db] text-[#a2844e] group-hover:bg-[#a2844e] group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-[#a2844e]">
                      {m.label}
                    </div>
                    <div className="mt-1.5 text-[14px] font-semibold text-[#000033]">
                      {m.value}
                    </div>
                  </a>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Contact form placeholder + side image */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1240px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              QUICK CONTACT FORM
            </span>
            <h2 className="mt-2 text-[24px] sm:text-[32px] font-extrabold text-[#000033]">
              {form.heading}
            </h2>
            <p className="mt-3 text-[13px] text-[#334155]">{form.body}</p>

            <form
              className="mt-7 space-y-4 rounded-2xl bg-[#fff8ee] ring-1 ring-[#e0dccf] p-6"
              action={CONTACT.emailHref}
              method="post"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-[12px] font-semibold text-[#000033]">
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                  />
                </label>
                <label className="block">
                  <span className="text-[12px] font-semibold text-[#000033]">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-[12px] font-semibold text-[#000033]">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full h-11 px-3 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                />
              </label>
              <label className="block">
                <span className="text-[12px] font-semibold text-[#000033]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1 w-full px-3 py-2 rounded-md border border-[#e0dccf] bg-white text-[14px] outline-none focus:border-[#a2844e]"
                />
              </label>
              <button
                type="submit"
                className="btn-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#a2844e] px-7 text-[13px] font-semibold text-white shadow-gold hover:bg-[#8a6e3d] w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Map embed */}
          <div className="relative h-[420px] lg:h-full lg:min-h-[480px] rounded-2xl overflow-hidden ring-1 ring-[#e0dccf] shadow-card">
            <iframe
              title="Bal Dental Centre map"
              src="https://maps.google.com/maps?q=Bal+Dental+Centre,+4+Greystone+Walk+Dr+%234,+Scarborough,+ON+M1K+5J2&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="bg-gradient-to-b from-white via-[#fff8ee] to-white py-14">
        <div className="mx-auto max-w-[820px] px-6">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold tracking-[0.22em] text-[#a2844e]">
              OPEN 7 DAYS A WEEK
            </span>
            <h2 className="mt-2 text-[24px] sm:text-[32px] font-extrabold text-[#000033]">
              {hours.heading}
            </h2>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-[#e0dccf] shadow-card overflow-hidden">
            {(hours.hours as { day: string; time: string }[])?.map((h, i) => (
              <div
                key={h.day}
                className={`flex items-center justify-between px-6 py-4 text-[14px] ${
                  i < (hours.hours as []).length - 1 ? "border-b border-[#e0dccf]" : ""
                }`}
              >
                <span className="font-semibold text-[#000033] inline-flex items-center gap-2">
                  <ClockIcon className="h-4 w-4 text-[#a2844e]" />
                  {h.day}
                </span>
                <span className="text-[#334155]">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA heading={cta.heading} body={cta.body} />
    </PageShell>
  );
}
