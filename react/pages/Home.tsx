import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { Link } from "https://cdn.skypack.dev/wouter@2.7.5?dts";
import { Footer } from "../component/footer.tsx";

export const Home = (): React.ReactElement => (
  <div>
    <h1>React</h1>
    <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    </ul>
    <Footer />
  </div>
);
