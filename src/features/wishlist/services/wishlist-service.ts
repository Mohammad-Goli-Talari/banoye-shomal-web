// src/features/wishlist/services/wishlist-service.ts

import { wishlistApi } from "../api/wishlist-api";

export const wishlistService = {
    async getWishlist() {
        const response = await wishlistApi.getWishlist();

        return response.data;
    },

    async addToWishlist(
        productId: string
    ) {
        await wishlistApi.addToWishlist(productId);

    },

    async removeFromWishlist(
        productId: string
    ) {
        await wishlistApi.removeFromWishlist(productId);

    },
};
