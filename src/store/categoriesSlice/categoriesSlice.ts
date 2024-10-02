import { createSlice } from "@reduxjs/toolkit";
import { TCategory, TLoading } from "@store/types/shared";
import { actGetCategories } from "./act/actGetCategories";

type ICategories = {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
};

const initialState: ICategories = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "success";
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "error";
      if (typeof action.payload === "string" && action.payload) {
        state.error = action.payload;
      }
    });
  },
});

export default categoriesSlice.reducer;
