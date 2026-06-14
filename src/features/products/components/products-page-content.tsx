// src/features/products/components/products-page-content.tsx

"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { useProducts } from "../hooks/use-products";

import { ProductCard } from "./product-card";

import { ProductSearch } from "./product-search";

import { ProductsPagination } from "./products-pagination";

import { useDebounce } from "@/hooks/use-debounce";

export function ProductsPageContent() {

    const router = useRouter();

    const searchParams = useSearchParams();

    const search = searchParams.get("search") ?? "";

    const debouncedSearch = useDebounce(search, 500);

    const page = Number(
        searchParams.get("page") ?? 1
    );

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

        params.set("page", "1");

        router.push(
            `/products?${params.toString()}`
        );
    };

    const handlePageChange = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", page.toString());

        router.push(`/products?${params.toString()}`);
    };

    const {
        data: products = [],
        isLoading,
    } = useProducts({
        search: debouncedSearch,
        page,
        limit: 12,
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

            <ProductsPagination
                page={page}
                onPageChange={handlePageChange}                    
            />

        </div>
    );
};
