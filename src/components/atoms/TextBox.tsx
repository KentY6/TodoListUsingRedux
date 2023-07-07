import { useState } from "react";

export const TextBox = () => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <input
        className="p-1 border-2 border-gray-500 rounded"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};
