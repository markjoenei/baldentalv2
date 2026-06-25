import Image from "next/image";
import { ArrowRightIcon, ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { CONTACT, HOURS } from "./navData";

export function ClinicFinder() {
  return (
    <section className="relative bg-navy-animated text-white py-16 sm:py-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[#a2844e]/15 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <Reveal>
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#d8c79a]">
              <span className="h-px w-8 bg-[#d8c79a]" /> VISIT OUR OFFICE
              <span className="h-px w-8 bg-[#d8c79a]" />
            </span>
            <h2 className="mt-3 text-[28px] sm:text-[38px] md:text-[44px] font-extrabold tracking-tight leading-[1.05]">
              Tour Our Scarborough Dental Office
            </h2>
            <p className="mt-4 text-[14px] text-white/80 max-w-xl mx-auto">
              Conveniently located near Greystone Park, McDonald&apos;s, and IV
              bus Superstation. Modern, comfortable treatment rooms designed
              with you in mind.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6 lg:gap-8 items-stretch">
          <Reveal className="reveal-left">
            <div className="h-full bg-white rounded-2xl p-6 text-[#000033] shadow-card flex flex-col">
              <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a2844e]">
                <span className="h-px w-6 bg-[#a2844e]" /> MODERN FACILITY
              </span>
              <h3 className="mt-3 text-[20px] font-bold leading-snug">
                Bal Dental Centre
              </h3>

              <div className="mt-5 space-y-4 text-[13px]">
                <div className="flex gap-3">
                  <MapPinIcon className="h-5 w-5 text-[#a2844e] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#000033]">
                      Address
                    </div>
                    <div className="text-[#334155] mt-0.5 leading-relaxed">
                      {CONTACT.address}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <PhoneIcon className="h-5 w-5 text-[#a2844e] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-[#000033]">Phone</div>
                    <a
                      href={CONTACT.phoneHref}
                      className="text-[#334155] mt-0.5 hover:text-[#a2844e]"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <ClockIcon className="h-5 w-5 text-[#a2844e] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-[#000033]">
                      Office Hours
                    </div>
                    <ul className="mt-1 space-y-0.5 text-[11.5px] text-[#334155]">
                      {HOURS.map((h) => (
                        <li key={h.day} className="flex justify-between">
                          <span>{h.day}</span>
                          <span className="font-medium text-[#000033]">
                            {h.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#a2844e] text-[11px] font-semibold text-white hover:bg-[#8a6e3d] shadow-gold transition-colors"
                >
                  Get Directions
                  <ArrowRightIcon className="h-3 w-3" />
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#000033] text-[11px] font-semibold text-white hover:bg-[#a2844e] transition-colors"
                >
                  <PhoneIcon className="h-3 w-3" /> Call Now
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="reveal-right relative h-[420px] lg:h-auto lg:min-h-[480px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <iframe
              title="Bal Dental Centre — 4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2"
              src="https://maps.google.com/maps?q=Bal+Dental+Centre,+4+Greystone+Walk+Dr+%234,+Scarborough,+ON+M1K+5J2&z=16&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />

            <a
              href={CONTACT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-white/95 backdrop-blur rounded-xl shadow-xl ring-1 ring-black/10 p-3 text-[#000033] hover:bg-white transition-colors"
            >
              <div className="flex items-center gap-3">
                <Image
                  src="/baldental/logo-main.png"
                  alt="Bal Dental Centre"
                  width={70}
                  height={38}
                  className="object-contain shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-[12px] font-bold truncate">
                    Bal Dental Centre
                  </div>
                  <div className="text-[10px] text-[#334155] mt-0.5 line-clamp-2">
                    {CONTACT.address}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[10px]">
                    <span className="text-[#a2844e]">★★★★★</span>
                    <span className="font-semibold">5.0</span>
                    <span className="text-[#334155]">(1,000+)</span>
                  </div>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
