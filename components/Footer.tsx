"use client";

import Image from "next/image";
import { Logo } from "./Logo";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  YoutubeIcon,
} from "./Icons";
import { CONTACT, HOURS, LANGUAGES } from "./navData";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about/" },
  { label: "Our Services", href: "/services/" },
  { label: "New Patients", href: "/new-patients/" },
  { label: "CDCP", href: "/cdcp-dentist/" },
  { label: "Emergency Care", href: "/services/dental-emergency/" },
  { label: "Contact Us", href: "/contact/" },
];

const SOCIALS = [
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { Icon: YoutubeIcon, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative bg-navy-animated text-[#f7f5ea]">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#a2844e] to-transparent" />

      <div className="mx-auto max-w-[1600px] px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Practice Info */}
          <div>
            <div className="bg-white inline-block rounded-lg p-3">
              <Logo width={120} height={64} />
            </div>
            <p className="mt-5 text-[13px] text-[#c8c4b8] leading-relaxed">
              Your neighbourhood dentist in Scarborough — comprehensive family,
              cosmetic, and emergency dentistry, open 7 days a week.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 text-[16px] font-bold text-white hover:text-[#a2844e] transition-colors"
              >
                <PhoneIcon className="h-5 w-5 text-[#a2844e]" />
                {CONTACT.phone}
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3">
              {SOCIALS.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#a2844e] text-white hover:bg-[#8a6e3d] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#a2844e]">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-3 text-[13px] text-[#c8c4b8]">
              <li className="flex gap-2.5">
                <PhoneIcon className="h-4 w-4 mt-0.5 text-[#a2844e] shrink-0" />
                <a href={CONTACT.phoneHref} className="hover:text-[#a2844e]">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MailIcon className="h-4 w-4 mt-0.5 text-[#a2844e] shrink-0" />
                <a
                  href={CONTACT.emailHref}
                  className="hover:text-[#a2844e] break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MapPinIcon className="h-4 w-4 mt-0.5 text-[#a2844e] shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
            </ul>

            <h3 className="mt-6 text-[13px] font-bold uppercase tracking-[0.18em] text-[#a2844e]">
              Quick Links
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[12.5px] text-[#c8c4b8]">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-[#a2844e] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#a2844e]">
              Office Hours
            </h3>
            <ul className="mt-5 space-y-1.5 text-[12.5px] text-[#c8c4b8]">
              {HOURS.map((h) => (
                <li
                  key={h.day}
                  className="flex justify-between border-b border-white/10 pb-1.5"
                >
                  <span>{h.day}</span>
                  <span className="text-white font-semibold">{h.time}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-6 text-[13px] font-bold uppercase tracking-[0.18em] text-[#a2844e]">
              Languages We Speak
            </h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {LANGUAGES.map((l) => (
                <span
                  key={l}
                  className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 px-2.5 py-1 text-[10.5px] text-[#c8c4b8]"
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Review + CTA */}
          <div>
            <h3 className="text-[13px] font-bold uppercase tracking-[0.18em] text-[#a2844e]">
              How Was Your Experience?
            </h3>
            <div className="mt-4 flex items-center gap-1 text-[#a2844e]">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-5 w-5" />
              ))}
            </div>
            <p className="mt-3 text-[12.5px] text-[#c8c4b8] leading-relaxed">
              We&apos;d love to hear your feedback. Leave us a review and help
              others find quality dental care.
            </p>
            <a
              href="https://chatrbee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#a2844e] px-6 text-[12px] font-semibold text-white hover:bg-[#8a6e3d] shadow-gold transition-colors w-full"
            >
              Write a Review
              <ArrowRightIcon className="h-4 w-4" />
            </a>

            <div className="mt-6 rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
              <Image
                src="/baldental/award-badge.png"
                alt="Readers' Choice Winner 2013–17"
                width={60}
                height={50}
                className="object-contain"
              />
              <div className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#a2844e]">
                Award-Winning Care
              </div>
              <p className="mt-1 text-[12px] text-white leading-relaxed">
                Scarborough Mirror Readers&apos; Choice Winner 2013–17.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#c8c4b8]">
          <div>
            © 2026 Bal Dental Centre |{" "}
            <a href="/sitemap" className="hover:text-[#a2844e]">
              Sitemap
            </a>{" "}
            | All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-[#a2844e]">
              Privacy
            </a>
            <a href="/accessibility" className="hover:text-[#a2844e]">
              Accessibility
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#a2844e] text-white hover:bg-[#8a6e3d] transition-colors"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
