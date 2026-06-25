import { FacebookIcon, InstagramIcon, MapPinIcon } from "./Icons";
import { CONTACT } from "./navData";

export function TopBar() {
  return (
    <div className="hidden md:block bg-[#000033] text-white text-[12px] border-b border-white/10">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 md:px-8 xl:px-10 py-2">
        <a
          href={CONTACT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white/85 hover:text-[#a2844e] transition-colors"
        >
          <MapPinIcon className="h-3.5 w-3.5 text-[#a2844e]" />
          {CONTACT.address}
        </a>
        <div className="flex items-center gap-3 text-white/80">
          <span className="hidden lg:inline">
            Open 7 days a week · Mon–Fri 9am–7pm
          </span>
          <span className="hidden lg:block h-3 w-px bg-white/15" />
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-[#a2844e] transition-colors"
            >
              <FacebookIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-[#a2844e] transition-colors"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
