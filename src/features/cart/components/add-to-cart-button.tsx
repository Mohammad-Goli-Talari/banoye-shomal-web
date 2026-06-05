// src/features/cart/components/add-to-cart-button.tsx

"use client";

import { Button } from "@/components/ui/button";

import { addToCart } from "@/store/slices/cart/cart-slice";
import { useAppDispatch } from "@/store/hooks";

import { ProductCardItem } from "@/features/products/types/product";

type Props = {
    product: ProductCardItem;
};

export function AddToCartButton({ product }: Props) {
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
        <Button
            className="w-full"
            onClick={handleAddToCart}
        >
            افزودن به سبد خرید
        </Button>
    );
}
