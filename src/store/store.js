import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice";

// this stores all the redux actions and reducers
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
