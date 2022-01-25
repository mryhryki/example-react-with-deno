import React from "https://cdn.esm.sh/v64/react@17.0.2/deno/react.js";

interface Props {
  children: string;
}

export const Index: React.FC<Props> = (props) => <div>{props.children}</div>;
