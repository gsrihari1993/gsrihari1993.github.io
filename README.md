# gsrihari1993.github.io

Personal site for Srihari Gopi, built with React and served by GitHub Pages.

## Update the content

All text, dates, links and photos live in `src/data/resume.js`. Edit that file, then rebuild:

```sh
npm install
npm run build
```

The build bundles the app into `assets/` and pre-renders `index.html` at the repo root, which is what GitHub Pages serves. Commit the regenerated `index.html` and `assets/` along with your change.

## Layout

- `src/data/resume.js`: the content
- `src/components/`: one component per section
- `src/styles/site.css`: all styles, including the print stylesheet used for the CV
- `src/template.html`: the page head and metadata
- `scripts/build.mjs`: the build (esbuild + pre-rendering)
- `images/`, `Srihari_Gopi_CV.pdf`, favicons: static files served as they are

`index.html` and `assets/` are generated. Edit the files in `src/`, not those.
