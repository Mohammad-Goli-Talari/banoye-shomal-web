// src/features/products/components/products-page-content.tsx

"use client";

import { useRouter } from "next/navigation";

import { useSearchParams } from "next/navigation";

import { useProducts } from "../hooks/use-products";

import { ProductCard } from "./product-card";

import { ProductSearch } from "./product-search";

export function ProductsPageContent() {

    const router = useRouter();

    const searchParams = useSearchParams();

    const search = searchParams.get("search") ?? "";

    const handleSearchChange = (
        value: string
    ) => {

        const params =
            new URLSearchParams(
                searchParams.toString()
            );

        if (value) {

            params.set(
                "search",
                value
            );

        } else {

            params.delete(
                "search"
            );

        }

        router.push(
            `/products?${params.toString()}`
        );
    };

    const {
        data: products = [],
        isLoading,
    } = useProducts({
        search,
    });

    return (
        <div className="space-y-6">

            <h1 className="text-3xl font-bold">
                محصولات
            </h1>

            <ProductSearch
                value={search}
                onChange={handleSearchChange}
            />

            {isLoading && (
                <p>
                    در حال دریافت محصولات...
                </p>
            )}

            {!isLoading && (
                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >

                    {products.map(
                        (product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        )
                    )}

                </div>
            )}

        </div>
    );
}
