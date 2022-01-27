import { React } from "../lib.ts";

interface Props {
  children: string;
}

export const Counter: React.FC<Props> = (props) => <div>{props.children}</div>;
