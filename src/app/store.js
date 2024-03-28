import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlices";

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
