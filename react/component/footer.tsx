import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { Link } from "https://cdn.skypack.dev/wouter@2.7.5?dts";

export const Footer = (): React.ReactElement => (
  <footer>
    <Link to="/">Home</Link>
    {"　"}
    <a
      href="https://github.com/mryhryki/example-react-with-deno"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </footer>
);
