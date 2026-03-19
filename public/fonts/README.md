# Local font files

Place your font files here so they are served at `/fonts/...`.

## MD Nichrome Test (hero heading)

- Add your font file(s), for example:
  - `MDNichromeTest.woff2` (preferred)
  - `MDNichromeTest.woff` (fallback)
- The main stylesheet expects the family name **"MD Nichrome Test"** in `@font-face`.
- If your filename differs, update the `url()` paths in `src/style.css` to match.

## Urbanist (optional local)

- Urbanist is loaded from **Google Fonts** by default (see `index.html`).
- To use local files instead, add `.woff2`/`.woff` here and switch to the `@font-face` block for Urbanist in `src/style.css` (and remove the Google Fonts link from `index.html`).
