import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { BrowserRouter, Route, Routes } from "https://esm.sh/react-router-dom";
import { Index } from "./pages/index.tsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index>/index</Index>} />
      <Route path="/about" element={<Index>/about</Index>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("react-root"),
);
