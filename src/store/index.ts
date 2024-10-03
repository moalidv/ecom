import { configureStore } from "@reduxjs/toolkit";
import categories from "./categoriesSlice/categoriesSlice";
import products from "./productsSlice/productsSlice";

const store = configureStore({
  reducer: {
    categories,
    products,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
