import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { Link } from "https://cdn.skypack.dev/wouter@2.7.5?dts";
import { Footer } from "../component/footer.tsx";

export const Home = (): React.ReactElement => (
  <div>
    <h1>
      Example{" "}
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        React
      </a>{" "}
      apps
    </h1>
    <p>
      This app bundled by{" "}
      <a
        href="https://packup.deno.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        packup
      </a>
      {" on "}
      <a href="https://deno.land/" target="_blank" rel="noopener noreferrer">
        deno
      </a>
      .
    </p>
    <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
      <li>
        <Link to="/todo">TODO</Link>
      </li>
    </ul>
    <Footer />
  </div>
);
