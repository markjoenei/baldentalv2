import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// Hover over "Our Services" nav item to reveal dropdown
await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

// Hover over the Services nav link to trigger dropdown
const servicesLink = page.locator('nav a[href*="services"]').first();
await servicesLink.hover();
await page.waitForTimeout(500);

// Get dropdown items
const dropdownItems = await page.evaluate(() => {
  const all = [...document.querySelectorAll('nav a, header a')];
  return all.map(a => ({ text: a.innerText?.trim(), href: a.href })).filter(a => a.text && a.text.length < 60);
});

// Check for the tour section with specific class names from the HTML
const officeSection = await page.evaluate(() => {
  // Look for the office tour section
  const heading = [...document.querySelectorAll('h2, h3')].find(h => h.innerText?.includes('Tour'));
  if (heading) {
    const section = heading.closest('section') || heading.parentElement?.parentElement;
    return section ? { text: section.innerText?.trim()?.substring(0, 400) } : { text: heading.innerText };
  }
  return null;
});

// Get all Trustpilot/Google review widgets
const reviews = await page.evaluate(() => {
  return [...document.querySelectorAll('[class*="review"], [class*="testimonial"], [class*="google"], [class*="trust"]')]
    .map(el => ({ class: el.className?.substring(0, 80), text: el.innerText?.trim()?.substring(0, 200) }))
    .filter(r => r.text);
});

// Get the specific hero stats
const heroStats = await page.evaluate(() => {
  const hero = document.querySelector('section');
  return hero ? hero.innerText?.trim()?.substring(0, 500) : null;
});

// Get services page URL
await page.goto('https://baldentalcentre.com/services/', { waitUntil: 'networkidle', timeout: 60000 });
const servicesPageText = await page.evaluate(() => document.body.innerText?.substring(0, 6000));

console.log('=== DROPDOWN ITEMS ===');
console.log(JSON.stringify([...new Map(dropdownItems.map(d => [d.text, d])).values()], null, 2));

console.log('\n=== OFFICE SECTION ===');
console.log(JSON.stringify(officeSection, null, 2));

console.log('\n=== REVIEWS ===');
console.log(JSON.stringify(reviews, null, 2));

console.log('\n=== SERVICES PAGE TEXT ===');
console.log(servicesPageText);

await browser.close();
