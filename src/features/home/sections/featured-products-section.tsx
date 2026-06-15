// src/features/home/sections/featured-products-section.tsx
"use client";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

import { ProductCard } from "@/features/products/components/product-card";

import { useProducts } from "@/features/products/hooks/use-products";

export function FeaturedProductsSection() {

        const { data: products = [], isLoading } = useProducts({ limit: 4 });
        
    return (
        <Section className="">

            <Container>

                <div className="mb-8">
                    <h2 className="text-3xl font-bold">
                        محصولات ویژه
                    </h2>
                </div>

                {isLoading ? (
                    <p>در حال بارگذاری...</p>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                )}

            </Container>

        </Section>
    );
}
