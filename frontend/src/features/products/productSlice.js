import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

export const getProducts = createAsyncThunk(
  "product/get-products",
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createProducts = createAsyncThunk(
  "product/create-products",
  async (productData, thunkAPI) => {
    try {
      return await productService.createProduct(productData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const updateAProduct = createAsyncThunk(
  "product/update-product",
  async (data, thunkAPI) => {
    try {
      return await productService.updateProduct(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteAProduct = createAsyncThunk(
  "brand/delete-brand",
  async (id, thunkAPI) => {
    try {
      return await productService.deleteProduct(id);
    } catch (error) {
      console.log(error.message)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const resetState = createAction("Reset_all");

const initialState = {
  products: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(createProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdProduct = action.payload;
        toast.success("Product is added sucessfully")
      })
      .addCase(createProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        toast.error("Duplicate data found")
      })
      .addCase(updateAProduct.pending, (state) => {
        state.isLoading = true;

      })
      .addCase(updateAProduct.fulfilled, (state,) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        toast.success('Product Stock Updated successfully ')
      })
      .addCase(updateAProduct.rejected, (state,) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        toast.info('Server Error')
      })
      .addCase(deleteAProduct.pending, (state) => {
        state.isLoading = true;

      })
      .addCase(deleteAProduct.fulfilled, (state,) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        toast.success('Product is deleted successfully ')
      })
      .addCase(deleteAProduct.rejected, (state,) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        toast.error('Server Error')
      })
      .addCase(resetState, () => initialState);
  },
});
export default productSlice.reducer;
