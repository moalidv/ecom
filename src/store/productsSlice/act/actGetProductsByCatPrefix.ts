import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (data, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const resp = await axios.get(
        `http://localhost:3005/products?cat_prefix=${data}`
      );
      return resp.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        rejectWithValue(err.message || err.response?.data.message);
      } else {
        rejectWithValue("un expected error");
      }
    }
  }
);
