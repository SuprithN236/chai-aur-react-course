// 1.1 import configure store
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todoSlice";

// configurestore method takes an object as a parameter. in that you give reducers
export const store = configureStore({
  reducer: todoReducer,
});
