/**
 * Local content pull helper.
 *
 * Copies markdown from a local clone of bloxverse-docs into the Astro content
 * directory so you can build/preview the docs site without CI.
 *
 * Usage:
 *   node scripts/pull-content.mjs
 *
 * Copies the local content/ folder (a sibling of site-src/ in this repo) into
 * the Astro content directory so you can build/preview without CI.
 *
 * Usage:
 *   node scripts/pull-content.mjs
 *
 * Override the source with CONTENT_PATH env var if content lives elsewhere:
 *   $env:CONTENT_PATH="C:\path\to\bloxverse-docs\content"
 *   node scripts/pull-content.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const createRoot = path.resolve(__dirname, '..');
const docsClone = process.env.CONTENT_PATH || path.resolve(createRoot, '..');
const contentSrc = path.join(docsClone, 'content');
const contentDest = path.join(createRoot, 'src', 'content', 'docs');
const imagesSrc = path.join(docsClone, 'images');
const imagesDest = path.join(createRoot, 'src', 'assets', 'docs-images');

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return false;
  fs.rmSync(dest, { recursive: true, force: true });
  fs.mkdirSync(dest, { recursive: true });
  for (const name of fs.readdirSync(src)) {
    const s = path.join(src, name);
    const d = path.join(dest, name);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
  return true;
}

const hasContent = copyDir(contentSrc, contentDest);
const hasImages = copyDir(imagesSrc, imagesDest);
if (hasImages) {
  // Keep Starlight happy when no images exist yet.
}

if (!hasContent) {
  const rel = path.relative(createRoot, contentSrc);
  console.error(`No content found at "${rel}".`);
  console.error('Clone bloxverse-docs as a sibling folder or set BLOXVERSE_DOCS_PATH.');
  process.exit(1);
}

console.log('Copied content into src/content/docs/');
