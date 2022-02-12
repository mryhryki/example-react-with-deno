import * as esbuild from "https://deno.land/x/esbuild@v0.14.13/mod.js";

console.debug("Deno.emit: START");
const { files } = await Deno.emit("./react/app.tsx", {
  bundle: "module",
  check: true,
});
console.debug("Deno.emit: END");

console.debug("esbuild.transform: START");
const result = await esbuild.transform(files["deno:///bundle.js"], {
  minify: true,
  sourcemap: true,
  format: "esm",
});
const css = new TextDecoder().decode(await Deno.readFile("./css/style.scss"))
const cssResult = await esbuild.transform(css, {
  minify: true,
  loader: "css"
});
console.log(cssResult);
console.debug("esbuild.transform: END");
const { warnings, code, map } = result;
if (warnings.length > 0) {
  warnings.forEach((warning) => console.warn(`WARN: ${warning.text}`));
}

const encoder = new TextEncoder();
await Deno.writeFile("./public/bundle.js", encoder.encode(code));
await Deno.writeFile("./public/bundle.js.map", encoder.encode(map));

// > It has basically the same API as esbuild's npm package with one addition:
// > you need to call stop() when you're done because unlike node, Deno doesn't provide the necessary APIs to allow Deno to exit while esbuild's internal child process is still running.
// https://esbuild.github.io/getting-started/#deno
esbuild.stop();
