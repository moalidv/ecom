import { createSlice } from "@reduxjs/toolkit";
import { TLoading, TProduct } from "@store/types/shared";
import { actGetProductsByCatPrefix } from "./act/actGetProductsByCatPrefix";

type IProducts = {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
};

const initialState: IProducts = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
      state.loading = "success";
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = "error";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export default productsSlice.reducer;
