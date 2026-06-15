// src/features/products/hooks/use-product.ts

import { useQuery } from "@tanstack/react-query";

import { productsService } from "../services/products-service";

export function useProduct(
    slug: string
) {
    return useQuery({
        queryKey: ["product", slug],

        queryFn: () =>
            productsService.getProduct(slug),

        enabled: !!slug,
    });
}
