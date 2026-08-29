# BloxVerse Docs Site (`site-src`)

This folder is the Astro + Starlight site that renders the bloxverse-docs content into static pages at `maddynkatie.github.io/bloxverse/create`.

**You normally don't need to touch this.** Content lives in the sibling `content/` folder; the `.github/workflows/deploy.yml` workflow copies `content/` in, builds, and publishes automatically on every push to `main`.

## Local development

```bash
npm install
npm run pull   # copies the sibling ../content into src/content/docs
npm run dev    # local preview at http://localhost:4321/bloxverse/create
npm run build  # static output in dist/
```

`npm run pull` copies `../content` (a sibling of `site-src/`) into `src/content/docs/`. Override the source with `CONTENT_PATH` if needed.

## Deploy flow

On push to `main` in `bloxverse-docs`, the workflow:
1. copies `content/` → `site-src/src/content/docs/`
2. `npm ci && npm run build` → `site-src/dist/`
3. pushes `dist/*` into `MaddynKatie/bloxverse` under `create/` (served at `/bloxverse/create`), using the `DEPLOY_PAT` secret.
