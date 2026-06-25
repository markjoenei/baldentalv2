import { ClockIcon, MapPinIcon, PhoneIcon } from "./Icons";
import { Reveal } from "./Reveal";
import { CONTACT } from "./navData";

const STRIP = [
  {
    icon: PhoneIcon,
    title: CONTACT.phone,
    lines: ["Call us 7 days a week"],
    href: CONTACT.phoneHref,
  },
  {
    icon: ClockIcon,
    title: "Open 7 Days",
    lines: ["Evenings & weekends welcome"],
    href: "#hours",
  },
  {
    icon: MapPinIcon,
    title: "Visit Us",
    lines: ["4 Greystone Walk Dr #4, Scarborough"],
    href: CONTACT.mapsUrl,
  },
];

const TICKER_TEXT = [
  "OPEN 7 DAYS A WEEK",
  "ACCEPTING APPOINTMENTS ON SATURDAY, SUNDAY AND LATE EVENINGS",
  "CDCP & NIHB ACCEPTED",
  "SAME-DAY EMERGENCIES WELCOME",
  "TRUSTED BY 1,000+ PATIENTS",
];

export function AppointmentCTA() {
  return (
    <section className="relative bg-white">
      {/* Scrolling ticker banner */}
      <div
        className="bg-navy-animated text-white py-3 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          maskImage:
            "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div
          className="flex gap-12 text-[13px] font-bold uppercase tracking-[0.18em]"
          style={{
            width: "max-content",
            whiteSpace: "nowrap",
            animation: "marquee-left 30s linear infinite",
            willChange: "transform",
          }}
        >
          {[...TICKER_TEXT, ...TICKER_TEXT, ...TICKER_TEXT, ...TICKER_TEXT].map(
            (t, i) => (
              <span key={i} className="inline-flex items-center gap-3 shrink-0">
                <span className="text-[#d8c79a]">★</span>
                {t}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          {STRIP.map(({ icon: Icon, title, lines, href }, i) => (
            <Reveal key={title} delay={i * 100}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-start gap-3 justify-center sm:justify-start rounded-xl p-3 hover:bg-[#fff8ee] transition-colors"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5ead3] text-[#a2844e] group-hover:bg-[#a2844e] group-hover:text-white transition-colors">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-[13px] font-bold text-[#000033]">
                    {title}
                  </div>
                  {lines.map((l) => (
                    <div
                      key={l}
                      className="text-[11px] text-[#334155] leading-snug mt-0.5"
                    >
                      {l}
                    </div>
                  ))}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
