import { chromium } from 'C:/Users/markj/AppData/Roaming/npm/node_modules/playwright/index.mjs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'public/reference/local/v2');

async function safeClip(page, selector, outPath, extraHeight = 0) {
  try {
    const el = await page.$(selector);
    if (el) {
      const box = await el.boundingBox();
      const h = Math.min(box.height + extraHeight, 1400);
      await page.screenshot({ path: outPath, clip: { x: 0, y: box.y, width: box.width, height: h } });
      console.log('Captured:', path.basename(outPath), '  y=', Math.round(box.y), 'h=', Math.round(h));
      return box.y;
    } else {
      console.log('NOT FOUND:', selector);
      return -1;
    }
  } catch (e) {
    console.error('Error for', selector, e.message);
    return -1;
  }
}

(async () => {
  const browser = await chromium.launch();

  // ── DESKTOP 1440 ──────────────────────────────────────────
  const dPage = await browser.newPage();
  await dPage.setViewportSize({ width: 1440, height: 900 });
  await dPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await dPage.waitForTimeout(1500);

  // Dump section IDs to understand structure
  const sections = await dPage.evaluate(() => {
    return Array.from(document.querySelectorAll('section, [id], [data-section]')).map(el => ({
      tag: el.tagName,
      id: el.id,
      ds: el.dataset.section,
      cls: el.className.substring(0, 80),
      y: el.getBoundingClientRect().top + window.scrollY,
      h: el.offsetHeight
    })).filter(s => s.y < 15000);
  });
  console.log('SECTIONS:', JSON.stringify(sections.slice(0, 30), null, 2));

  await dPage.close();
  await browser.close();
  console.log('Discovery done');
})().catch(e => { console.error(e); process.exit(1); });
