// src/features/products/services/products-service.ts

import { productsApi } from "../api/products-api";

import { ProductSearchParams } from "../types/product-search";

export const productsService = {
    async getProducts(
        params: ProductSearchParams
    ) {
        const response =
            await productsApi.getProducts(params);

        return response.data;
    },

    async getProduct(
        slug: string
    ) {
        const response =
            await productsApi.getProduct(slug);

        return response.data;
    },
};
