import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("http://localhost:3005/categories");
      return res.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.message || err.response?.data.message);
      } else {
        return rejectWithValue("un expected error");
      }
    }
  }
);
