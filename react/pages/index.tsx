import React from "https://esm.sh/react";

interface Props {
  children: string;
}

export const Index: React.FC<Props> = (props) => <div>{props.children}</div>;
