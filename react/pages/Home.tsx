import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Link } from "https://cdn.skypack.dev/wouter@2.7.5?dts";

const H1 = styled.h1`
  color: red;
`;

export const Home = (): React.ReactElement => (
  <div>
    <H1>Home</H1>
    <ul>
      <li>
        <Link to="/counter">Counter</Link>
      </li>
    </ul>
  </div>
);
