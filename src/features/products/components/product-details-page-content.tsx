// src/features/products/components/product-details-page-content.tsx

"use client";

import { notFound } from "next/navigation";

import { useProduct } from "../hooks/use-product";

import { ProductGallery } from "./product-gallery";

import { ProductInfo } from "./product-info";

import { IngredientsSection } from "./ingredients-section";

type Props = {
    slug: string;
};

export function ProductDetailsPageContent({
    slug,
}: Props) {

    const {
        data: product,
        isLoading,
    } = useProduct(slug);

    if (isLoading) {
        return (
            <p>
                در حال دریافت اطلاعات محصول...
            </p>
        );
    }

    if (!product) {
        notFound();
    }

    return (
        <div className="space-y-10">

            <div
                className="
                    grid
                    gap-8
                    lg:grid-cols-2
                "
            >

                <ProductGallery
                    image={product.image}
                    title={product.title}
                />

                <ProductInfo
                    product={product}
                />

            </div>

            <IngredientsSection
                ingredients={
                    product.ingredients
                }
            />

        </div>
    );
}
