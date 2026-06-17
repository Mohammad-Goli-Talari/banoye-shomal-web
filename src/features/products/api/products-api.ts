 // src/features/products/api/products-api.ts

import { axiosInstance } from "@/services/axios";

import { Product } from "../types/product";

import { ProductSearchParams } from "../types/product-search";

const mockProducts = [
    {
        id: "1",
        title: "محصول تست",
        slug: "test",
        price: 100000,
        image: "/test.jpg",
    },
];

export const productsApi = {
    getProducts() {
        return { data: mockProducts };
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
