import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

import { loadState } from "./localStorage";
import { combineReducers } from "redux";

const reducers = combineReducers({
  cart: cartReducer,
});

const store = configureStore({
  devTools: true,
  reducer: reducers,
  preloadedState: loadState(),
});

export default store;

// Object.defineProperty(exports, "__esModule", { value: true });
