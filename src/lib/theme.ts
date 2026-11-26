/**
 * Browser-chrome colours for the two `theme-color` metas.
 *
 * They are hexes rather than `var(--bg)` on purpose: a `<meta content>` value
 * is read by the UA before and independently of the CSSOM, so a custom
 * property would resolve to nothing there. This is also why the values cannot
 * live in the stylesheet — `content` cannot execute `var()` — and why they
 * must not be re-typed into a `.astro` file, where they would be the only
 * hexes in the component layer.
 *
 * INVARIANT: `light` equals `--bg` in `:root` and `dark` equals `--bg` inside
 * the single `prefers-color-scheme: dark` block of `src/styles/global.css`.
 * `scripts/check-tokens.mjs` asserts that pairing mechanically.
 */
export const SCHEME_COLORS = {
  light: '#f9f8f5',
  dark: '#101318',
} as const;
