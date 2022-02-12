import {
  useCallback,
  useState,
} from "https://cdn.skypack.dev/react@17.0.2?dts";
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.7?dts";
import UTC from "https://cdn.skypack.dev/dayjs@1.10.7/plugin/utc?dts";
import timezone from "https://cdn.skypack.dev/dayjs@1.10.7/plugin/timezone?dts";

dayjs.extend(UTC);
dayjs.extend(timezone);

const getId = (): string =>
  `${dayjs().unix()}-${Math.round(Math.random() * 99999)}`;
const getNow = (): string => dayjs().format("YYYY-MM-DD hh:mm");

export interface Todo {
  id: string;
  title: string;
  createdAt: string;
}

interface State {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
}

const InitialTodos: Todo[] = [{
  id: getId(),
  title: "My TODO",
  createdAt: getNow(),
}];

export const useTodos = (): State => {
  const [todos, setTodos] = useState<Todo[]>(InitialTodos);

  const addTodo = useCallback((title: string): void => {
    setTodos((prevTodos) => [
      { id: getId(), title, createdAt: getNow() },
      ...prevTodos,
    ]);
  }, [setTodos]);

  const removeTodo = useCallback((id: string): void => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, [setTodos]);

  return {
    todos,
    addTodo,
    removeTodo,
  };
};
