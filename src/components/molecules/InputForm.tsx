import { useState } from "react";
import { SubmitButton } from "../atoms/SubmitButton";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/TodoSlice";

export const InputForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTodosText = (text: string) => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <input
            className="p-1 border-2 border-gray-500 rounded"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="ml-5 p-2" onClick={() => addTodosText(text)}>
          <SubmitButton text={"Add"} />
        </div>
      </div>
    </>
  );
};
