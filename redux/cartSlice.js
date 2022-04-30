import { createSlice } from "@reduxjs/toolkit";

// products: [
//   { ...product, extras: [], priceTotalNonQty: 0, quantity: 0 },
// ];

export const cartSlice = createSlice({
  name: "cart",
  initialState: { products: [], totalPrice: 0, totalQuantity: 0 },
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
      state.totalPrice +=
        action.payload.priceTotalNonQty * action.payload.quantity;
      state.totalQuantity += 1;
    },
    reset: (state, action) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
