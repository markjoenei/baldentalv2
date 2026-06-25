"use client";

import { useEffect, useState } from "react";
import { MailIcon, MapPinIcon, PhoneIcon } from "./Icons";
import { CONTACT } from "./navData";

type Item = {
  icon: typeof PhoneIcon;
  label: string;
  value: string;
  cta: string;
  link: string;
  external?: boolean;
};

const ITEMS: Item[] = [
  {
    icon: PhoneIcon,
    label: "Call The Office",
    value: CONTACT.phone,
    cta: "Tap to call",
    link: CONTACT.phoneHref,
  },
  {
    icon: MapPinIcon,
    label: "Visit Our Office",
    value: CONTACT.address,
    cta: "Get directions",
    link: CONTACT.mapsUrl,
    external: true,
  },
  {
    icon: MailIcon,
    label: "Email Us",
    value: CONTACT.email,
    cta: "Send a message",
    link: CONTACT.emailHref,
  },
];

export function ContactBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed left-3 lg:left-4 top-1/2 -translate-y-1/2 z-40 hidden md:block transition-all duration-300 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6 pointer-events-none"
      }`}
      aria-label="Quick contact options"
    >
      <ul className="flex flex-col gap-2.5">
        {ITEMS.map(({ icon: Icon, label, value, cta, link, external }) => (
          <li key={label} className="group">
            <a
              href={link}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="relative flex items-center gap-3 h-12 rounded-full bg-[#000033] text-white shadow-xl ring-1 ring-white/10 overflow-hidden transition-all duration-300 w-12 group-hover:w-72 hover:bg-[#a2844e]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center text-white">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 pr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#d8c79a] leading-none">
                  {label}
                </div>
                <div className="text-[12px] text-white truncate leading-tight mt-1">
                  {value}
                </div>
                <div className="text-[10px] text-white/80 leading-none mt-0.5">
                  {cta} →
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
