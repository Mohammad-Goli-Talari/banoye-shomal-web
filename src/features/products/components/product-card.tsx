// src/features/products/components/product-card.tsx

"use client";

import { Product } from "../types/product";

import { Button } from "@/components/ui/button";

import { useAppDispatch } from "@/store/hooks";

import { addToCart } from "@/store/slices/cart/cart-slice";

import { formatPrice } from "@/lib/format-price";

type Props = {
    product: Product;
};

export function ProductCard({ product, }: Props) {
    const dispatch = useAppDispatch();

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            })
        );
    };
    
    return (
        <article className="overflow-hidden rounded-3xl border bg-white shadow-sm transition hover:shadow-md">

            <div className="aspect-square bg-secondary">

                <div className="space-y-4 p-4">

                    <h3 className="font-semibold">
                        {product.title}
                    </h3>

                    <div className="flex items-center justify-between">

                        <span className="font-bold text-primary">
                            {formatPrice(product.price)}
                            {" "}
                            تومان
                        </span>
                    </div>
                    <Button
                        className="w-full"
                        onClick={handleAddToCart}
                    >
                        افزودن به سبد خرید
                    </Button>

                </div>

            </div>

        </article>
    );
}
