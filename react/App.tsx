import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { BrowserRouter, Route, Routes } from "https://esm.sh/react-router-dom";
import { Home } from "./pages/Home.tsx";
import { Counter } from "./pages/Counter.tsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("react-root"),
);
