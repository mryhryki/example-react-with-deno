import React from "https://esm.sh/react";
import { Link } from "https://esm.sh/react-router-dom";

export const Home = (): React.ReactElement => (
  <div>
    <h1 className="title">Home</h1>
    <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    </ul>
  </div>
);
