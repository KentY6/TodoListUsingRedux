import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";

export const store = configureStore({
  reducer: { todos: TodoSlice },
});

// RootStateはアプリケーション全体の状態の型
export type RootState = ReturnType<typeof store.getState>;
// AppDispatchはStoreのDispatch関数の型
export type AppDispatch = typeof store.dispatch;
