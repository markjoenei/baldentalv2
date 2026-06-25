const { chromium } = require('C:/Users/markj/AppData/Roaming/npm/node_modules/playwright');
const path = require('path');

const outDir = path.join(__dirname, 'public/reference/local/v2');

(async () => {
  const browser = await chromium.launch();

  // Helper: disable CSS animations/transitions and force all reveal elements visible
  async function disableAnimations(page) {
    await page.addStyleTag({ content: '*, *::before, *::after { animation-duration: 0s !important; transition-duration: 0s !important; } [class*="opacity-0"] { opacity: 1 !important; } [class*="translate"] { transform: none !important; }' });
    // Also force all Reveal elements to be visible by scrolling through page
    const h = await page.evaluate(function() { return document.body.scrollHeight; });
    for (var y = 0; y <= h; y += 600) {
      await page.evaluate(function(scrollY) { window.scrollTo(0, scrollY); }, y);
      await page.waitForTimeout(100);
    }
    await page.evaluate(function() { window.scrollTo(0, 0); });
    await page.waitForTimeout(300);
  }

  async function clip(page, outName, x, y, w, h) {
    var p = path.join(outDir, outName);
    await page.screenshot({ path: p, fullPage: true, clip: { x: x, y: y, width: w, height: h } });
    console.log('OK:', outName);
  }

  // ── DESKTOP 1440 ──────────────────────────────────────────
  const dPage = await browser.newPage();
  await dPage.setViewportSize({ width: 1440, height: 900 });
  await dPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await dPage.waitForTimeout(1500);
  await disableAnimations(dPage);

  // TopBar
  await clip(dPage, 'desktop-topbar.png', 0, 0, 1440, 48);
  // Navbar
  await clip(dPage, 'desktop-navbar.png', 0, 35, 1440, 82);
  // ContactBar (s1: y=893 h=359)
  await clip(dPage, 'desktop-contactbar.png', 0, 893, 1440, 359);
  // Services (s5: y=3744 h=1010)
  await clip(dPage, 'desktop-services.png', 0, 3744, 1440, 1010);
  // Welcome (s3: y=1977 h=739)
  await clip(dPage, 'desktop-welcome.png', 0, 1977, 1440, 739);
  // Promotions header (s2: y=1252 first 230px)
  await clip(dPage, 'desktop-promotions.png', 0, 1252, 1440, 230);
  // AppointmentCTA (s9: y=6859 h=594)
  await clip(dPage, 'desktop-appt-cta.png', 0, 6859, 1440, 594);
  // FAQ (s7: y=5595 h=706)
  await clip(dPage, 'desktop-faq.png', 0, 5595, 1440, 706);

  await dPage.close();

  // ── MOBILE 390 ────────────────────────────────────────────
  // s1=ContactBar y=1098 h=664
  // s3=Welcome y=3194 h=1025
  // s5=Services y=5589 h=1838
  // s7=FAQ y=8796 h=943
  // s9=AppointmentCTA y=10909 h=756

  const mPage = await browser.newPage();
  await mPage.setViewportSize({ width: 390, height: 844 });
  await mPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mPage.waitForTimeout(1500);
  await disableAnimations(mPage);

  // TopBar mobile
  await clip(mPage, 'mobile-topbar.png', 0, 0, 390, 60);
  // ContactBar mobile
  await clip(mPage, 'mobile-contactbar.png', 0, 1098, 390, 664);
  // Services mobile
  await clip(mPage, 'mobile-services.png', 0, 5589, 390, 1200);
  // Welcome mobile
  await clip(mPage, 'mobile-welcome.png', 0, 3194, 390, 1025);
  // AppointmentCTA mobile
  await clip(mPage, 'mobile-appt-cta.png', 0, 10909, 390, 756);
  // FAQ mobile
  await clip(mPage, 'mobile-faq.png', 0, 8796, 390, 943);

  await mPage.close();
  await browser.close();
  console.log('All screenshots done');
})().catch(function(e) { console.error(e); process.exit(1); });
