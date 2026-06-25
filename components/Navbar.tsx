"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import {
  ChevronDownIcon,
  CloseIcon,
  MapleLeafIcon,
  MapPinIcon,
  MenuIcon,
  PhoneIcon,
} from "./Icons";
import { CONTACT, SERVICE_CATEGORIES, SERVICE_LINKS } from "./navData";

type NavLink = {
  label: string;
  href: string;
  menu?: "services";
  flag?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services", menu: "services" },
  { label: "New Patients", href: "/new-patients" },
  { label: "CDCP", href: "/cdcp-dentist", flag: true },
  { label: "Emergency Care", href: "/services/dental-emergency" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#a2844e] text-white transition-shadow ${
        scrolled ? "shadow-[0_4px_18px_rgba(0,0,51,0.25)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 md:px-8 xl:px-10">
        <Link href="/" aria-label="Bal Dental Centre home" className="shrink-0">
          <div className="rounded-md bg-white px-3 py-2 ring-1 ring-white/20 shadow-sm">
            <Logo width={108} height={56} />
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3"
          onMouseLeave={() => setServicesOpen(false)}
        >
          {NAV_LINKS.map((link) => {
            const isServices = link.menu === "services";
            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  isServices ? setServicesOpen(true) : setServicesOpen(false)
                }
              >
                <a
                  href={link.href}
                  className={`relative inline-flex items-center gap-1.5 px-2 xl:px-3 py-2 text-[13px] xl:text-[14px] font-semibold uppercase tracking-wide text-white hover:text-[#000033] transition-colors ${
                    isServices && servicesOpen ? "text-[#000033]" : ""
                  }`}
                >
                  {link.flag ? (
                    <MapleLeafIcon
                      className="h-4 w-4 text-[#D80621]"
                      aria-hidden
                    />
                  ) : null}
                  {link.label}
                  {link.menu ? (
                    <ChevronDownIcon
                      className={`h-3 w-3 transition-transform ${
                        servicesOpen && isServices ? "rotate-180" : ""
                      }`}
                    />
                  ) : null}
                  <span
                    className={`absolute left-2 right-2 -bottom-0.5 h-[2px] bg-white transition-transform origin-left ${
                      isServices && servicesOpen
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 xl:gap-4">
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions"
            className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full text-white hover:text-[#000033] hover:bg-white/15 transition-colors"
          >
            <MapPinIcon className="h-5 w-5" />
          </a>
          <span className="hidden md:block h-7 w-px bg-white/30" />
          <a
            href={CONTACT.phoneHref}
            className="hidden md:inline-flex items-center gap-2.5 text-white hover:text-[#000033] transition-colors"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
              <PhoneIcon className="h-4 w-4" />
              <span className="absolute inset-0 rounded-full ring-2 ring-white opacity-60 animate-ping" />
            </span>
            <span className="text-[15px] xl:text-[17px] font-bold tracking-wide">
              {CONTACT.phone}
            </span>
          </a>

          <a
            href={CONTACT.bookUrl}
            className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-[#000033] px-5 text-[13px] font-semibold text-white hover:bg-black shadow-md transition-colors"
          >
            Book Now
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 lg:hidden"
          >
            {open ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Full-width mega menu */}
      <div
        className={`hidden lg:block absolute left-0 right-0 top-full bg-[#000033] border-t border-white/20 shadow-2xl overflow-hidden transition-all duration-300 ${
          servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="mx-auto max-w-[1600px] px-8 xl:px-10 py-8">
          <div className="grid grid-cols-5 gap-x-6 gap-y-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <div key={cat}>
                <h4 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#a2844e] mb-3">
                  {cat === "Preventive"
                    ? "Preventive Care"
                    : cat === "Restorative"
                      ? "Restorative"
                      : cat === "Cosmetic"
                        ? "Cosmetic Dentistry"
                        : cat === "Orthodontics"
                          ? "Orthodontics"
                          : "Specialty Care"}
                </h4>
                <ul className="space-y-2">
                  {SERVICE_LINKS.filter((s) => s.category === cat).map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        className="block text-[13px] text-white/80 hover:text-[#a2844e] transition-colors"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-l border-white/10 pl-6">
              <h4 className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#a2844e] mb-3">
                Quick Help
              </h4>
              <a
                href="/services/dental-emergency/"
                className="block rounded-lg bg-white/5 ring-1 ring-white/10 p-3 hover:bg-[#a2844e]/15 hover:ring-[#a2844e]/30 transition-colors"
              >
                <div className="text-[12px] font-bold text-white">
                  Dental Emergency
                </div>
                <p className="mt-1 text-[11px] text-white/70 leading-relaxed">
                  Same-day appointments for tooth pain or injury.
                </p>
              </a>
              <a
                href={CONTACT.bookUrl}
                className="mt-3 inline-flex h-10 items-center justify-center w-full rounded-full bg-[#a2844e] text-[12px] font-semibold text-white hover:bg-[#8a6e3d] shadow-gold transition-colors"
              >
                Book Appointment
              </a>
              <a
                href={CONTACT.phoneHref}
                className="mt-2 inline-flex items-center justify-center gap-1.5 w-full text-[12px] font-bold text-white hover:text-[#a2844e]"
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open ? (
        <div className="lg:hidden border-t border-white/20 bg-[#a2844e] max-h-[80vh] overflow-y-auto">
          <nav className="mx-auto flex max-w-[1600px] flex-col px-4 py-2">
            {NAV_LINKS.map((link) => {
              const isOpen = mobileSub === link.label;
              return (
                <div
                  key={link.label}
                  className="border-b border-white/15 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      onClick={() => !link.menu && setOpen(false)}
                      className="flex-1 inline-flex items-center gap-2 px-2 py-3 text-[13px] font-semibold uppercase tracking-wide text-white"
                    >
                      {link.flag ? (
                        <MapleLeafIcon
                          className="h-4 w-4 text-[#D80621]"
                          aria-hidden
                        />
                      ) : null}
                      {link.label}
                    </a>
                    {link.menu ? (
                      <button
                        type="button"
                        onClick={() => setMobileSub(isOpen ? null : link.label)}
                        aria-label={`Toggle ${link.label} menu`}
                        className="px-3 py-3 text-white"
                      >
                        <ChevronDownIcon
                          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    ) : null}
                  </div>
                  {link.menu === "services" && isOpen ? (
                    <div className="pb-3 pl-2">
                      {SERVICE_CATEGORIES.map((cat) => (
                        <div key={cat} className="mt-3">
                          <h5 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/85 mb-1.5">
                            {cat}
                          </h5>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
                            {SERVICE_LINKS.filter(
                              (s) => s.category === cat,
                            ).map((s) => (
                              <li key={s.label}>
                                <a
                                  href={s.href}
                                  onClick={() => setOpen(false)}
                                  className="block px-2 py-1.5 text-[12px] text-white/90 hover:text-[#000033]"
                                >
                                  {s.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
            <a
              href={CONTACT.phoneHref}
              className="mt-3 inline-flex items-center justify-center gap-2 h-11 rounded-full bg-white/15 text-white text-[13px] font-bold ring-1 ring-white/30"
            >
              <PhoneIcon className="h-4 w-4" />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.bookUrl}
              className="mt-2 mb-2 inline-flex items-center justify-center h-11 rounded-full bg-[#000033] text-white text-[13px] font-semibold shadow-md"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
