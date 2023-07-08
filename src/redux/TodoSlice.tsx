import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interfaceで型指定をする
interface TodoState {
  todos: Todo[];
}

interface Todo {
  text: string;
  id: number;
}

export const todoSlice = createSlice({
  // Slice名
  name: "todos",
  // as TodoStateで型を適用する
  initialState: {
    todos: [
      { text: "メールチェック", id: 202307082218 },
      { text: "朝会", id: 202307082219 },
    ],
  } as TodoState,
  reducers: {
    // Todoの追加機能
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = { text: action.payload, id: Date.now() };
      state.todos.push(newTodo);
    },

    // Todoの削除機能
    deleteTodo: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
