// src/components/layout/header/cart-button.tsx

"use client";

import { ShoppingCart } from "lucide-react";

import { useAppSelector } from "@/store/hooks";
import { selectCartCount } from "@/store/slices/cart/selectors";

import Link from "next/link";

export function CartButton() {
    const cartItemsCount = useAppSelector(selectCartCount);

    return (
        <Link
            href="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-secondary"
        >
            <ShoppingCart className="h-5 w-5" />
            { cartItemsCount > 0 && (
                <span className="absolute  -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs text-white">
                    {cartItemsCount}
                </span>
            )}                
        </Link>
    );
}
