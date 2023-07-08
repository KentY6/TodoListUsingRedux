import React from "react";
import { InputForm } from "../components/molecules/InputForm";
import { TodoList } from "../components/molecules/TodoList";

export const Main = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center mt-5">
          <InputForm />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    </>
  );
};
