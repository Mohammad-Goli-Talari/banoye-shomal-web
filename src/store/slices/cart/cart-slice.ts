// src/store/slices/cart/cart-slice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CartItem } from "./types";

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    
    initialState,

    reducers: {
        addToCart(
            state,
            action: PayloadAction<CartItem>
        ) {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
                return;
            }

            state.items.push(action.payload);
        },

        removeFromCart(
            state,
            action: PayloadAction<number>
        ) {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        },

        increaseQuantity(
            state,
            action: PayloadAction<number>
        ) {
            const item = state.items.find(
                (item) => item.id === action.payload
            );

            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity(
            state,
            action: PayloadAction<number>
        ) {
            const item = state.items.find(
                (item) => item.id === action.payload
            );

            if (!item) return

            if (item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        clearCart(state) {
                state.items = [];
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
