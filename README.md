# archboard.io

The Archboard marketing site. Astro + Tailwind CSS 4, built to static files and served from Cloudflare.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs dist/
npm run preview
```

## Deploy

`wrangler.jsonc` serves `dist/` as Workers static assets:

```sh
npm run deploy     # astro build && wrangler deploy
```

Or connect the repo to Cloudflare Pages/Workers Builds with build command `npm run build` and output directory `dist`.

## Where things live

- `src/pages/index.astro`: the homepage, one component per section
- `src/components/Container.astro`: the page's one content width. Use `as="section"` when it is also the landmark.
- `src/components/LavaPanel.astro`: the WebGL lava background, ported from archboard-billing's `LavaPanel.vue`. Pass `colors`; the panel's own background shows behind the lava. Pauses off-screen, and draws one still frame for reduced motion or software rendering.
- `src/components/Logo.astro`: the "A" mark. Every product uses it with its own `gradient`.
- `src/components/GrainGlow.astro`: blurred glows + film grain for static brand panels.
- `src/data/apps.ts`: the apps, their brand colors (taken from each app's sign-in lava), hosting info, and site links.
- `src/styles/global.css`: theme tokens (fonts, orange primary, zinc grays) matching archboard-billing.

## Placeholders

Copy in `[brackets]` is placeholder text. Links set to `[SOMETHING]` in `src/data/apps.ts` render as `#` until filled in:
GitHub org, contributor guide, idea wishlist, new-issue link, Harbor Help Desk URL and contact email.
The founder photo goes in `public/` (see the comment in `Founder.astro`).
