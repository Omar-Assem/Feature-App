// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import wishlistReducer from "./wishlistSlice"
import filterReducer from "./FilterSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
  },
});
