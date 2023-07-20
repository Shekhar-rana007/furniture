import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const productallData = createAsyncThunk("productData/fetchByIdStatus", async () => {
    try {
        const respond = await axios.get(`http://192.168.1.19:7001/api/product`);
        
        return respond.data;
    } catch (error) {
        return thunkapi.rejectWithValue(error);
    }
})
const initialState = {
    cart: [],
    isError: false,
    isloading: false,
    success: false,
    message: "",
}

const cartSlice = createSlice({
    name: "cartProducts",
    initialState,
    extraReducers:(builder)=> {
       builder.addCase(productallData.fulfilled,(state,action) => {
        state.cart(action.payload);
       })
    }
})
export default cartSlice.reducer