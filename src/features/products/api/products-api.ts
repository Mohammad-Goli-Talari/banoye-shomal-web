 // src/features/products/api/products-api.ts

import { axiosInstance } from "@/services/axios";

import { Product } from "../types/product";

import { ProductSearchParams } from "../types/product-search";

export const productsApi = {
    async getProducts() {
        return {
            data: [
                {
                    id: "1",
                    title: "محصول تست",
                    slug: "test-product",
                    price: 100000,
                    image: "/placeholder.jpg",
                },
            ],
        };
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
