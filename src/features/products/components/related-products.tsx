// src/features/products/components/related-products.tsx

"use client";

import { useRelatedProducts } from "@/features/products/hooks/use-related-products";

import { ProductCard } from "@/features/products/components/product-card";

type Props = {
    productId: string;
};

export function RelatedProducts({
    productId,
}: Props) {

    const { data = [], isLoading } = useRelatedProducts(productId);

    if (isLoading) {
        return null;
    }

    if (data.length === 0) {
        return null;
    }

    return (
        <section className="space-y-6">

            <h2 className="text-2xl font-bold">
                محصولات مشابه
            </h2>

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >

                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>

        </section>
    );
}
    