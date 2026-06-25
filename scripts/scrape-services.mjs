import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ html: data, status: res.statusCode }));
    });
    req.on('error', reject);
    req.setTimeout(20000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const mod = url.startsWith('https') ? https : http;
    const dir = path.dirname(destPath);
    fs.mkdirSync(dir, { recursive: true });
    const file = fs.createWriteStream(destPath);
    const req = mod.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.unlinkSync(destPath);
        return downloadFile(res.headers.location, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(); });
    });
    req.on('error', (err) => { file.close(); reject(err); });
    req.setTimeout(20000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function stripTags(html) {
  return (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x27;/g, "'")
    .replace(/&rsquo;/g, "'")
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/\s+/g, ' ')
    .trim();
}

function getFirst(html, regex) {
  const m = html.match(regex);
  return m ? stripTags(m[1]) : '';
}

function getAllMatches(html, regex) {
  return [...html.matchAll(regex)];
}

function parseServicePage(html, slug) {
  // H1 title
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  const title = h1Match ? stripTags(h1Match[1]) : '';

  // Subheading - first meaningful paragraph
  const allParas = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
  const subheading = allParas
    .map(m => stripTags(m[1]))
    .filter(t => t.length > 50 && !t.includes('Greystone') && !t.includes('416-267') && !t.includes('sitemap'))
    .find(t => t.length > 30) || '';

  // Images from images-services folder
  const imgRegex = /images-services\/([^"'\s\\]+)/g;
  const imgMatches = [...html.matchAll(imgRegex)];
  const uniqueImgs = [...new Set(imgMatches.map(m => m[1]))].filter(f => f.match(/\.(jpg|jpeg|png|webp|avif|svg)/i));

  // All headings in order (h2, h3)
  const headingMatches = [...html.matchAll(/<h([23])[^>]*>([\s\S]*?)<\/h\1>/g)];
  const headings = headingMatches.map(m => ({
    level: parseInt(m[1]),
    text: stripTags(m[2])
  }));

  // All paragraphs (meaningful ones only)
  const paragraphs = allParas
    .map(m => stripTags(m[1]))
    .filter(t =>
      t.length > 40 &&
      !t.includes('Greystone Walk') &&
      !t.includes('416-267') &&
      !t.includes('© 2026') &&
      !t.includes('sitemap') &&
      !t.includes('Home About Us') &&
      !t.includes('Email Us') &&
      !t.includes('Office Hours') &&
      !t.includes('Monday 9') &&
      !t.includes('OPEN 7 DAYS') &&
      !t.includes('Leave us a review') &&
      !t.includes('Accepting New Patients')
    );

  // Bullet lists
  const listItems = [...html.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)]
    .map(m => stripTags(m[1]))
    .filter(t => t.length > 10 && t.length < 300 && !t.includes('Greystone') && !t.includes('416-267'));

  // Build sections from headings + content
  const sections = [];
  // Get the main content block (skip nav/footer)
  const mainStart = html.indexOf('<h1');
  const mainEnd = html.indexOf('Book your');
  const mainHtml = mainStart > 0 ? html.substring(mainStart, mainEnd > 0 ? mainEnd : html.length) : html;

  const h2Matches = [...mainHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
  h2Matches.forEach((m, i) => {
    const heading = stripTags(m[2]);
    if (heading.includes('Book') || heading.includes('Contact') || heading.includes('Review')) return;
    const startIdx = m.index + m[0].length;
    const nextH2 = h2Matches[i + 1];
    const endIdx = nextH2 ? nextH2.index : mainHtml.length;
    const sectionHtml = mainHtml.substring(startIdx, endIdx);
    const sectionParas = [...sectionHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)]
      .map(pm => stripTags(pm[1]))
      .filter(t => t.length > 20);
    const sectionItems = [...sectionHtml.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/g)]
      .map(lm => stripTags(lm[1]))
      .filter(t => t.length > 5 && t.length < 300);
    sections.push({
      heading,
      paragraphs: sectionParas,
      bullets: sectionItems.length > 0 ? sectionItems : undefined
    });
  });

  // FAQs
  const faqIdx = html.indexOf('Common Questions') !== -1 ? html.indexOf('Common Questions') : html.indexOf('FAQ') !== -1 ? html.indexOf('FAQ') : -1;
  const faqs = [];
  if (faqIdx > 0) {
    const faqHtml = html.substring(faqIdx, faqIdx + 8000);
    const questionMatches = [...faqHtml.matchAll(/<button[^>]*>([\s\S]*?)<\/button>/g)];
    const answerMatches = [...faqHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
    const questions = questionMatches.map(m => stripTags(m[1])).filter(t => t.length > 10 && t.length < 300);
    const answers = answerMatches.map(m => stripTags(m[1])).filter(t => t.length > 20);
    // Pair them
    questions.forEach((q, i) => {
      if (answers[i]) faqs.push({ question: q, answer: answers[i] });
    });
  }

  // CTA section
  const ctaIdx = html.indexOf('Book your');
  const ctaText = ctaIdx > 0 ? stripTags(html.substring(ctaIdx, ctaIdx + 300)).substring(0, 200) : '';

  return {
    title,
    subheading,
    hero: `/baldental/services/${slug}/hero.jpg`,
    sections,
    faqs,
    images: uniqueImgs
      .filter(f => !f.includes('hero'))
      .map((f, i) => `/baldental/services/${slug}/${i + 1}.jpg`),
    cta: ctaText,
    rawImages: uniqueImgs
  };
}

const SERVICES = [
  'preventive-dentistry',
  'dental-implants',
  'dental-crowns-bridges',
  'dentures-partials',
  'tooth-colored-fillings',
  'root-canal',
  'tooth-extractions',
  'cosmetic-dentistry',
  'porcelain-veneers'
];

async function main() {
  const result = {};

  for (const slug of SERVICES) {
    console.log(`\nProcessing: ${slug}`);
    const url = `https://baldentalcentre.com/services/${slug}/`;
    let html;
    try {
      const res = await fetchUrl(url);
      html = res.html;
      console.log(`  Fetched ${html.length} bytes, status ${res.status}`);
    } catch (e) {
      console.error(`  ERROR fetching ${slug}: ${e.message}`);
      result[slug] = { error: e.message };
      continue;
    }

    const data = parseServicePage(html, slug);
    result[slug] = {
      title: data.title,
      subheading: data.subheading,
      hero: data.hero,
      sections: data.sections,
      faqs: data.faqs,
      images: data.images,
      cta: data.cta
    };

    console.log(`  Title: ${data.title.substring(0, 80)}`);
    console.log(`  Images found: ${data.rawImages.join(', ')}`);

    // Download hero
    const heroSrc = data.rawImages.find(f => f.toLowerCase().includes('hero'));
    if (heroSrc) {
      const heroUrl = `https://baldentalcentre.com/images-services/${heroSrc}`;
      const heroPath = path.join(ROOT, 'public', 'baldental', 'services', slug, 'hero.jpg');
      try {
        await downloadFile(heroUrl, heroPath);
        console.log(`  Downloaded hero: ${heroSrc}`);
      } catch (e) {
        console.error(`  ERROR downloading hero: ${e.message}`);
      }
    }

    // Download supporting images
    const supportImgs = data.rawImages.filter(f => !f.toLowerCase().includes('hero'));
    for (let i = 0; i < supportImgs.length; i++) {
      const imgSrc = supportImgs[i];
      const imgUrl = `https://baldentalcentre.com/images-services/${imgSrc}`;
      const imgPath = path.join(ROOT, 'public', 'baldental', 'services', slug, `${i + 1}.jpg`);
      try {
        await downloadFile(imgUrl, imgPath);
        console.log(`  Downloaded img ${i + 1}: ${imgSrc}`);
      } catch (e) {
        console.error(`  ERROR downloading img ${imgSrc}: ${e.message}`);
      }
    }
  }

  // Save JSON
  const jsonPath = path.join(ROOT, 'data', 'services-b.json');
  fs.mkdirSync(path.dirname(jsonPath), { recursive: true });
  fs.writeFileSync(jsonPath, JSON.stringify(result, null, 2));
  console.log(`\nSaved to ${jsonPath}`);
}

main().catch(console.error);
