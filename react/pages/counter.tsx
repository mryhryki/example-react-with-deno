import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increment}>{count}</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
};
