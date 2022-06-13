import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import modalDetailSlice from "./modalDetailSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    modalDetailItem: modalDetailSlice.reducer,
  },
});
export default store;
