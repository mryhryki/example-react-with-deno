import React from "https://esm.sh/react";
import { Link } from "https://esm.sh/react-router-dom";

export const Counter = (): React.ReactElement => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Counter</h1>
      <div>{count}</div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
      </div>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};
