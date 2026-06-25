import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

// ===== COLOR PALETTE =====
const colors = await page.evaluate(() => {
  const targets = ['body', 'nav', 'header', 'main', 'footer', 'h1', 'h2', 'h3', 'p', 'a', 'button'];
  const out = {};
  targets.forEach(sel => {
    const el = document.querySelector(sel);
    if (!el) return;
    const cs = getComputedStyle(el);
    out[sel] = {
      color: cs.color,
      bg: cs.backgroundColor,
      bgImage: cs.backgroundImage,
      borderColor: cs.borderColor,
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      lineHeight: cs.lineHeight,
    };
  });
  return out;
});

// ===== ALL LINKS/COLORS ON BUTTONS =====
const buttons = await page.evaluate(() => {
  return [...document.querySelectorAll('button, a[class*="btn"], a[class*="button"], [class*="btn"]')].slice(0, 20).map(el => {
    const cs = getComputedStyle(el);
    return {
      text: el.innerText?.trim(),
      tag: el.tagName,
      class: el.className,
      color: cs.color,
      bg: cs.backgroundColor,
      borderColor: cs.borderColor,
      borderRadius: cs.borderRadius,
      padding: cs.padding,
    };
  });
});

// ===== FONT LINKS =====
const fontLinks = await page.evaluate(() => {
  return [...document.querySelectorAll('link[href*="fonts.google"], link[href*="fonts.adobe"], link[href*="typekit"]')].map(l => l.href);
});

// ===== ALL HEADINGS =====
const headings = await page.evaluate(() => {
  const out = {};
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].forEach(tag => {
    const el = document.querySelector(tag);
    if (!el) return;
    const cs = getComputedStyle(el);
    out[tag] = {
      text: el.innerText?.trim().substring(0, 80),
      fontFamily: cs.fontFamily,
      fontSize: cs.fontSize,
      fontWeight: cs.fontWeight,
      lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing,
      color: cs.color,
      textTransform: cs.textTransform,
    };
  });
  return out;
});

// ===== NAVIGATION =====
const nav = await page.evaluate(() => {
  const navEl = document.querySelector('nav, header nav, .nav, .navbar, .navigation, #nav, #navbar');
  if (!navEl) return [];
  const links = [...navEl.querySelectorAll('a')];
  return links.map(a => ({ text: a.innerText?.trim(), href: a.href, class: a.className })).filter(l => l.text);
});

// ===== CSS CUSTOM PROPERTIES =====
const cssVars = await page.evaluate(() => {
  const root = document.documentElement;
  const cs = getComputedStyle(root);
  const vars = {};
  for (let i = 0; i < document.styleSheets.length; i++) {
    try {
      const rules = document.styleSheets[i].cssRules;
      for (let j = 0; j < rules.length; j++) {
        const rule = rules[j];
        if (rule.selectorText === ':root') {
          const text = rule.cssText;
          const matches = text.matchAll(/--[\w-]+:\s*([^;]+)/g);
          for (const m of matches) {
            vars[m[0].split(':')[0].trim()] = m[1].trim();
          }
        }
      }
    } catch(e) {}
  }
  return vars;
});

// ===== ALL IMAGES =====
const images = await page.evaluate(() => {
  const imgs = [...document.querySelectorAll('img')].map(i => ({
    src: i.currentSrc || i.src,
    alt: i.alt,
    width: i.naturalWidth,
    height: i.naturalHeight,
  }));
  const bgImgs = [...document.querySelectorAll('*')]
    .map(el => ({ tag: el.tagName, cl: el.className, bg: getComputedStyle(el).backgroundImage }))
    .filter(x => x.bg && x.bg !== 'none' && x.bg.includes('url'));
  return { imgs, bgImgs };
});

// ===== LOGO =====
const logo = await page.evaluate(() => {
  const logoEl = document.querySelector('header img, nav img, .logo img, .brand img, [class*="logo"] img');
  if (!logoEl) return null;
  return { src: logoEl.currentSrc || logoEl.src, alt: logoEl.alt, class: logoEl.className };
});

// ===== SVGs =====
const svgs = await page.evaluate(() => {
  return [...document.querySelectorAll('header svg, nav svg, .logo svg, [class*="logo"] svg')].slice(0, 5).map(s => ({
    outerHTML: s.outerHTML.substring(0, 500),
    class: s.className,
  }));
});

// ===== LAYOUT / SPACING =====
const layout = await page.evaluate(() => {
  const sections = [...document.querySelectorAll('section, .section, [class*="section"]')].slice(0, 10).map(el => {
    const cs = getComputedStyle(el);
    return {
      class: el.className.substring(0, 80),
      paddingTop: cs.paddingTop,
      paddingBottom: cs.paddingBottom,
      maxWidth: cs.maxWidth,
    };
  });
  const containers = [...document.querySelectorAll('.container, .wrapper, [class*="container"], [class*="wrapper"]')].slice(0, 5).map(el => {
    const cs = getComputedStyle(el);
    return { class: el.className.substring(0, 60), maxWidth: cs.maxWidth, padding: cs.padding };
  });
  return { sections, containers };
});

// ===== ALL UNIQUE COLORS ON PAGE =====
const allColors = await page.evaluate(() => {
  const colorSet = new Set();
  [...document.querySelectorAll('*')].forEach(el => {
    const cs = getComputedStyle(el);
    ['color', 'backgroundColor', 'borderColor', 'outlineColor'].forEach(prop => {
      const val = cs[prop];
      if (val && val !== 'rgba(0, 0, 0, 0)' && val !== 'transparent') {
        colorSet.add(val);
      }
    });
  });
  return [...colorSet].slice(0, 50);
});

console.log('=== COLORS BY ELEMENT ===');
console.log(JSON.stringify(colors, null, 2));
console.log('\n=== BUTTONS ===');
console.log(JSON.stringify(buttons, null, 2));
console.log('\n=== FONT LINKS ===');
console.log(JSON.stringify(fontLinks, null, 2));
console.log('\n=== HEADINGS ===');
console.log(JSON.stringify(headings, null, 2));
console.log('\n=== NAVIGATION ===');
console.log(JSON.stringify(nav, null, 2));
console.log('\n=== CSS VARS ===');
console.log(JSON.stringify(cssVars, null, 2));
console.log('\n=== IMAGES ===');
console.log(JSON.stringify(images, null, 2));
console.log('\n=== LOGO ===');
console.log(JSON.stringify(logo, null, 2));
console.log('\n=== SVGS ===');
console.log(JSON.stringify(svgs, null, 2));
console.log('\n=== LAYOUT ===');
console.log(JSON.stringify(layout, null, 2));
console.log('\n=== ALL UNIQUE COLORS ===');
console.log(JSON.stringify(allColors, null, 2));

await browser.close();
