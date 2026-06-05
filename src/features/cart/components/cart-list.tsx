// src/features/cart/components/cart-list.tsx

"use client";

import { useAppSelector } from "@/store/hooks";

import { selectCartItems } from "@/store/slices/cart/selectors";

import { CartItemCard } from "./cart-item-card";

export function CartList() {
    const items = useAppSelector(selectCartItems);

    if (!items.length) {
        return (
            <div className="rounded-2xl border p-8 text-center">
                سبد شما خالی است
            </div>
        );
    }

    return (
        <div>

            {items.map(item => (
                <CartItemCard
                    key={item.id}
                    item={item}
                />
            ))}

        </div>
    );
}
