import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/Store";

interface Todo {
  text: string;
  id: number;
}

export const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  return (
    <>
      {todos.map((todo: Todo) => (
        <div className="border-2 m-3 p-2 rounded" key={todo.id}>
          {todo.text}
        </div>
      ))}
    </>
  );
};
