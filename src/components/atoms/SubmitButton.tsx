import React from "react";

interface SubmitButtonProps {
  text: string;
}

// propsを受け取るときはReact.FCの<>内で型を指定して受け取る。
export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => {
  return (
    <>
      <div className="p-1 border-2 border-blue-300 bg-blue-300 rounded drop-shadow-md cursor-pointer">
        {text}
      </div>
    </>
  );
};
