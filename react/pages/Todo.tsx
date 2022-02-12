import React from "https://cdn.skypack.dev/react@17.0.2?dts";
// import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Footer } from "../component/footer.tsx";

export const Todo = (): React.ReactElement => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Example app: TODO</h1>
      <Footer />
    </div>
  );
};
