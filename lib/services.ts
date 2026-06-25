import servicesB from "@/data/services-b.json";
import servicesC from "@/data/services-c.json";

export type ServiceSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Service = {
  slug: string;
  title: string;
  subheading: string;
  hero: string;
  sections: ServiceSection[];
  benefits?: string[];
  pricing?: string[];
  faqs: { q: string; a: string }[];
  images: string[];
  relatedServices?: { slug: string; name: string }[];
};

type RawFAQ = { question: string; answer: string };

type RawB = {
  title: string;
  subheading: string;
  hero: string;
  sections: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
  faqs?: RawFAQ[];
  images?: string[];
};

type RawC = {
  title: string;
  subheading: string;
  hero: string;
  sections: { heading?: string }[];
  h3s?: string[];
  paragraphs?: string[];
  list_items?: string[];
  faqs?: RawFAQ[];
  pricing?: string[];
  related_services?: { slug: string; name: string }[];
  images?: string[];
};

const mapFaqs = (faqs?: RawFAQ[]) =>
  (faqs ?? []).map((f) => ({ q: f.question, a: f.answer }));

const RAW_B = servicesB as unknown as Record<string, RawB>;
const RAW_C = servicesC as unknown as Record<string, RawC>;

function normalizeB(slug: string, r: RawB): Service {
  // Filter out sections with empty content
  const sections = (r.sections ?? [])
    .map((s) => ({
      heading: s.heading?.trim() || undefined,
      paragraphs: (s.paragraphs ?? []).map((p) => p.trim()).filter(Boolean),
      bullets: (s.bullets ?? []).filter(Boolean),
    }))
    .filter((s) => s.heading || s.paragraphs.length || (s.bullets && s.bullets.length));
  return {
    slug,
    title: r.title,
    subheading: r.subheading,
    hero: r.hero,
    sections,
    faqs: mapFaqs(r.faqs),
    images: r.images ?? [],
  };
}

function normalizeC(slug: string, r: RawC): Service {
  // services-c has sections with only headings; the actual content
  // lives in flat arrays. We zip them into structured sections.
  const headings = (r.sections ?? []).map((s) => s.heading || "");
  const paras = r.paragraphs ?? [];
  const items = r.list_items ?? [];

  // Distribute paragraphs across non-FAQ/CTA sections roughly evenly
  const contentHeadings = headings.slice(0, Math.max(headings.length - 2, 1));
  const perSection = Math.max(1, Math.floor(paras.length / contentHeadings.length));
  const sections: ServiceSection[] = contentHeadings.map((h, i) => {
    const start = i * perSection;
    const end = i === contentHeadings.length - 1 ? paras.length : start + perSection;
    const slice = paras.slice(start, end);
    const withBullets =
      i === contentHeadings.length - 1 && items.length
        ? { heading: h, paragraphs: slice, bullets: items }
        : { heading: h, paragraphs: slice };
    return withBullets;
  });

  return {
    slug,
    title: r.title,
    subheading: r.subheading,
    hero: r.hero,
    sections,
    benefits: r.h3s,
    pricing: r.pricing,
    faqs: mapFaqs(r.faqs),
    images: r.images ?? [],
    relatedServices: r.related_services,
  };
}

export function getServiceSlugs(): string[] {
  return [...Object.keys(RAW_B), ...Object.keys(RAW_C)];
}

export function getService(slug: string): Service | null {
  if (RAW_B[slug]) return normalizeB(slug, RAW_B[slug]);
  if (RAW_C[slug]) return normalizeC(slug, RAW_C[slug]);
  return null;
}
