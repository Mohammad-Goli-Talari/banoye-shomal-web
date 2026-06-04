// src/store/index.ts

import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./slices/ui/ui-slice";
import cartReducer from "./slices/cart/cart-slice"

export const store = configureStore({
     reducer: {
        ui: uiReducer,
        cart: cartReducer,
     },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
