# gsrihari1993.github.io

Personal site for Srihari Gopi, built with React and served by GitHub Pages.

## Update the content

All text, dates, links and photos live in `src/data/resume.js`. Edit that file, then rebuild:

```sh
npm install
npm run build
```

The build bundles the app into `assets/` and pre-renders `index.html` at the repo root, which is what GitHub Pages serves. Commit the regenerated `index.html` and `assets/` along with your change.

## What's interactive

- Experience entries expand and collapse, with an Expand all control. The newest role starts open.
- Each city on the career strip jumps to its role, opens it and highlights it.
- The side navigation highlights the section you are reading.
- Light and dark themes, following your system until you choose one with the toggle.
- One-click copy for the email address.

Everything is in the pre-rendered HTML, so content is visible to search engines and without JavaScript, and the CV print layout always shows every role expanded.

## Layout

- `src/data/resume.js`: the content
- `src/components/`: one component per section
- `src/hooks/`: the scroll-tracking hook for the side navigation
- `src/styles/site.css`: all styles, including the print stylesheet used for the CV
- `src/template.html`: the page head and metadata
- `scripts/build.mjs`: the build (esbuild + pre-rendering)
- `images/`, `Srihari_Gopi_CV.pdf`, favicons: static files served as they are

`index.html` and `assets/` are generated. Edit the files in `src/`, not those.
