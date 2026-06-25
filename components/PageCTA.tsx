import { ArrowRightIcon, PhoneIcon } from "./Icons";
import { CONTACT } from "./navData";

type PageCTAProps = {
  heading?: string;
  body?: string;
  primary?: { label: string; href: string };
};

export function PageCTA({
  heading = "Ready to get started?",
  body = "Same-day appointments available. Book online in under a minute or call our Scarborough office.",
  primary,
}: PageCTAProps) {
  return (
    <section className="relative bg-navy-animated text-white py-16 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-[#a2844e]/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-[#a2844e]/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center">
        <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#d8c79a]">
          <span className="h-px w-8 bg-[#d8c79a]" /> READY WHEN YOU ARE
          <span className="h-px w-8 bg-[#d8c79a]" />
        </span>
        <h2 className="mt-3 text-[28px] sm:text-[36px] md:text-[44px] font-extrabold tracking-tight leading-[1.05]">
          {heading}
        </h2>
        <p className="mt-4 text-[14px] sm:text-[15px] text-white/85 max-w-xl mx-auto leading-relaxed">
          {body}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={primary?.href ?? CONTACT.bookUrl}
            className="btn-shimmer inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#a2844e] px-7 text-[13px] font-semibold text-white shadow-gold hover:bg-[#8a6e3d] transition-colors"
          >
            {primary?.label ?? "Book Appointment"}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white/10 backdrop-blur ring-1 ring-white/40 px-6 text-[13px] font-semibold text-white hover:bg-white hover:text-[#000033] transition-colors"
          >
            <PhoneIcon className="h-4 w-4" />
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
