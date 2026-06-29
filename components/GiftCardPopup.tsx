"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRightIcon, CloseIcon, PhoneIcon } from "./Icons";
import { CONTACT } from "./navData";

const STORAGE_KEY = "bal-gift-popup-dismissed";

export function GiftCardPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const t = setTimeout(() => setOpen(true), 4500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  function close() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gift-popup-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-in"
    >
      <button
        type="button"
        aria-label="Close popup"
        onClick={close}
        className="absolute inset-0 bg-[#000033]/70 backdrop-blur-sm"
      />

      <div className="relative w-full max-w-[640px] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#000033] hover:bg-[#000033] hover:text-white shadow-md transition-colors"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        <div className="relative bg-gradient-to-br from-[#a2844e] via-[#b6985d] to-[#8a6e3d] p-6 sm:p-8 text-white">
          <div
            aria-hidden
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#fff 1.2px, transparent 1.2px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div
            className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-white/15 blur-2xl"
            aria-hidden
          />

          <div className="relative flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur ring-1 ring-white/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              New Patient Special
            </span>
            <h2
              id="gift-popup-title"
              className="mt-4 text-[28px] sm:text-[36px] font-extrabold leading-tight drop-shadow"
            >
              Get a FREE $50 Gift Card
            </h2>
            <p className="mt-2 text-[13px] sm:text-[14px] text-white/95 max-w-md">
              With your{" "}
              <span className="font-semibold">
                New Patient Exam, X-Ray &amp; Cleaning
              </span>{" "}
              at Bal Dental Centre.
            </p>

            <div className="mt-5 relative">
              <div className="absolute -inset-2 rounded-2xl bg-white/30 blur-lg" />
              <div className="relative w-[260px] sm:w-[300px] rounded-xl bg-gradient-to-br from-[#fff8ee] to-[#f5ead3] p-4 shadow-2xl ring-1 ring-black/10 text-[#000033] rotate-[-2deg]">
                <div className="flex items-center justify-between">
                  <Image
                    src="/baldental/logo-main.png"
                    alt="Bal Dental Centre"
                    width={70}
                    height={36}
                    className="object-contain"
                  />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-[#a2844e]">
                    Gift Card
                  </span>
                </div>
                <div className="mt-3 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a2844e]">
                    Value
                  </div>
                  <div className="mt-0.5 text-[52px] font-extrabold text-[#000033] leading-none">
                    $50
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 sm:px-8 py-6 bg-white">
          <div className="flex flex-col sm:flex-row items-stretch gap-3">
            <a
              href={CONTACT.bookUrl}
              onClick={close}
              className="btn-shimmer inline-flex flex-1 h-12 items-center justify-center gap-2 rounded-full bg-[#000033] px-6 text-[13px] font-bold text-white hover:bg-[#a2844e] shadow-md transition-colors"
            >
              Claim Your Gift Card
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href={CONTACT.phoneHref}
              onClick={close}
              className="inline-flex flex-1 h-12 items-center justify-center gap-2 rounded-full bg-[#fff8ee] ring-1 ring-[#a2844e]/30 px-6 text-[13px] font-semibold text-[#000033] hover:bg-[#a2844e] hover:text-white hover:ring-transparent transition-colors"
            >
              <PhoneIcon className="h-4 w-4" />
              {CONTACT.phone}
            </a>
          </div>
          <p className="mt-3 text-center text-[11px] text-[#334155]">
            Limited-time offer. New patients only. Cannot be combined with other
            promotions.
          </p>
        </div>
      </div>
    </div>
  );
}
