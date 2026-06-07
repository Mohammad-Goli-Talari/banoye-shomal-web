// src/features/cart/api/cart-api.ts

import { axiosInstance } from "@/services/axios";

import { CartItem } from "@/store/slices/cart/types";

export const cartApi = {
    mergeCart(
        items: CartItem[]
    ) {
        return axiosInstance.post<CartItem[]>("/cart/merge", { items });
    },

    getCart() {
        return axiosInstance.get<CartItem[]>("/cart");
    },
};
