/**
 * Stub generator for the bloxverse-docs content repo.
 *
 * Writes the full reference/guides content tree as markdown stubs with
 * Starlight-compatible frontmatter. Copy this file into bloxverse-docs at
 * `scripts/generate-stubs.mjs` (or run it directly) and run:
 *
 *   node generate-stubs.mjs [--dest ./path/to/bloxverse-docs]
 *
 * Defaults to writing into a sibling `bloxverse-docs` clone. Pass `--dest`
 * to target another location.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const argDest = process.argv.indexOf('--dest');
const defaultDest = path.resolve(__dirname, '..', '..', 'bloxverse-docs');
const dest = argDest !== -1 ? path.resolve(process.argv[argDest + 1]) : defaultDest;

// Stub content that every generated doc file starts from.
function stub(title, extra = '') {
  return `---
title: ${title}
description: Stub
---

Stub${extra}
`;
}

// Tree of [relativePath, title] pairs under <dest>/content/.
const TREE = [
  // Root-level contributing page
  ['content/contributing.md', 'Contributing'],

  // Guides
  ['content/guides/intro.md', 'Introduction'],
  ['content/guides/attributes.md', 'Attributes'],
  ['content/guides/remote-events.md', 'Remote Events'],

  // Reference / Classes
  ['content/reference/classes/bindable-event.md', 'BindableEvent'],
  ['content/reference/classes/debris.md', 'Debris'],
  ['content/reference/classes/folder.md', 'Folder'],

  // Reference / Datatypes
  ['content/reference/datatypes/cframe.md', 'CFrame'],
  ['content/reference/datatypes/color3.md', 'Color3'],
  ['content/reference/datatypes/enum.md', 'Enum'],

  // Reference / Globals
  ['content/reference/globals/debris.md', 'Debris (Global)'],
  ['content/reference/globals/instance-new.md', 'Instance.new'],
  ['content/reference/globals/runservice.md', 'RunService'],
];

console.log(`Writing stubs into ${dest}`);

for (const [rel, title] of TREE) {
  const full = path.join(dest, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  if (fs.existsSync(full)) {
    console.log(`  skip (exists): ${rel}`);
    continue;
  }
  fs.writeFileSync(full, stub(title), 'utf8');
  console.log(`  write: ${rel}`);
}

// images/ folder (empty placeholder so it exists for contributors)
fs.mkdirSync(path.join(dest, 'images'), { recursive: true });
console.log('Ensure images/ exists');

console.log('Done.');
