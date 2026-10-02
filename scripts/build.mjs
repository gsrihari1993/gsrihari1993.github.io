// Builds the React site and writes the result to the repo root, which is what
// GitHub Pages serves. Run with: npm run build
//
// 1. Bundles the browser app (JS + CSS) into assets/ with content hashes.
// 2. Bundles the same app for Node and renders it to HTML (pre-rendering),
//    so visitors, search engines and recruiter tools see the full page
//    before any JavaScript runs.
// 3. Injects that HTML and the asset links into src/template.html -> index.html.

import { build } from "esbuild";
import { createRequire } from "node:module";
import { readFile, writeFile, rm, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = path.join(root, "assets");
const tmpDir = path.join(root, ".build");
const common = {
  absWorkingDir: root,
  bundle: true,
  jsx: "automatic",
  define: { "process.env.NODE_ENV": '"production"' },
  logLevel: "warning",
};

await rm(assetsDir, { recursive: true, force: true });
await rm(tmpDir, { recursive: true, force: true });
await mkdir(tmpDir, { recursive: true });

// 1. Browser bundle
const client = await build({
  ...common,
  entryPoints: ["src/entry-client.jsx"],
  outdir: assetsDir,
  entryNames: "app-[hash]",
  format: "esm",
  target: "es2020",
  minify: true,
  metafile: true,
});

const outputs = Object.keys(client.metafile.outputs).map((file) => path.basename(file));
const jsFile = outputs.find((file) => file.endsWith(".js"));
const cssFile = outputs.find((file) => file.endsWith(".css"));
if (!jsFile || !cssFile) throw new Error(`Expected a JS and a CSS output, got: ${outputs.join(", ")}`);

// 2. Server bundle, used only to pre-render the HTML
const serverFile = path.join(tmpDir, "server.cjs");
await build({
  ...common,
  entryPoints: ["src/entry-server.jsx"],
  outfile: serverFile,
  platform: "node",
  format: "cjs",
  target: "node18",
});
const { render } = createRequire(import.meta.url)(serverFile);

// 3. Assemble index.html
const template = await readFile(path.join(root, "src", "template.html"), "utf8");
const html = template
  .replace("<!--app-html-->", () => render())
  .replace("<!--css-->", `<link rel="stylesheet" href="assets/${cssFile}">`)
  .replace("<!--js-->", `<script type="module" src="assets/${jsFile}"></script>`);
await writeFile(path.join(root, "index.html"), html);

await rm(tmpDir, { recursive: true, force: true });
console.log(`Built index.html + assets/${jsFile}, assets/${cssFile}`);
