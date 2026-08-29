/**
 * Stub generator for the bloxverse-docs content repo.
 *
 * Writes the full reference/guides content tree as markdown stubs with
 * Starlight-compatible frontmatter. All pages are placeholders ("Stub")
 * that match the navigation structure of the docs site.
 *
 * Run:
 *   node scripts/generate-stubs.mjs [--dest ./path/to/bloxverse-docs]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const argDest = process.argv.indexOf('--dest');
const defaultDest = path.resolve(__dirname, '..', 'bloxverse-docs');
const dest = argDest !== -1 ? path.resolve(process.argv[argDest + 1]) : defaultDest;

function stub(title) {
  return `---
title: ${title}
description: Stub
---

Stub
`;
}

// Tree of [relativePath, title] pairs under <dest>/content/.
// Mirrors the sidebar grouping: Get Started / Concepts / API Reference /
// Classes / Data Types / Globals / Meta (contributing).
const TREE = [
  // Meta
  ['content/contributing.md', 'Contributing'],

  // Get Started
  ['content/guides/intro.md', 'Introduction'],
  ['content/guides/first-script.md', 'Your First Script'],
  ['content/guides/scripts-and-vms.md', 'Scripts and VMs'],

  // Concepts
  ['content/guides/instances.md', 'Instances'],
  ['content/guides/properties.md', 'Properties'],
  ['content/guides/client-server.md', 'Client and Server'],
  ['content/guides/events.md', 'Events'],
  ['content/guides/tasks.md', 'Tasks'],
  ['content/guides/remote-events.md', 'Remote Events'],
  ['content/guides/remote-functions.md', 'Remote Functions'],
  ['content/guides/bindable-events.md', 'Bindable Events'],
  ['content/guides/attributes.md', 'Attributes'],
  ['content/guides/values.md', 'Values'],
  ['content/guides/sandbox-limits.md', 'Sandbox Limits'],

  // API Reference index
  ['content/reference/index.md', 'API Reference'],

  // Reference / Globals
  ['content/reference/globals/debris.md', 'Debris'],
  ['content/reference/globals/enum.md', 'Enum'],
  ['content/reference/globals/game.md', 'game'],
  ['content/reference/globals/instance-new.md', 'Instance.new'],
  ['content/reference/globals/legacy.md', 'Legacy Globals'],
  ['content/reference/globals/output.md', 'Output'],
  ['content/reference/globals/runservice.md', 'RunService'],
  ['content/reference/globals/script.md', 'script'],
  ['content/reference/globals/task.md', 'task'],
  ['content/reference/globals/tween-info.md', 'TweenInfo'],
  ['content/reference/globals/tween-service.md', 'TweenService'],
  ['content/reference/globals/user-input-service.md', 'UserInputService'],
  ['content/reference/globals/workspace.md', 'workspace'],

  // Reference / Classes
  ['content/reference/classes/bindable-event.md', 'BindableEvent'],
  ['content/reference/classes/debris.md', 'Debris'],
  ['content/reference/classes/folder.md', 'Folder'],
  ['content/reference/classes/humanoid.md', 'Humanoid'],
  ['content/reference/classes/instance.md', 'Instance'],
  ['content/reference/classes/int-value.md', 'IntValue'],
  ['content/reference/classes/lighting.md', 'Lighting'],
  ['content/reference/classes/localscript.md', 'LocalScript'],
  ['content/reference/classes/model.md', 'Model'],
  ['content/reference/classes/modulescript.md', 'ModuleScript'],
  ['content/reference/classes/part.md', 'Part'],
  ['content/reference/classes/player.md', 'Player'],
  ['content/reference/classes/players.md', 'Players'],
  ['content/reference/classes/point-light.md', 'PointLight'],
  ['content/reference/classes/remote-event.md', 'RemoteEvent'],
  ['content/reference/classes/remote-function.md', 'RemoteFunction'],
  ['content/reference/classes/replicated-storage.md', 'ReplicatedStorage'],
  ['content/reference/classes/script.md', 'Script'],
  ['content/reference/classes/server-script-service.md', 'ServerScriptService'],
  ['content/reference/classes/spawnlocation.md', 'SpawnLocation'],
  ['content/reference/classes/spot-light.md', 'SpotLight'],
  ['content/reference/classes/starter-player-scripts.md', 'StarterPlayerScripts'],
  ['content/reference/classes/string-value.md', 'StringValue'],
  ['content/reference/classes/texture.md', 'Texture'],
  ['content/reference/classes/tween-service.md', 'TweenService'],
  ['content/reference/classes/user-input-service.md', 'UserInputService'],
  ['content/reference/classes/workspace.md', 'Workspace'],

  // Reference / Datatypes
  ['content/reference/datatypes/cframe.md', 'CFrame'],
  ['content/reference/datatypes/color3.md', 'Color3'],
  ['content/reference/datatypes/connection.md', 'Connection'],
  ['content/reference/datatypes/enum.md', 'Enum'],
  ['content/reference/datatypes/enumitem.md', 'EnumItem'],
  ['content/reference/datatypes/input-object.md', 'InputObject'],
  ['content/reference/datatypes/signal.md', 'Signal'],
  ['content/reference/datatypes/tween.md', 'Tween'],
  ['content/reference/datatypes/tween-info.md', 'TweenInfo'],
  ['content/reference/datatypes/vector3.md', 'Vector3'],
];

console.log(`Writing stubs into ${dest}`);

for (const [rel, title] of TREE) {
  const full = path.join(dest, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, stub(title), 'utf8');
  console.log(`  write: ${rel}`);
}

fs.mkdirSync(path.join(dest, 'images'), { recursive: true });
console.log('Ensure images/ exists');
console.log(`Wrote ${TREE.length} stubs`);
