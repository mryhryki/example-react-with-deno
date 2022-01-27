import { React, ReactDOM, BrowserRouter, Route, Routes } from "./lib.ts";
import { Home } from "./pages/Home.tsx";
import { Counter } from "./pages/Counter.tsx";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home>/index</Home>}/>
      <Route path="/counter" element={<Counter>/counter</Counter>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById("react-root"),
);
