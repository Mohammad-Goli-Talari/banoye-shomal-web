// src/components/layout/header/cart-button.tsx

"use client";

import { ShoppingCart } from "lucide-react";

import { useAppSelector } from "@/store/hooks";
import { selectCartCount } from "@/store/slices/cart/selectors";

export function CartButton() {
    const cartItemsCount = useAppSelector(selectCartCount);

    return (
        <button
            className="relative flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-secondary"
            aria-label="سبد خرید"
        >
            <ShoppingCart className="h-5 w-5" />
            { cartItemsCount > 0 && (
                <span className="absolute  -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs text-white">
                    {cartItemsCount}
                </span>
            )}                
        </button>
    );
}
