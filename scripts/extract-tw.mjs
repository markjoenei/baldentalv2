import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// Intercept to capture stylesheet sources
const stylesheets = [];
page.on('response', async (response) => {
  const url = response.url();
  if (url.includes('.css') || url.includes('_next/static')) {
    try {
      const ct = response.headers()['content-type'] || '';
      if (ct.includes('css') || ct.includes('text')) {
        const text = await response.text();
        if (text.includes('--') || text.includes('gold') || text.includes('navy') || text.includes('cream')) {
          stylesheets.push({ url, snippet: text.substring(0, 3000) });
        }
      }
    } catch(e) {}
  }
});

await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

// Look for tailwind config colors in any script
const tailwindColors = await page.evaluate(() => {
  const out = {};
  // Check for inline style config
  [...document.querySelectorAll('style')].forEach(s => {
    if (s.innerHTML.includes('navy') || s.innerHTML.includes('gold') || s.innerHTML.includes('cream')) {
      out.inlineStyle = s.innerHTML.substring(0, 2000);
    }
  });

  // Get CSS custom properties from all stylesheets
  const vars = {};
  [...document.styleSheets].forEach(sheet => {
    try {
      [...sheet.cssRules].forEach(rule => {
        if (rule instanceof CSSKeyframesRule || rule instanceof CSSStyleRule) {
          const text = rule.cssText || '';
          if (text.includes('--')) {
            const matches = text.matchAll(/--([\w-]+):\s*([^;}\n]+)/g);
            for (const m of matches) {
              vars['--' + m[1]] = m[2].trim();
            }
          }
        }
      });
    } catch(e) {}
  });
  out.cssVars = vars;

  // Get all @keyframe names
  const keyframes = [];
  [...document.styleSheets].forEach(sheet => {
    try {
      [...sheet.cssRules].forEach(rule => {
        if (rule instanceof CSSKeyframesRule) {
          keyframes.push(rule.name);
        }
      });
    } catch(e) {}
  });
  out.keyframes = keyframes;

  return out;
});

// Also get the Next.js __NEXT_DATA__ for any config
const nextData = await page.evaluate(() => {
  const el = document.getElementById('__NEXT_DATA__');
  return el ? el.textContent?.substring(0, 2000) : null;
});

// Look at all scripts for color definitions
const colorDefs = await page.evaluate(() => {
  const results = [];
  [...document.querySelectorAll('script')].forEach(s => {
    if (s.textContent?.includes('navy') || s.textContent?.includes('gold') || s.textContent?.includes('cream')) {
      results.push(s.textContent?.substring(0, 3000));
    }
  });
  return results;
});

console.log('=== TAILWIND COLORS ===');
console.log(JSON.stringify(tailwindColors, null, 2));
console.log('\n=== NEXT DATA ===');
console.log(nextData);
console.log('\n=== COLOR DEFS IN SCRIPTS ===');
colorDefs.forEach((d, i) => console.log(`\n--- Script ${i} ---\n`, d.substring(0, 1000)));

console.log('\n=== STYLESHEETS WITH COLOR TOKENS ===');
stylesheets.forEach(s => {
  console.log(`\n--- ${s.url} ---`);
  console.log(s.snippet);
});

await browser.close();
