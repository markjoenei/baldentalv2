export const SERVICE_LINKS = [
  { label: "Preventive Dentistry", href: "/services/preventive-dentistry", category: "Preventive" },
  { label: "Dental Implants", href: "/services/dental-implants", category: "Restorative" },
  { label: "Dental Crowns & Bridges", href: "/services/dental-crowns-bridges", category: "Restorative" },
  { label: "Dentures & Partials", href: "/services/dentures-partials", category: "Restorative" },
  { label: "Tooth-Colored Fillings", href: "/services/tooth-colored-fillings", category: "Restorative" },
  { label: "Root Canal", href: "/services/root-canal", category: "Restorative" },
  { label: "Tooth Extractions", href: "/services/tooth-extractions", category: "Restorative" },
  { label: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry", category: "Cosmetic" },
  { label: "Porcelain Veneers", href: "/services/porcelain-veneers", category: "Cosmetic" },
  { label: "Teeth Whitening", href: "/services/teeth-whitening", category: "Cosmetic" },
  { label: "Lumineers", href: "/services/lumineers", category: "Cosmetic" },
  { label: "Composite Bonding", href: "/services/composite-bonding", category: "Cosmetic" },
  { label: "Snap-On Smile", href: "/services/snap-on-smile", category: "Cosmetic" },
  { label: "Orthodontics", href: "/services/orthodontics", category: "Orthodontics" },
  { label: "Invisalign Clear Braces", href: "/services/invisalign", category: "Orthodontics" },
  { label: "TMJ Therapy", href: "/services/tmj-therapy", category: "Specialty" },
  { label: "Sedation Dentistry", href: "/services/sedation-dentistry", category: "Specialty" },
  { label: "Dental Emergency", href: "/services/dental-emergency", category: "Specialty" },
];

export const SERVICE_CATEGORIES = [
  "Preventive",
  "Restorative",
  "Cosmetic",
  "Orthodontics",
  "Specialty",
] as const;

export const LANGUAGES = [
  "English",
  "Punjabi",
  "Hindi",
  "Bangoli",
  "Telugu",
  "Tagalog",
  "Cantonese",
];

export const HOURS = [
  { day: "Monday", time: "9 a.m. – 7 p.m." },
  { day: "Tuesday", time: "9 a.m. – 7 p.m." },
  { day: "Wednesday", time: "9 a.m. – 7 p.m." },
  { day: "Thursday", time: "9 a.m. – 7 p.m." },
  { day: "Friday", time: "9 a.m. – 7 p.m." },
  { day: "Saturday", time: "9 a.m. – 6 p.m." },
  { day: "Sunday", time: "10 a.m. – 5 p.m." },
];

export const CONTACT = {
  phone: "416-267-6789",
  phoneHref: "tel:+14162676789",
  email: "info@baldentalcentre.com",
  emailHref: "mailto:info@baldentalcentre.com",
  address: "4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2",
  mapsUrl:
    "https://www.google.com/maps/place/Bal+Dental+Centre/@43.7247316,-79.2551198,785m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89d4ce365ec14963:0x3204a1154c78196a!8m2!3d43.7247278!4d-79.2525449!16s%2Fg%2F1hhksygg_",
  bookUrl: "/book-appointment",
};
