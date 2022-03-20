import * as esbuild from "https://deno.land/x/esbuild@v0.14.13/mod.js";

const { files } = await Deno.emit("./react/App.tsx", {
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
  warnings.forEach((warning) => console.warn(warning));
}

const encoder = new TextEncoder();
await Deno.writeFile("./dist/bundle.js", encoder.encode(code));
await Deno.writeFile("./dist/bundle.js.map", encoder.encode(map));
esbuild.stop();
