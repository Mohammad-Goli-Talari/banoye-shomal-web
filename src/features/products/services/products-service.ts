// src/features/products/services/products-service.ts

import { productsApi } from "../api/products-api";

import { ProductSearchParams } from "../types/product-search";

import { Product } from "../types/product";

export const productsService = {
    async getProducts(
        params: ProductSearchParams
    ): Promise<Product[]> {
        const response = await productsApi.getProducts(params);

        return response.data;
    },
};
