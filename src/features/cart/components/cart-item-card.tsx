// src/features/cart/components/cart-item-card.tsx

"use client";

import { Minus, Plus, Trash2 } from "lucide-react";

import { useAppDispatch } from "@/store/hooks";

import { 
    increaseQuantity, 
    decreaseQuantity, 
    removeFromCart 
} from "@/store/slices/cart/cart-slice";

import { CartItem } from "@/store/slices/cart/types";

import { formatPrice } from "@/lib/format-price";

type Props = {
    item: CartItem;
};

export function CartItemCard({ item, }: Props) {
    const dispatch = useAppDispatch();

    return (
        <article className="rounded-2xl border p-4">

            <div className="flex items-center justify-between">

                <div>
                    <h3 className="font-semibold">
                        {item.title}
                    </h3>

                    <p className="text-primary">
                        {formatPrice(item.price)} تومان
                    </p>
                </div>

                <button
                    onClick={() =>
                        dispatch(removeFromCart(item.id))
                    }
                >
                    <Trash2 size={18} />
                </button>

            </div>

            <div className="mt-4 flex items-center gap-2">

                <button
                    onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                    }
                >
                    <Minus size={16} />
                </button>

                <span>
                    {item.quantity}
                </span>

                <button
                    onClick={() =>
                        dispatch(increaseQuantity(item.id))
                    }
                >
                    <Plus size={16} />
                </button>

            </div>

        </article>
    );
}
