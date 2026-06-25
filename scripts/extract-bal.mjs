import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto('https://baldentalcentre.com/', { waitUntil: 'networkidle', timeout: 60000 });

const title = await page.title();
const metaDesc = await page.evaluate(() => {
  const el = document.querySelector('meta[name="description"]');
  return el ? el.content : '';
});

const bodyText = await page.evaluate(() => document.body.innerText);

console.log('TITLE:', title);
console.log('META_DESC:', metaDesc);
console.log('---BODY_TEXT---');
console.log(bodyText.substring(0, 15000));

await browser.close();
