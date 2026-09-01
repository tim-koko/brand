# Tim&Koko Brand Guide

Standalone Hugo site for Tim&Koko's brand identity guidelines (logo, colors,
typography, photography, scribbles, templates) — brought in-house so the
company can edit it directly instead of going through the external agency
that runs brand.tim-koko.ch. This is a separate repo from the main
[tim-koko/website](https://github.com/tim-koko/website) — nothing here
touches that site.

Content and assets have been migrated from brand.tim-koko.ch: Unsere Marke
(home), Logo, Farben, Typografie, Fotografie, Scribbles and Templates, plus
their images/fonts under `static/`. Both German (`content/de/`) and English
(`content/en/`) have the full content.

Before this goes live, review the migrated text against the source for
accuracy, and check the `static/images/` licensing note on the Fotografie
page (photos are credited "© tim&koko/Janosch Abel, for internal use only").

## Editing content

Pages are plain Markdown in `content/de/` and `content/en/`. Layout building
blocks (image sizing/alignment, colored sections, do/don't examples, color
swatches, lead paragraphs, download buttons, etc.) are Hugo shortcodes in
`layouts/shortcodes/` — e.g. `{{< img src="..." size="medium" align="right" >}}`
or `{{< lead >}}...{{< /lead >}}` — so day-to-day content changes don't
require touching CSS or templates.

## Develop

```sh
npm install
npm start
```

`npm start` runs Hugo's dev server using the Hugo version pinned in
`package.json` (`hugo-extended`), so local dev always matches CI and
production. Plain `hugo server -D` also works if you have a compatible Hugo
installed globally.

## Build & test

```sh
npm run build   # hugo --gc --minify
npm run lint    # markdownlint over content/**/*.md
npm test        # lint (build is verified separately in CI)
```

CI (`.github/workflows/ci.yml`) runs `npm test` and `npm run build` on every
push/PR to `main`; a CodeQL workflow scans JS weekly. Dependabot opens PRs
for outdated npm dependencies daily.

## Deploy

`netlify.toml` is fully configured (build command, production/deploy-preview/
branch-deploy contexts, local `netlify dev` settings) and Hugo generates
`_headers`, `_redirects` and `robots.txt` on build. What's still manual:

1. Push this repo to GitHub.
2. Create a new Netlify site connected to it.
3. Once the content is reviewed, repoint brand.tim-koko.ch's DNS from the
   current agency tool to the new Netlify site.
