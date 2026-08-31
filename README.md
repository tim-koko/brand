# Tim&Koko Brand Guide

Standalone Hugo site for Tim&Koko's brand identity guidelines (logo, colors,
typography, imagery, voice & tone, downloads) — brought in-house so the
company can edit it directly instead of going through the external agency
that runs brand.tim-koko.ch.

Content and assets have been migrated from brand.tim-koko.ch: Logo, Farben,
Typografie, Fotografie, Scribbles and Templates, plus their images/fonts
under `static/`. German (`content/de/`) has the full real content. English
(`content/en/`) has the six topic pages translated, but the "Unsere Marke"
home page (mission/values/brand story) is intentionally left German-only —
that's brand-voice copy and should be reviewed by the team before
translating it.

Before this goes live, review the migrated text against the source for
accuracy, and check the `static/images/` licensing note on the Fotografie
page (photos are credited "© tim&koko/Janosch Abel, for internal use only").

## Develop

```sh
hugo server -D
```

## Deploy (not yet done)

1. Push this repo to GitHub.
2. Create a new Netlify site connected to it (build command and publish dir
   are already set in `netlify.toml`).
3. Once the content is real and reviewed, repoint brand.tim-koko.ch's DNS
   from the current agency tool to the new Netlify site.
