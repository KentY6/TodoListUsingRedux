import React from "react";
import { TextBox } from "../atoms/TextBox";
import { SubmitButton } from "../atoms/SubmitButton";

export const InputForm = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div>
          <TextBox />
        </div>
        <div className="ml-5 p-2">
          <SubmitButton />
        </div>
      </div>
    </>
  );
};
