// src/features/products/components/product-card.tsx

import Link from "next/link";

import { Product } from "../types/product";

import { AddToCartButton } from "@/features/cart/components/add-to-cart-button";

import { formatPrice } from "@/lib/format-price";

type Props = {
    product: Product;
};

export function ProductCard({ product, }: Props) {
        
    return (
        <article className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-md">

            <div className="aspect-square bg-secondary" />

                <div className="space-y-4 p-4">

                    <Link
                        href={`products/${product.slug}`}
                    >

                        <h3 className="font-semibold">
                            {product.title}
                        </h3>

                    </Link>

                    <div className="flex items-center justify-between">

                        <span className="font-bold text-primary">
                            {formatPrice(product.price)} تومان
                        </span>

                    </div>

                    <AddToCartButton product={product} />

                </div>

        </article>
    );
}
