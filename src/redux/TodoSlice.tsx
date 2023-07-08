import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interfaceでtodosに型指定をする
interface TodoState {
  todos: string[];
}

export const todoSlice = createSlice({
  name: "todos",
  // as TodoStateで型を適用する
  initialState: { todos: [] } as TodoState,
  reducers: {
    // Todoの追加機能
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
    },

    // Todoの削除機能
    deleteTodo: (state, action: PayloadAction<string>) => {
      const todoName = action.payload;
      state.todos = state.todos.filter((todo) => todo !== todoName);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
