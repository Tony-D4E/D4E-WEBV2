import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = process.cwd();
const PUBLIC_DIR = path.join(ROOT, 'public');

const images = [
  // Team / pages
  'team-antonio.jpg',
  'team-laetitia.jpg',
  'team-antonio-new.jpg',
  'team-alexandre.jpg',
  'team-odoo-event.jpg',
  'team-working.jpg',
  'team-jobs-1.jpg',
  'team-jobs-2.jpg',
  'btp-hero.jpg',
];

// Mix of small (avatars) and large (hero) display widths.
const widths = [160, 320, 640, 1024, 1600];

function variantName(filename, w, ext) {
  const parsed = path.parse(filename);
  return `${parsed.name}-w${w}${ext}`;
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function optimizeOne(filename) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  if (!(await exists(inputPath))) {
    console.warn(`[skip] missing: ${filename}`);
    return;
  }

  const img = sharp(inputPath, { failOn: 'none' });
  const meta = await img.metadata();
  if (!meta.width) {
    console.warn(`[skip] unreadable: ${filename}`);
    return;
  }

  const maxW = meta.width;
  const effectiveWidths = widths.filter((w) => w <= maxW);
  if (effectiveWidths.length === 0) effectiveWidths.push(Math.min(640, maxW));

  for (const w of effectiveWidths) {
    const avifOut = path.join(PUBLIC_DIR, variantName(filename, w, '.avif'));
    const webpOut = path.join(PUBLIC_DIR, variantName(filename, w, '.webp'));
    const jpgOut = path.join(PUBLIC_DIR, variantName(filename, w, '.jpg'));

    await sharp(inputPath, { failOn: 'none' })
      .resize({ width: w, withoutEnlargement: true })
      .avif({ quality: 45 })
      .toFile(avifOut);

    await sharp(inputPath, { failOn: 'none' })
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 70 })
      .toFile(webpOut);

    await sharp(inputPath, { failOn: 'none' })
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: 72, mozjpeg: true })
      .toFile(jpgOut);
  }

  console.log(`[ok] ${filename} → variants (${effectiveWidths.join(', ')})`);
}

async function main() {
  for (const filename of images) {
    // eslint-disable-next-line no-await-in-loop
    await optimizeOne(filename);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

