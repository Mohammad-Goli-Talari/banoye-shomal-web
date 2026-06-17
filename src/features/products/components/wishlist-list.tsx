// src/features/products/components/wishlist-list.tsx
"use client";

import { useWishlist } from "@/features/wishlist/hooks/use-wishlist";

import { ProductCard } from "@/features/products/components/product-card";

export function WishlistList() {

    const { data: products, isLoading } = useWishlist();
    
    const safeProducts = Array.isArray(products) ? products : [];

    if (isLoading) {
        return (
            <p>
                در حال دریافت علاقه‌مندی‌ها...
            </p>
        );
    }

    if (safeProducts.length === 0) {
        return (
            <p>
                هنوز محصولی به علاقه‌مندی‌ها اضافه نشده است.
            </p>
        );
    }

    return (
        <div
            className="
                grid
                gap-6
                md:grid-cols-2
                xl:grid-cols-4
            "
        >

            {safeProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}

        </div>
    );
}
