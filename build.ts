/*
 * [Reference Links]
 * https://scrapbox.io/deno-ja/Deno.emit()
 * https://scrapbox.io/deno-ja/Deno_script%E3%82%92bundle_&_minify%E3%81%99%E3%82%8B
 */

import * as esbuild from "https://deno.land/x/esbuild@v0.14.13/mod.js";

// https://doc.deno.land/deno/unstable@v1.17.1/~/Deno.emit
const { files } = await Deno.emit("./src/app.tsx", {
  bundle: "module",
  check: true,
  compilerOptions: {
    allowSyntheticDefaultImports: true,
    jsx: "react",
    jsxFactory: "React.createElement",
    lib: ["dom", "esnext"],
    module: "esnext",
    target: "es2015",
  },
});

const { warnings, code, map } = await esbuild.transform(
  files["deno:///bundle.js"],
  {
    minify: true,
    sourcemap: true,
    define: {
      "ENVIRONMENT": '"production"',
    },
    format: "esm",
  },
);
if (warnings.length > 0) {
  warnings.forEach((warnings) => console.warn(warnings));
}

const encoder = new TextEncoder();
await Deno.writeFile("./dist/bundle.js", encoder.encode(code));
await Deno.writeFile("./dist/bundle.js.map", encoder.encode(map));
esbuild.stop();
