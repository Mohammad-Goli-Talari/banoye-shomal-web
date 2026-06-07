// src/features/cart/services/cart-service.ts

import { cartApi } from "../api/cart-api";

import { CartItem } from "@/store/slices/cart/types";

export const cartService = {

    async getUserCart(): Promise<CartItem[]> {

        const response = await cartApi.getCart();

        return response.data;
    },

    async mergeCart(
        items: CartItem[]
    ): Promise<CartItem[]> {
        const response = await cartApi.mergeCart(items);

        return response.data;
    },
};
