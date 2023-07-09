import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/Store";
import { DeleteButton } from "../atoms/DeleteButton";
import { deleteTodo } from "../../redux/TodoSlice";

interface Todo {
  text: string;
  id: number;
}

export const TodoList = () => {
  // useSelectorで取得したStateの型はRootState
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  // Sliceにtodo.idを渡す
  const deleteTodosText = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      {todos.map((todo: Todo) => (
        <div className=" w-60 border-2 m-3 p-2 rounded  " key={todo.id}>
          <div className=" flex w-full justify-between ">
            <div>{todo.text}</div>
            <div className=" right-0" onClick={() => deleteTodosText(todo.id)}>
              <DeleteButton />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
