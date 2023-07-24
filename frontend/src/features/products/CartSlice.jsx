import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const productallData = createAsyncThunk(
  "productData/fetchByIdStatus",
  async (kls, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://192.168.1.12:7001/api/product");
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
  quantity: 0,
  success: false,
  message: "hello",
};

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.qty = existingItem.qty + 1
      } else {
        state.cart.push(action.payload);
      }
      // state.cart.push({ ...action.payload, quantity: 1 });
    },
    incqty: (state, action) => {
      const finditem = state.cart.find(item => item.id === action.payload.id);
      console.log(finditem)
      finditem.qty = finditem.qty + 1
    },
    decqty: (state, action) => {
      const finditem = state.cart.find(item => item.id === action.payload.id);
      if (finditem.qty >= 1) {
        finditem.qty = finditem.qty - 1
      }
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
export const { addtoCart, decqty, incqty } = cartSlice.actions

export default cartSlice.reducer;
