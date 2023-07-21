import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productallData = createAsyncThunk(
  "productData/fetchByIdStatus",
  async (kls, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://192.168.1.19:7001/api/product");
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
const initialState = {
  cart: [],
  data: [],
  isError: false,
  isLoading: false,
  success: false,
  message: "hello",
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.cart.push(action.payload);
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(productallData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productallData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(productallData.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.data = [];
      });
  },
});
export const { addtoCart } = cartSlice.actions

export default cartSlice.reducer;
