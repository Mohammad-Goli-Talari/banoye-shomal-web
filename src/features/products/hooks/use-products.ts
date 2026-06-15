// src/features/products/hooks/use-products.ts

import { useQuery } from "@tanstack/react-query";

import { productsService } from "../services/products-service";

import { ProductSearchParams } from "../types/product-search";

export function useProducts(
    params: ProductSearchParams
) {
    return useQuery({
        queryKey: ["products", params],

        queryFn: () =>
            productsService.getProducts(params),
    });
}
