import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages/index.tsx";
import { Counter } from "./pages/counter.tsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index>/index</Index>}/>
      <Route path="/counter" element={<Counter/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("react-root"),
);
