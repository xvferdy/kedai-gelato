import { createSlice } from "@reduxjs/toolkit";

// products: [
//   { ...product, extras: [], priceTotalNonQty: 0, quantity: 0, reduxId: 0},
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
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.reduxId !== action.payload.id
      );
      state.totalPrice -= action.payload.price;
      state.totalQuantity -= 1;
    },
    reset: (state, action) => {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addProduct, reset, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
