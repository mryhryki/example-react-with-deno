import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: string;
}

export const Index: React.FC<Props> = (props) => (
  <div>
    <h1>{props.children}</h1>;
    <Link to="/counter">Counter</Link>
  </div>
);
