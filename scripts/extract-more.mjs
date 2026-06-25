import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

// Get full page HTML to find more details
const fullHTML = await page.content();

// Get all anchor tags for CTAs
const ctas = await page.evaluate(() => {
  return [...document.querySelectorAll('a')].map(a => ({
    text: a.innerText?.trim(),
    href: a.href,
    class: a.className?.substring(0, 100),
  })).filter(a => a.text && a.text.length > 0 && a.text.length < 60);
});

// Get testimonials/reviews
const testimonials = await page.evaluate(() => {
  const selectors = [
    '[class*="testimonial"]',
    '[class*="review"]',
    '[class*="quote"]',
    'blockquote',
    '[class*="rating"]',
    '[class*="star"]'
  ];
  const results = [];
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      results.push({ selector: sel, text: el.innerText?.trim()?.substring(0, 300), class: el.className?.substring(0, 80) });
    });
  });
  return results;
});

// Look for the tour section / office images
const tourSection = await page.evaluate(() => {
  const tourEl = document.querySelector('[class*="tour"], [class*="office"], [id*="tour"]');
  return tourEl ? { class: tourEl.className?.substring(0, 100), html: tourEl.innerHTML?.substring(0, 500) } : null;
});

// Get all promotional/pricing elements
const promos = await page.evaluate(() => {
  const els = document.querySelectorAll('[class*="promo"], [class*="offer"], [class*="special"], [class*="pricing"]');
  return [...els].map(el => ({ class: el.className?.substring(0, 80), text: el.innerText?.trim()?.substring(0, 200) }));
});

// Get the top bar / header bar
const headerBar = await page.evaluate(() => {
  const el = document.querySelector('header, [class*="header"], [class*="topbar"], [class*="top-bar"]');
  return el ? el.innerText?.trim()?.substring(0, 500) : null;
});

// Get all specific section data attributes or IDs
const sections = await page.evaluate(() => {
  return [...document.querySelectorAll('section[id], section[data-section], [id*="section"]')].map(s => ({
    id: s.id,
    class: s.className?.substring(0, 80),
  }));
});

// Look for the NIHB section
const nihb = await page.evaluate(() => {
  const el = [...document.querySelectorAll('*')].find(e => e.innerText?.includes('NIHB'));
  return el ? { tag: el.tagName, text: el.innerText?.trim()?.substring(0, 400) } : null;
});

// More additional color tokens
const moreColors = await page.evaluate(() => {
  const results = {};
  // Check for gold-tint, cream-deep, cream-muted, ink-muted
  [...document.querySelectorAll('[class*="gold-tint"], [class*="cream-deep"], [class*="cream-muted"], [class*="ink-muted"], [class*="gold-strong"]')].slice(0, 10).forEach(el => {
    const cs = getComputedStyle(el);
    results[el.className?.substring(0, 50)] = { color: cs.color, bg: cs.backgroundColor };
  });
  return results;
});

// What does the "book appointment" button look like exactly
const bookBtn = await page.evaluate(() => {
  const btns = [...document.querySelectorAll('a[href*="book"]')];
  return btns.map(b => {
    const cs = getComputedStyle(b);
    return {
      text: b.innerText?.trim(),
      color: cs.color,
      bg: cs.backgroundColor,
      borderRadius: cs.borderRadius,
      padding: cs.padding,
      fontWeight: cs.fontWeight,
      fontSize: cs.fontSize,
    };
  });
});

// Get "why choose" section number colors
const whyChoose = await page.evaluate(() => {
  const el = document.querySelector('[class*="why"], [id*="why"]');
  return el ? { class: el.className?.substring(0, 100), text: el.innerText?.trim()?.substring(0, 800) } : null;
});

console.log('=== ALL CTAs ===');
console.log(JSON.stringify([...new Map(ctas.map(c => [c.text, c])).values()], null, 2));
console.log('\n=== TESTIMONIALS ===');
console.log(JSON.stringify(testimonials, null, 2));
console.log('\n=== TOUR SECTION ===');
console.log(JSON.stringify(tourSection, null, 2));
console.log('\n=== PROMOS ===');
console.log(JSON.stringify(promos, null, 2));
console.log('\n=== HEADER BAR ===');
console.log(headerBar);
console.log('\n=== SECTIONS ===');
console.log(JSON.stringify(sections, null, 2));
console.log('\n=== NIHB SECTION ===');
console.log(JSON.stringify(nihb, null, 2));
console.log('\n=== MORE COLORS ===');
console.log(JSON.stringify(moreColors, null, 2));
console.log('\n=== BOOK BUTTONS ===');
console.log(JSON.stringify(bookBtn, null, 2));
console.log('\n=== WHY CHOOSE ===');
console.log(JSON.stringify(whyChoose, null, 2));

await browser.close();
