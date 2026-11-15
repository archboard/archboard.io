/**
 * Each app's brand. `lava` and `background` come from the app's own sign-in page
 * (tidal-ptc Guest.vue, harbor-help AuthLayout.vue) so the cards match the products.
 */
export interface App {
  name: string
  description: string
  tags: string[]
  /** Pill text on the card's art. Also marks the app the page leads with. */
  featured_pill?: string
  /** Pill text for the PowerSchool badge, the main thing schools look for. */
  brand_pill?: string
  url: string
  /** A public demo anyone can click into without signing up. */
  demo?: string
  /** Lava blob colors, drawn over `background`. */
  lava: string[]
  background: string
  /** Gradient for the "A" mark: light → mid → dark of the brand color. */
  mark: [string, string, string]
  /** Link color on black, readable at 4.5:1. */
  accent: string
  /** `short` is the price where there is only room for a few words. */
  hosting?: { label: string; price: string; short: string; url: string }
}

export const apps: App[] = [
  {
    name: 'Tidal PTC',
    description: 'Manage parent teacher conferences like a champ. Everything you need for scheduling time slots.',
    tags: ['10 min install', 'Free & open'],
    featured_pill: 'FLAGSHIP',
    brand_pill: 'Works with PowerSchool',
    url: 'https://tidalptc.com/',
    demo: 'https://demo.tidalptc.app/',
    // teal-400, cyan-300, #047481, sky-500, emerald-400 on teal-950
    lava: ['#2dd4bf', '#53eafd', '#047481', '#00a6f4', '#00d492'],
    background: '#042f2e',
    mark: ['#5eead4', '#14b8a6', '#0f766e'],
    accent: '#2dd4bf',
    hosting: {
      label: 'Tidal PTC Cloud',
      price: 'From $450 a year · districts capped at $4,000',
      short: 'from $450/yr',
      url: 'https://tidalptc.com/#pricing',
    },
  },
  {
    name: 'Harbor Help Desk',
    description: "Host your own fully-featured helpdesk, complete with a robust automation engine and reporting.",
    tags: ['Automations', 'Free & open'],
    url: 'https://harborhelpdesk.dev',
    featured_pill: 'IN PROGRESS',
    brand_pill: 'MCP Support',
    // blue-400, sky-300, blue-700, cyan-400, indigo-400 on blue-950
    lava: ['#51a2ff', '#74d4ff', '#1447e6', '#00d3f2', '#7c86ff'],
    background: '#162456',
    mark: ['#8ec5ff', '#2b7fff', '#1447e6'],
    accent: '#51a2ff',
  },
]

/** The app the page leads with: its demo and pricing are the main calls to action. */
export const flagship = apps.find((app) => app.featured_pill)!

/** Links that still need real destinations are left as '#'. */
export const links = {
  github: 'https://github.com/archboard',
  contributing: 'https://tidalptc.com/contributing/',
  newIssue: 'https://github.com/archboard/tidal-ptc/issues/new',
  selfHosting: 'https://tidalptc.com/installation/docker/',
  quote: 'https://billing.archboard.io',
  billing: 'https://billing.archboard.io/login',
  email: 'support@archboard.io',
}

/** A placeholder URL in brackets renders as '#' so nothing links to a broken address. */
export const href = (url: string) => (url.startsWith('[') ? '#' : url)
