import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { Index } from "./pages/index.tsx";

console.log("ENVIRONMENT:", ENVIRONMENT);
ReactDOM.render(
  <Index>Hello, React!</Index>,
  document.getElementById("react-root"),
);
