import { React, ReactDOM, BrowserRouter, Route, Routes } from "./lib.ts";
import { Index } from "./pages/index.tsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index>/index</Index>}/>
      <Route path="/about" element={<Index>/about</Index>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("react-root"),
);
