import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const THRESHOLD = 22; // tolérance pour les pixels "presque noirs" (anti-aliasing)

function isNearBlack(r, g, b) {
  return r <= THRESHOLD && g <= THRESHOLD && b <= THRESHOLD;
}

async function makeBlackTransparent(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i];
    const g = out[i + 1];
    const b = out[i + 2];
    const a = out[i + 3];
    if (a !== 0 && isNearBlack(r, g, b)) out[i + 3] = 0;
  }

  const tmp = `${outputPath}.tmp`;
  await sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(tmp);

  await fs.rename(tmp, outputPath);
}

const projectRoot = process.cwd();
const logoPath = path.join(projectRoot, 'public', 'logo-d4e.png');

await makeBlackTransparent(logoPath, logoPath);
console.log(`OK: transparence appliquée sur ${logoPath}`);

