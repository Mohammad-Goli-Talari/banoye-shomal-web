// src/store/cart/selectors.ts

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

    