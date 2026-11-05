# Archboard site: AI guidelines

The marketing site for Archboard, which builds open-source apps for education and more. One static page: Astro 7 and Tailwind CSS 4, served from Cloudflare.

Readers are mostly teachers, school administrators and IT staff, many of them non-technical. They are usually comparing Archboard to vendors they already distrust.

See `README.md` for commands, the file map and the list of open placeholders.

## Copy

- **Never invent facts.** No made-up stats, customers, testimonials, quotes, prices, or compliance and security claims (FERPA, SOC 2, and so on). If it isn't in the repo or from the user, ask.
- **`[Bracketed]` copy is a placeholder.** Leave it in place until the user supplies or approves the real text. When drafting, show the draft to the user rather than quietly replacing the brackets.
- **Grant's note is Grant's.** First-person founder copy in `Founder.astro` is only written or edited at their request.
- **Free means the apps.** The apps and source code are free. Hosting is paid and is how Archboard makes money. Never imply hosting is free, or that the apps require it.
- **Education leads, but isn't the limit.** Harbor Help Desk isn't school-specific, so don't describe every product as being only for schools.
- **Voice:** plain, blunt, a little funny, and on the reader's side ("School software got weird."). Short sentences. No enterprise jargon such as "solutions", "seamless" or "empower". Explain technical terms or hand them to "your IT person".

## Code

- **Keep it static.** No UI framework, SSR adapter or client-side router. Interactivity is a small vanilla `<script>` in the component that needs it.
- **Ask before adding a dependency.** Also ask before adding any third-party script, tracker, embed or remote font. Fonts are self-hosted through Fontsource, and the audience is schools.
- **One component per homepage section,** composed in `src/pages/index.astro`. Repeated content goes in an array in the frontmatter, or in `src/data/apps.ts` if it is about an app or a link.
- **Add an app by adding an entry to `apps`.** The cards and hosting rows render from it, so don't hardcode app names, prices or brand colors in components.
- **Links:** external and not-yet-known URLs live in `links` or `apps` and render through `href()`, which turns `[PLACEHOLDER]` values into `#`.
- **Section numbers are hardcoded.** The eyebrows ("01 / THE STATUS QUO") run in page order, so renumber them when adding or moving a numbered section.
- **Style:** match the surrounding code: no semicolons, single quotes, two-space indent. Comments explain why, not what.

## Design

- **Tokens** live in `src/styles/global.css`. Use `primary-*` and `gray-*`, not `orange-*` or `zinc-*`. Reuse the `eyebrow`, `headline`, `btn-primary` and `btn-outline` utilities.
- **Color:** black page background, zinc grays. Orange is the action color, with black text on it. The amber, orange and rose gradient is for brand moments. Other hues belong to a specific app or moment, not general UI.
- **Type:** DM Serif Display for big headlines only, Inter for body text, JetBrains Mono for labels and code.
- **Brand components:** `LavaPanel` for animated backgrounds, `GrainGlow` for static panels, `Logo` for the "A" mark. Every product uses the same mark with its own gradient. App colors come from that app's sign-in page.

## Accessibility and performance

These are requirements. Schools have to care about them, and so do we.

- Sections use `aria-labelledby` pointing at their heading. Keep one `h1` and don't skip heading levels.
- Purely decorative elements get `aria-hidden="true"`. Text on any background meets 4.5:1 contrast.
- Interactive targets are at least 44px tall (`min-h-11`), and keep the global `:focus-visible` outline.
- All motion respects `prefers-reduced-motion`. CSS animation is handled globally; JS and WebGL must check for themselves, as `LavaPanel` does.
- Layouts must work from phone width up without horizontal scrolling. The site favors `flex-wrap`, `auto-fit` grids and `clamp()` over breakpoints.
- Anything animated pauses off-screen. Keep client JS small.

## Before you finish

- Run `npm run build`. There are no tests or linter, and it is the only automated check.
- For visual changes, look at the page with `npm run dev` at phone and desktop widths. If you can't, say so rather than claiming it works.
- Don't run `npm run deploy` or publish anything unless asked.
