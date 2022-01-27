import * as esbuild from "https://deno.land/x/esbuild@v0.14.13/mod.js";

const { files } = await Deno.emit("./react/app.tsx", {
  bundle: "module",
  check: true,
  importMapPath: "./import_map.json",
});

const result = await esbuild.transform(
  files["deno:///bundle.js"],
  {
    minify: true,
    sourcemap: true,
    format: "esm",
  },
);
const { warnings, code, map } = result;
if (warnings.length > 0) {
  warnings.forEach((warnings) => console.warn(`WARN: ${JSON.stringify(warnings, null, 2)}`));
}

const encoder = new TextEncoder();
await Deno.writeFile("./public/bundle.js", encoder.encode(code));
await Deno.writeFile("./public/bundle.js.map", encoder.encode(map));
esbuild.stop();
