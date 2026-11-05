/**
 * Each app's brand. `lava` and `background` come from the app's own sign-in page
 * (tidal-ptc Guest.vue, harbor-help AuthLayout.vue) so the cards match the products.
 */
export interface App {
  name: string
  description: string
  tags: string[]
  flagship?: boolean
  /** Shows the "Works with PowerSchool" badge, the main thing schools look for. */
  powerschool?: boolean
  url: string
  /** Lava blob colors, drawn over `background`. */
  lava: string[]
  background: string
  /** Gradient for the "A" mark: light → mid → dark of the brand color. */
  mark: [string, string, string]
  /** Link color on black, readable at 4.5:1. */
  accent: string
  hosting?: { label: string; price: string; url: string }
}

export const apps: App[] = [
  {
    name: 'Tidal PTC',
    description: '[Parent-teacher conferences without the spreadsheet chaos. One line on what it does.]',
    tags: ['[3+] yrs in prod', 'Free & open'],
    flagship: true,
    powerschool: true,
    url: 'https://tidalptc.com/',
    // teal-400, cyan-300, #047481, sky-500, emerald-400 on teal-950
    lava: ['#2dd4bf', '#53eafd', '#047481', '#00a6f4', '#00d492'],
    background: '#042f2e',
    mark: ['#5eead4', '#14b8a6', '#0f766e'],
    accent: '#2dd4bf',
    hosting: {
      label: 'Tidal PTC Cloud',
      price: 'From $450 a year · districts capped at $4,000',
      url: 'https://tidalptc.com/#pricing',
    },
  },
  {
    name: 'Harbor Help Desk',
    description: "[An open-source help desk. One line on what it does and who it's for.]",
    tags: ['[Status]', 'Free & open'],
    url: '[HARBOR URL]',
    // blue-400, sky-300, blue-700, cyan-400, indigo-400 on blue-950
    lava: ['#51a2ff', '#74d4ff', '#1447e6', '#00d3f2', '#7c86ff'],
    background: '#162456',
    mark: ['#8ec5ff', '#2b7fff', '#1447e6'],
    accent: '#51a2ff',
  },
]

/** Links that still need real destinations are left as '#'. */
export const links = {
  github: '[GITHUB ORG URL]',
  contributing: '[CONTRIBUTOR GUIDE URL]',
  wishlist: '[IDEA WISHLIST URL]',
  newIssue: '[NEW ISSUE URL]',
  selfHosting: 'https://tidalptc.com/installation/docker/',
  quote: 'https://billing.archboard.io',
  billing: 'https://billing.archboard.io/login',
  email: 'support@archboard.io',
}

/** A placeholder URL in brackets renders as '#' so nothing links to a broken address. */
export const href = (url: string) => (url.startsWith('[') ? '#' : url)
