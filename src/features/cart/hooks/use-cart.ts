// src/features/cart/hooks/use-cart.ts

"use client";

import { useAppSelector } from "@/store/hooks";

import { selectCartItems } from "@/store/slices/cart/selectors";

export function useCart() {
    const items = useAppSelector(selectCartItems);

    return { items };
}
