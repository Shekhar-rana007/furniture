import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/cutomers/customerSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import enquiryReducer from "../features/enquiry/enquirySlice";
import uploadReducer from "../features/upload/uploadSlice";
import couponReducer from "../features/coupon/couponSlice";
import cart from "../features/product cart/cartSlice";
import wishlistSlice from "../features/Wishlist/wishSlice";
import orderReducer from "../features/Order/orderSlice";
import productReducers from "../features/products/productSlice";
import smsReducer from "../features/Sms/SmsSlice";
import QuantitySlice from "../features/Quantity/quantitySlice";
import contactReducer from "../features/contact/contactSlice";
import emailReducer from "../features/email/emailSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    pCategory: pCategoryReducer,
    enquiry: enquiryReducer,
    upload: uploadReducer,
    coupon: couponReducer,
    cart: cart,
    wishlist: wishlistSlice,
    order: orderReducer,
    productReduceradmin: productReducers,
    sms: smsReducer,
    Quantity: QuantitySlice,
    contact: contactReducer,
    email: emailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
