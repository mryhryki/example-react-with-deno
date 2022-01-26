import React from "https://esm.sh/react";
import { BrowserRouter, Routes, Route } from "https://esm.sh/react-router-dom";
import ReactDOM from "https://esm.sh/react-dom";
import { Index } from "./pages/index.tsx";

console.log("ENVIRONMENT:", ENVIRONMENT);
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Index>/index</Index>} />
      <Route exact path="/about" element={<Index>/about</Index>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("react-root"),
);
