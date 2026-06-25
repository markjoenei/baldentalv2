# Bal Dental Centre — Complete Design System & Content Reference

> Extracted: 2026-06-24 from https://baldentalcentre.com/
> Purpose: Full rebrand of a dental clinic clone (swapping krestonedental.com content → Bal Dental Centre)

---

## 1. Brand Identity

### Practice Name
**Bal Dental Centre**

### Tagline / Value Proposition
- "Smile Brighter with Dentist in Scarborough"
- "Open 7 Days a Week"
- "Same-Day Emergencies"
- "All Insurance Accepted"
- "Trusted by 1,000+ Patients"

### Location
4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2
(Near Greystone Park, McDonald's, and IV bus Superstation)

### Contact
- **Phone:** 416-267-6789
- **Email:** info@baldentalcentre.com
- **Book URL:** https://baldentalcentre.com/book-appointment/
- **Google Maps:** https://www.google.com/maps/place/Bal+Dental+Centre/@43.7247316,-79.2551198,785m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89d4ce365ec14963:0x3204a1154c78196a!8m2!3d43.7247278!4d-79.2525449!16s%2Fg%2F1hhksygg_?entry=tts

### Award
Scarborough Mirror Readers' Choice Winner 2013–17

---

## 2. Color Palette

All tokens are defined as Tailwind CSS custom properties on `:root`.

| Token name | Hex | Role / Usage |
|------------|-----|-------------|
| `navy` | `#000033` | Primary brand dark — headings, nav bg (scroll), body text, "Book Now" btn bg |
| `gold` | `#a2844e` | Primary accent — "Book Appointment" btn bg, links hover, section labels, borders accent |
| `gold-deep` | `#8a6e3d` | Darker gold — hover states on gold elements |
| `gold-tint` | `#d8c79a` | Light gold — gradient mid-stop, decorative accents |
| `cream` | `#f7f5ea` | Page surface — hero section bg, section alternates, footer bottom bar |
| `cream-line` | `#e0dccf` | Border / divider color — card outlines, list separators |
| `cream-soft` | `#fff8ee` | Warm off-white — gradient backgrounds |
| `cream-deep` | `#f5ead3` | Deeper cream — gradient from stop |
| `cream-muted` | `#c8c4b8` | Muted text on dark backgrounds (footer small text) |
| `ink-muted` | `#334155` | Body paragraph text (mid-gray, slate-700 equivalent) |
| `white` | `#ffffff` | Cards, content panels |

### Semantic usage
- **Body text color:** `#000033` (navy) — main headings, labels
- **Body paragraph text:** `#334155` (ink-muted) — descriptive copy
- **Footer background:** `linear-gradient(135deg, #000033, #1a1a5a, #0a0a3d, #000033)` animated
- **Footer text:** `#f7f5ea` (cream)
- **Nav background (sticky):** `rgba(#f7f5ea, 0.95)` — cream at 95% opacity
- **Hero section bg:** `#f7f5ea` (cream)
- **Promo/special sections bg:** `linear-gradient(135deg, #000033, #1a1a5a, #0a0a3d, #000033)` (navy-gradient-animated)
- **Section alternates:** white or `linear-gradient(to bottom, white, #f7f5ea 30%, white)`

### Shadows
| Token | Value |
|-------|-------|
| `shadow-soft` | `0 1px 3px rgba(0,0,51,0.05), 0 1px 2px rgba(0,0,51,0.04)` |
| `shadow-card` | `0 4px 20px rgba(0,0,51,0.08)` |
| `shadow-lift` | `0 20px 50px -20px rgba(0,0,51,0.25), 0 8px 16px -8px rgba(0,0,51,0.12)` |
| `shadow-gold` | `0 12px 32px -10px rgba(162,132,78,0.45)` |
| `shadow-gold-strong` | `0 20px 50px -16px rgba(162,132,78,0.55), 0 0 0 1px rgba(162,132,78,0.25)` |
| `shadow-dropdown` | `0 12px 32px rgba(0,0,51,0.16)` |

---

## 3. Typography

### Font Families
- **Primary (all text):** `Poppins` — self-hosted via Next.js font optimization (woff2 files bundled)
- **Secondary:** `Roboto` — also loaded but secondary use only
- **CSS var:** `--font-poppins: "Poppins", "Poppins Fallback"`
- **Fallback stack:** `Poppins, "Poppins Fallback", Arial, Helvetica, sans-serif`
- **No Google Fonts `<link>` tag** — fonts are bundled into the Next.js build

### Type Scale
| Role | Size | Weight | Line Height | Letter Spacing | Transform |
|------|------|--------|-------------|---------------|-----------|
| H1 | 54px | 700 | 1.1 (59.4px) | -0.54px (-0.01em) | none |
| H2 | 52px | 800 | 1.0 (52px) | -1.3px (-0.025em) | none |
| H3 | 22px | 700 | 1.25 (27.5px) | normal | none |
| H4 (labels) | 12px | 700 | 1.5 | 1.92px (0.16em) | UPPERCASE |
| Body | 16px | 400 | 1.5 (24px) | normal | none |
| Nav links | 14px | 500 | normal | normal | none |
| Buttons (primary) | 14–15px | 600 | normal | normal | none |
| Buttons (nav "Book Now") | 13px | 600 | normal | normal | none |
| Caption / small | 11–12px | 500–700 | normal | varies | UPPERCASE for labels |
| Footer body | 13–13.5px | 400 | 1.8 | normal | none |

---

## 4. Logo

### File
`public/baldental/logo-main.png`

### Specs
- Format: PNG (transparent background)
- Rendered size in nav: 112px wide × 70px tall (desktop), 80px wide (mobile)
- Alt text: "Bal Dental Centre"
- Position: top-left in sticky nav header

### Description
The logo is a horizontal lockup — a graphic icon/tooth mark combined with the wordmark "Bal Dental Centre". Exact shape is in the downloaded PNG — refer to the image file.

---

## 5. Navigation

### Top Bar (above nav, not a separate bar)
Address and phone shown in a slim line at top of page on desktop:
- `4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2` (links to Google Maps)
- `416-267-6789`

### Main Nav Links (desktop)
| Label | URL |
|-------|-----|
| Home | `/` |
| About Us | `/about/` |
| Our Services | `/services/` (has dropdown) |
| New Patients | `/new-patients/` |
| CDCP | `/cdcp-dentist/` |
| Emergency Care | `/services/dental-emergency/` |
| Contact Us | `/contact/` |

### Nav CTAs (right side of nav)
- `416-267-6789` — phone link, large bold text (17px, font-bold, navy color → gold on hover)
- `Book Now` — pill button: bg navy (#000033), text white, 13px semibold, rounded-full, padding 10px 20px

### "Our Services" Dropdown Sub-items
| Label | URL |
|-------|-----|
| Preventive Dentistry | `/services/preventive-dentistry/` |
| Dental Implants | `/services/dental-implants/` |
| Dental Crowns & Bridges | `/services/dental-crowns-bridges/` |
| Dentures & Partials | `/services/dentures-partials/` |
| Tooth-Colored Fillings | `/services/tooth-colored-fillings/` |
| Root Canal | `/services/root-canal/` |
| Tooth Extractions | `/services/tooth-extractions/` |
| Cosmetic Dentistry | `/services/cosmetic-dentistry/` |
| Porcelain Veneers | `/services/porcelain-veneers/` |
| Teeth Whitening | `/services/teeth-whitening/` |
| Lumineers | `/services/lumineers/` |
| Orthodontics | `/services/orthodontics/` |
| Composite Bonding | `/services/composite-bonding/` |
| Invisalign Clear Braces | `/services/invisalign/` |
| Snap-On Smile | `/services/snap-on-smile/` |
| TMJ Therapy | `/services/tmj-therapy/` |
| Sedation Dentistry | `/services/sedation-dentistry/` |
| Dental Emergency | `/services/dental-emergency/` |

### Nav style details
- Nav bg on scroll: `rgba(#f7f5ea, 0.95)` with backdrop blur
- Nav link style: `rounded-full px-3 py-2 text-[14px] font-medium text-navy/80 hover:bg-gold/[0.08] hover:text-gold`
- Transition: `all 200ms`
- Mobile: hamburger menu, slide-in drawer, cream bg

---

## 6. Homepage Sections (Top to Bottom)

1. **Sticky Navigation** — cream/translucent, logo left, links center, phone + "Book Now" right
2. **Hero Section** — cream bg, headline left, hero photo right (smiling patient), trust badge "Trusted by 1,000+", two CTAs
3. **Promotions Strip** — navy gradient bg, two flipbox cards (Dental Implants $3,999, Invisalign $3,999)
4. **Why Choose Us** — white bg, numbered accordion (01–06), feature photo right
5. **Office Tour** — navy gradient bg, headline + address + "Get Directions", clinic photo
6. **Special Offers** — white bg, grid of promo cards (Dental Implants, Invisalign)
7. **Affordable Dentistry** — gradient (white→cream→white), reception photo + copy + 3 bullets + CTA
8. **Featured Services** — white bg, service pill selector left, featured service card right
9. **FAQ** — cream/gradient bg, accordion Q&As
10. **NIHB Section** — white bg, copy about NIHB program for First Nations / Inuit
11. **Location / Convenience Section** — cream bg, family photo + address card + 2 CTAs
12. **Scrolling Ticker Banner** — navy gradient, repeating "OPEN 7 DAYS A WEEK" text
13. **Footer** — navy gradient animated bg, 4 columns + bottom copyright bar

---

## 7. Hero Section (verbatim content)

### Trust Badge (above headline)
`TRUSTED BY 1,000+ PATIENTS` (star icons, gold)

### Eyebrow Label
`DENTIST — SCARBOROUGH, ONTARIO`

### H1 Headline
`Smile Brighter with Dentist in Scarborough`
(The word "Dentist" is a text rotator / animated typewriter cycling through service names)

### Bullet Points (3 icons)
- Open 7 Days a Week
- Same-Day Emergencies
- All Insurance Accepted

### CTAs
1. `Book Appointment` — gold pill button (#a2844e bg, white text, rounded-full, px-7 py-3.5, 14px semibold)
2. `416-267-6789` — phone link (text link, large font)

### Right column floating cards (stat badges)
- `Dental Emergencies Welcome`
- `Open 7 Days a Week`
- `416-267-6789`
- `Book Appointment`

### Hero Image
`public/baldental/hero-banner.png` — smiling patient photo (8000×4500px)

---

## 8. Why Choose Us Section (verbatim content)

### Section Label
`WHY PATIENTS CHOOSE US`

### Section Heading
`Why Choose Bal Dental Centre as Your Trusted Dentist in Scarborough?`

### Numbered Accordion Items
| # | Title | Body |
|---|-------|------|
| 01 | We Do It All | Time for a checkup and cleaning? Need a tooth repaired or replaced? Want your smile to look fantastic at an upcoming special event? If so, you'll find everything you need right here at the Bal Dental Centre. We're able to perform just about any treatment you can imagine in-house, making it easier than ever to get the healthy, beautiful smile you deserve. |
| 02 | Highly Trained Team | Our dentists and hygienists undergo continuous education to bring you the latest techniques and technology in modern dentistry. |
| 03 | IV Sedation Dentistry Available | Anxious about dental visits? Our IV sedation option lets you sleep comfortably through complex procedures, waking up to a beautiful smile. |
| 04 | State-Of-The-Art Dental Office | We invest in the best equipment — digital X-rays, intraoral cameras, and comfortable treatment chairs — for precise, efficient care. |
| 05 | Flexible Appointments | Open 7 days a week including evenings and weekends. We work around your schedule so you never have to miss care. |
| 06 | Dental Emergencies Welcome | Tooth pain or injury? We accept same-day emergency appointments. Call us and we'll see you as soon as possible. |

### Award badge
`Award-Winning Care — Readers' Choice Winner 2013–17`
Image: `public/baldental/award-badge.png`

### Section image
`public/baldental/why-choose-feature.jpg` — dentist + assistant treating a patient

---

## 9. Office Tour Section

### Label
`VISIT OUR OFFICE`

### Heading
`Tour Our Scarborough Dental Office`

### Content
- Address: `4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2`
- CTA: `Get Directions` (links to Google Maps)
- Badge: `MODERN FACILITY — State-of-the-art treatment rooms`

---

## 10. Special Promotions / Pricing

### Section Label
`LIMITED-TIME OFFERS`

### Section Heading
`Special Dental Promotions`

### Sub-heading
`Save on the treatments you need most — exclusive offers from your Scarborough dentist.`

### Offers
| Offer | Price | Link |
|-------|-------|------|
| Dental Implants | Starting at $3,999 | `/services/dental-implants/` |
| Invisalign / Clear Aligners | Starting at $3,999 | `/services/invisalign/` |

Image assets:
- `public/baldental/flipbox-dental-implants-front.jpg`
- `public/baldental/flipbox-invisalign-front.jpg`

---

## 11. Affordable Dentistry Section

### Label
`AFFORDABLE CARE`

### Heading
`Committed to Affordable Dentistry in Scarborough`

### Body Copy (verbatim)
Our Dentists in Scarborough, located near Eglinton East, works hard to ensure your visits with us are productive, comfortable, and stress free. We never want concerns about cost to stand between you and your smile.

### Bullet Points (3)
- Direct insurance billing
- Flexible financing plans
- Transparent upfront pricing

### CTA
`Explore Financial Options` — gold pill button → `/services/`

### Section image
`public/baldental/affordable-dentistry.jpg` — reception desk

---

## 12. Featured Services Section

### Section Label
`OUR SERVICES`

### Section Heading
`Featured Dental Services`

### Sub-heading
`Click any service below to learn more about our personalized care`

### Service Selector Pills (left column)
1. Preventive Dentistry
2. Dental Crowns & Bridges *(default selected)*
3. Root Canals & Emergencies
4. Cosmetic Dentistry
5. Dental Implants
6. Invisalign Clear Braces

### Featured Service Card (right column — default: Dental Crowns & Bridges)
**Label:** `FEATURED SERVICE`
**Heading:** `DENTAL CROWNS & BRIDGES RESTORE TEETH & REGAIN CONFIDENCE`
**Body:** Missing one or more teeth? Traditional dental crowns and bridges are a tried-and-true restorative dentistry solution. Crowns can reverse damage and decay by restoring the top.
**CTA:** `Learn More` → `/services/dental-crowns-bridges/`
**Image:** `public/baldental/service-crowns.jpg`

---

## 13. FAQ Section

### Section Label
`FAQ`

### Section Heading
`Frequently Asked Questions, Answered!`

### Intro Text
Still have a few questions on your mind? Let us help you find the answers! With lunchtime, evening, and weekend hours, you're more than welcome to give our team a call at your convenience so we can assist you.

### Q&As
| Question | Answer |
|----------|--------|
| How do I find the best place to get dental work done? | Time for a checkup and cleaning? Need a tooth repaired or replaced? Want your smile to look fantastic at an upcoming special event? If so, you'll find everything you need right here at the Bal Dental Centre. We're able to perform just about any treatment you can imagine in-house, making it easier than ever to get the healthy, beautiful smile you deserve. |
| How can I make a same-day appointment with a dentist? | Yes, call us at 416-267-6789 and we will do our very best to fit you in for an emergency or same-day appointment. |
| What do you do if you can't afford a dentist? | We offer flexible financing options and direct billing to most insurance providers. We will work with you to find a solution. |
| What level of education is required to be a dentist? | Dentists in Canada complete an undergraduate degree followed by 4 years of dental school to earn a DDS or DMD degree, along with provincial licensing. |

---

## 14. NIHB Section

### Section Label
`NIHB PROGRAM`

### Heading
`Bal Dental Centre Accepts NIHB for First Nations and Inuit Patients in Scarborough`

### Body Copy (verbatim)
At Bal Dental Centre, we are proud to provide dental services for the NIHB Program to all eligible First Nation and Inuit community members. We want you and your family to get whatever dental treatment you need efficiently so that you may get it with ease, rather than hassle over paperwork or insurance details. We have a friendly staff of financial advisors who are ready to assist you at every turn, and with compassion.

### CTAs
- `Book Appointment` — gold button → `/book-appointment/`
- `416-267-6789` — phone link

---

## 15. Location / Convenience Section

### Label
`DENTIST — SCARBOROUGH, ONTARIO`

### Heading
`Conveniently Located Near You in Scarborough`

### Body Copy (verbatim)
Looking for a skilled sedation dentist in your area? Interested in sleep apnea treatment? Time for your six-month checkup and cleaning? We look forward to welcoming you to our office at 4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2. You'll find us near Greystone Park, McDonald's, and IV bus Superstation.

### Address display
4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2

### CTAs
1. `Request A Free Second Opinion` — gold button → `/about/how-to-select-the-best-dentist/`
2. `Student Discount Program` — navy button → `/services/preventive-dentistry/`

### Section image
`public/baldental/located-family.jpg` — happy family photo

---

## 16. Scrolling Ticker Banner

Animated horizontal marquee, navy gradient bg, white text:
`OPEN 7 DAYS A WEEK — ACCEPTING APPOINTMENTS ON SATURDAY, SUNDAY AND LATE EVENINGS`
(Repeats continuously)

---

## 17. Hours of Operation

| Day | Hours |
|-----|-------|
| Monday | 9 a.m. – 7 p.m. |
| Tuesday | 9 a.m. – 7 p.m. |
| Wednesday | 9 a.m. – 7 p.m. |
| Thursday | 9 a.m. – 7 p.m. |
| Friday | 9 a.m. – 7 p.m. |
| Saturday | 9 a.m. – 6 p.m. |
| Sunday | 10 a.m. – 5 p.m. |

---

## 18. Languages Spoken

English, Punjabi, Hindi, Bangoli (Bengali), Telugu, Tagalog, Cantonese

---

## 19. Footer

### Background
`linear-gradient(135deg, #000033, #1a1a5a, #0a0a3d, #000033)` — animated gradient (300% size, 12s infinite)

### Text color
`#f7f5ea` (cream)

### Footer Columns (4 columns)

**Column 1 — Practice Info**
- Logo (smaller, 64px wide)
- Address: 4 Greystone Walk Dr #4, Scarborough, ON M1K 5J2
- Phone link: 416-267-6789 (large, bold, white, hover → gold)

**Column 2 — Contact Us / Email Us**
- `CONTACT US` label (gold, uppercase, tracking-wide)
- Phone: 416-267-6789
- `EMAIL US` label (gold, uppercase)
- Email: info@baldentalcentre.com (cream-muted, hover → gold)

**Column 3 — Office Hours**
- `OFFICE HOURS` label (gold, uppercase, tracking-wide)
- Full hours table (Mon–Sun)

**Column 4 — Languages We Speak**
- `LANGUAGES WE SPEAK` label (gold)
- List: English, Punjabi, Hindi, Bangoli, Telugu, Tagalog, Cantonese

**Column 5 — Our Location**
- `OUR LOCATION` label (gold)
- Address block
- `Get Directions` link (gold, hover → lighter)

**Column 6 — How Was Your Experience?**
- Star rating icons (gold, animated)
- `We'd love to hear your feedback. Leave us a review and help others find quality dental care.`
- `Write a Review` button (gold, rounded-full)

### Footer Bottom Bar
- Background: `#f7f5ea` (cream)
- Logo (64px)
- `© 2026 Bal Dental Centre | Sitemap | All rights reserved`
- `Website by [PracPros logo]`

---

## 20. Component Styles

### Primary CTA Button ("Book Appointment")
- Background: `#a2844e` (gold)
- Text: `#ffffff` (white)
- Font: 14px, font-weight 600
- Border radius: `rounded-full` (9999px)
- Padding: `14px 28px` (py-3.5 px-7)
- Shadow: `shadow-gold` (0 12px 32px -10px rgba(162,132,78,0.45))
- Hover: `translateY(-2px)`, `shadow-gold-strong`
- Transition: `all 200ms ease-out`

### Secondary CTA Button ("Book Now" in nav)
- Background: `#000033` (navy)
- Text: `#ffffff` (white)
- Font: 13px, font-weight 600
- Border radius: `rounded-full`
- Padding: `10px 20px` (py-2.5 px-5)
- Hover: bg → `#a2844e` (gold), `shadow-gold`
- Transition: `all 200ms ease-out`

### Tertiary Button (navy outline variant)
- Background: `#000033` (navy)
- Text: `#ffffff`
- Padding: `14px 24px`
- Border radius: `rounded-full`

### Service Pill Selector
- Default: white bg, `#e0dccf` border (cream-line), `#000033` text, radius 16px (rounded-2xl), padding 14px 16px
- Selected/active: gradient from cream-deep to cream, `shadow-soft`, `ring-1 ring-gold/20`
- Hover: `translateY(-2px)`, `border-gold/30`, `shadow-soft`

### Cards
- Background: `#ffffff`
- Border: `1px solid #e0dccf` (cream-line)
- Border radius: `rounded-2xl` (16px) or `rounded-3xl` (24px)
- Shadow: `shadow-card` (0 4px 20px rgba(0,0,51,0.08))
- Hover shadow: `shadow-lift`

### FAQ Accordion Items
- Border: bottom `1px solid #e0dccf`
- Padding: `20px 24px` (py-4 px-5 / lg:py-5 px-6)
- No border radius on button
- Active: `#000033` text, bg changes

### Nav Links
- Style: `rounded-full px-3 py-2 text-[14px] font-medium text-navy/80`
- Hover: `bg-gold/[0.08] text-gold`
- Transition: `all 200ms`

---

## 21. Animations / Motion

| Animation | Description |
|-----------|-------------|
| `marquee-scroll` | Continuous horizontal scroll for ticker banner |
| `fade-up` | Opacity 0→1 + translateY(20px→0), used on cards/sections on load |
| `fade-in` | Opacity 0→1 |
| `float-slow` | Gentle vertical float, decorative elements |
| `float-soft` | Softer float variant |
| `gradient-shift` | Background position animation for `bg-navy-gradient-animated` (12s infinite) |
| `shimmer` | Light sweep effect on gold button |
| `pulse-ring` | Ring pulse on phone icon |
| `spin-slow` | Slow rotation, decorative dashed circle |
| `bounce-soft` | Soft bounce for scroll indicator |
| `glow-pulse` | Glow effect |
| `shine-sweep` | Diagonal shine on gold elements |
| `blob-morph` | Background shape morphing |
| `ping` | Tailwind built-in, used on notification dots |

**Global hover transition:** `all 200ms ease-out` on interactive elements
**Card hover lift:** `translateY(-2px)` on hover (class `hover:-translate-y-0.5`)

---

## 22. Full Services List (18 services total)

### Preventive Care (1)
1. **Preventive Dentistry** — Cleanings, exams, and protective treatments that stop problems before they start.

### Restorative (6)
2. **Dental Implants** — Permanent, natural-feeling teeth replacements starting at $3,000 all-inclusive.
3. **Dental Crowns & Bridges** — Restore damaged or missing teeth with tooth-coloured crowns and natural-looking bridges.
4. **Dentures & Partials** — Custom-crafted dentures that fit comfortably and look completely natural.
5. **Tooth-Colored Fillings** — Mercury-free, metal-free composite fillings that match your tooth perfectly.
6. **Root Canal** — Gentle, same-day root canals that relieve severe pain and save your natural tooth.
7. **Tooth Extractions** — Gentle, calm tooth removal when a tooth can't be saved — including wisdom teeth.

### Cosmetic (6)
8. **Cosmetic Dentistry** — Smile makeovers, whitening, veneers, and bonding — designed around your face and goals.
9. **Porcelain Veneers** — Hand-crafted porcelain shells that transform your smile in just two visits.
10. **Teeth Whitening** — Professional whitening that goes 5–8 shades brighter than over-the-counter strips.
11. **Lumineers** — Ultra-thin, no-prep veneers — a reversible alternative to traditional porcelain veneers.
12. **Composite Bonding** — Same-day repair for chips, gaps and small cosmetic concerns — no drilling required.
13. **Snap-On Smile** — Removable, non-invasive smile makeover — snap a beautiful new smile over your existing teeth.

### Orthodontics (2)
14. **Orthodontics** — Comprehensive orthodontic care for children, teens and adults — braces and clear aligners.
15. **Invisalign Clear Braces** — Virtually invisible aligners that straighten teeth without metal wires or brackets.

### Specialty Care (3)
16. **TMJ Therapy** — Relief from jaw pain, headaches and grinding through customized TMJ treatment.
17. **Sedation Dentistry** — Nitrous, oral and IV sedation options for nervous patients and complex procedures.
18. **Dental Emergency** — Same-day emergency care for tooth pain, broken teeth, knocked-out teeth and abscesses.

---

## 23. Services Page Hero Stats
- 18 Specialized Services
- Open 7 Days per week
- $0 Down to Start

---

## 24. Asset Inventory

| File | Description | Dimensions |
|------|-------------|-----------|
| `public/baldental/logo-main.png` | Primary logo (PNG, transparent bg) | 112×70 display |
| `public/baldental/hero-banner.png` | Hero section patient photo | 8000×4500px |
| `public/baldental/award-badge.png` | Readers' Choice Award 2013–17 badge | 205×163px |
| `public/baldental/why-choose-feature.jpg` | Dentist treating patient (Why Choose section) | 5184×3456px |
| `public/baldental/flipbox-dental-implants-front.jpg` | Dental Implants promo card image | 800×800px |
| `public/baldental/flipbox-invisalign-front.jpg` | Invisalign promo card image | 800×800px |
| `public/baldental/affordable-dentistry.jpg` | Reception desk (Affordable Care section) | high-res |
| `public/baldental/service-crowns.jpg` | Dental Crowns service featured image | high-res |
| `public/baldental/located-family.jpg` | Family photo (Location section) | high-res |

---

## 25. Page Metadata

- **Title:** `Bal Dental Centre — Dentist in Scarborough`
- **Meta Description:** `Bal Dental Centre is a neighbourhood dentist in Scarborough offering comprehensive dental care. Open 7 days a week. Book your appointment today.`

---

## 26. Third-Party Integrations

- **WhatConverts** tracking script (lead tracking)
- **Chatrbee** review widget (Write a Review button links to chatrbee.com)
- **Google Maps** embed for location
- Built with: **Next.js** (App Router), **Tailwind CSS v4**, **TypeScript**
