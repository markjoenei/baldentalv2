import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

// Get the CSS file to find all color token hex values
let cssContent = '';
page.on('response', async (response) => {
  const url = response.url();
  if (url.includes('.css')) {
    try {
      const text = await response.text();
      if (text.length > 500) cssContent += text;
    } catch(e) {}
  }
});

await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

// Find gold-tint, cream-deep, cream-muted, ink-muted, navy-2, gold-strong values in CSS
const tokenPatterns = [
  'gold-tint', 'gold-strong', 'gold-deep',
  'cream-deep', 'cream-muted', 'cream-soft',
  'ink-muted', 'navy-2', 'navy-gradient',
  'shadow-gold', 'shadow-soft', 'shadow-card', 'shadow-lift'
];

const results = {};
tokenPatterns.forEach(token => {
  // Find token definitions: --color-X: #hex or .text-X{color:#hex}
  const regex = new RegExp(`(?:--color-${token}|[.][a-z-]*${token.replace('-','[-]?')}[a-z]*)[^{;]*[{:]\\s*[^;{}]+`, 'g');
  const matches = cssContent.match(regex) || [];
  if (matches.length) results[token] = matches.slice(0, 5);
});

// Also find color-X definitions
const colorDefRegex = /--color-[\w-]+:\s*#[0-9a-fA-F]{3,8}/g;
const colorDefs = cssContent.match(colorDefRegex) || [];

// Navy gradient definition
const navyGradient = cssContent.match(/navy-gradient[^{]*\{[^}]+\}/g) || [];

// Shadow definitions
const shadows = cssContent.match(/shadow-[^{]*\{[^}]+\}/g) || [];

// Extract the Tailwind color config from CSS
// Look for the color map
const colorMap = {};
const hexMatches = cssContent.match(/\.(?:text|bg|border|fill|ring)-(\w[\w-]*)\{(?:color|background-color|border-color):#([0-9a-fA-F]{3,8})\}/g) || [];
hexMatches.forEach(m => {
  const match = m.match(/\.(?:text|bg|border|fill|ring)-([\w-]+)\{(?:[^:]+):#([0-9a-fA-F]{3,8})\}/);
  if (match) colorMap[match[1]] = '#' + match[2];
});

console.log('=== TOKEN SEARCH ===');
console.log(JSON.stringify(results, null, 2));

console.log('\n=== COLOR DEFINITIONS FROM CSS ===');
console.log(colorDefs.join('\n'));

console.log('\n=== NAVY GRADIENTS ===');
console.log(navyGradient.slice(0, 5).join('\n'));

console.log('\n=== SHADOW DEFINITIONS ===');
console.log(shadows.slice(0, 10).join('\n'));

console.log('\n=== FULL COLOR MAP ===');
console.log(JSON.stringify(colorMap, null, 2));

await browser.close();
