// src/store/slices/cart/selectors.ts

import { RootState } from "@/store";

export const selectCartItems = (
    state: RootState
) => state.cart.items;

export const selectCartCount = (
    state: RootState
) =>
    state.cart.items.reduce(
        (total, item) => total + item.quantity,
        0
    );

export const selectCartSubtotal = (
    state: RootState
) => 
    state.cart.items.reduce(
        (total, item) => 
            total + item.price * item.quantity,
        0
    );

export const selectCartItemsCount = (
    state: RootState
) => 
    state.cart.items.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

