# bloxverse-docs

This is the content repository for the BloxVerse documentation. Contribute markdown here — a GitHub Actions workflow automatically rebuilds and deploys the site to `maddynkatie.github.io/bloxverse/create` on every push to `main`.

## Repository structure

```
content/          → Markdown source (contribute here!)
  contributing.md
  guides/         → Tutorial/guide pages (intro.md, attributes.md, remote-events.md, ...)
  reference/
    classes/      → Per-class API docs (bindable-event.md, debris.md, folder.md, ...)
    datatypes/    → Data type docs (cframe.md, color3.md, enum.md, ...)
    globals/      → Global function docs (instance-new.md, runservice.md, ...)
images/           → Images referenced from pages (optional)
site-src/         → The Astro + Starlight site that renders content/ (do not edit unless changing the site shell)
scripts/          → Tooling (generate-stubs.mjs)
.github/workflows → deploy.yml (builds and publishes automatically)
```

## Contributing

1. Add or edit a markdown file under `content/`.
2. Push to the `main` branch.
3. The deploy workflow rebuilds the site and publishes it to `maddynkatie.github.io/bloxverse/create`.

New pages just need a title in frontmatter:

```markdown
---
title: Page Title
description: Short description
---

Body text here.
```

To scaffold a whole batch of stub pages, use:

```bash
node scripts/generate-stubs.mjs --dest ./
```
