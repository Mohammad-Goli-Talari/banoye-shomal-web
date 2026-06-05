// src/features/products/utils/get-product-by-slug.ts

import { products } from "../data/products";

export function getProductBySlug(
    slug: string
) {
    return products.find(
        product => product.slug === slug
    );
}
