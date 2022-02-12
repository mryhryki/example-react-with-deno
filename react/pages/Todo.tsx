import React, { useState } from "https://cdn.skypack.dev/react@17.0.2?dts";
import styled from "https://cdn.skypack.dev/styled-components@5.3.3?dts";
import { Footer } from "../component/footer.tsx";
import { useTodos } from "../hooks/use_todos.ts";

const AddButton = styled.input`
  width: 5rem;
`;

const RemoveButton = styled.button`
  padding: 4px 8px;
  height: 2rem;
  margin: 0 0 0 12px;
`;

export const Todo = (): React.ReactElement => {
  const { todos, addTodo, removeTodo } = useTodos();
  const [todoText, setTodoText] = useState("");

  return (
    <div>
      <h1>Example app: TODO</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodoText((text) => {
            addTodo(text);
            return "";
          });
        }}
      >
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          maxLength={100}
          placeholder="Input TODO title"
        />
        <AddButton type="submit" value="Add" />
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} ({todo.createdAt})
            <RemoveButton onClick={() => removeTodo(todo.id)}>
              Remove
            </RemoveButton>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
};
