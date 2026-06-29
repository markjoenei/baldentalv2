import { ArrowRightIcon, PhoneIcon, StarIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { CONTACT } from "./navData";

const TRUST_BADGES = [
  "Open 7 Days a Week",
  "Same-Day Emergencies",
  "All Insurance Accepted",
  "CDCP Accepted",
  "NIHB Accepted",
  "Readers' Choice Winner 2013–17",
];

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="m5 12 5 5 9-10"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BULLETS = [
  "Open 7 Days a Week",
  "Same-Day Emergencies",
  "All Insurance Accepted",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#000033] text-white">
      {/* Video background */}
      <video
        src="/baldental/videos/tour-our-office.mp4"
        poster="/baldental/office-tour-poster.png"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Bal Dental Centre office tour video"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlay for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#000033]/85 via-[#000033]/70 to-[#000033]/90"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(162,132,78,0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col items-center justify-center text-center min-h-[80vh] py-20 md:py-24">
          <Reveal className="max-w-[820px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-[11px] font-semibold text-white ring-1 ring-white/20">
              <span className="flex items-center gap-0.5 text-[#d8c79a]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-3 w-3" />
                ))}
              </span>
              TRUSTED BY 1,000+ PATIENTS
            </div>
            <p className="mt-5 text-[11px] font-bold tracking-[0.22em] text-[#d8c79a]">
              DENTIST — SCARBOROUGH, ONTARIO
            </p>
            <h1 className="mt-3 font-extrabold text-white text-[34px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              Smile Brighter with{" "}
              <span className="text-[#d8c79a]">Dentist</span> in Scarborough
            </h1>
            <p className="mt-5 text-[14px] sm:text-[16px] leading-relaxed text-white/85 max-w-[620px] mx-auto">
              Comprehensive family, cosmetic, and emergency dentistry — close
              to home in Scarborough. Same-day emergencies welcome.
            </p>

            <ul className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13px] text-white font-medium">
              {BULLETS.map((b) => (
                <li key={b} className="inline-flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#a2844e] text-white">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={CONTACT.bookUrl}
                className="btn-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#a2844e] px-7 text-[13px] font-semibold text-white shadow-gold hover:bg-[#8a6e3d] hover:shadow-gold-strong transition-all"
              >
                Book Appointment
                <ArrowRightIcon className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/30 px-6 text-[13px] font-semibold text-white hover:bg-white hover:text-[#000033] transition-colors"
              >
                <PhoneIcon className="h-4 w-4" />
                {CONTACT.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Trust strip — marquee scrolling left over the video at the bottom */}
      <div
        className="relative py-3 border-y border-white/10 bg-[#000033]/70 backdrop-blur overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div
          className="flex gap-12 text-[12px] font-semibold text-white/85"
          style={{
            width: "max-content",
            whiteSpace: "nowrap",
            animation: "marquee-left 70s linear infinite",
            willChange: "transform",
          }}
        >
          {[...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES].map(
            (b, i) => (
              <span key={i} className="inline-flex items-center gap-2 shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d8c79a]" />
                {b}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
