import * as esbuild from "https://deno.land/x/esbuild@v0.14.13/mod.js";

// const { files } = await Deno.emit("./react/App.tsx", {
//   bundle: "module",
//   check: true,
// });
//
// const result = await esbuild.transform(
//   files["deno:///bundle.js"],
//   {
//     minify: true,
//     sourcemap: true,
//     define: {
//       "ENVIRONMENT": '"production"',
//     },
//     format: "esm",
//   },
// );
// const { warnings, code, map } = result;
// if (warnings.length > 0) {
//   warnings.forEach((warnings) => console.warn(warnings));
// }
//
// const encoder = new TextEncoder();
// await Deno.writeFile("./public/bundle.js", encoder.encode(code));
// await Deno.writeFile("./public/bundle.js.map", encoder.encode(map));

await esbuild.build({
  bundle: true,
  minify: true,
  sourcemap: true,
  format: "esm",
  entryPoints: ["./react/App.tsx"],
  outfile: "./public/bundle.js",
});

esbuild.stop();
