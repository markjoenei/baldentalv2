import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// Capture the main CSS file
let cssContent = '';
page.on('response', async (response) => {
  const url = response.url();
  if (url.includes('0guu_k077_ocq.css') || url.includes('.css')) {
    try {
      const text = await response.text();
      if (text.length > 1000) cssContent += '\n\n---' + url + '---\n' + text;
    } catch(e) {}
  }
});

await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

// Extract color utility classes from the CSS
const colorMatches = cssContent.match(/\.(text|bg|border|fill|stroke|ring|shadow)[^{]*\{[^}]+color[^}]+\}/g) || [];
const relevantColors = colorMatches.filter(c =>
  c.includes('navy') || c.includes('gold') || c.includes('cream')
).slice(0, 50);

console.log('=== RELEVANT COLOR CLASSES ===');
console.log(relevantColors.join('\n'));

// Also search for the color definitions
const navyMatch = cssContent.match(/navy[^{;,\s]{0,50}/g) || [];
const goldMatch = cssContent.match(/gold[^{;,\s]{0,50}/g) || [];
const creamMatch = cssContent.match(/cream[^{;,\s]{0,50}/g) || [];

console.log('\n=== NAVY MENTIONS (first 30) ===');
console.log([...new Set(navyMatch)].slice(0, 30).join('\n'));

console.log('\n=== GOLD MENTIONS (first 30) ===');
console.log([...new Set(goldMatch)].slice(0, 30).join('\n'));

console.log('\n=== CREAM MENTIONS (first 30) ===');
console.log([...new Set(creamMatch)].slice(0, 30).join('\n'));

// Look for actual hex values near color names
const hexPattern = /(?:navy|gold|cream)[^}]{0,200}#[0-9a-fA-F]{3,8}/g;
const hexMatches = cssContent.match(hexPattern) || [];
console.log('\n=== HEX VALUES NEAR COLOR NAMES ===');
console.log(hexMatches.slice(0, 20).join('\n'));

// Look for rgb values defined for color tokens
const rgbPattern = /(navy|gold|cream)[^:]*:\s*(rgb[^;]+|#[0-9a-f]{3,8})/gi;
const rgbMatches = cssContent.match(rgbPattern) || [];
console.log('\n=== RGB VALUES FOR COLOR TOKENS ===');
console.log(rgbMatches.slice(0, 30).join('\n'));

await browser.close();
