const { chromium } = require('C:/Users/markj/AppData/Roaming/npm/node_modules/playwright');
const path = require('path');

const outDir = path.join(__dirname, 'public/reference/local/v2');

// Playwright clip with fullPage requires that y+h <= page height.
// We take full-page screenshots then crop with jimp...
// Actually, Playwright supports clip with fullPage:true since v1.15 — let's try.

async function clip(page, outName, x, y, w, h) {
  var p = path.join(outDir, outName);
  await page.screenshot({ path: p, fullPage: true, clip: { x: x, y: y, width: w, height: h } });
  console.log('OK:', outName);
}

(async () => {
  const browser = await chromium.launch();

  // ── DESKTOP 1440 ──────────────────────────────────────────
  // Section map (confirmed from headings):
  // s0=Hero        y=145  h=748    "Find a Trusted Dentist..."
  // s1=ContactBar  y=893  h=359    (no heading - contact pill)
  // s2=Promotions  y=1252 h=725    "Unlock the Benefits..."
  // s3=Welcome     y=1977 h=739    "Welcome to Krest One Dental"
  // s4=ClinicFinder y=2715 h=1029  "Find a Dental Clinic Near You"
  // s5=Services    y=3744 h=1010   "Comprehensive Dental Care In One Place"
  // s6=Budget      y=4754 h=841    "Dental Care That Fits Your Budget"
  // s7=FAQ         y=5595 h=706    "Frequently Asked Questions"
  // s8=Reviews     y=6301 h=558    "What Our Patients Say"
  // s9=AppointmentCTA y=6859 h=594 "Book An Appointment"

  const dPage = await browser.newPage();
  await dPage.setViewportSize({ width: 1440, height: 900 });
  await dPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await dPage.waitForTimeout(2000);

  // 1. TopBar
  await clip(dPage, 'desktop-topbar.png', 0, 0, 1440, 48);

  // 2. Navbar
  await clip(dPage, 'desktop-navbar.png', 0, 35, 1440, 82);

  // 3. ContactBar pill + hours strip (s1: y=893 h=359)
  await clip(dPage, 'desktop-contactbar.png', 0, 893, 1440, 359);

  // 4. Services (s5: y=3744 h=1010)
  await clip(dPage, 'desktop-services.png', 0, 3744, 1440, 1010);

  // 5. Welcome (s3: y=1977 h=739)
  await clip(dPage, 'desktop-welcome.png', 0, 1977, 1440, 739);

  // 6. Promotions header row only (s2: y=1252, show ~230px for heading+desc row)
  await clip(dPage, 'desktop-promotions.png', 0, 1252, 1440, 230);

  // 7. AppointmentCTA (s9: y=6859 h=594)
  await clip(dPage, 'desktop-appt-cta.png', 0, 6859, 1440, 594);

  // 8. FAQ (s7: y=5595 h=706)
  await clip(dPage, 'desktop-faq.png', 0, 5595, 1440, 706);

  await dPage.close();

  // ── MOBILE 390 ────────────────────────────────────────────
  // Mobile section map (from discovery):
  // s0=Hero        y=96   h=1002
  // s1=ContactBar  y=1098 h=664
  // s2=Promotions  y=1761 h=1433
  // s3=Welcome     y=3194 h=1025
  // s4=ClinicFinder y=4218 h=1371
  // s5=Services    y=5589 h=1838
  // s6=Budget      y=7427 h=1369
  // s7=FAQ         y=8796 h=943
  // s8=Reviews     y=9739 h=1138
  // s9=AppointmentCTA y=10909 h=756

  const mPage = await browser.newPage();
  await mPage.setViewportSize({ width: 390, height: 844 });
  await mPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mPage.waitForTimeout(2000);

  // TopBar (mobile: hidden, but capture top)
  await clip(mPage, 'mobile-topbar.png', 0, 0, 390, 60);

  // ContactBar mobile (s1: y=1098 h=664)
  await clip(mPage, 'mobile-contactbar.png', 0, 1098, 390, 664);

  // Services mobile (s5: y=5589 - first 1200px to see 3 cards stacked)
  await clip(mPage, 'mobile-services.png', 0, 5589, 390, 1200);

  // Welcome mobile (s3: y=3194 h=1025)
  await clip(mPage, 'mobile-welcome.png', 0, 3194, 390, 1025);

  // AppointmentCTA mobile (s9: y=10909 h=756)
  await clip(mPage, 'mobile-appt-cta.png', 0, 10909, 390, 756);

  // FAQ mobile (s7: y=8796 h=943)
  await clip(mPage, 'mobile-faq.png', 0, 8796, 390, 943);

  await mPage.close();
  await browser.close();
  console.log('All screenshots done');
})().catch(function(e) { console.error(e); process.exit(1); });
