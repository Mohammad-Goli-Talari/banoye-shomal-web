 // src/features/products/api/products-api.ts

import { axiosInstance } from "@/services/axios";

import { Product } from "../types/product";

import { ProductSearchParams } from "../types/product-search";

export const productsApi = {
    getProducts(params: ProductSearchParams) {
        return axiosInstance.get<Product[]>(
            "/products",
            { params }
        );
    },

    getProduct(slug: string) {
        return axiosInstance.get<Product>(
            `/products/${slug}`
        );
    },

    getRelatedProducts(productId: string) {
        return axiosInstance.get<Product[]>(
            `/products/${productId}/related`
        );
    },
};
