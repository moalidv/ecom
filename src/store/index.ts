import { configureStore } from "@reduxjs/toolkit";
import categories from "./categoriesSlice/categoriesSlice";

const store = configureStore({
  reducer: {
    categories,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
