import React from "https://cdn.skypack.dev/react@17.0.2?dts";
import { Link } from "https://cdn.skypack.dev/wouter@2.7.5?dts";

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
