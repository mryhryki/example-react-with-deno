/*
 * [Reference Links]
 * https://scrapbox.io/deno-ja/Deno.emit()
 * https://scrapbox.io/deno-ja/Deno_script%E3%82%92bundle_&_minify%E3%81%99%E3%82%8B
 */

// import * as esbuild from 'https://deno.land/x/esbuild@v0.14.13/mod.js'

const { files } = await Deno.emit("./src/app.tsx", {
  bundle: "module",
  compilerOptions: {
    lib: ["dom", "esnext"],
    jsxFactory: "React.createElement",
  },
});

const encoder = new TextEncoder();
await Deno.writeFile("./dist/bundle.js", encoder.encode(files["deno:///bundle.js"]));
await Deno.writeFile("./dist/bundle.js.map", encoder.encode(files["deno:///bundle.js.map"]));

// console.log(JSON.stringify(result, null, 2));
// const {code} = await esbuild.transform(files['deno:///bundle.js'], {minify: true}); // minify
// await Deno.writeTextFile(Deno.args[1], code);
// esbuild.stop();
//
//
// await esbuild.build({
//   entryPoints: ["./src/app.ts"],
//   outfile: "./index.js",
//   target: "es2020",
//   bundle: true,
//   sourcemap: true,
// });
// esbuild.stop()
