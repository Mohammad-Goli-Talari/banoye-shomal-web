// src/features/wishlist/api/wishlist-api.ts

import { axiosInstance } from "@/services/axios";

import { WishlistItem } from "../types/wishlist";

export const wishlistApi = {
    getWishlist() {
        return axiosInstance.get<WishlistItem[]>(
            "/wishlist"
        );
    },

    addToWishlist(productId: string) {
        return axiosInstance.post(
            "/wishlist",
            { productId }
        );
    },

    removeFromWishlist(productId: string) {
        return axiosInstance.delete(
            `/wishlist/${productId}`
        );
    },
};
