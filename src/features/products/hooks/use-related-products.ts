// src/features/products/hooks/use-related-products.ts

"use client";

import { useQuery } from "@tanstack/react-query";

import { productsService } from "../services/products-service";

export function useRelatedProducts(
    productId: string
) {
    return useQuery({
        queryKey: ["related-products", productId],

        queryFn: () => productsService.getRelatedProducts(productId),

        enabled: !!productId,
        
        select: (data) => data || [],
    });
}
