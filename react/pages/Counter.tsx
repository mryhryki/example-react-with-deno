import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Footer } from "../component/footer.tsx";

const Count = styled.div`
  text-align: center;
  font-size: 5rem;
`

const Buttons = styled.div`
  text-align: center;
  
  & > button {
    margin: 0 8px;
  }
`

export const Counter = (): React.ReactElement => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Example app: Counter</h1>
      <Count>{count}</Count>
      <Buttons>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </Buttons>
      <Footer />
    </div>
  );
};
